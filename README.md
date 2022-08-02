

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
___
## Home Page
In the home page there are 3 sections:   
* The first for displaying the link to the saved sets page with the number of saved sets.
* The second for displaying the number of each piece of clothing still available to picking.
* And the third for displaying 3 buttons, each for picking a different type of clothing item, and by clicking on the button, the user is transferred to CreatingSets Page with the type of clothing displayed according to which button was picked.
___
## CreatingSets Page
To navigate to this page, the user can use the side nav, or click on one of the clothes picking buttons on the home screen which will automatically set the type of clothes the user will see in the page.  
The clothes in the page are displayed using the ClothingItem component. The available items appear on the bottom and the picked items appear on the top, separated by a line.
The app does not transfer the user to the next item to pick for the set after picking, but the filter component makes it really easy for the user to do so manually.  
After all three Item have been picked, the Set Picking button becomes enabled and the user can click on it to finalize the process.  
When the user clicks on the button, a modal is displayed with a message congratulating the user and making sure the user is happy with his decision before saving the set and transferring the user to the home screen, where the link to saved sets appears, with the updated number of saved sets.  

### ClothingItem
The ClothingItem component is used many times in the app, both when picking the set of clothes and when viewing the saved sets. it presents the data of each clothing item from the API as a card with a small picture according to the type of clothing and, if the component is displayed in CreatingSets, a button to pick the item for a set.
### Filter
The filter component is a form with 4 inputs with which the user is filtering through the clothing items to pick from to the set.

___
## SavedSets Page
In this page, the items of the sets of clothes are displayed together, with an additional two lines showing: 
* The date when the set was picked 
* The time it took the user to pick the set
* And a delete button, that when pressed, displays a modal, asking the user weather the are sure about their decision, and if so, the set is deleted and the items are returned to be available for picking one again.  

The ClothingItem components does not have the picking button any more, due to the fact that the item got picked already.

---
## Technical
In this app, I have used: 
*  ```@reduxjs/toolkit``` and ```react-redux``` to handle the state with.  
* And ```localStorage``` to maintain the state between refreshes.