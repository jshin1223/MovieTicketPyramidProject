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

    @Column(name = "movie_title") //This will map the jobTitle field to the column named job_title in the table.
    private String movieTitle;

    @Column(name = "date") //This will map the firstName field to the column named first_name in the table.
    private int date;

    @Column(name = "time") //This will map the lastName field to the column named last_name in the table.
    private int time;

    @Column(name = "price") //This will map the email field to the column named email in the table.
    private int price;

    //default constructor
    public Ticket() {
    }

    //para constructor
    public Ticket(int date, int time, int price) {
        this.date = date;
        this.time = time;
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
        return movieTitle;
    }

    public void getTicketName(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public int getLength() {
        return date;
    }

    public void setLength(int date) {
        this.date = date;
    }

    public int getWidth() {
        return time;
    }

    public void setWidth(int time) {
        this.time = time;
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
                ", movieTitle='" + movieTitle + '\'' +
                ", date='" + date + '\'' +
                ", time='" + time + '\'' +
                ", price='" + price + '\'' +
                '}';
    }
}
