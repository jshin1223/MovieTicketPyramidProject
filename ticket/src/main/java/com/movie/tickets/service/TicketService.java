package com.movie.tickets.service;

import com.movie.tickets.entity.Ticket;

import java.util.List;

public interface TicketService {
    List<Ticket> findAll();
    Ticket findById(int ticketID);
    void saveOrUpdate(Ticket theTicket);
    void deleteById(int ticketId);
}
