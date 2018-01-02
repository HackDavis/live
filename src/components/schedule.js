import React from 'react'
import './schedule.css'
import Categories from '../json/categories.json'
import Items from '../json/Schedule.json'

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.data)
    }

    render() {
        return (
            <div className="schedule-grid-container">
                <div className="card-group list-container">
                    {Items.map(i => {
                        return (<ScheduleItem title={i.title} />)
                    })}
                </div>
            </div>
        )
    }
}
const ScheduleItem = (props) => (
    <div className="card list-card">
        <div className="card-body">
            <h3 className="card-title">{props.title}</h3>
        </div>
    </div>
)
const Detail = (props) => (
    <div>
    </div>
)

export default Schedule