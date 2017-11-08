var myData = {
    "items": [
    {
        "fname": "rafael",
        "lname": "marques",
        "age": "19"},
    {
        "fname": "daniel",
        "lname": "marques",
        "age": "19"
    }]
}
var _ = require('lodash');

_.forEach(myData.items[0], value =>{
    console.log(value);
});
_.forEach(myData.items[1], value =>{
    console.log(value);
});