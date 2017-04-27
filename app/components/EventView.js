var React = require('react');
var EventForm = require('./EventForm');
import Datepicker from 'react-datepicker';
import moment from 'moment';

class EventView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: true,
            name: '',
            type: 'bestellen',
            cost: 2,
            vegetarisch: false,
            vegan: false,
            nuts: false,
            scharf: false,
            comments: '',
            startDate: moment(),
            img: null,

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.toggleView = this.toggleView.bind(this);
    }

    toggleView(){
        event.preventDefault();
         this.setState({
            visible: !this.state.visible,
        })
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
        
    }

    handleTimeChange(date){
        this.setState({
            startDate: date
        })
    }


    handleTypeChange(event){
        this.setState({type: event.target.value});
    }

    handleOptionChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render(){
           
        var imgStyle = {
            backgroundImage: 'url(' + this.state.img + ')',
            backgroundSize: 'cover',
        }
        
        return(
            <div>
                 <div>
                    <EventHead 
                    name={this.state.name} 
                    date={this.state.startDate} 
                    onKill={this.props.onKill} 
                    toggleView={this.toggleView}
                    visible={this.state.visible}/>
                </div>
                {this.state.visible ?
                    <EventForm 
                    name={this.state.name}
                    date={this.state.startDate}
                    type={this.state.type}
                    cost={this.state.cost}
                    vegetarisch={this.state.vegetarisch}
                    vegan={this.state.vegan}
                    nuts={this.state.nuts}
                    scharf={this.state.scharf}
                    comments={this.state.comments}

                    handleChange={this.handleChange}
                    handleTimeChange={this.handleTimeChange}
                    handleTypeChange={this.handleTypeChange}
                    handleOptionChange={this.handleOptionChange}

                    />
                    : null}
                </div>
                )
        }
}

function EventHead(props){
    return(
        <div>
            <div className='eventHeadImage'>
                <img src='../img/cards/card-header-04.jpg' alt='event header image' width='800px' />
            </div>
            <div className="eventHeadText">
                <h2>{props.name}</h2>
                <div className="eventHeadContent">
                    <p>von Jens am {props.date.format('DD. MMM')}</p>
                    <button type='button' onClick={props.toggleView}>{props.visible ? 'Save' : 'Edit'}</button>
                    <button type='button' onClick={props.onKill}>Delete Event</button>
                </div>
            </div>
        </div>
    )
}



module.exports = EventView;
