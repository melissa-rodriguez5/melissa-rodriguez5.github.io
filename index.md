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

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
