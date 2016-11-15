This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Shopping App 

- I timed myself with ~2 hours in hand and tried to get the app functionally working first.
- I used React as my preferred JS framework for the ease of composability and better tooling.
- Create-React-app bootstrapped my dev-setup process.
- Test cases are written using React-addon-test-utility.
- development build not optimised for production for debug purposes.
- App developed and tested using Chrome browser.


# Things completed

- Shopping cart app with 3 types of products data loaded from a JSON file.
- Basic test coverage for react UI states.
- One discount feature which is enabled when atleast 2 items are added to the Basket.
- Reset shopping cart using the reset button or refresh the page.
- Design pattern used is simple parent-child communications using props and callbacks.
- App onAddToCart is the pure function to avoid any mutable states. 
- ESLint supported

# Things that could have been improved

- Could have added basic Bootstrap3 CSS to improve the basic UI
- Better test coverage but as I run out of time
- Could have improved npm install performance by productionising the create-react-app
- Discount could have had a input field (made dynamic) instead of a fixed button with 10% discount.
- Better input data validation.

# To setup and run the App

- npm install
- npm start
- npm test and select a
- load http://localhost:3000
- To modify product inventory please edit ProductListData.json
- For more information in setup please follow instructions on [Create React App](https://github.com/facebookincubator/create-react-app).
