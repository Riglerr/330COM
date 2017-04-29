package com.example.rob.movieapp;
import android.preference.PreferenceActivity;
import android.util.Log;

import com.loopj.android.http.*;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HttpUtil {
    private static final String BASE_URL = "https://api.themoviedb.org/3/";
    private static final String API_KEY = "f95aa45c6b3445ebd7b35f350d4b3904";

    private static AsyncHttpClient client = new AsyncHttpClient();

    public static void get(String url, RequestParams params, AsyncHttpResponseHandler responseHandler) {
        params.add("api_key", API_KEY);
        client.get(getAbsoluteUrl(url), params, responseHandler);
    }

    public static void post(String url, RequestParams params, AsyncHttpResponseHandler responseHandler) {
        params.add("api_key", API_KEY);
        client.post(getAbsoluteUrl(url), params, responseHandler);
    }

    public static void getByUrl(String url, RequestParams params, AsyncHttpResponseHandler responseHandler) {
        client.get(url, params, responseHandler);
    }

    public static void postByUrl(String url, RequestParams params, AsyncHttpResponseHandler responseHandler) {
        client.post(url, params, responseHandler);
    }

    private static String getAbsoluteUrl(String relativeUrl) {
        return BASE_URL + relativeUrl;
    }

    private static String getApiKeyQuery() {
        return "f95aa45c6b3445ebd7b35f350d4b3904&";
    }


}
