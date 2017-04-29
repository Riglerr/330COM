package com.example.rob.movieapp;

import android.animation.Animator;
import android.animation.AnimatorSet;
import android.animation.ObjectAnimator;
import android.animation.ValueAnimator;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.util.DisplayMetrics;
//import com.example.rob.movieapp.SearchActivity
public class MainActivity extends AppCompatActivity {

    protected float mScreenHeight;
    protected float mScreenWidth;
    ViewGroup splashAnimationFrame;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        View view = (View)findViewById(R.id.splashContainer);
        Intent intent = new Intent(MainActivity.this, DrawerActivity.class);
        startActivity(intent);
    }
}
