package com.movie.tickets.service;

import com.assignment.parts.entity.Parts;

import java.util.List;

public interface TicketService {
    List<Parts> findAll();
    Parts findById(int partsID);
    void saveOrUpdate(Parts theParts);
    void deleteById(int partsId);
}
