var React = require('react');
//var Datepicker = require('react-datepicker');
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
                    <div className='eventForm'>
                        <div>
                            <Name 
                            value={this.state.name}
                            handleChange={this.handleChange}
                            />
                        </div>

                        <Time 
                        selected={this.state.startDate}
                        onChange={this.handleTimeChange}
                        />
                        
                        <Type 
                        type={this.state.type}
                        handleTypeChange={this.handleTypeChange}/>

                        <Cost 
                        cost={this.state.cost}
                        handleChange={this.handleChange} />

                        <Options 
                        vegetarisch = {this.vegetarisch}
                        vegan={this.vegan}
                        nuts={this.nuts}
                        scharf={this.scharf}
                        handleOptionChange = {this.handleOptionChange}/>

                        <Comments 
                        handleChange={this.handleChange}
                        comments={this.state.comments}/>

                        <Image 
                        handleChange={this.handleChange}/>
                        {/* <Participants 
                        handleChange={this.handleChange}
                        participants={this.state.participants}/> */}
                    </div>
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

function Name(props){
    return(
        <div className='formInputField'>
            <input type='text'
            name='name'
            className='textInput'
            value={props.value === '' ? 'Gib deinem Event einen Namen' : props.value}
            autoFocus
            onChange={props.handleChange} 
            />           
        </div>
    )
}

function Time(props){
    return(
        <div className='formInputField'>
            <Datepicker 
            inline
            selected={props.selected}
            onChange={props.onChange}
            minDate={moment()}
            dateFormat='DD/MM/YYYY' 
            todayButton={'Heute'}/>
            
        </div>
    )
}

function Type(props){
    var value = ['bestellen', 'kochen'];
    return(
        <div className='formInputField'>
            <div className="textInput">
            <input type='radio' 
            name='type' 
            className='radioInput' 
            value={value[0]}
            checked={props.type === value[0] ? true : false}
            onChange={props.handleTypeChange}
            /> Bestellen <br />

            <input type='radio' 
            name='type' 
            className='radioInput' 
            value={value[1]}
            checked={props.type === value[1] ? true : false}
            onChange={props.handleTypeChange}
             
            /> Selbst kochen <br />
            </div>
        </div>
    )
}

function Cost(props){
    return(
        <div className='formInputField'>
            <input 
            type='number'
            name='cost' 
            min='0' max='100'
            step='0.50' 
            className='textInput numberInput' 
            value={props.cost}
            onChange={props.handleChange} />
        <p id='cost'>Euro pro Person</p>
        </div>
    )
}

function Options(props){
    return(
        <div className='formInputField'>
            <label>Optionen</label><br />

            <input type='checkbox'
            name='vegetarisch' 
            className='optionInput'
            checked={props.vegetarisch} 
            onChange={props.handleOptionChange} /> Vegetarisch <br />

            <input type='checkbox'
            name='vegan' 
            className='optionInput'
            checked={props.vegan} 
            onChange={props.handleOptionChange} /> Vegan <br />

            <input type='checkbox'
            name='nuts' 
            className='optionInput'
            checked={props.nuts} 
            onChange={props.handleOptionChange} /> Mit Nüssen <br />

            <input type='checkbox'
            name='scharf' 
            className='optionInput'
            checked={props.scharf} 
            onChange={props.handleOptionChange} /> Scharf <br />
        </div>
    )
}

function Comments(props){
    return(
        <div className='formInputField'>
            <label>Kommentare und Extrawünsche</label><br />
            <textarea 
            name='comments'
            value={props.comments} 
            className='textInput' 
            onChange={props.handleChange} />
        </div>
    )
}

function Image(props){
    return(
        <div className='formInputField'>
            <label>Gib die URL zu einem Bild an</label><br />
            <input type='text' 
            name='img' 
            className='textInput' 
            onChange={props.handleChange} />
        </div>
    )
}

function Participants(props){
    return(
        <div className='formInputField'>
            <label>Wer nimmt alles teil?</label><br />
            <input type='text'
            name='participants' 
            value={props.participants} 
            className='textInput' 
            />
        </div>
    )
}

module.exports = EventView;
