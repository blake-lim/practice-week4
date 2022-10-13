# Hanghae99 9기 C반 9조

<br>프로젝트 주소 : https://hanghae-react-2nd-week.vercel.app/

## <br></br>
<img width="408" alt="스크린샷 2022-10-13 16 50 04" src="https://user-images.githubusercontent.com/86904667/195535403-e5c55484-8a0a-4f07-94b2-2fe68d52a90e.png">

<img width="500" alt="스크린샷 2022-10-13 16 40 08" src="https://user-images.githubusercontent.com/86904667/195533021-59888fcd-3dd4-4c1e-af1e-e5f1d6a63d6c.png">

<h1>HangHae99 Bootamp task(week3)  : Todo List with React-Redux</b></h1>
<h3>Technical Stack</h3>
<h2>HTML / CSS / JavaScript / React / Redux / git / gitHub / Vercel</h2>

---

## Implementation Features

<strong>⭐️Feature 1:</strong> TodoList registration using input and button
Manage two inputs at once to receive a value
Capture and save the input value through the onChangeHandler
Transfer and register the value by changing the state value through the action detected reducer sent by dispatch at the time of submission

<strong>⭐️Feature 2:</strong> Delete the created TodoList
Using filter, compare id and todoListid that entered the parameter and delete values that are not the same
Change state value through reducer

<strong>⭐️Feature 3:</strong> Complete and cancel TodoList
Register and cancel after comparing with item.id and parameter id using map method
Filter the value received by redux and turn it back to the map to divide Working / Done according to the isDone value

<strong>⭐️Feature 4:</strong> Implementing a detailed page through react-router-dom
index.js, Router.jsx, app.js preset page movement settings

Separate Detail.jsx file from Home.jsx to implement detailed page

Moving Home Using Link Tags

Use Params to get the id value to move the page to /:id without loading the page

After that, import the todos value from Detail.jsx to useSelector without using the reader and implement the detailed page contents using the find method

## Reasons for dividing components

Using Ducks Pattern to Divide<br/>
<Strong>1. Component</Strong><br/>
AddForm.jsx : Centralize input and add button management
TodoListContainer.jsx : Unification of TodoList in general (frame, delete and complete/cancel, add list)
I considered dividing the components, but I think it would be easier to manage them in a single unit, so I manage them together

Header.jsx : For Header (Title)
Layout.jsx : Match layout conditions

<Strong>2. Pages</Strong><br/>
Home.jsx : Design considering page movement instead of App.js (App.js can only load Router)
Detail.jsx : Detail page. It's a pattern managed separately by url, so it's managed separately

<Strong>3. redux & Router</Strong><br/>
modules>todos.js: Patterns for centralizing action creator, reducer management
shared>Router.jsx : Pattern management by setting for moving the detailed page of Home according to the reaction-router-dom method
