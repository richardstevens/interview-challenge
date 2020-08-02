# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!

# Quick Start
Fork the repository, clone it to your local system, then:

## Install dependencies
yarn (or npm install)

## Start development server
yarn dev (or npm run dev)

## Tests
yarn test (or npm run test) - This will run linting and coverage  

## Structure / Layout
`/src/client/components` - This is where the raw components are kept  
`/src/client/hooks` - This is for the controlling of hooks  
`/src/client/reducers` - Here is where the reducers are kept, used as part of the hooks typically  
`/src/client` - The root folder for all client code  

`/src/server` - This is the root for the server side, the api for returning items  

`/test` - All tests are here in the directory structure to reflect the src folder  

## Thoughts
Using a redux store maybe better for segregation however for only a short time limit here i have opted for using context hooks (Although easy to shift and move)  

The server should really use a better cors/security however as this is internally used only it probably isn't a major issue.  

The initial method i used for getting the items from the api works fine for this example, however in larger applications it would be better using lazy loading or shadow loading to show something is happening and break down the application size.  

Filtering will need to update when someone types into the input as well as when new items appear int he store state.  

Given a real scenario where there is a database backing a user, these preview menu (basket style) options would be added/removed using the api again so when they come back later or on another device they would be able to resume.  

## Note
I believe i ran out of time for the 2 hours just before finishing the implementation of the header component, i did finish it and add a test for it though as i wanted the application to still work as submitting it part done would have caused errors and wouldn't run.

I have only managed to add one test to demonstrate a use of behavioural tests using enzyme, I did run out of time to add tests for the other components but have set it up ready to work.
 