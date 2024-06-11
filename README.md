Development and test on Windows

Version:
  npm: '10.5.2',
  node: '20.13.1'

To set up the project, we need to install npm first:

	sudo apt install npm

Then make directory with create-react-app framework:

	npx create-react-app tire-shop

Replace the content of public and src folder with the ones updated here

This project is build based on node.js and react library, there are some installations needed during the development phases, which includes but might not limited to:

	npm install mongoose
	npm install express body-parser
	npm install cors
	npm install react-router-dom@5


To run the backend locally, download MongoDB and run the app and create connection with database and connection name: "tire-shop".

To run the project, there are 2 steps needed:
	1. open powershell under tire-shop directory and type in:
		node server.js
	2. open the other powershell under tire-shop directory and type in:
		npm start


Also, make sure the uri's line of code in server.js is:

	const uri = "mongodb://localhost:27017/tire-shop";

Else using

	const uri = "mongodb+srv://shuail15:q540546322@tireshop.0rpkauv.mongodb.net/?retryWrites=true&w=majority&appName=Tireshop";

to run online