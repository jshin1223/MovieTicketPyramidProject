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

    deleteTicketClicked(id, date, time) {
        console.log('Delete Ticket Clicked')
        TicketDataService.deleteTicket(id)
        .then(
            response => {
                this.setState({message: `Deleted Ticket: ${date} ${time}`})
                alert(this.state.message)
                this.refreshTicketRegistry();
            }
        )
    }
    
    upDateTicketClicked(id, movieTitle) {
        console.log('Update Ticket Clicked')
        this.props.history.push(`/ticket/${id}/${movieTitle}`)
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
                               <th>Movie Title</th>
                               <th>Date</th>
                               <th>Time</th>
                               <th>Price</th>
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
                                       <td>{tickets.movieTitle}</td>
                                       <td>{tickets.date}</td>
                                       <td>{tickets.time}</td>
                                       <td>{tickets.price}</td>
                                       <td><button className="btn btn-warning" onClick={() => this.deleteTicketClicked(tickets.id, tickets.date, tickets.time)}>Delete</button></td>
                                       <td><button className="btn btn-success" onClick={() => this.upDateTicketClicked(tickets.id, tickets.movieTitle)}>Update</button></td>
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
