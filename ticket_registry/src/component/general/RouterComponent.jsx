import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComponent from '../header_footer/FooterComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from '../header_footer/HeaderComponent'
import TicketRegistryComponent from '../ticket/TicketRegistryComponent'
import UpdateTicketComponent from '../ticket/UpdateTicketComponent'
import AddTicket from '../ticket/AddTicket'

class RouterComponent extends Component {
   render() {
       return(
           <div>
            <Router>
                <HeaderComponent />
                    <Switch>
                        <Route exact path="/"><WelcomeComponent name="Joshua Saniyka, Gene Dula(Alex), and Joshua Shin"/></Route>
                        <Route path="/theTicket/:id" component={AddTicket} />
                        <Route path="/ticket/:id/:jobTitle" component={UpdateTicketComponent} />
                        <Route path="/TicketRegistry" exact component={TicketRegistryComponent} />
                    </Switch>
                <FooterComponent /> 
            </ Router>
            </div>
       )
   } 
}

export default RouterComponent; 
