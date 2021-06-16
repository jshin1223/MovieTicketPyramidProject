package com.movie.tickets.dao;


import com.movie.tickets.entity.Ticket;

import java.util.List;

public interface TicketDAO {
    List<Ticket> findAll();
    Ticket findById(int theId);
    void saveOrUpdate(Ticket theTicket);
    void deleteById(int theId);
}
