# ReachInBox-Frontend

## Overview
This repository contains the code for Reachinbox frontend  App using React with Typescript for an assignment given by Reachinbox.

## Technologies Used ( Frontend )
  - Typescript
  - React
  - Tailwind css

## Deployment

The application is deployed on netlify and can be accessed [here](https://reachinbox-frontend.netlify.app/).

## Demo Video :- 
----

## Login Page

![Screenshot (73)](https://github.com/user-attachments/assets/e3fa8385-3f8b-40a2-9511-1fd08a4aca9d)


## Landing Page

![Screenshot (74)](https://github.com/user-attachments/assets/45adeab6-605c-4738-8328-8c4a33438b73)


## Deshboard with Dark Mode

 ![Screenshot (75)](https://github.com/user-attachments/assets/84a8623c-df10-45ef-9fef-8e21098ed03a)


## Dashboard with Light Mode

![Screenshot (76)](https://github.com/user-attachments/assets/f4b37c38-52eb-4564-80f3-2314a3398cff)


## Delete Email 

![Screenshot (77)](https://github.com/user-attachments/assets/01764672-2aed-46f5-992c-b67b32ac2959)


## Reply Email

![Screenshot (78)](https://github.com/user-attachments/assets/e7e7b6c7-1e18-4ee6-9c83-30660c495a34)


 # How to Run <br/>
 
   <h2>Installation</h2>
   
   Clone the repository:   ``` git clone https://github.com/AmanS09/Reachinbox-Coding-Assignment.git  ``` <br/>
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm run start ``` <br/>
   Open your browser and visit:   ``` http://localhost:3000 ``` <br/>
   

   ## Features 
   
  - Authentication
  - Get Emails
  - Post (send) Email
  - Delete Email


   <h2>Endpoints</h2>
   <h3>All Emails</h3>
   <pre><code>GET {{baseurl}}/onebox/list </code></pre>

   <h3>All Emails from Onebox</h3>
   <pre><code>GET {{baseurl}}/onebox/messages/:thread_id </code></pre>

   <h3>Add Onebox Mail</h3>
   <pre><code>POST {{baseurl}}/onebox/reply/:thread_id </code></pre>

   <h3>Delete Email</h3>
   <pre><code>DELETE {{baseurl}}/onebox/messages/:thread_id </code></pre>
  
