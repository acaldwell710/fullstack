# cs465-fullstack
CS-465 Full Stack Development with MEAN

# Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
The client-facing front end website utilized Express (Node), Handlebars templates, HTML, CSS, Javascript, MongoDB and even Mongoose. These technologies work cohesively to create an MVC or model, view, controller framework for the full stack application with the addition of the database. The client is able to visit the website and see multiple HTML pages each styled with CSS and using the Express framework. In the single-page application or SPA, another JavaScript framework called Angular was heavily used. The angular modules create organization for the SPA. CRUD API calls to the NoSQL database can be executed by authorized users with the use of JSON web tokens. Additionally, The SPA utilizes bootstrap for styling.
Why did the backend use a NoSQL MongoDB database?
This project required the use of a MEAN stack. Therefore, this required a MongoDB database. In addition to the MEAN stack, MongoDB has a flexible schema and allows API calls with JSON.


# Functionality
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
If HTML is the structure, CSS is the styling, then JavaScript is the functionality. Essentially, JavaScript is a language that allows static pages to become dynamic. It can enable interaction, event listeners, and functions which bring a page to life. JSON represents JavaScript Object Notation. This is essentially a way of storing or transporting data to and from servers. In this use case, it helped to transport data from the front-end server to the back-end server and vice versa. Additionally, it allowed us to store authentication tokens.
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
Code redundancy can lead to bugs. For instance, if the same code is written in mulitple areas and then in one area the code is changed this could cause an issue in the other areas. Therefore, it is best to refactor to minimize redundancy. The most notable instance of refactoring code was using the Handlebars templates. The use of Handlebars allowed several pages headers, footers, and loops to be refactored into a single area and re-written into Handlebars format. 


# Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
This was one of the most challenging areas. There was a lot of information to cover in a short amount of time, therefore most of the testing methods were a first time experience, too. Using the Mac's terminal in order to see status responses was critical. It was important to know that 200 was good, 304 was also good (this was already a 200 and the browser had just seen it). However, 404 was bad as it was not found. Later, when authorization was added 401 was also not ideal as that meant unauthorized. Lastly, 500 was added earlier on, meaning that the server hadn't responded, but I didn't have that issue. During the request and retrieval process one of the first lines of defense was the web browser's web developer tools. Adding console.log messages in order to determine the extact placement or status of something new extremely helpful. Along the way, a tool called Postman was made helpful for the SPA. This allowed for testing the back-end calls of the application. Additionally, I learned the hard way that anytime a change was made it's imperative to test both the front and back end authorization. Each layer of security added more "unauthorized" access.


# Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course was helpful, because it's one of the first times that's I've actually built a full-stack application. I had very little, if any experience with APIs and JSON. Therefore, I feel more confident with those areas. I know that I've gotten better with testing and with problem solving. My goal is to be a developer, so I think this project will help showcase that at the very least I'm determined enough to keep trying. Furthermore, I know that I may lack experience that others may have in the market, but I feel like I'm a quick learner. I think this project is a product of just that.
