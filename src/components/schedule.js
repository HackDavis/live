import React from 'react';
import './schedule.css';
import Media from 'react-media';
import Arrow from 'react-icons/lib/fa/angle-double-down';
import { CSSTransitionGroup } from 'react-transition-group';
import moment from 'moment';
import ReactHTMLParser from 'react-html-parser';
import { withPrefix } from 'gatsby-link';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.Items = [];
    let categories = new Set();
    categories.add('All');
    props.data.allMarkdownRemark.edges.forEach(value => {
      let item = value.node.frontmatter;
      item.start = moment(item.start);
      item.end = moment(item.end);
      item.html = value.node.html;
      this.Items.push(item);
      categories.add(item.category);
    });
    this.categories = Array.from(categories.values());
    this.state = {
      filter: 'All',
      items: this.Items,
      detailIndex: 0,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !(
      this.state.detailIndex == nextState.detailIndex &&
      this.state.filter == nextState.filter
    );
  }
  switchDetailIndex(i) {
    if (typeof i !== `undefined`) {
      this.setState({
        detailIndex: i,
      });
    }
  }
  //This will return the color for each card and list item depending on its associated category
  determineColor(category) {
    switch (category) {
    case 'Workshops':
      return '#62cceabf';
    case 'Meals':
      return '#b6b9ff';
    case 'Logistics':
      return 'rgba(152, 192, 245, 1)';
    case 'Fun':
      return 'Pink';
    }
  }
  switchActiveSet(i) {
    if (i) {
      let array = this.Items.filter(t => {
        return i === `All` || t.category === i;
      });
      this.setState({
        filter: i,
        items: array,
        detailIndex: 0,
      });
    }
  }
  render() {
    return (
      <div className="schedule-grid-container">
        <div className="list-component">
          <nav className="nav nav-pills">
            {this.categories.map(i => {
              return (
                <NavPillItem
                  handler={this.switchActiveSet.bind(this)}
                  key={i}
                  text={i}
                  filter={this.state.filter}
                />
              );
            })}
          </nav>
          <div className="card-group list-container">
            <dt>Jan 20</dt>
            {this.state.items.map((v, i) => {
              if (v.start.date() == 20)
                return (
                  <ScheduleItem
                    color={this.determineColor(v.category)}
                    active={this.state.detailIndex == i}
                    key={i}
                    index={i}
                    handler={this.switchDetailIndex.bind(this)}
                    item={v}
                  />
                );
            })}
            <dt>Jan 21</dt>
            {this.state.items.map((v, i) => {
              if (v.start.date() == 21)
                return (
                  <ScheduleItem
                    color={this.determineColor(v.category)}
                    active={this.state.detailIndex == i}
                    key={i}
                    index={i}
                    handler={this.switchDetailIndex.bind(this)}
                    item={v}
                  />
                );
            })}
          </div>
        </div>
      </div>
    );
  }
}
const NavPillItem = props => {
  function handle() {
    props.handler(props.text);
  }
  return (
    <div className="nav-item" onClick={handle}>
      <button
        className={
          'btn btn-outline-primary' +
          (props.filter === props.text ? ' active' : '')
        }
      >
        {props.text}
      </button>
    </div>
  );
};
class ScheduleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handle.bind(this);
  }
  handle() {
    this.props.handler(this.props.index);
    this.setState({
      expanded: !this.state.expanded,
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.active == true && nextProps.active == false)
      this.setState({ expanded: false });
  }
  render() {
    let start = this.props.item.start;
    let end = this.props.item.end;
    let now = moment();
    return (
      <CSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={300}
      >
        <div
          className="card list-card"
          style={{
            backgroundColor:
              now > start && now < end ? 'white' : this.props.color,
            border: now > start && now < end ? '1.5px solid red' : null,
          }}
        >
          <div className="card-body list-body" style={{ minWidth: 0 }}>
            <div className="content">
              <div className="d-flex justify-content-between">
                <div className="card-left">
                  <h4 className="content card-title">
                    {this.props.item.title}
                  </h4>
                </div>
                <div className="card-right">
                  <p className="content">
                    {(now > start && now < end
                      ? 'Now'
                      : start.format('hh:mm A')) +
                      ' - ' +
                      end.format('hh:mm A')}
                  </p>
                </div>
              </div>
              <div className="card-description">
                {ReactHTMLParser(this.props.item.html)}
              </div>
            </div>
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}
const Detail = props => (
  <div id="description" className="card" style={{ borderColor: props.color }}>
    <div className="card-body">
      <div>
        {ReactHTMLParser(props.description, {
          transform: node => {
            if (node.type === 'tag' && node.name === 'img') {
              return (
                <img
                  alt={node.attribs.alt}
                  title={node.attribs.title}
                  src={withPrefix(node.attribs.src)}
                />
              );
            }
          },
        })}
      </div>
    </div>
  </div>
);
