import React, {Component} from 'react'
import TicketDataService from '../../service/TicketDataService'

class AddTicket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            jobTitle: '',
            firstName: '',
            lastName: '',
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        let ticket = {
            id: this.state.id,
            jobTitle: this.state.jobTitle,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        }
        DataService.createTicket(ticket)
            .then(this.props.history.push(`/TicketRegistry`))
    }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Add Ticket</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>ID:</label>
                            <input className="form-control" type="text" value={this.state.id} disabled/>
                        </div>
                        <div>
                            <label>Job Title:</label>
                            <input className="form-control" type="text" name="jobTitle" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>First Name:</label>
                            <input className="form-control" type="text" name="firstName" onChange={this.handleChange}/>
                        </div>       
                        <div>
                            <label>Last Name:</label>
                            <input className="form-control" type="text" name="lastName" onChange={this.handleChange}/>
                        </div>      
                        <div>
                            <label>Email:</label>
                            <input className="form-control" type="text" name="email" onChange={this.handleChange}/>
                        </div><br/><br/>
                        <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form><br/><br/>
                </div>
            </div>
        )
    }
}

export default AddTicket
