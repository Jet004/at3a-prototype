# at3a-prototype
Prototype front end for Web Based Programs AT3a

---------------------------------------------

PRE-REQUISITES:
- npm install (install dependencies)
- npm start (start nodemon server)

---------------------------------------------

TODO:
- Create database and database tables
    - users, log, books, authors

- Build out back end routes and functionality
    - Login and logout
    - Session management
    - Check authentication on admin and create user pager
    - PUT, PATCH, DELETE methods in fetch() requests for CRUD operations

- Flesh out functionality tests
    - Route tests (test return values: get/post/test values)

- Validate forms
    - check for password/email match
    - set custom validity errors
    - check form validity and show error message dynamically on user input
    - Add CSS style to indicate invalid values

- Author/book search bars
    - fetch() database data and show list on user input

- On form submit
    - Validate user input for the submission type (add/update/delete) 
    - sanitise user data before entry to database

- Confirmation required before delete

