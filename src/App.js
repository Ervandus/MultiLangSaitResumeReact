import React from 'react';
import { Router, Route} from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import CV from './components/CV';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Certificates from './components/Certificates';
const history = createBrowserHistory();


class App extends React.Component {
  render() {
    return (
      <Router history = {history}>
        <div>
          
          <Route exact path="/" component={Header}/>
          <Route path="/cv" component={CV}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/certificates" component={Certificates}/>
        </div>
      </Router>
    )
  }
}



export default App;