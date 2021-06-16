import React, {Component} from 'react'
import TicketDataService from '../../service/TicketDataService'

class AddTicket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            movieTitle: '',
            date: '',
            time: '',
            price: ''
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
            movieTitle: this.state.movieTitle,
            date: this.state.date,
            time: this.state.time,
            price: this.state.price
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
                            <label>Movie Title:</label>
                            <input className="form-control" type="text" name="movieTitle" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Date:</label>
                            <input className="form-control" type="text" name="date" onChange={this.handleChange}/>
                        </div>       
                        <div>
                            <label>Time:</label>
                            <input className="form-control" type="text" name="time" onChange={this.handleChange}/>
                        </div>      
                        <div>
                            <label>Price:</label>
                            <input className="form-control" type="text" name="price" onChange={this.handleChange}/>
                        </div><br/><br/>
                        <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form><br/><br/>
                </div>
            </div>
        )
    }
}

export default AddTicket
