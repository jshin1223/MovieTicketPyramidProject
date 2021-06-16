import React, { Component } from 'react'
import TicketDataService from '../../service/TicketDataService';

class TicketRegistryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickets: []
        }
        this.refreshTicketRegistry = this.refreshTicketRegistry.bind(this)
        this.deleteTicketClicked = this.deleteTicketClicked.bind(this)
        this.upDateTicketClicked = this.upDateTicketClicked.bind(this)
        this.addTicketClicked = this.addTicketClicked.bind(this)
    }

    componentDidMount() {
        this.refreshTicketRegistry();
    }

    refreshTicketRegistry() {
        TicketDataService.retrieveAllTickets()
        .then(
            response => {
                this.setState({
                    tickets: response.data,
                })
            }
        )
    }

    deleteTicketClicked(id, firstName, lastName) {
        console.log('Delete Ticket Clicked')
        TicketDataService.deleteTicket(id)
        .then(
            response => {
                this.setState({message: `Deleted Ticket: ${firstName} ${lastName}`})
                alert(this.state.message)
                this.refreshTicketRegistry();
            }
        )
    }
    
    upDateTicketClicked(id, jobTitle) {
        console.log('Update Ticket Clicked')
        this.props.history.push(`/ticket/${id}/${jobTitle}`)
    }

    addTicketClicked() {
        console.log('Add AddTicket Clicked')
        this.props.history.push(`/theTicket/-1`)
    }
 
   render() {
       return(
           <div className="container">
               <h1 style={{textAlign:"center"}}>Ticket Registry</h1><br/>
               <div className="jumbotron"  style={{backgroundColor: "gray", color: "white"}}>
                   <table className="table">
                       <thead>
                           <tr style={{textAlign: "center" , color: "black"}}>
                               <th>Id</th>
                               <th>Job Title</th>
                               <th>First Name</th>
                               <th>Last Name</th>
                               <th>Email</th>
                               <th>Delete</th>
                               <th>Update</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.tickets.map (
                                   tickets => 
                                   <tr style={{textAlign: "center"}} key={tickets.id}>
                                       <td>{tickets.id}</td>
                                       <td>{tickets.jobTitle}</td>
                                       <td>{tickets.firstName}</td>
                                       <td>{tickets.lastName}</td>
                                       <td>{tickets.email}</td>
                                       <td><button className="btn btn-warning" onClick={() => this.deleteTicketClicked(tickets.id, tickets.firstName, tickets.lastName)}>Delete</button></td>
                                       <td><button className="btn btn-success" onClick={() => this.upDateTicketClicked(tickets.id, tickets.jobTitle)}>Update</button></td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
                   <div className="row">
                       <br/>
                       <button className="btn btn-success" onClick={this.addTicketClicked}>Add Ticket</button>
                   </div>
               </div>
           </div>
       )
   } 
}

export default TicketRegistryComponent;
