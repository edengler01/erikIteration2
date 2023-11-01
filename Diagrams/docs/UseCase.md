## Use Cases 

#### Student registering for an account
A student can register for an account on the app. They can navigate to the register page. They are
prompted to enter their First Name, Last Name, their Major, their Phone Number, an email, and their desired password. Once the input fields are filled and the submit button is pressed, the data sent to the server so it can be constructed in a way where it can be inserted into a database. On successful registration, they will be redirected to the login page. They will be assigned a unique user_id in the database.

#### Student logging in
A student can login in to their account. They are greeted by the login page by default. They are prompted to enter their email and the password they gave when the registered for an account. When they submit the information, the input data will be sent to the server. On successful login, they will be redirected to the bazaar page. On unsuccesful login, they will be returned to the login page.


#### Student search for a book
Once a student is logged in, they can search for a book based off various criteria. They are prompted to either search by book name, author, course code, book condition, or price range. Based on what submit button is pressed, the server will ask the database for all books related to the criterion chosen. The server will then display a JSON object containing all items in the database that relate to the criterion. 

#### Student selling a book
A student can put their books for sale on the app. They navigate to the Sell Your Books tab. They are prompted to enter 
the name of the book, the author of the book, the course code that the book is assigned to, the current condition of the book and the price that the person wants to sell it for. Once the input fields have been verified to be filled, the database will hold that users book and then send it to the server so it can be shown to anyone who is browsing for books. 

#### Student buying a book
A logged in student can buy a book that is up for sale on the Bazaar. The student selects the book they want, and a location they want to meet, and the server will take that students user id and email and story it in the database that houses the sellers user id and email with the students user id and email. The seller will be notified that the student has shown interest in the sale. 


#### Student viewing offers for their book
Once a student has put a book up for sale, they can view what offers have been on it. The student can view a log of various users and their price offers. The student can then choose to accept a buyers offer and they can then contact them. Once the sale is complete, all offers related that order are erased. 