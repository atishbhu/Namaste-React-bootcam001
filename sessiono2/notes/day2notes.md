
# day 07

### formik

He needed a way to standardize the input components and the flow of form submission. Formik helps you to write the three most annoying parts of building a form:

- Getting values in and out of form state
- Validation and error messages
- Handling form submission

### Dependencies Array

One of the arguments that accept `useEffect` after callback is dependency array.
Dependencies arrays are used to define the list of variable if the changed then trigger the callback function.

```
useEffect(() => {
    // Callback function
}, [dependencyArray])
```

Let us look at the some parameter on which how the `useEffect` behaves.

#### skiping the dependency Array 

In `useEffect` dependency array fields are optional if you skip the second arguments then
for every re-render callback function is called which cause the performance releated issue.

```
useEffect(() => {
    // Runs in each re-render of the component
})
```

#### Empty Array ( [] )

An empty array simply means that there are no dependencies that will trigger the callback within it. Our code inside the callback will run once when the component 
gets registered, and that is it. The useEffect hook acts like componentDidMount method if an empty array is passed as the dependency array.

```
useEffect(() => {
    // Runs only when the component is registered
}, [])
```

#### Array of dependencies ( [variable1, variable2] )

This might be the most common form used with useEffect. We pass an array filled 
with all the dependencies that should trigger the callback function to run. Change 
in any of the variable in the list will execute the callback.

```
useEffect(() => {
    // Runs if x or y changes
}, [x, y])
```

## differnce between optional(?) channing and && operator

- (`optional channing`) If the property exists, it will go through it,

- (`&& operator`) If not it will short circuit and return undefine or null.

