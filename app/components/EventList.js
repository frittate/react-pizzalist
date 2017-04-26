var React = require('react');
var Link = require('react-router-dom').Link;
var EventTile = require('./EventTile');

let eventList = {
    events: [],

    addEvent: function(){
        this.events.push({
            name: 'name',
            type: [1,2],
        })
    },

}

class ShowEventList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events: event,
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(){
        this.setState(function(){
            this.state.events.push(this.state.events.length+1);
        })
    }


    render(){
        console.log(this.state.events);
        return(
            
            <div>
                <div>
                    <h2>event overview</h2>
                </div>
                <div>
                    
                    {this.state.events.map(function(id){
                        return(
                        <EventTile 
                        id={id}
                        key={id}
                        />
                        )
                    }, this)}

                    <button className="btn btn-add" onClick={this.addItem}>Add New Event</button>
                </div>
            </div>
        )
    }
}

module.exports = ShowEventList;


//Array hat nur das Default-Element namens Add New
//bei click wird ein neues statisches Element der Liste hinzugefügt, Liste wird +1 ausgegeben
//Add rutscht auf den neuen Platz