package com.bookstore;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "BookStore";
    }

//     @Override
// protected void onCreate(Bundle savedInstanceState) {
//     RCTSplashScreen.openSplashScreen(this);   //open splashscreen
//     //RCTSplashScreen.openSplashScreen(this, true, ImageView.ScaleType.FIT_XY);   //open splashscreen fullscreen
//     super.onCreate(savedInstanceState);
// }
}
