package com.movie.ticket.dao;


import com.movie.ticket.entity.Ticket;

import java.util.List;

public interface TicketDAO {
    List<Ticket> findAll();
    Ticket findById(int theId);
    void saveOrUpdate(Ticket theTicket);
    void deleteById(int theId);
}
