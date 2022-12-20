
# Day 06:

### Microservises
`Microservices are independently deployable modules.`

For example, an e-commerce system can be divided into modules for:
- ordering
- registration
- product search
Normally, all of these modules would be implemented together in one
application. In this case, a change in one of the modules can only be brought 
microservices, the ordering process cannot only be changed independently of
the other modules, but it can even be brought into production independently.
This speeds up deployment and reduces the number of necessary tests since
only a single module needs to be deployed. Due to this greater level of
decoupling, a large project can turn into a number of smaller projects. Each
project is in charge of an individual microservice.
To achieve this at the technical level, every microservice has to be an
independent process. A better solution for decoupling microservices is to
provide an independent virtual machine or Docker container for each
microservice.
In that case, a deployment will replace the Docker container of an individual
microservice with a new Docker container, which starts the new version and
its direct requests. The other microservices will not be affected if such an
approach is used.

### useEffect

useEffect is hook which are used perform sideEffect in react application.Data fetching, 
setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

### what is async and await
- The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
- special keyword async that can be placed before a function. This function will operate a function asynchronously via the event loop using an implicit Promise to return its result.
- syntatic sugar for Promise to simplify using then
- The keyword await is used to wait for a Promise. It can only be used inside an async function. This keyword makes JavaScript wait until that promise settles and returns its result.
- the async keyword allows us to write a function that returns a promise, and wraps a non-promises in it.

### what is CORS

Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain.

### optional chaining

The optional chaining (?.) operator accesses an object's property or calls a function. If the object is undefined or null, it returns undefined instead of throwing an error.

### useEffect vs useLayoutEffect

The useLayoutEffect works similar to useEffect. It fires synchronously after all DOM loading is done.
useLayoutEffect on other hand is invoked synchronously before DOM is painted on the screen. useEffect is 
invoked after DOM is painted. 