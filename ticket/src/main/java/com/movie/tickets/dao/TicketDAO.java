package com.movie.tickets.entity;


import com.assignment.parts.entity.Parts;

import java.util.List;

public interface TicketDAO {
    List<Parts> findAll();
    Parts findById(int theId);
    void saveOrUpdate(Parts theParts);
    void deleteById(int theId);
}
