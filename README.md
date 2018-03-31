<h1>Nisha's Address-Book</h1></br>
<img src="https://travis-ci.org/dwyl/learn-travis.svg?branch=master" /><img src = "http://hits.dwyl.io/codeanddraw/react-gh-pages.svg"/>

<i>Technologies used: ES6, React, Dexie.js (for IndexedDB),HTML/CSS for address book </i></br>
</hr>
Click here to run the build of my code in github: https://codeanddraw.github.io/react-gh-pages/</br>
</hr>

Note: Build of my code is in react-gh-pages branch, source code is in master branch.</br>
*If you want to run it on your local machine then download my master branch, go inside the folder and run the following command on the terminal/cmd:</br>
To begin the development, run npm start. To create a production bundle, use npm run build.</br>
 
Following are the steps I followed to create an environment for the app on my local machine and host the app on github: </br>
1.	Installed the environment for react on my local machine</br>
2.	Installed node.js, npm, dexie.js, prop-types library, create-react-app</br>
3.	Created a repository on Github named react-gh-pages</br>
4.	Created a new react app on computer by this command: </br>
$ create-react-app react-gh-pages</br>
5.	Installed gh-pages as a dependency </br>
$ cd react-gh-pages </br>
$ npm install gh-pages --save-dev</br>
Added some properties to package.json </br>
//... "homepage": "http://codeanddraw.github.io/react-gh-pages" </br>
Added in scripts: "scripts": { //... "predeploy": "npm run build", "deploy": "gh-pages -d build" }</br>
6.	Created a git repository in the app folder </br>
$ git init</br>
7.	Added github repository as a remote in local github repository </br>
$ git remote add origin http://codeanddraw.github.io/react-gh-pages </br>
In case of fatal error use: git remote rm origin</br>
8.	Generated a build and deployed on github </br>
$ npm run deploy </br>
{Tip: To solve error obtained in deployment, I used </br>
rm -rf node_modules/gh-pages/.cache to empty the cache. </br>
rm -rf node_modules/gh-pages/.cache fixes it but if you deploy to 2 different branches you will run into this problem again. I searched, and people suggest using this: 
"predeployLive": "npm run build", "deployLive": "npm run cleanup && gh-pages -d build -b deploy -e build", "cleanup": "rm -rf node_modules/gh-pages/.cache" }
9.	Commit code to master branch and push your commit to github </br>
$ git add . </br>
$ git commit -m "Create commit" </br>
$ git push origin master </br>
10.	To deploy on github run: </br>
$ git run deploy</br>
