# Signin page - backend and frontend and MongoDB

## Details:

In this mini project I made two different folders: back-end and front-end.
The front end encoded the password which the client entered using the btoa() method which creates a Base64-encoded ASCII string from a binary string. after this process the front-end send the email and the encoded password to the server.
In the backend folder I wrote the server which decrypted/decoded the (encoded-password) recieved from the front-end. and after that the back-end make hashing to the password again and send the email and the hashed password to Mongo Database.

### Installing

1. go to my repositroy.
2. git clone the vs code.
3. cd backend ==> nodemon server.js
4. cd front-end ==> npm start .

 - All Rights reserved- By Ameer Emran- FullStack Developer - 2022

