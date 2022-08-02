

# Moonsite Home Assignment

### Clothes picking home assignment to show my ```React.JS``` skills.

## Installation

Clone the repository and install it's dependencies.

```
git clone https://github.com/Ram-Montilia-Smithson/moonsite-home-assignment.git
cd moonsite-home-assignment
npm i
```
# Run
```
npm start
```
## Design and UI components
I have chosen to use [MaterialUI](https://mui.com/) to help me create an easy to use, responsive and good looking web app.
My thought behind it was to create the UI quickly and to focus more on the algorithms and logic of the app.

---
### Navbar
The navbar component was copied from MaterialUI's website and adjusted to fit my specific needs of the app.
I have adjusted it to present the current page the user is on as a headline, the name of the app and a button to toggle the side nav which contains the links to navigate to other pages. 
### Navigation
I have created RouterConfig component to handle all the routing including to navigate to a 404 page in case of a non existing path.
I think it is better to separate the code into different part according to their respective responsibilities.
### ClothingItem
The ClothingItem component is used many times in the app, both when picking the set of clothes and when viewing the saved sets. it presents the data of each clothing item from the API as a card with a small picture.
### Filter
The filter component is a form with 4 inputs with which the user is filtering through the clothing items to pick from to the set.

---
## Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).