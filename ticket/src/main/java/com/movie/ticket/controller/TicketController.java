package com.movie.ticket.controller;

import com.movie.ticket.entity.Ticket;
import com.movie.ticket.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//This is to allow calls from React... NOT IMPORTANT RIGHT NOW
@CrossOrigin(origins = { "http://localhost:3306"})
@RestController
public class TicketController {

    private final TicketService ticketService;

    //Constructor Injection: this is telling the spring framework to wire up your
    //dependencies for the ticketService.

    @Autowired
    public TicketController(@Qualifier("ticketServiceIMPL")TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping("/retrieveById/{ticketId}")
    public Ticket findById(@PathVariable int ticketId) {
        return ticketService.findById(ticketId);
    }



    //This is a GET request that will read a list of all the ticket.
    //http://localhost:8080/retrieveAllTicket
    @GetMapping("/retrieveAllTicket")
    public List<Ticket> findAll() {
        return ticketService.findAll();
    }

    //This is a POST request to add a new employee.
    //http://localhost:8080/addTicket
    @PostMapping("/addTicket")
    public Ticket addTicket(@RequestBody Ticket theTicket) {
        //also just in case they pass an id in JSON .... set id to o
        //this is to force a save of new item .... instead of update
        theTicket.setId(0);

        //This will call the ticketDqoImpl.save method to save a new part
        //through the ticketService interface SPRING
        ticketService.saveOrUpdate(theTicket);
        return theTicket;
    }

    //This is a PUT request to update an existing part.
    //http://localhost:8080/updateTicket
    @PutMapping("/updateTicket")
    public Ticket updateTicket(@RequestBody Ticket updateTicket) {
        //No theEmployee.setId(0); this will execute an update instead of a create
        ticketService.saveOrUpdate(updateTicket);
        return updateTicket;
    }

    //This is a DELETE request to delete an existing part.
    //http://localhost:8080/deleteTicket/1
    @DeleteMapping("/deleteTicket/{ticketId}")
    public String deleteTicket(@PathVariable int ticketId) {
        //This will execute the deleteByID.
        ticketService.deleteById(ticketId);
        return "Deleted ticket id : " + ticketId;
    }





}
