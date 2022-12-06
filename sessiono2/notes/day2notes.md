# Day 05:

### JavaScript Objects VS JSON

Though the syntax of JSON is similar to the JavaScript object, JSON is different from JavaScript objects.

| JSON | JavaScript Object              |
| :--------| :------------------------- |
| The key in key/value pair should be in double quotes. | The key in key/value pair can be without double quotes. |
| JSON cannot contain functions. | JavaScript objects can contain functions.|
| JSON can be created and used by other programming languages.| JavaScript objects can only be used in JavaScript.|


### Use of JSON
JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa. JSON data are very easy to parse and use. It is fast to access and manipulate JSON data as they only contain texts.
JSON is language independent. You can create and use JSON in other programming languages too.

### Default export vs named export 

| Default export | named export             |
| :--------| :------------------------- |
| when you are exporting Default then while importing no need to use curly braces | In named export while importing you need to use curly braces.|
| while importing you can any name| While importing you exactly give same as in export|
| ***Syntax:*** `export Default Component`| ***Syntax*** `export Component`|

### HigherOrder Component:

Higher Order Components ("HOC" in short) is a react application design pattern that is used to enhance
components with reusable code. They enable to add functionality and behaviors to existing component.
A HOC is a pure javascript function that accepts a component as it's argument and returns a new component with
the extended functionality.

`const EnhanceComponent = HigherOrderComponent(OriginalComponent)`

### advantage of using <form>:

Using `<form>` tag gives you automatic behaviors, like form submission when pressing Enter when an input has focus.

### what is includes()

includes() is a method that can return true if that strings contains particular string otherwise return false. includes() are case sensitive that means LowerCase and UpperCase are treated as different.

### What is e.preventDefault()

The `event.preventDefault()` method stops the default action of an element from happening.
For example, this can be useful when:

- Clicking on a "Submit" button, prevent it from submitting a form
- Clicking on a link, prevent the link from following the URL

### what is state

State in React components is essential to manage and communicate data in your application. It is represented as a
JavaScript object and has component level scope, it can be thought of as the private data of your component.

### Pure Component 

Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered. Pure Components restricts the re-rendering ensuring the higher performance of the Component

#### Features of React Pure Components

- Prevents re-rendering of Component if props or state is the same
- Takes care of “shouldComponentUpdate” implicitly
- State and Props are Shallow Compared
- Pure Components are more performant in certain cases
