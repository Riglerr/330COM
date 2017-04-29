package com.example.rob.movieapp;

import android.app.Fragment;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.SearchView;

import com.loopj.android.http.JsonHttpResponseHandler;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import cz.msebera.android.httpclient.Header;

public class MovieSearchFragment extends Fragment {

    ArrayList<Movie> listItems;
    ListView mListView;
    public MovieSearchFragment() {
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {

        View mView = inflater.inflate(R.layout.movie_search_fragment, container, false);
        SearchView mSearchView = (SearchView)mView.findViewById(R.id.searchView);

        mListView = (ListView)mView.findViewById(R.id.list);
        this.listItems = new ArrayList<Movie>();
        SearchItemAdapter adapter = new SearchItemAdapter(getActivity(), R.layout.search_list_row, this.listItems);
        mListView.setAdapter(adapter);

        mListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                FragmentManager fragmentManager = getFragmentManager();
                FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
                MovieDetailFragment detailFragment = new MovieDetailFragment();
                detailFragment.setMovieDetail(listItems.get(position));
                fragmentTransaction.replace(R.id.content_frame, detailFragment);
                fragmentTransaction.commit();
            }
        });

        setupSearchListener(mSearchView);
        return mView;

    }

    private void setupSearchListener(SearchView sV) {
        sV.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String query) {
                MovieApi.getMovieSearch(query, new JsonHttpResponseHandler() {
                    @Override
                    public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
                        getMoviesSuccess(statusCode, headers, response);
                    }

                    @Override
                    public void onFailure(int statusCode, Header[] headers, String responseString, Throwable throwable) {
                        getMoviesFailure(statusCode, headers, responseString, throwable);
                    }
                });
                return false;
            }

            @Override
            public boolean onQueryTextChange(String newText) {
                return false;
            }
        });
    }

    private void getMoviesSuccess(int statusCode, Header[] headers, JSONObject response) {
        this.listItems.addAll(MovieApi.parseResponseResults(response));
        mListView.invalidateViews();
    }

    private void getMoviesFailure(int statusCode, Header[] headers, String responseString, Throwable throwable) {

    }
}
