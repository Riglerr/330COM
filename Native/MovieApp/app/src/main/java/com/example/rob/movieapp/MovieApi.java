package com.example.rob.movieapp;

import com.loopj.android.http.*;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class MovieApi {
    private static final String IMAGE_SERVER_URL = "https://image.tmdb.org/t/p/w500";
    public static void getDiscoverMovies(JsonHttpResponseHandler responseHandler) {
        RequestParams rp = new RequestParams();
        rp.add("language", "en-US");
        rp.add("sort_by","popularity.desc");
        rp.add("include_adult", "false");
        rp.add("include_video", "false");
        rp.add("page","1");
        HttpUtil.get("discover/movie", rp,  responseHandler);
    }

    public static void getMovieSearch(String query_string, JsonHttpResponseHandler responseHandler) {
        RequestParams rp = new RequestParams();
        rp.add("language", "en-US");
        rp.add("query", query_string);
        rp.add("include_adult", "false");
        rp.add("page","1");
        HttpUtil.get("search/movie", rp,  responseHandler);
    }

    public static ArrayList<Movie> parseResponseResults(JSONObject response) {
        ArrayList<Movie> movieResultArray = new ArrayList<Movie>();
        JSONArray resultsArray = new JSONArray();
        try {
            resultsArray = response.getJSONArray("results");

            if (resultsArray.length() == 0) {
                // No results found
                return movieResultArray;
            }
            for (int i=0; i < resultsArray.length(); i++) {
                JSONObject item = resultsArray.getJSONObject(i);
                movieResultArray.add(
                        new Movie(
                            item.getString("title"),
                            item.getString("overview"),
                            //ISO8601DateParser.parse(item.getString("release_date")),
                            item.getString("release_date"),
                            item.getInt("vote_average"),
                            MovieApi.buildImageUrl(item.getString("poster_path"))
                        )
                );
            }
        } catch (JSONException e) {
            Logger.getLogger(MovieSearchFragment.class.getName()).log(Level.SEVERE, null, e);
        }
        return movieResultArray;
    }
    public static String buildImageUrl(String poster_path) {
        return IMAGE_SERVER_URL + poster_path;
    }
}
