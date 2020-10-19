# Prerequisites
- Good JavaScript and web knowledges
- Functional programming
- Small experience in writing web app is a plus
To type \` character with italian keyboard type `ALT+96`.\\
#REDUX 
## Installation
Redux toolkit is reccomended to write redux logic
`npm install @reduxjs/toolkit`.\\
Create React app with redux template
`npx create-react-app my-app --template redux`.
``
## Introduction
**Redux** is a js library used to mantain the state of complex web applications. It is such a container of components for our front-end.\\
When do we need to use Redux?\\
Redux is needed when we face with a complex application where multiple components affect each others on some user actions or  state changes.\\
What kind of front-end UI library/framework can we use together with Redux?\\
Whatever you want, the most popoular is React + Redux but you can use it together with Angular, Vue.js...
- Centralizes application's state
- Makes data flow transparent and predictable
- App state is stored inside a **store** component, we can think about it like a db for our front-end
- Components no longer need to mantain state because they are all mantained by Redux
- Allow page caching so once the app has already loaded info, it will no longer need to reload when the user return to same page from another page of the app(i.e. from cart to home and viceversa)
## Log Rocket 
This is a very useful part of redux which allow the app to store the state of the application inside the file, so in case of **bugs** we do not need to reproduce all the steps made by the user but just to load the application with the state stored inside the file.
## Functional Programming
Redux is based on functional programming, this is good because the code:
- will be easy to test
- will be easy to debug
- will be coincise
### Functions as first class citizens
This means that in JS every function can return another function and we can build every function tree we want.
### High-Order function
Is a function which returns another function or that has a function as first parameter.
### Composing and piping
**Lodash** is a modern JS utility library delivering modularity, performance and extras.
### Pure functions
Are functions with return all the same result with the same input
## Immutability
Inside Redux you should NEVER mutate objects, this is one of the key fundamental of Redux, outside of it you can mutate whatever you want.\\
When we want to keep an ojbect immutable but we need to do a copy of its content, we can use *spread operator*, but more the object is nested more the copy will become verbose.\\
i.e. 
```JS
const updated = {
    ...person,
    address: {
        ...person.address,
        city: "New York"
    }
}
```
For this reason there are libraries specifically made for this purpose(Immutable, Immer, Mori).
## Redux Architecture
Since the redux **store** is immutable we cannot change the state directly on the object but we need to do a copy using either the spread operator or one of the immutable libaries.\\
The three building block of a Redux application are:
- Store => is a simple JS object which contains all the data and the application state
- Action(Event) => plain JS objects that represent what just happened
- Reducer(Event Handler) => responsible of the update of a part of the store
The application flow is the following: when an action is raised then it dispatch() to the store and then the store will call the reducer that will apply modifies that will be returned to store. Finally the store calls setState() to update the application UI.
## To Do list when creating redux application
- Design the store
- Define actions that users can perform on the store
- Create reducer
- Set up the store
# REACT + REDUX