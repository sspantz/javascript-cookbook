# JavaScript Cookbook

## Organization of the book

This book is on *Stage 0.1*, which is preparing stage. On this stage, we only collect problems and their solutions.

Example below, which is from https://stackoverflow.com/questions/4366104/traverse-through-javascript-object-properties

### Traverse through object properties
#### Problem: Traverse through JavaScript object's property

```js
// given obj
var obj =
{
    a: 'value1',
    b: 'value2',
    c: 'value3',
    d: 'value4'
};
```
#### Solutions:

```js

var obj2 = Object.create(obj);
obj2.e = 'value5';

// traverse properties on object and on its prototype
for (let prop in obj2) {
  console.log(prop, obj[prop]);
}

// traverse properties on object only
for(let prop in obj2) {
  if (Object.hasOwnProperty(prop))
    console.log(prop, obj[prop]);
}


// can also use Object.keys()
var props = Object.keys();
for (let prop of props) {
  console.log(prop, obj2[prop]);
}
```
