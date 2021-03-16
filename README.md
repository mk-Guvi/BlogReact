# BlogReact

Created with CodeSandbox

1.)run yarn add reactstrap bootstrap and import css file from bootsrap in index.js and run yarn start to see the output of bootstrap.

2)create a folder named pages under src and create a file named Home.js in it.

3)create the home component and import it in app.js as a self closing tag displays (home page) in h1 tag by removing the h1 tag of app component of previous one that displays hello world.

4.)create a folder named Common Components under src and crate a file name Header.js

5.)visit the reactstrap and search for navbar section and copy the neccasry tags from the navbar section and use it in Header.js.remove the uncontrolled tags and importstatements of it as we dont need it.

6.)change navbarbrand "blogApp"

7.)create constants folder and create serverURl.js file init.store the serverurl of the api init and import it in home.js

8.)In home.js,Use useeffect to fetch the data from the api(use the serverurl) once.use cors (to avoid cross domain requests) in useffect that can accept api's from other domain. In browser,Go to inspect->Network->header to see the cors enabled or not (note : \* means all access to all domain ,else specific domans will be provided in it. )

9.)In home.js,Using usestate() create a state named posts with empty array as default value.create a map funtion that returns the posts from rest api of post under p-tag.

10.)In home.js,under useeffect,use setposts to update the state of the post which will update the posts using map function.

11.)create postSumary.js file under commonComponents folder and create the component named postSummary that prints the title,author,content of each post which is going to be used in map funtion and iport it in home.js as a tag with its attributes (<PostSummary/>).

NOTE:

react uses client side routing that is it routes without reloading the pages.To achieve this install react-router-dom

provider components stores some data and provides it to other react components.

props can also be used to send data to other components but the issue is that props can send the data to only its immediate children(adjacent component) and not able to send the nested components.(example:

APP component

home component

nav component

collapse component

here using props u send send data from home to nav but not from home to directly collapse.

This issue is solved by provider component by making provider as top most component and send the data to any nested components without passing props inbetween.

react router has such provider called as BrowserRouter.as we know client side routing intense data processing that is keeping the tracks of URLs and how your are moving through URLS that is there is bunch of data that react router is to be handled and the data is to be shared to entire application.This data is stored in the provider(BrowserRouter)

12.)import {BrowserRouter as Router}(note:broswerRouter is named as Router for cross platform dependency and other things) from react-router-dom in index.js

13.)wrap the app component under the router component as it is the root component.

Note:

after step 13 ,In components section of inspect tou see that brouwser->Router->Router.provider components are created. Router.provider components stores that data like history of the browser,current location of the browser and query params,all corresponding url match of the browser.

14.)create author.js and Addpost.js file under pages and import it in app.js as components

15.)create routes foler under src and create route.js file init.In routes.js,create route object based on the api endpoints that contains paths of all routes and export it.

16.)import switch and route from react router dom in app.js

Note:
reason for creating routes file as separate is for easy understanding of paths of routes used.

17.)in app.js create wrap the components of app in switch(top most compoenent and remove the fragment or div tag if used) and use route for each component.

note:

Providers-component share the data to all components by placing it at the top component,unlike the props that shares data to its child component only.

REact-router-dom has a provider named BrowserRouter that has data under BrowserRourter->Router->Router.Provider like
history of the browser, curent location of the browser,queryparams and all URLmatches of the browser

18.)In index.js,import browserRouterr s Router from react-router-dom and wrap the App component in the Roter component.
