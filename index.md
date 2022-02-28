# Computer Science Capstone

## Code Review
The following is a link to a video with an informal code review covering the artifact I have chosen to make enhancements on for all three categories: [Artifact Code Review](https://youtu.be/KvFRfy7cGxg)

## Enhancement One Narrative
Here are the links to the original artifact: [AuthenticationSystem](https://github.com/melissa-rodriguez5/melissa-rodriguez5.github.io/tree/main/ZooAuthenticationSystem)<br/>
And the enhanced version: [ZooAuthenticationSystem](https://github.com/melissa-rodriguez5/melissa-rodriguez5.github.io/blob/main/AuthenticationSystem.zip)

### Briefly describe the artifact. What is it? When was it created?
The artifact is a simple authentication system that validates a zoo employee's login credentials and authorizes them to view data that pertains to their role in the organization. It was originally written in Java for the IT-145 Foundation in App Development class I took in late 2019.

### Justify the inclusion of the artifact in your ePortfolio. Why did you select this item? What specific components of the artifact showcase your skills and abilities in software development?
I selected this artifact because as one of the earliest programs I created, I saw much room for improvement. When considering the three categories I needed to cover for my capstone (software engineering, data structures/algorithms, and databases), I immediately saw the potential this one artifact had for me showing the skills I have developed in each of these categories. As a bare bones program, I saw that I could take what I had and could improve upon it by converting it to another language, adding CRUD functionality, and adding a database to make data management more efficient.

### Reflect on the process of enhancing and/or modifying the artifact. What did you learn as you were creating it and improving it? What challenges did you face? How did you incorporate feedback as you made changes to the artifact? How was the artifact improved? 
When aiming to convert the program from Java to JavaScript, I knew I was potentially tackling a tough project since my experience with JavaScript is minimal. The first obstacle I came across was trying to write a program that only functions through a CLI in JavaScript. JavaScript’s strength lies in its compatibility with web browsers, so trying to write JavaScript that did not need to run on a browser was tough since it required the use of Node.js. This was difficult since vanilla JavaScript would not always work for certain functionalities and I had to research what code would work when running through Node.js. Another big challenge in this part of the enhancement process was converting my program’s hash file from Java to JavaScript. Since I did not write the hash file in the original artifact (it was provided in the course already completed), I knew I was going to have to do some extra research to be able to get the hash file up and running in JavaScript. With a bit of research and guidance, I was able to find and implement a JavaScript library (CryptoJS) that served the same purpose as the hash file. I incorporated feedback to my enhancement by paying special attention to the comments in my code. Because of the excess of unnecessary comments in the original artifact, I made sure that the enhanced version had a balance of including well-commented code that avoided unnecessary explanations. Although I did end up having to do much more additional research than initially expected, I learned a lot about JavaScript, Node.js, and imported libraries and I think I established good foundations for this project that allowed me to build on this code for the other enhancements.

## Enhancement Two Narrative
Here are the links to the original artifact: [AuthenticationSystem](https://github.com/melissa-rodriguez5/melissa-rodriguez5.github.io/tree/main/ZooAuthenticationSystemV2)<br/>
And the enhanced version: [ZooAuthenticationSystemV2](https://github.com/melissa-rodriguez5/melissa-rodriguez5.github.io/blob/main/AuthenticationSystem.zip)

### Briefly describe the artifact. What is it? When was it created?
The artifact is a simple authentication system that validates a zoo employee's login credentials and authorizes them to view data that pertains to their role in the organization. It was originally written in Java for the IT-145 Foundation in App Development class I took in late 2019. For this enhancement, the artifact has now been converted to JavaScript.

### Justify the inclusion of the artifact in your ePortfolio. Why did you select this item? What specific components of the artifact showcase your skills and abilities in software development?
I selected this artifact because as one of the earliest programs I created, I saw much room for improvement. When considering the three categories I needed to cover for my capstone (software engineering, data structures/algorithms, and databases), I immediately saw the potential this one artifact had for me showing the skills I have developed throughout my time in the Computer Science program in each of these categories. As a bare bones program, I saw that I could take what I had and could improve upon it by converting it to another language (JavaScript), adding CRUD functionality, and adding a database to make data management more efficient.

### Reflect on the process of enhancing and/or modifying the artifact. What did you learn as you were creating it and improving it? What challenges did you face? How did you incorporate feedback as you made changes to the artifact? How was the artifact improved? 
In the previous enhancement, I built the foundation of the program by converting the original artifact to JavaScript. I built on that base in this enhancement by adding CRUD functionality. To do this, I first had to change the way the program was structured since all the data was stored in text files and the data was not easily accessible this way. I moved all the data from text files to arrays in a new JavaScript file named CRUD. In this same file, I wrote the four functions that would manage each of the create, read, update, and delete functionalities of CRUD. Adding these functions to my program taught me about array manipulation and data management. I started to see that the more complexity I added to my program, the more logic was needed to make the complexity work the way I intended for it to. Adding new features is not just about a new function or two, it is also about realizing how those functions will require additional code to execute correctly. For example, when writing the function for updating role duties, it was not until I was writing it that I realized that I had to write additional if-statements to check that the user was attempting to access an array value that exists or otherwise risk having the program crash.

## Enhancement Three Narrative
Here are the links to the original artifact: [AuthenticationSystem](https://github.com/melissa-rodriguez5/melissa-rodriguez5.github.io/tree/main/ZooAuthenticationSystemV2)<br/>
And the enhanced version React frontend (App.js contains primary functionality): [Frontend](https://github.com/melissa-rodriguez5/melissa-rodriguez5.github.io/tree/main/src)<br/>
Enhanced version Express backend: [Backend](https://github.com/melissa-rodriguez5/melissa-rodriguez5.github.io/blob/main/index.js)<br/>
Enhanced version video: [Zoo Authentication System Video](https://github.com/melissa-rodriguez5/melissa-rodriguez5.github.io/blob/main/Enhancement%20Three%20Video.mp4)

### Briefly describe the artifact. What is it? When was it created?
The artifact is a simple authentication system that validates a zoo employee's login credentials and authorizes them to view data that pertains to their role in the organization. It was originally written in Java for the IT-145 Foundation in App Development class I took in late 2019. At this step in the enhancement process, the artifact has now been converted to JavaScript.

### Justify the inclusion of the artifact in your ePortfolio. Why did you select this item? What specific components of the artifact showcase your skills and abilities in software development?
I selected this artifact because as one of the earliest programs I created, I saw much room for improvement. When considering the three categories I needed to cover for my capstone (software engineering, data structures/algorithms, and databases), I immediately saw the potential this one artifact had for me showing the skills I have developed throughout my time in the Computer Science program in each of these categories. As a bare bones program, I saw that I could take what I had and could improve upon it by converting it to another language (JavaScript), adding CRUD functionality, and adding a MongoDB database that is used through a React app to make data management more efficient and make the program more interactive for the user with a user interface.

### Reflect on the process of enhancing and/or modifying the artifact. What did you learn as you were creating it and improving it? What challenges did you face? How did you incorporate feedback as you made changes to the artifact? How was the artifact improved?
In the previous two enhancements, I built the foundation of the program by converting the original artifact to JavaScript and added CRUD functionality for more complexity. For this enhancement, my goal was to take the foundation and make it a more complete program by adding a MongoDB database with data that could be managed through a user interface made with React. To do this, I started by creating an account in MongoDB and added the collection “roles” which consists of the duties data that had been found in text files and arrays in previous iterations of the program. I also added a collection titled “users” which contains the credentials data. With the data now in MongoDB, I created an entirely new set of files (separate from the ZooAuthenticationSystem I already have) that serve as the backend and the frontend of the program. The backend files connect the MongoDB database to the React frontend, with index.js in the mongodb-backend folder containing all the functionality. The React frontend files (with App.js containg the main functionality) create the user interface that is used to input credentials and have the information displayed to the user.<br/>
	Working on these enhancements gave me much needed practice with backend and server code. While I am fairly confident in my ability to write program functionality, I feel like one of my areas of improvement when it comes to software development is working with servers, having only practiced with them once before. Taking on this challenge showed me that creating a full-stack app takes much more than writing effective functionality. It also requires a good understanding of how every part of the program will connect to one another, from figuring out how to connect to the database to the backend and then connecting that backend to the frontend. Due to time constraints and limitations in my abilities, I was able to create a full-stack app, but with very limited capabilities. The app does use a MongoDB database to manage the program’s data, but the React frontend only has login functionality that displays role duty information depending on if the login information pertains to a user in the database. I ran out of time and did not incorporate any of the CRUD functionality that I had created in Enhancement Two and the app’s design also leaves a lot to be desired. Nevertheless, I was able to produce a full-stack MVP with new technologies and while the product is not the most polished, the experience I got from working on this project was invaluable and I definitely intend to continue building on it in future.
## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/melissa-rodriguez5/melissa-rodriguez5.github.io/edit/main/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).
