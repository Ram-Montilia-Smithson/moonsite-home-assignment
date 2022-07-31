# Clothing sets picking app home assignment for Moonsite

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


---
## Design and UI components
I have chosen to use [MaterialUI](https://mui.com/) to help me create an easy to use, responsive and good looking web app.
My thought behind it was to create the UI quickly and to focus more on the algorithms and logic of the app.

---
### Navbar
The navbar component was copied from MaterialUI's website and adjusted to fit my specific needs in the app.
I have adjusted it to present the current page the user is one as a headline on the right, the name of the app on the left side and a button on the far left side to toggle the side nav which contains the links to navigate to other pages. 

---
### Navigation
I have created RouterConfig component to handle all the routing including to navigate to a 404 page in case of a non existing path.
I think it is better to separate the code into different part according to their respective responsibility.

