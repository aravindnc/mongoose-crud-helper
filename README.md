# [mongoose-crud-helper](https://github.com/aravindnc/mongoose-crud-helper)

A simple helper library for Mongoose projects.

This project is still in development stage.

## Installation

  `npm install mongoose-crud-helper`

## Usage

#1.changeDocStatus

const data = {
  _id:<Your-Object-ID>,
  status:<New-Status>
}; // Object
  
Model.changeDocStatus(data).then(function(response){
  // Your code here
});
  
2.getAllDocs

const where = {"$in": {status: ['active','pending']}}; // Object
const fieldsToDisplay = {postName: 1, description: 1, createdOn: 1 }; //Object
const paging = {
  page: 1, // Number
  limit: 10, // Number
  sortBy: 'createdOn', // String
  sortOrder: 'desc', // String
  populate: '' // String
}; // Object

Model.getAllDocs(where, fieldsToDisplay, paging).then(function(response){
  // Your code here
});

3.getOneDoc

const where = {"$in": {status: ['active','pending']}}; // Object
const fieldsToDisplay = {postName: 1, description: 1, createdOn: 1 }; //Object
Model.getOneDoc(where, fieldsToDisplay).then(function(response){
  // Your code here
});

4.hardDelete

const where = {"_id": ObjectId('57f79499cd3aa1000a5643b7')}; // Object
Model.hardDelete(where).then(function(response){
  // Your code here
});

5.hardDelete

const where = {"_id": ObjectId('57f79499cd3aa1000a5643b7')}; // Object
Model.softDelete(where).then(function(response){
  // Your code here
});

