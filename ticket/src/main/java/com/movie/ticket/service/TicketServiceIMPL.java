package com.movie.ticket.service;

import com.movie.ticket.dao.TicketDAO;
import com.movie.ticket.entity.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TicketServiceIMPL implements TicketService {

    private final TicketDAO ticketDAO;

    @Autowired
    public TicketServiceIMPL(TicketDAO ticketDAO) {
        this.ticketDAO = ticketDAO;
    }

    @Override
    public List<Ticket> findAll() {
        return ticketDAO.findAll();
    }

    @Override
    public Ticket findById(int ticketID) {
        return ticketDAO.findById(ticketID);
    }

    @Override
    public void saveOrUpdate(Ticket theTicket) {
        ticketDAO.saveOrUpdate(theTicket);
    }

    @Override
    public void deleteById(int ticketID) {
        ticketDAO.deleteById(ticketID);
    }
}


