import React, { Component, Fragment } from 'react';
import {Switch, Route} from "react-router-dom";
import Messages from "./containers/Messages/Messages";
import NewMessage from "./containers/NewMessage/NewMessage";
import Header from "./components/UI/Header/Header";

class App extends Component {
  render() {
    return (
     <Fragment>
         <Header />
         <Switch>
             <Route path="/" exact component={Messages}/>
             <Route path="/add_message" component={NewMessage}/>
         </Switch>
     </Fragment>
    );
  }
}

export default App;
