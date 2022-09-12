## Setting up ##

- npm init
- npm install all the dependencies and tools we need
    - bcrypt allows to hash and salt passwords
    - cloudinary for storing uploaded images
    - connect-mongo for connecting to our mongoDB
    - dotenv for our environment variables from mongo and cloudinary
    - ejs for rendering dynamic html
    - express for abstraction and tools to fascilitate work with node.js
    - express-flash for flashing error messages from the server side to client
    - express-session for handling user sessions stored in mongo
    - mongodb our database of choice
    - mongoose provides structure to our mongo schemas
    - morgan for logging activity on our server
    - multer
    - nodemon active reloading of our server upon saved changes
    - passport abstracts authentication making it easier to implement
    - passport local is our strategy for users to sign up (alternatives are google/twitter/insta many others)
    - validator for validating user inputs upon registering and logging in
    - method-override in order to implement put/delete requests using forms

- Set up root files such as server.js, .gitignore, and folder MVC structure with models, views, controllers, routes, config, public, middleware
    - server will require all the necessary dependencies/tools, paths to routes, contain paths for config env/passport/database, connects DB, important and use required middleware and sessions
    - config will hold the .env and database.js houses the connection to the DB
    - passport.js will house the passport strategy that will be exported as well link to using the User model

    - models folder will house the User and Post model / future Comments model
    - views folder is expanded to include partials folder for header/footer ejs files. views will account for landing page to login/register, login, register, profile, discover(feed), post content page.
    - controllers are holding all the logic behind executing CRUD actions and auth controller for login/logout/register actions
    - routes folder contains all the paths to their designated controllers 
    - public folder contains all the client side js, css, any static pages
    - middleware folder contains auth functions that are exported for use on the controller routes such as ensureAuth/ensureGuest as well as cloudinary and multer functions that are exported for use in the app



