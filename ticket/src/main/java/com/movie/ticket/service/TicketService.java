package com.movie.ticket.service;

import com.movie.ticket.entity.Ticket;

import java.util.List;

public interface TicketService {
    List<Ticket> findAll();
    Ticket findById(int ticketID);
    void saveOrUpdate(Ticket theTicket);
    void deleteById(int ticketId);
}
