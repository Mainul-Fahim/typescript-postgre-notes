# Question/Answer Related postgre and relational database

## What is PostgreSQL?
- PostgreSQL is an advanced database management system which is open source and use for relational database 

## What is the purpose of a database schema in PostgreSQL? 
- To improve organization with clarity
- Increase security and reusability
- manage objects in more efficiently in a structured manner

## Explain the primary key and foreign key concepts.
 - Primary key : 
  Primary key usually is the unique identifier of a row in a database table.This uniqueness ensures efficient data retrieval and prevent duplicate entires.
 - Foreign key: On the other hand, foreign key is a column in a table which references primary key of another table.So, it links two tables

 ## What is the difference between the VARCHAR and CHAR data types?
 - Char is used in storing character string value of fixed length, where Varchar is used to store variable length alphanumeric data
 - Char is 50% faster than Varchar
 - Char uses static memory allocation , where Varchar uses dynamic memory allocation

 ## Explain the purpose of the WHERE clause in a SELECT statement.

 -  Where clause is a very powerful statement within Select statements to retrieve the data from database table.It allows to filter or get data based on certain conditions

 ## What are the LIMIT and OFFSET clauses used for?
 - LIMIT specifies the maximum number of rows to be returned by the query 
 - SKIP specifies the number of rows to skip before starting to return results

 ## How can you perform data modification using UPDATE statements?
 - By using UPDATE which table to update, the SET with what to update , and then using WHERE clause the the selected row to be updated
 E.g: 
   UPDATE customers
   SET email = 'new_email@example.com'
   WHERE id = 123;
 ## What is the significance of the JOIN operation, and how does it work in PostgreSQL?
 - Join operation plays a vital role in all relation databases, as it connects multiple tables.So, when need to get particular data where multiple tables are related , then need to join those table and get required data. There are different types of Joins available in PostgreSQL. So, based on specific need Inner join, Join, Outer Join , Full Join etc is used. And join is performed based on similar column such as employee id common in multiple tables or where join is going to take place.

 ## Explain the GROUP BY clause and its role in aggregation operations.
 - Group by clause is mainly used when need to group data based on certain category.For E.g: If needs to get data of different department exist in a table like Science,commerce etc of all students, then Group By is used

 ## How can you calculate aggregate functions like COUNT, SUM, and AVG in PostgreSQL?

 - By using count(),sum() etc function we can calculate, which will return a single value.Like if there is an age column and we want get average age, then we can use avg(age) like this and it will perform average on all the columns.
 Then can call COUNT (*) which will return total number of rows
 and sum(age) will return total of all ages

 ## What is the purpose of an index in PostgreSQL, and how does it optimize query performance?
 - Index allows to find and get specific rows faster then it can normally, thus it optimizes performance by reducing the time to get a data then normally

 ## Explain the concept of a PostgreSQL view and how it differs from a table.

 - Views are like virtual tables which doesn't store data but shows results from a query.
 - Unlike tables can't insert,update,delete data in a view
 - can improve data security and maintainability