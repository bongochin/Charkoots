<!-- README HEADER -->
<p align="center">
	<img width="300" height="300" src="https://user-images.githubusercontent.com/67714242/112564269-559ccf80-8db1-11eb-964b-712e8474e02d.png">
</p>
<p align="center"> 
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="Redux" src="https://img.shields.io/badge/redux%20-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white"/>  <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="Python" src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"/> <img alt="Postgres" src ="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/> <img alt="Flask" src="https://img.shields.io/badge/flask%20-%23000.svg?&style=for-the-badge&logo=flask&logoColor=white"/> <img alt="Heroku" src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/>
</p>
<p align="center">
    <a style="color:black" href="https://charkoots.herokuapp.com/"><strong>Live Demo</strong></a>
    |
    <a href="https://github.com/bongochin/Charkoots/wiki"><strong>More Info</strong></a>
</p>

One of my favorite hobbies is to entertain my friends and family. I love everything about it; the planning, preparing, presenting... watching people share laughters, making new acquaintances  and having a great old time. But, anyone who ever hosted anybody would agree that "great old time" requires work. A lot of work.

<strong>Charkoots </strong>*(/ˌSHärˈko͞ots/)* is my answer. All you have to do is to simply select and customize a charcuterie board, and the perfect wine that compliments the board will be paired automatically.

This project continues my theme of materializing a solution for things I feel passionate about.  This app has its focus on minimizing the time and effort that goes into hosting and entertaining, so everyone can truly focus on what's important -- Having a great old time.
<br>
 <p align="right">
    <i>- Daniel Chin, February '21</i>
</p>

<!-- TABLE OF CONTENTS -->
##
<ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#challenges">Challenges</a></li>
    <li><a href="#code-snippets">Code Snippets</a></li>
</ul>




<!-- Features -->
## Features

Below are two key features to our app that we feel are worth sharing about here.

### LaughBox

The LaughBox allows users to save specific laughs to one or more laughboxes in order to easily find laughs. Users are able to create a custom laughbox and save laughs to it. Many laughs can be stored in a laughbox. The intention of this feature is for users to keep their laughs organized by dad-jokes, raunchy humor, or any category a user can think of.

### Laughs

Laughs are displayed the main page of the application if a user is logged in. The sleek design gives the application more of a social media feel. Users are able to read the laugh, rate (laugh), super-rate (bow), and review the laugh all in one block.


<!-- CHALLENGES -->
## Challenges

This app was created for the first group project as part of the AppAcademy curriculum. Being that it was meant to be a learning experience, all of the developers learned a lot. Below are a few challenges that were necessary to overcome in order to complete the app in the timeframe given.

1. It was challenging trying to coordinate multiple working parts from each developer into one working application. In order to overcome this, we utilized the scrum board feature on GitHub. It was extremely helpful in us staying organized, knowing who is working on what, and how much progress is being made overall.

2. Because we had very recently learned OAuth, it was extremely difficult to get working properly. However, each member of the development team put in the work to figure it out and everyone learned a lot more about how it works and how to get it to work for our application.

3. The final product was destined to have grand plans. However, being it's the first team project, the scope of what could be accomplished was limited given the time frame of one week. Being able to come together as a team was crucial in being able to complete the planned key features for the application. Some of the developers are more skilled with frontend and others are more skilled with backend. Because of that, it was a great learning experience because developers could help each other on certain tasks.

<!-- CODE-SNIPPETS -->
## Code-Snippets

Below are a few code snippets that the deveopers feel demonstrate strong skills and knowledge of what has been learned up to this point.


1. The 5 star rating
```
  div(class="rate")
            input(type="radio" id="star5" name="rate" value="5")
            label(for="star5" title="text") 5 stars
            input(type="radio" id="star4" name="rate" value="4")
            label(for="star4" title="text") 4 stars
            input(type="radio" id="star3" name="rate" value="3")
            label(for="star3" title="text") 3 stars
            input(type="radio" id="star2" name="rate" value="2")
            label(for="star2" title="text") 2 stars
            input(type="radio" id="star1" name="rate" value="1")
            label(for="star1" title="text") 1 star
          div
```

2. Bows logic
```
const bowsBoolean = (bows === 'on') ? true : false;
```

3. Custom CSS for buttons
```
.flex-outer li a{
    padding: 6px 8px;
    border: none;
    background: #333;
    color: #f2f2f2;
    text-transform: uppercase;
    letter-spacing: .09em;
    border-radius: 2px;
    text-decoration: none;
  }
```
