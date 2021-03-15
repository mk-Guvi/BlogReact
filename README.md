# BlogReact
Created with CodeSandbox

1.)run yarn add reactstrap bootstrap and import css file from bootsrap in index.js and run yarn start to see the output of bootstrap.

2)create a folder named pages under src and create a file named Home.js in it.

3)create the home component and import it in app.js as a self closing tag  displays (home page) in h1 tag by removing the h1 tag of app component of previous one that displays hello world.

4.)create a folder named Common Components under src and crate a file name Header.js

5.)visit the reactstrap and search for navbar section  and copy the neccasry tags from the navbar section and use it  in Header.js.remove the uncontrolled tags and importstatements of it as we dont need it.

6.)change navbarbrand "blogApp" 

7.)create constants folder and create serverURl.js file init.store the serverurl of the api init and import it in home.js

8.)In home.js,Use useeffect to fetch the data from the api(use the serverurl) once.use cors (to avoid cross domain requests) in useffect that can accept api's from other domain. In browser,Go to inspect->Network->header to see the  cors enabled or not (note : * means all access to all domain ,else specific domans will be provided in it. )

9.)In home.js,Using usestate() create a state named posts with empty array as default value.create a  map funtion that returns the posts from rest api of post under p-tag.

10.)In home.js,under useeffect,use setposts to update the state of the post which will update the posts using map function.

11.)create postSumary.js file under commonComponents folder and  create the component named postSummary that prints the title,author,content of each post which is going to be used in map funtion and iport it in home.js as a tag with its attributes (<PostSummary/>).