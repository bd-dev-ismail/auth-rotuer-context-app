<h3>Basic Setup</h3>
-------------------------------
1. Context Api: Share auth state with other componets (across the applicaiton)
2. Create an userContext
3. ContextProvider with passed children
4. Set the UserContext in the index.js
5. To consume the context: export the AuthContext from user context
6. Now at Header or Home (or anywhere else) : user userContext hook to get the info

<h3>Auth Intergration</h3>
-----------------------------
1. Use getAuth by passing the app form firebase config 
2. create a funtion named createUser to return creaeteUserWithAndemailAndPassword