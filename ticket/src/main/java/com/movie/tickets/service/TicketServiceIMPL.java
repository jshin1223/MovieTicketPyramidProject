package com.movie.tickets.service;

import com.assignment.parts.dao.PartsDAO;
import com.assignment.parts.entity.Parts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TicketServiceIMPL implements PartsService {

    private final PartsDAO partsDAO;

    @Autowired
    public TicketServiceIMPL(PartsDAO partsDAO) {
        this.partsDAO = partsDAO;
    }

    @Override
    public List<Parts> findAll() {
        return partsDAO.findAll();
    }

    @Override
    public Parts findById(int partsID) {
        return partsDAO.findById(partsID);
    }

    @Override
    public void saveOrUpdate(Parts theParts) {
        partsDAO.saveOrUpdate(theParts);
    }

    @Override
    public void deleteById(int partsID) {
        partsDAO.deleteById(partsID);
    }
}


