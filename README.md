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

13.)In Index.js,wrap the app component under the router component as it is the root component .

Note:

after step 13 ,In components section of inspect tou see that brouwser->Router->Router.provider components are created. Router.provider components stores that data like history of the browser,current location of the browser and query params,all corresponding url match of the browser.

14.)create author.js and Addpost.js file under pages and import it in app.js as components

15.)create routes folder under src and create route.js file init.In routes.js,create route object based on the api endpoints that contains paths of all routes and export it.

16.)import switch and route from react router dom in app.js

Note:
reason for creating routes file as separate is for easy understanding of paths of routes used.

17.)in app.js wrap the components of app in switch(top most compoenent and remove the fragment or div tag if used) and use route for each component.

18.)in app.js,wrap switch under fragment and import link from react-router-dom and then create link tag for the respective routes and finallly wrap it with div tag.

19.)comment the navlink of app.js

20.)remove the header component from home.js and import it in the app.js as we need it for every pages.

21.)in Header.js,Remove the navlink from reactstrap and import navlink from react-router-dom.change the navlink from href to routes path(i.e navlink to ={routes.authors}) for the resppective links .

22.)in postSummary.js.Wrap the title component under link component.change the link component and spcify rputes-path for individual post by adding id(note: replce id-":id") as props and then add the id attribute in postSummary component used in home.js file where u get the individual postID.

23.)create Post.js file under pages and create the post component that returns the title,authorname,content of the post using the useStatehook and import it in app.js as Route with its path.

24.)In post.js file,import useParams from react-router-dom to get the id from react.provider to and fetch the individual post using the id from useparams.create the fetch request in use effect and change the post.author to post.author?.name to avoid app crash that is optional chaining opearator.

NOTE:
the provider has a prop called match->params that tracks our url

react-router-dom comes with useParams hook that gets the parameters of the url from top provider

learn nullish coalising operator

25.)In Authors.js,create the Authors component that fetches the authors and display it in the authors route path and use ListGroup from reactsrap to display the authors as lists.

26.)Add classname with its value to navlinks in header.js to align the navbar correctly as we use navlink from react-router-dom.

//note classname are used from bootsrap as reactstrap uses bootstrap for implementng its react components.And also add activeClassName to navlink to change the active class styles.

NOte:by default navlinks from react-router-dom has active class,to change its value use activeClassName which can be used for navigation.

NOTE:when you move from home->indivdualpost->add-post it will stay in the same page because in switch statement of app.js we use exact props path for home and not for other routes,so this idicates that when partial route matches it will render(eg:post/:id and post/add-new,as we move from post/:id to post/add-new it will stay in the same page it has partial match).This issue can be solved in 2 methods,

1.change the url path in route.js of addpost"/posts/add-new" to "add-new"

2. move the route path of add-new to aboove the post route as we know switch is top down approach(matches from top to down) so it will check add-new routeand then will check the post route.

even if you use exact path ,the post/:id and post/add-new will have the same issue.

27.)In Addpost.js,import the components of forms from reactstrap and create a form using reactstrap with fields,title,authors name,content and submit button.

28.)In Addpost.js,use the usestate hook to sync the form with UI by adding respective attributes to the form fields that is onchange and value attribute to every field.

NOTE:
FORM Libraries:

final-form.org

react hook form//only used in react

FORMIK and redux form(worst case)
