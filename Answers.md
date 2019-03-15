1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
#
#
#


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
#`Actions are payloads of information and the only source for the store that send data from your application to the store via store dispatch.`
#`Reducers gives specifications on how the application's state changes in response to actions sent to the store. `
#`The Store brings the actions and reducers together. It is responsible for holding the state, allowing access, allowing updates through dispacth and registering listerners

    
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
#``
1.  What is middleware?
#`This is a bridge between the application and the server or database`
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
#`It's a middleware that lets you call action creators that return a function instead of an action object. It receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed`
1.  Which `react-redux` method links up our `components` with our `redux store`?
#`Connect`