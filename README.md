# Clinet / Server API Authentication Example

Angular 2/4 thin client which communicates with WEBAPI 2.0.  Features Entity Framework, OWIN Authentication, and ELMAH

## CLIENT (Angular 2 App)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

### Run Development (client) server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## SERVER (ASP.NET WEBAPI 2.0 Project)

Using Visual Studio WEBAPI Template with Individual Account Authentication

### Run Development API server

The Client currently expects the API to be hosted at `http://cliexample.lo/`. You must host the endpoints at this URL or change the Client Angular 2 Services.

### ELMAH

Elmah database must be setup.  Create Elmah.mdf in `App_Data`.  Run Elmad DB Script found at  `App_Readme`.  You can put the database anywhere you like by updating connection strings.
