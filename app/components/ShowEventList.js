var React = require('react');
var Link = require('react-router-dom').Link;
var EventView = require('./EventView');

class ShowEventList extends React.Component {    
    constructor(props){
        super(props);
        this.state = {
            events: [],
        } 
        this.onAdd = this.onAdd.bind(this);
        this.onKill = this.onKill.bind(this);     
    }

    onAdd(){
            this.setState({
                events: this.state.events.concat([this.state.events.length+1])
            })
        }

    onKill(eventId){
        eventId = eventId - 1;
        const newEvents = this.state.events;
        debugger;
        if (newEvents.indexOf(eventId) > -1){
            newEvents.splice(newEvents.indexOf(eventId), 1);
            this.setState({events: newEvents})
        }
    }    

 render(){
     return(
         <div className='eventList'>
              <ul>
             {this.state.events.map(function(eventId, index){
                 return (
                    
                    <li key={index}><EventView id={eventId} onKill={this.onKill.bind(this, eventId)}/></li>
                  
                 )
             }, this)}
               </ul>
             <div>
                <button className='btn-add' onClick={this.onAdd}>Add new Event</button>
             </div>
        </div>
    )
 }
}

module.exports = ShowEventList;


//Array hat nur das Default-Element namens Add New
//bei click wird ein neues statisches Element der Liste hinzugefügt, Liste wird +1 ausgegeben
//Add rutscht auf den neuen Platz