var React = require('react');

function EventTile(props){
        return(
            <button 
            className="btn btn-view" 
            >Event {props.id} {props.name}</button>
        )
}

module.exports = EventTile;
