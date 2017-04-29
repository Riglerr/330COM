package com.example.rob.movieapp;

import android.app.Fragment;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

public class MovieDetailFragment extends Fragment {
    Movie mMovieDetail;

    public MovieDetailFragment() {

    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {
        View mView = inflater.inflate(R.layout.activity_movie_detail, container, false);
        TextView mTitle = (TextView) mView.findViewById(R.id.title);
        TextView mRating = (TextView) mView.findViewById(R.id.rating);
        TextView mReleaseDate = (TextView) mView.findViewById(R.id.releaseDate);
        TextView mDescription = (TextView) mView.findViewById(R.id.description);
        ImageView mImageView = (ImageView) mView.findViewById(R.id.posterImage);

        mTitle.setText(mMovieDetail.title);
        mRating.setText(Integer.toString(mMovieDetail.rating));
        mReleaseDate.setText(mMovieDetail.releaseDate.toString());
        mDescription.setText(mMovieDetail.description);
        // mImageView.setImageURI(]);

        return mView;
    }

    public void setMovieDetail(Movie item) {
        this.mMovieDetail = item;
    }
}
