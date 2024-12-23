# React Routing.

### In React routing, there is such fear but after some time it becomes easy to understand.

### Now I am going to explain you React routing in very simple way.

## Table of Contents

1. [What is React Router?](#what-is-react-router)
2. [Installing React Router](#installing-react-router)
3. [Basic Concepts](#basic-concepts)
4. [Conclusion](#conclusion)

## What is react-router.

React routing is very broad concept by itself but first we are only going to learn basic and which we actually use.
During javascript, these anchor tags which reloads the entire page. and due to this the values and the data that are processed or changed gets reload to what they were initially. so thats why we need this routing in react which not only enables us routing but with smooth transition.

## Installing react router.

To install the react router in system, run following command

```bash
npm install react-router-dom
```

just for extra knowledge, the above cmd is for ReactJs framework. for **React Native** Framework, run the following command.

```bash
npm install react-router-native
```

## Basic Concepts that are used in this code base.

First of all you guys have seen this files Header.jsx,footer.jsx,home.jsx and blahh blahh..In components folder. if you have'nt then please see.
Now you got idea that we have written code for home page contact page aboutUs page??
you're right. but this wont enough alone.

As you know there is main.jsx where App components renders and in App.jsx we write some code. this time, there are different components written in different file and this file have some react router concepts.like **Link** and **NavLink**.
In React Router, both NavLink and Link are used to navigate between different routes.

**Link** when clicked change the URL into the given value at **to** attribute.
Link is the basic component used for navigation. It works similarly to the HTML anchor tag but without causing a page reload. It is used to link to other routes in your React app.

for eg.

```javascript
import { Link } from "react-router-dom";

function App() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

just like written in header components. have a look at it for better clarity.

**NavLink** is similar to Link, but it adds extra features for styling and active states. You can apply different styles to the link when it's active (i.e., when the route is the current one).Basically it gives us isActive prop which checks whether we are on that specific URL and if yes the css style will apply to it.

watch my header components when i move from home to about, it changes the styling.

```javascript
<li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      `block py-2 pr-4 pl-3 duration-200 ${
        isActive ? "text-orange-700" : "text-gray-700"
      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
    }
  >
    Home
  </NavLink>
</li>
```

_Note: this above two tags only changes the URL. they are not actually navigate to different pages._

Now the main thing is how we navigate to different page.

here comes the RouterProvider that is in main.jsx

```javascript
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

we are rendering the RouterProvider which takes router. this router is actually a set of paths or navigations we have in our app.

You can see above the router path we provide using createBrowserRouter. in this we have parent tag in which there are children self closing tags.

the tags takes path and element. path is value that related to those NavLink tags and element renders the given element.

for eg.

for '/ ' the App compo renders. <br/>
for '/about' the about compo renders.

In simple way when the url is / which is at starting it will render App component and app components has these outlet tag which is placeholder for other components.

### In very simple way

you can see in main.jsx these children tags they have Home component when path is "" , means nothing. so when page loads it will check URL. there will nothing so it will render home page. when you click on contact tab then firstly the URL will change to " /contact " and the RouterProvider will navigate to that tab.

## Last words

Please watch some tutorials of it and explore it with chatGPT. it will be very helpfull to you.👋😊
