package com.example.rob.movieapp;

import java.util.Date;


public class Movie {
    public String title;
    public String releaseDate;
    public int rating;
    public String description;
    public String imgUrl;

    public Movie(String title, String description, String releaseDate,
                 int rating, String imgUrl) {
        super();
        this.title = title;
        this.releaseDate = releaseDate;
        this.rating = rating;
        this.description = description;
        this.imgUrl = imgUrl;
    }

    public String toString() {
        return this.title + " : " + this.releaseDate.toString();
    }

}
