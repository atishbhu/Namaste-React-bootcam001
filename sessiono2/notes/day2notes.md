# Session:04

### Pure Function:

A pure function has no side effects to anything outside of it and given the same input
will always output the same value. They do not change any data passed into them, but
create new data to return without altering the original. However, it is not possible to
have 100% pure func ons. At some point you need to interact with the dom or fetch an
api. Even console.log makes a func on unpure because it uses the window object
outside of the func on. Fact is a program cannot exist without side e ects. So, the goal
of func onal programming is to minimize side effects by isolating them away from the
data.

Let's take a look at some examples:


## Examples

- Pure functions must not change any variable outside their scope
```javascript
let obj = { a: 0 }
const impure = (input) => {
// Modifies input.a
input.a = input.a + 1;
return input.a;
}
let b = impure(obj)
console.log(obj) // Logs { "a": 1 }
console.log(b) // Logs 1
```
The function changed the obj.a value that is outside its scope.

```javascript
const sum = (a,b) => {
    return a+b;
}

console.log(sum(2,3));
```

above function is pure function because does not rely on outside variable and always return the same output when same input is passed.

Build lots of very small, reusable and predictable pure functions that do the following:

- Complete 1 task per func on.
- Do not mutate state.
- Do not share state.
- Be predictable.
- Be composable, one input and one output.
- Be pure if possible.
- Return something.

### Difference between console.log(<HeaderComponent/>) and console.log(HeaderComponent()):-

- When we call it as a component <HeaderComponent /> a new element is created with React.createElement().
- HeaderComponent() is a direct function invocation.
- They both do the same thing but a component function returning JSX should use <HeaderComponent /> and not HeaderComponent().
- When a functional component is used as <HeaderComponent /> it will have a lifecycle and can have a state.
- When a function is called directly as HeaderComponent() it will just run and (probably) return something. No lifecycle, no hooks, and none of the React magic. It's very similar to assigning some JSX to a variable, but with more flexibility

### what is React.Fragment:-

As we know that React component render only single element if we have multiple element then we have to wrap in 
div element but problem is that this will provide an extra node to it. React provide
a solution for that React.Fragment. We can wrap whole element in React.Fragment 
and React.Fragment does not provide extra node.

### use of default export in react:-

- Every module has at most one default export if you export default a module then no need to use curly brace while importing.

### what is config-driven UI:-

In normal apps, data is driven from backend and client decides how to render it. In Config/Server driven UI, the server decides what to render and how to render. Hence we can change the design of the app without updating the client.

### advantage of config-driven UI:-

- No need to build and deploy it removes the dependency of deployment.
- For any changes, we just need to update the data in DB. So our code will be a smart code that will handle many changes in less time and efforts.

### what if we have given same id in data array of object ?:-

Generally id's are used to uniquely determine an entity. Hence, if the same ids are used in an array of data objects, there would not be any identity mark for the individual objects in the array and hence we would not be able to identify them uniquely. 
   In React, while looping through array of objects using map method, if we set id as key and also assign the same value to all the id's we are often encountered with this error "Encountered two children with the same key" which means react is unable to identify each element uniquely. Hence ids should not be kept equal.


### Index is not a good way to be passed as key. Why?:-
- When we use a map to loop over data such as an array of objects, we need to assign a key for each individual object which helps in identifying the object uniquely. Generally setting the index as key is not a good practice because whenever our data changes i.e we add/remove more elements in our array, the index value changes accordingly. Hence the index value of any element can differ once the array is altered. Therefore, setting index as key is not a good practice to follow.


