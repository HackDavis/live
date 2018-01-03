import React from 'react'
import './schedule.css'
import Categories from '../json/categories.json'
import Items from '../json/Schedule.json'
import Media from "react-media"
import Arrow from 'react-icons/lib/fa/angle-double-down'
import { CSSTransitionGroup } from 'react-transition-group'

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.data)
        this.state = {
            filter: "All",
            items: Items,
            detailIndex: 0
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        return !(this.state.detailIndex == nextState.detailIndex && this.state.filter == nextState.filter);
    }
    switchDetailIndex(i) {
        if(typeof i !== `undefined`){
             this.setState({
                detailIndex: i
            });
        }
    }
    switchActiveSet(i) {
        if(i) {
            let array = Items.filter((t) => {return i === `All` || t.category === i});
            this.setState({
                filter: i,
                items: array
            })
        }  
    }
    render() {
        return (
            <div className="schedule-grid-container">
                <div className="list-component">
                    <nav className="nav nav-pills">
                        {Categories.map(i => {
                            return (
                                <NavPillItem handler={this.switchActiveSet.bind(this)} key={i} text={i} filter={this.state.filter} />
                            );
                        })}
                    </nav>
                    <div className="card-group list-container">
                        <dt>Jan 20</dt>
                        {this.state.items.map((v, i) => {
                            if(new Date(v.start).getDate() == 20) return (<ScheduleItem key={i} index={i} handler={this.switchDetailIndex.bind(this)} item={v}/>)
                        })}
                        <dt>Jan 21</dt>
                        {this.state.items.map((v, i) => {
                            if(new Date(v.start).getDate() == 21)return (<ScheduleItem key={i} index={i} handler={this.switchDetailIndex.bind(this)} item={v}/>)
                        })}
                    </div>
                </div>
                <Media query={{minWidth: 992}}
                render={() => {
                    return (
                        <div className="detail-component">
                            <Detail title={this.state.items[this.state.detailIndex].title}/>
                        </div>
                    );
                }}
                />
                
            </div>
        )
    }
}
const NavPillItem = (props) => { 
    function handle(){
        props.handler(props.text);
    }
    return (
        <div className="nav-item" onClick={handle}>
            <a className={ "nav-link" + (props.filter === props.text ? " active" : "")} href="#">
                {props.text}
            </a>
        </div>
    )
}
class ScheduleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }
    handle() {
        this.props.handler(this.props.index);
        this.setState({
            expanded: !this.state.expanded
        })
    }
    render() {
        let start = new Date(this.props.item.start);
        let end = new Date(this.props.item.end);
        return(
            <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}    
            >
                <div className="card list-card" onClick={this.handle.bind(this)}>
                    <div className="card-body list-body">
                        <div className="card-left">
                            <h5 className="card-title">{this.props.item.title}</h5>
                        </div>
                        <div className="card-right">
                            <p>{start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                            <hr />
                            <p>{end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                        </div>
                        
                    </div>
                    <Media query={{maxWidth: 992}}
                        render={() => {
                            return (<div style={{textAlign:"center"}}><Arrow height="1.5em" width="1.5em"/></div>)
                        }} />
                </div>
                {
                    this.state.expanded ? <Media query={{maxWidth: 992}}
                        render={() => {
                            return (<Detail title={this.props.item.title}/>);
                        }}
                    /> : null
                }
            </CSSTransitionGroup>
        );
    }
}
const Detail = (props) => (
    <div className="card">
        <div className="card-header">
            <h1 className="card-title">{props.title}</h1>
        </div>
    </div>
)

export default Schedule