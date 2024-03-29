# Kiwi's Paradise eCommerce Mobile (PWA)

This is my sixth re-edition of my eCommerce website that is centered on selling plushies. Kiwi's Paradise is now offically a PWA, so you are able to install this application onto your devices! This application has three main pages (Home, Products, Contact Us) routed together, with an authenticated protected users page. The home page contains a slider of images. The products page contains items that are pulled from a MongoDB Atlas database. On the products page, the user can filter through the items by type and price. The contact us page contains a form that will validate and take in responses from the user and send them back to the MongoDB Atlas database. Also on this page, at the bottom there is a testimonials section where it displays the comments that are located from the MongoDB Atlas database. The protected authenticated users page will display the list of users that signed up on the application. This website was made by using React.js, CSS, Bootstrap, node, express, and authenticating with JWTs. This application has automated testing through using mocha and chai. The automated testing is running on a parallel server from the express server of the application.

<kbd>
<img src="https://github.com/l-yang-05/KiwisParadise-Mobile/blob/master/screenshots-pwa/Screenshot_20191202-155824_Chrome.jpg" alt="home pwa" width="250" height="auto"/>
</kbd>

<kbd>
<img src="https://github.com/l-yang-05/KiwisParadise-Mobile/blob/master/screenshots-pwa/Screenshot_20191202-155829_Chrome.jpg" alt="products pwa" width="250" height="auto"/>
</kbd>


## Getting Started

Clone or download this repo onto your local machine. Once you have done this, install the node packages. You can do this by running ```npm i``` on your command line tool.


## Running the app

After you have installed all of the dependencies that are needed for this project, you can open the project up through your command line tool. First be in the root of the directory and then run ```npm run start``` in your command line tool. This will start the server and the react app at the same time.


## Stopping the app

To stop running the server and the react app, you can hit ```control + z``` to close both.


## Tests

To run the tests for API endpoints run the command ```npm run test```.

## Installing PWA
In order to install the PWA on your devices, you would need to access the deployed site on the browser you're currently using.

### Android Users
For Android users that usually use browsers like Google Chrome and Samsung Internet, you will notice an option icon (Three dots) near the top of the browser. Click on the icon and select the option "Add to homescreen". You'll then be greeted with a popup asking you to add the app to homescreen. Press 'Yes' and soon you'll be able to have the app on your device!

<kbd>
<img src="https://github.com/l-yang-05/KiwisParadise-Mobile/blob/master/screenshots-pwa/Screenshot_20191202-155629_Chrome.jpg" alt="Android add to homescreen" width="250" height="auto"/>
</kbd>

<kbd>
<img src="https://github.com/l-yang-05/KiwisParadise-Mobile/blob/master/screenshots-pwa/Screenshot_20191202-155842_One_UI_Home.jpg" alt="Android app on homescreen" width="250" height="auto"/>
</kbd>

### Apple Users
For Apple users that usually use Safari, you will notice an share icon (Box with arrow point up) near the bottom of the browser. Click on the icon and select the option "Add to homescreen". You'll then be greeted with a popup asking you to add the app to homescreen. Press 'Yes' and soon you'll be able to have the app on your device!

<kbd>
<img src="https://github.com/l-yang-05/KiwisParadise-Mobile/blob/master/screenshots-pwa/image0.png" alt="Apple app on homescreen" width="250" height="auto"/>
</kbd>

<kbd>
<img src="https://github.com/l-yang-05/KiwisParadise-Mobile/blob/master/screenshots-pwa/image0%20(1).png" alt="Apple app on homescreen" width="250" height="auto"/>
</kbd>
 
## Built With

* [React](https://github.com/facebook/react) - The framework used
* [NodeJS](https://github.com/nodejs/node) - The development for server
* [Express & Express Router](https://github.com/expressjs/express) - Used to create endpoints
* [Morgan](https://github.com/expressjs/morgan) - Logging tool
* [Helmet](https://github.com/helmetjs/helmet) - Provided security
* [Mocha](https://github.com/mochajs/mocha) - Used for testing application
* [Chai](https://github.com/chaijs/chai) - Used for testing application
* [Concurrently](https://github.com/kimmobrunfeldt/concurrently) - Used to run servers at the same time
* [MongoDB Atlas](https://www.mongodb.com/) - Cloud database
* [Mongoose](https://mongoosejs.com/) - Manipulation of database
* [JWT](https://jwt.io/) - Authenticated application
* [Heroku](https://www.heroku.com) - Deployment platform for application


## Author

* [Lucy Yang](https://github.com/l-yang-05)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
