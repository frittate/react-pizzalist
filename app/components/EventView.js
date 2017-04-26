var React = require('react');
//var Datepicker = require('react-datepicker');
import Datepicker from 'react-datepicker';
import moment from 'moment';

class EventView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: 'overview',
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
        this.onSubmit = this.onSubmit.bind(this);
        this.onDetail = this.onDetail.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
         this.setState({
            visible: 'overview',
        })
    }

    onDetail(){
        this.setState({
            visible: 'detail',
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

        if (this.state.visible === 'detail'){
        return(
            <div className='home-container'>
                <div className='headerOverflow'>
                {this.state.img ? 
                <img src={this.state.img} alt='testimage' className='headerImage' /> : null}
                </div>
                <form className='eventForm' onSubmit={this.onSubmit}>
                    <div className='head'>
                        <input type='submit' defaultValue={this.state.name === '' ? 'Erstellen' : 'Speichern'} className='btn-submit'/>
                        <Name 
                        handleChange={this.handleChange}
                        value={this.state.name}
                        />
                    </div>
                    
                    <button onClick={this.props.onKill}>Delete Me!</button>

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
                </form>
            </div>
           
        ) } else {
            return(
                <div className='eventTile' style={imgStyle}>
                    

                    <p>{this.state.name}</p>
                    <p>{this.state.startDate.format('DD. MMM')}</p>
                    <button onClick={this.onDetail} className='btn-view'>{this.state.name === '' ? 'Erstellen' : 'Details anzeigen'}</button>
                </div>
            )
        }
}
}

function Name(props){
    return(
        <div className='formInputField'>
            <label>Gib deinem Event einen Namen</label>
            <input type='text'
            name='name'
            className='textInput'
            value={props.value}
            onChange={props.handleChange} 
            />
            <span className='bar'></span>
            <br />
            
        </div>
    )
}

function Time(props){
    return(
        <div className='formInputField'>
            <label>Gib eine Zeit an</label><br />
            <Datepicker 
            inline
            selected={props.selected}
            onChange={props.onChange}
            dateFormat='DD/MM/YYYY' 
            todayButton={'Heute'}/>
            
        </div>
    )
}

function Type(props){
    var value = ['bestellen', 'kochen'];
    return(
        <div className='formInputField'>
            <label>Bestellen oder kochen</label><br />

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
    )
}

function Cost(props){
    return(
        <div className='formInputField half-width'>
            <label>Kosten in Euro</label><br />
            <input 
            type='number'
            name='cost' 
            min='0' max='100'
            step='0.50' 
            className='numberInput' 
            value={props.cost}
            onChange={props.handleChange} />
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
