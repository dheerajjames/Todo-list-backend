# Todo-list-backend

This project is a backend for Todo-list application that performs CRUD operations.

## Get Started

```bash
git clone https://github.com/dheerajjames/Todo-list-backend.git
npm install
npm run start
```

## Features
* Add Task
* Gets all tasks
* Gets a task by ID
* Updates a task
* Deletes a task

## Usage

### Get all the tasks

```
Method: GET 
Endpoint: /tasks
```

A request to this endpoint returns a response with all the tasks.

```
Method: GET 
Endpoint: /tasks/id
```
A request to this endpoint requires a TaskId of the Task you want to fetch.

### Create New Task


```
Method: POST 
Endpoint: /tasks
```
This endpoint requires a request body to be passed to be added in the Tasks list.


**Sample Body**
```javascript
{
    "content": "Task Content.",
    "createdAt": "createdAt date",
    "updatedAt": "updatedAt date"
}
```

### Update A Task

```
 Method: PUT 
 Endpoint: /tasks/id
 ```
This endpoint requires a TaskId of the task you want to update.

**Sample Body**
```javascript
{
    "content": "Task Content.",
    "createdAt": "createdAt date",
    "updatedAt": "updatedAt date",
    "iscompleted": true/false
}
```

### Delete A Task

```
 Method: DELETE 
 Endpoint: /tasks/taskId
 ```
This endpoint will delete an existing task. It requires a valid task ID for deletion.   



### Collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/490ec8c1881c57cd4adb?action=collection%2Fimport)


## Project File Structure

```bash
.
├── app.js
├── server.js
├── package.json
├── package-lock.json
├── README.md
├── controllers
│   └── taskController.js
├── data
│   └── tasks.json
├── models
│   └── taskModel.js
├── routes
│   └── taskRouter.js
└── utils
    └── sendResponse.js

```