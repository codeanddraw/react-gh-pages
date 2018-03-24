# react-gh-pages
Technologies used: ES6, React, Dexie.js (for IndexedDB) for address book

Click here to run the build of my code in master branch: https://codeanddraw.github.io/react-gh-pages/

*If you want to run it on your local machine then download my master branch, go inside the folder and run the following command on the terminal/cmd:

To begin the development, run `npm start`.
To create a production bundle, use `npm run build`.

------------------------------------------------------------------------------------------------------

Following are the steps I followed to create an environment for the app on my local machine and host the app on github:
1.	Installed the environment for react on my local machine
2.	Installed node.js, npm, dexie.js, prop-types library, create-react-app
3.	Created a repository on Github named react-gh-pages
4.	Created a new react app on computer by this command:
$ create-react-app react-gh-pages
5.	Installed gh-pages as a dependency 
$ cd react-gh-pages 
$ npm install gh-pages --save-dev 
6.Added some properties to package.json 
//... "homepage": "http://codeanddraw.github.io/react-gh-pages" 
Added in scripts: "scripts": { //... "predeploy": "npm run build", "deploy": "gh-pages -d build" }
6.	Created a git repository in the app folder 
$ git init
7.	Added github repository as a remote in local github repository 
$ git remote add origin http://codeanddraw.github.io/react-gh-pages
In case of fatal error use:  git remote rm origin
8.	Generated a build and deployed on github 
$ npm run deploy 
{Tip: To solve error obtained in deployment, I used 
rm -rf node_modules/gh-pages/.cache to empty the cache. 
rm -rf node_modules/gh-pages/.cache fixes it but if you deploy to 2 different branches you will run into this problem again. I searched, and people suggest using this: 
"predeployLive": "npm run build",
"deployLive": "npm run cleanup && gh-pages -d build -b deploy -e build", "cleanup": "rm -rf node_modules/gh-pages/.cache" }
9.	Commit code to master branch and push your commit to github 
$ git add .
$ git commit -m "Create commit"
$ git push origin master
10.To deploy on github run:
$ git run deploy 
