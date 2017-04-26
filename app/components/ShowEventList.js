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

    onKill(event){
        debugger;
        console.log(event.target.key);
        
        this.setState({
            events: this.state.events.splice([event.target.key-1],1)
        })
    }    

 render(){
     return(
         <div className='eventList'>
             {this.state.events.map(function(eventId){
                 return (
                 <EventView key={eventId} onKill={this.onKill}/>
                 )
             }, this)}
             <div>
                <button className='btn btn-add' onClick={this.onAdd}>Add new Event</button>
             </div>
        </div>
    )
 }
}

module.exports = ShowEventList;


//Array hat nur das Default-Element namens Add New
//bei click wird ein neues statisches Element der Liste hinzugefügt, Liste wird +1 ausgegeben
//Add rutscht auf den neuen Platz