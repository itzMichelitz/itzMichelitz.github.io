// JSON string
const jsonString = '{"name": "Michel", "age": 21, "city": "Davao", "hobbies" : "Video Games"}';

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name);
console.log(jsonObject.age);
console.log(jsonObject.city);
console.log(jsonObject.hobbies);


const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); 