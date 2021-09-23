# @data_messe React.js portfolio site

This is my portfolio website, designed and coded from scratch using HTML, CSS, and JavaScript with React.js and GitHub Pages.

Video banner background ["Drone Footage of an Ocean and Buildings"](https://www.pexels.com/video/drone-footage-of-an-ocean-and-buildings-9113160) is used free from [Pexels.com](https://www.pexels.com) by [SwissHumanity](https://www.pexels.com/@swisshumanity-1686058) a.k.a. [SwissHumanity Stories](https://www.youtube.com/c/SwissHumanityStories/videos)

Software logos from [World Vector Logo](https://worldvectorlogo.com/) and [Wikimedia.org](https://upload.wikimedia.org/).

Refer to src/data/references.js file for other asset details considered during design process.

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
3. From Visual Studio Code, start building th app, and watch it render via http://localhost:3000/.

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

3. From Visual Studio Code, build the deployment. Patiently wait until the last line of code "Published" appears.
```
npm run deploy
```

**Note:** It is important to ensure you let the process complete fully, otherwise you may get errors that forc arebulting from scratch.

4. From GitHub, change the GitHub Pages setting to deploy from branch gh-pages.

5. From GitHub Desktop, push the changes (the Current branch should be main by default, do not change this).

**Note:** You will only see the changes you applied to the source files in GitHub Desktop for the push, not the compiled file changes that will end up deployed to gh-pages branch. This is normal.

## Subsequent changes to local code and pushing updates

1. From Visual Studio Code, make the changes as required, then build again.
```
npm run deploy
```

2. From GitHub Desktop, push the changes (again, it should still be defaulting to the main branch).