var React = require('react');
var ReactDOM = require('react-dom');
var Popular = require('./Popular');

class App extends React.Component {
  render() {
    return (
    <div className='container-fluid'>
        <Popular />
    </div>
    )
  }
}

App.propTypes = {
}

module.exports = App;