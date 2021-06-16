import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import TicketDataService from '../../service/TicketDataService'

class UpdateTicketComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            movieTitle: this.props.match.params.movieTitle,
            date: '',
            time: '',
            price: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let ticket = {
            id: this.state.id,
            movieTitle: values.movieTitle,
            date: values.date,
            time: values.time,
            price: values.price
        }
            TicketDataService.updateTicket(ticket)
            .then(() => this.props.history.push('/TicketRegistry'))
    }

    render() {
        let {id, movieTitle, date, time, price} = this.state
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Update Ticket</h3>
                </div>
                <div className="container">
                    <Formik
                        initialValues={{id, movieTitle, date, time, price}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            () => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset>
                                        <label>Movie Title</label>
                                        <Field className="form-control" type="text" name="movieTitle" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Date</label>
                                        <Field className="form-control" type="text" name="date" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Time</label>
                                        <Field className="form-control" type="text" name="time" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Price</label>
                                        <Field className="form-control" type="text" name="price" />
                                    </fieldset><br/>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        } 
                    </Formik><br/><br/>
                </div>
            </div>
        )
    }
}

export default UpdateTicketComponent
