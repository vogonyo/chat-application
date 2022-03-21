# springboot and react group chat and private chat
 Using Spring Boot with WebSocket API  and React with Material-UI to build a simple group and private chat application
 
Features
===============
* User login/logout
* Group chat  
* Private messaging (user to user instant messaging)
* Presence tracking and push notifications when users join / leave / send messages
* Room members list with online/offline status

Notes
==========
* Chat messages are NOT persisted to the database. I would add that functionality later when the time permits.
* Message Broker: In-memory 
* WebSocket messaging protocol: Stomp
* WebSocket handler: Sock.js 
* Browsers: Chrome, IE10+

Server: Spring Boot Setup Prerequisites 
======================
 * JDK 8
 * Spring Boot
 * STS or Eclipse  
 * Tomcat(embedded with Spring) 
 * Maven

Client: React Setup Prerequisites and Dependencies
==========================
* Node
* NPM
* create-react-app
* material-ui
* react-stomp and sockjs-client
* Visual Studio Code

Setting up the proxy
=========================

To have the Webpack development server proxy our requests to our Server, we have just added the following line of code to our package.json:

<code>"proxy": "http://localhost:8080/", </code>

Finally
=============
Boot both the Server and Client apps, hit <code>"http://localhost:3000/"</code> on your browser and you're in the business. Enter any username and click Start Chatting button to enter into the chat room. If no one is available in the chat room, then you can open the app in two tabs, login with different usernames and start sending messages. You will see the below chat room UI



Author
=============
Victor Ogonyo, Full Stack Developer




