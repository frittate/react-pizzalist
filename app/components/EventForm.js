var React = require('react');
import Datepicker from 'react-datepicker';
import moment from 'moment';

function EventForm(props){
 return(
     <div className='eventForm'>
                        <div>
                            <Name 
                            value={props.name}
                            handleChange={props.handleChange}
                            />
                        </div>

                        <Time 
                        selected={props.date}
                        onChange={props.handleTimeChange}
                        />
                        
                        <Type 
                        type={props.type}
                        handleTypeChange={props.handleTypeChange}/>

                        <Cost 
                        cost={props.cost}
                        handleChange={props.handleChange} />

                        <Options 
                        vegetarisch = {props.vegetarisch}
                        vegan={props.vegan}
                        nuts={props.nuts}
                        scharf={props.scharf}
                        handleOptionChange = {props.handleOptionChange}/>

                        <Comments 
                        handleChange={props.handleChange}
                        comments={props.comments}/>

                        <Image 
                        handleChange={props.handleChange}/>
                        {/* <Participants 
                        handleChange={this.handleChange}
                        participants={this.state.participants}/> */}
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

module.exports = EventForm;