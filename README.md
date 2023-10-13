# TodoApp_NodeJS_React

This is a small project in which all the CRUD features have been implemented in NodeJs and React.

## How to Setup the project

1. Clone the project in your local system.
2. Make sure you have a database on MongoDB Atlas or you can use local MongoDB as well.
3. After cloning, run the same command `npm i` in all of these directories "todoBackend", "todoFrontend" and "todowebsite" to install the dependencies into your system.
4. Now create a `.env` file in `/todoBackend` with the following variables.
    - `PORT=[YOUR PORT NUMBER]`
    - `MONGO_URI=[YOUR MONGO DB URI]`
5. Create another `.env` in `todowebsite` directory with the following variables.
    - `REACT_APP_API_URL=[Your local host url e.g http://localhost:8001]`
6. To run Backend on `Nodemon`, Write the following command `npm run server`.

## APIs

The Backend contains the following APIs
1. `/` -> GET Request, Root URL which is there to test whether project is running fine or not
2. `/todosroutes` ->
    - `/test` -> GET Request, To test whether the route is working or not
    - `/createtodos` -> POST Request, To create a new todo__
        JSON Request
        ```json
        {
            "title": "Complete Homework 3",
            "description": "100Days of DSA"
        }
        ```
    - `/gettodos` -> GET Request, To get all the todos
    - `/gettodo/:id` -> GET Request, To get a single todo by id
    - `/updatetodo/:id` -> PUT Request, To update a todo by id__
        JSON Request
        ```json
        {
            "title": "Complete Homework 3",
            "description": "100Days of DSA",
            "completed": true
        }
        ```
    - `/deletetodo/:id` -> DELETE Request, To delete a todo by id


Happy Coding!