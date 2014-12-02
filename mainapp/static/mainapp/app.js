requirejs.config({
    "baseUrl": window.STATIC_URL + "mainapp/lib",
    "paths": {
        "app": "../app",
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min"
    }
});

// Load the main app module to start the app
requirejs(["app/mainapp"]);