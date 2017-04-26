var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./Home');
var ShowEventList = require('./ShowEventList');
var EventView = require('./EventView');
import 'react-datepicker/dist/react-datepicker.css';

function App(props){
    return (
      <Router>
        <div className='container'>
            <div className='home-container'>
                <h1>Pizza Master Chef Order System </h1>            
            </div>

          <Switch>
            <Route exact path='/' component={EventView} />
            <Route exact path='/list' component={ShowEventList} />
            <Route path ='/new' component={Home} />
            <Route render={function(){
              return <p>404 Not Found</p>
            }} />
            </Switch>
        </div>
    </Router>
    
    )
  }

App.PropTypes = {
}

module.exports = App;