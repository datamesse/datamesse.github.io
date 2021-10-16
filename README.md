# @data_messe React.js portfolio and blog site

This is my personal website, designed and coded using HTML, CSS, Markdown, and JavaScript with React.js and GitHub Pages.

My previous blog used a Jekyll boiler template and kept triggering failed deployment errors, so I decided to stop using such templates, and I coded the site from scratch to make it easier to troubleshoot.

The underlying code for rendering blog post data (as the alternative for using Jekyll) was from following a [YouTube tutorial by Will Ward](https://www.youtube.com/watch?v=gT1v33oA1gI&list=PLASldBPN_pkBfRXOkBOaeCJYzCnISw5-Z).

That code implementation is only used for the blog component. The project portfolio component simply renders raw JSON data, because unlike the blog, the portfolio does not need to render markdown as separate pages.

The video banner background ["Drone Footage of an Ocean and Buildings"](https://www.pexels.com/video/drone-footage-of-an-ocean-and-buildings-9113160) is used free from [Pexels.com](https://www.pexels.com) by [SwissHumanity](https://www.pexels.com/@swisshumanity-1686058) a.k.a. [SwissHumanity Stories on YouTube](https://www.youtube.com/c/SwissHumanityStories/videos).

Software logos were used from [World Vector Logo](https://worldvectorlogo.com/) and [Wikimedia.org](https://upload.wikimedia.org/).

Refer to src/data/references.js file for other asset details considered during this site's design process.

See below on how you get yourself started on your own GitHub Pages site.

# How to create React.js site and deploy to GitHub pages
Based on post by [Ibrahim Ragab](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f).

## Initial set up
Requirement: Install Node.js on your machine, and install React as a local dependency
```
npm install -g create-react-app
```

1. From GitHub, create a new Repository and link it to an empty folder on your machine as your app's local copy via GitHub Desktop. In this example, the folder will be called "datamesse.github.io".

From the Repository's Settings, scroll to the bottom, click GitHub Pages and publish the site to https://datamesse.github.io/.

2. From Command Prompt, navigate to the parent directory of the empty folder.
```
create-react-app datamesse.github.io
cd datamesse.github.io
npm start
```
3. From Visual Studio Code, start building the app, and watch it render via http://localhost:3000/.

4. Install additional dependencies needed for the blog post component.
```
npm i react-router-dom react-markdown
```

5. Update package.json with
```
  "scripts": {
    "server": "node src/scripts/main.js"
  },
```

## Initial push to GitHub Pages

1. From Visual Studio Code's terminal, install GitHub Pages.
```
npm install gh-pages --save-dev
```

2. From Visual Studio Code, add homepage, predeploy, and deploy attributes to the package.json file.
```
{
  "homepage": "http://datamesse.github.io/"
  },
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
  },
}
```

3. Parse the files in the pages and post data so they can be used as a data source from the data/ folder.
```
npm run server
```

4. From Visual Studio Code, build the deployment. Patiently wait until the last line of code "Published" appears.
```
npm run deploy
```

**Note:** It is important to let the process complete fully, otherwise you may get errors that may require rebuilding from scratch.

5. From GitHub, change the GitHub Pages setting to deploy from branch gh-pages.

6. From GitHub Desktop, push the changes (the Current branch selected should still be main by default, do not change this).

**Note:** You will only see the changes you applied to the source files in GitHub Desktop for the push, not the compiled file changes that will end up deployed to gh-pages branch. This is normal.

7. From the GitHub repository's Settings, change Source branch from main to gh-pases. Remember from GitHub Desktop, that main should remain selected as the branch for pushes.

## Subsequent changes and new blog posts then pushing updates

1. It isn't mandatory, but it may be helpful to empty out the src/data/posts.json and pages.json files, then run the following to repopulate them afresh.
```
npm run server
```

2. From Visual Studio Code, rebuild for gh-pages.
```
npm run deploy
```

3. From GitHub Desktop, push the changes (again, it should still be defaulting to the main branch).

**Note:** If you make a change to the source code and push it without building first, no changes will be reflected on the gh-pages branch. So ensure that when trying to push gh-pages build changes, that something in the source files has been changed, otherwise GitHub Desktop won't detect anything for the push.

**Note:** If you hit an error whilst performing the push, it may be relating to number/size of files being sent, in which case from GitHub Desktop, try repushing, otherwise click the History tab and reverse the commits that are pending, and resend the changes in smaller amounts.