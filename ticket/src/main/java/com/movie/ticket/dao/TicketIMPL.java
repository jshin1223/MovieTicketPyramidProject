package com.movie.ticket.dao;

import com.movie.ticket.entity.Ticket;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

//IMPORTANT If your code is not working your imports might be incorrect

@Repository
public class TicketIMPL implements TicketDAO {

    //Define field for entity manager
    /*The EntityManager API is used to create and remove persistent entity instances,
        to find entities by their primary key, and to query over entities. */
    private final EntityManager entityManager;

    //Set up constructor injection
    @Autowired
    public TicketIMPL(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public List<Ticket> findAll() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Ticket> myQuery = currentSession.createQuery("from Ticket");
        return myQuery.getResultList();
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public Ticket findById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.get(Ticket.class, theId);
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void saveOrUpdate(Ticket theTicket) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theTicket);
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void deleteById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        Ticket myTicket = currentSession.get(Ticket.class, theId);
        currentSession.delete(myTicket);
    }
}
