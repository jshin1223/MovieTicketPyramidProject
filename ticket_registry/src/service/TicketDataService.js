import axios from 'axios'

class TicketDataService {
    
    retrieveAllTickets() {
        return axios.get(`http://localhost:8080/retrieveAllTickets`);
    }
    
    deleteTicket(id) {
        return axios.delete(`http://localhost:8080/deleteTicket/${id}`)
    }

    updateTicket(ticket) {
        return axios.put(`http://localhost:8080/updateTicket/`, ticket)
    }

    createTicket(ticket) {
        return axios.post(`http://localhost:8080/addTicket/`, ticket)
    }
}

export default new TicketDataService()