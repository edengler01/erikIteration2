//js file where database queries will be made

//This block is for setting up the environment variables
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()


const pool = mysql.createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
}).promise()

/*
    Function sends a select all elements in the Marketplace Table 
    Returns: JSON Object
    */
export async function getSells(){
    const [result] = await pool.query("SELECT * FROM Inventory")
    return result;
}

/*
    Function that sends an INSERT statement into the Marketplace Table with various values
    Params: The Book Name (varchar255), Author Name (varchar255), Edition (int11), Course Tag (varchar255)
    Return: Number of how many fields have been inserted (??? Still Not Sure, researching)
*/
export async function insertSale(book_name, course_code, condition, price, user_id,author ){
    const [result] = await pool.query("INSERT INTO Inventory(book_name,course_code, book_condition, book_price,user_id,author) VALUES (?,?,?,?,?,?)", [book_name, course_code, condition, price, user_id,author])
    return result.insertId;

}

/*
    Function that sends a SELECT statement into Inventory table
    Params: book_name(varchar255)
    Return: JSON Object that contains all rows that have specified Book Name
*/
export async function getBookNameSales(bookName){
    console.log(bookName); // test
    const [result] = await pool.query("SELECT * from Inventory WHERE book_name = '" + bookName +"'");
    return result;
}
/*
    Function that sends a SELECT statement into Inventory table
    Params: course_code(varchar255)
    Return: JSON Object that contains all rows that have specified Course Code
*/
export async function getCourseCodeSales(courseCode){
    const [result] = await pool.query("SELECT * from Inventory WHERE course_code LIKE '%" + courseCode +"%'");
    return result;
}


/*
    Function that sends a SELECT statement into Inventory table
    Params: condition(varchar255)
    Return: JSON Object that contains all rows that have specified Book Condition
*/
export async function getConditionSales(condition){
    const [result] = await pool.query("SELECT * from Inventory WHERE book_condition='" + condition +"'");
    return result;
}

/*
    Function that sends a select statement into Inventory table
    Params: author: varchar (255)
    Return: JSON Object that contains all rows that have specific autho

*/

export async function getAuthorSales(author){
    const [result] = await pool.query("Select * from Inventory where author LIKE '%"+author+"%'");
    return result
}

/*
    Function that sends a SELECT statement into Inventory table
    Params: min (decimal 13,2), max (decimal 13,2)
    Return: JSON Object that contains all rows that are within the range of Min and Max
*/
export async function getPriceRangeSales(min, max){
    const [result] = await pool.query("SELECT * from Inventory WHERE book_price BETWEEN "+min+" AND " +max);
    return result;
}

/*
    Function that creates a user in to the user table
    Params: Email, FirstName, Last NAme, Major, Phone number, Password
    For now, simple
    

    **TODO**
    Make sure there aren't duplicate users created

*/
export async function createUser(firstName, lastName, major, phoneNumber, password, email){
    const [result] = await pool.query("INSERT INTO Accounts(user_firstName, user_lastName, user_major, user_phoneNumber,user_password, user_email) VALUES (?,?,?,?,?,?)", [firstName, lastName, major, phoneNumber, password,email])
    return result;   
}


/*
    Function that retrieves email and hashed password from accounts
    Params: email
    Return: varchar hashed password 
    **TODO**
    server.js should probably check but maybe redundancy to check if email
    exists in database.js

*/
export async function getHashedPassword(email){
    const [result] = await pool.query("SELECT user_email, user_password from Accounts WHERE user_email='" + email +"'");
    return result[0].user_password;
}


/*
    Function that retrieve user_id from the database
    Params: email
    Return: int user_id

*/
export async function getUserID(email){
    const [result] = await pool.query("SELECT user_id from Accounts WHERE user_email='" + email +"'");
    return result[0].user_id;
}


/*
    Function that displays the users current inventory
    Params: user_id
    Return: JSON Object containing book name, user information
    

*/
export async function getUserInventory(user_id){
    const [result] = await pool.query("SELECT Inventory.book_name, Accounts.user_firstName, Accounts.user_lastName, Accounts.user_email FROM Inventory, Accounts WHERE Accounts.user_id='"+user_id+"'");
    return result;
}