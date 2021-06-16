package com.movie.ticket.entity;

import javax.persistence.*;

//Employee Entity
@Entity //This will let Java know that this is an entity that we are going to map to a database table.
@Table(name = "ticket") //This is for the actual name of the database table we are mapping to the class.
public class Ticket {

    //Define fields
    @Id //This will map the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This will auto increment your primary key
    @Column(name = "id") //This is mapping the primary key to the id column in the table.
    private int id;

    @Column(name = "ticket_name") //This will map the jobTitle field to the column named job_title in the table.
    private String ticketName;

    @Column(name = "length") //This will map the firstName field to the column named first_name in the table.
    private int length;

    @Column(name = "width") //This will map the lastName field to the column named last_name in the table.
    private int width;

    @Column(name = "price") //This will map the email field to the column named email in the table.
    private int price;

    //default constructor
    public Ticket() {
    }

    //para constructor
    public Ticket(int length, int width, int price) {
        this.length = length;
        this.width = width;
        this.price = price;
    }

    //getter/setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTicketName() {
        return ticketName;
    }

    public void getTicketName(String ticketName) {
        this.ticketName = ticketName;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    //ToString Method
    @Override
    public String toString() {
        return "Ticket{" +
                "id=" + id +
                ", ticketName='" + ticketName + '\'' +
                ", length='" + length + '\'' +
                ", width='" + width + '\'' +
                ", price='" + price + '\'' +
                '}';
    }
}
