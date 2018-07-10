# [mongoose-crud-helper](https://github.com/aravindnc/mongoose-crud-helper)

A simple helper library for Mongoose projects.

## Installation

  `npm install mongoose-crud-helper`

## Configuration
Sample usage scenarios are explained below. 

#### Changes to Model.js
You can directly code this to your model.
```javascript
// Require the plugin in the top.
const MCHelper = require('mongoose-crud-helper');

// Add below after schema definition as required.
SchemaName.plugin(MCHelper.changeDocStatus);
SchemaName.plugin(MCHelper.getAllDocs);
SchemaName.plugin(MCHelper.getOneDoc);
```
## Usage
You can directly code this to your controller. 
### 1.changeDocStatus
```javascript
const data = {
  _id:<Your-Object-ID>, // ObjectId
  status: '<New-Status>' // String (active, deleted, pending)
}; // Object

Model.changeDocStatus(data).then(function(response){
  // Your code here
});
```    
### 2.getAllDocs
```javascript
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
```   
### 3.getOneDoc
```javascript
const where = {"$in": {status: ['active','pending']}}; // Object
const fieldsToDisplay = {postName: 1, description: 1, createdOn: 1 }; //Object

Model.getOneDoc(where, fieldsToDisplay).then(function(response){
  // Your code here
});
```   
### 4.hardDelete
```javascript
const where = {"_id": ObjectId('57f79499cd3aa1000a5643b7')}; // Object

Model.hardDelete(where).then(function(response){
  // Your code here
});
```   
### 5.hardDelete
```javascript
const where = {"_id": ObjectId('57f79499cd3aa1000a5643b7')}; // Object

Model.softDelete(where).then(function(response){
  // Your code here
});
```   
