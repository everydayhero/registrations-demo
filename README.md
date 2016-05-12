# Registration Demo

A simple app for demonstrating our registrations api


## Access token

An oauth token is required to integrate with the everydayhero registration api.

To get your token simply create an oauth application [via the everyday hero developer website](http://developer.everydayhero.com/oauth-integration/#creating-an-oauth-application). Once created, include your **client_id** and **client_secret** in the request below to obtain your access token.

```
curl -X POST -d "grant_type=client_credentials&client_id={YOUR_CLIENT_ID}&client_secret={YOUR_CLIENT_SECRET}" https://passport.everydayhero.com/oauth/token
```

The above will respond with the following containing your authenticated access token.

```
{"access_token":"{YOUR_ACCESS_TOKEN}","token_type":"bearer",...}
```

## Clone the project

```
 $ git clone https://github.com/everydayhero/registrations-demo.git
 $ cd registrations-demo
```

## .env file

Create an `.env` file in the root directory containing the access token you created above (and a few other options as per below).

```
ACCESS_TOKEN={YOUR_ACCESS_TOKEN}
NODE_ENV=development
PORT=3000
PUBLIC_PATH=/
SERVER_RENDERING=on
DEV_PORT=8082
DEV_HOST=localhost
AUTO_RELOAD=refresh
```

(Many of the options below can be tweaked as per [example in react-project](https://github.com/ryanflorence/react-project/blob/master/create-react-project/blueprint/.env))

# Launch

Once your `.env` file is setup you can launch the app as per below.

```
 $ npm i
 $ npm start
```

The site will be visible at: (http://localhost:3000)[http://localhost:3000]

