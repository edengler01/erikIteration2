<details>
<summary>Scenario: Searching for a book </summary>

##### Initial Assumption
- A user is looking for a book based off of book name, book author, course code that is was associated with it, book condition, and price of the book. They are already authenticated. 


##### Normal
- The user chooses to search for a book based of the criteria. They are prompted enter the criterion they want seach off of. The input is then sent off to the server. 

- On completion, the system will show the user all the books that are relevant to the criterion that they put. 
##### What Can Go Wrong
- A user can input malicious code that could give them access to senstive, but encrypted information.

- A user can input malicous code that could break the integrity of the database.

##### System State on Completion
- User is logged in. The server will display all the books that student is interested in.
</details>






<details>
<summary>Scenario: Putting a book up for sale</summary>

##### Initial Assumption
- A user has a book or a collection of books that they want to put up for sale to the Bazaar service. These books are identified by book title and author. They have been successfully authenticated on to Racoon Bazaar. 

##### Normal
- The user chooses to put up a sell order. They are prompted to enter the book name, author, the condition of the book, the major that is related to the book, and the price they are looking for.

- On completion, system will send a confirmation to the user stating that the order has been placed.

##### What Can Go Wrong
- User can put in an duplicate order that they already have put in. The system will inform the user that they already have an order for the same item and will notify them to edit it.

- User can put in malicious/unintended input. The server will notify the user that the input is not valid and the server will refuse to send the input to the database. 

##### System State on Completion
- User is logged in. The order will be sent to the database and the server will display the updated table.
</details>



<details>
<summary>Scenario: Buying a book </summary>

##### Initial Assumption
- Student is logged in. An order in the database is valid.  


##### Normal
- The user sees a book that they want. They click a button next to it to say that they want it. The server takes their user_id and the sellers user_id and makes the connection between them. This data is then sent off database.

- On completion, the seller can see that an offer has been made on their book. The seller can choose to email the buyer.
##### What Can Go Wrong
- 2 Users could click on the buttom at the same time, resulting in a double order

- User could be wanting to buy their own order.

##### System State on Completion
- The server will tell the user that the seller will be notified. 
</details>

<details>
<summary>Scenario: Login </summary>

##### Initial Assumption
- A student already has registered for an account.


##### Normal
- A student inputs their email and password. If the pair is in the database, the server will grant them access to the Bazaar. If the pair is not in the database, then they will not be let in.

##### What Can Go Wrong
- User could input malicous SQL code.

##### System State on Completion
- The server grants the user a Session token that hold their info for either a day or until they log out.
</details>

<details>
<summary>Scenario: Registering an account </summary>

##### Initial Assumption
- A student does not have an account for the Bazaar.


##### Normal
- A student inputs their first name, last name, major, phone number, desired password, and email.

##### What Can Go Wrong
- A student could input identical information that is already in the database.

- A student could attempt to use malicious code to extract/destroy integrity of the database.

##### System State on Completion
- The student will then be redirected to the login page.

</details>
