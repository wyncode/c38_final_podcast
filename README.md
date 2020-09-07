# Wyncast 

## Overview
 - MongoDB Atlas: Our non-relational cloud database service of choice persisted all of the Wyncast app development and data. 
 - ERD: How'd we structure it? With 3 Collections named Users, Genre, and Podcast. Check out the data flow in Genre and Podcast's one-to-many relationship.
 
 -  JWT token used for User authentication. A User can log in and save & retrieve their preferences. 

![Alt text](https://github.com/wyncode/c38_final_podcast/blob/master/client/src/Photos/Wyncast%20ERD-1.png?raw=true)

## Run Through





## API Endpoints

- Create User Account: /api/users  (POST)

- Login User: /api/users/login  (POST)

- Update User Preferences: /api/users/me  (PATCH)

- Fetch User Preferences: api/user/:id  (GET)


## Dependancies Used
`Axios, Express, Mongoose, JsonWebToken, Passport `<br>
`Bootstrap, Cloudinary, Nodemon, React-router-dom `


# Try It Out Yourself
## Setup

- `git clone` this repo
- `cd` into the repo
- `yarn install`
- `cd client && yarn install`
- `cp .env.sample .env`
- Nice Work!

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

## Deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`


