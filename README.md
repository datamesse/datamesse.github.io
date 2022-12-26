# @data_messe React.js portfolio and blog site

This is the code for my personal website **[https://datamesse.github.io/](https://datamesse.github.io/)**, designed and coded by me using HTML, CSS, Markdown, and JavaScript with React.js and GitHub Pages. No boiler site templates like Jekyll are used.



### Evolution of my site's design


#### September 2021 (Version 1)

My initial design was a basic 2 page layout for a project portfolio and my blog.
For each project I displayed a year-month label and the logo of the technology used.

**Credit:** The JavaScript code that renders blog post data from markdown to separate pages was from a [YouTube tutorial by Will Ward](https://www.youtube.com/watch?v=gT1v33oA1gI&list=PLASldBPN_pkBfRXOkBOaeCJYzCnISw5-Z).

I wanted a clean and easy to look at light-blue and light-grey technical but smooth-edged design.

![Site version 1](https://github.com/datamesse/datamesse.github.io/blob/main/src/assets-portfolio/img-2021-09-portfolio-website-react-original.png?raw=true)

The video banner background ["Communication Line Technology"](https://pixabay.com/videos/communication-line-technology-45902/') is used free from [pixabay.com](https://www.pixabay.com) by [ArtDio2020](https://pixabay.com/users/artdio2020-8194567/?tab=videos).

Archived source files are here: **[https://github.com/datamesse/datamesse.github.io/tree/main/src/z_version1](https://github.com/datamesse/datamesse.github.io/tree/main/src/z_version1)**


#### May 2022 (Version 2)

I updated the layout to be minimalistic with new sections including recent blog post preview, skills assessment, and contacts sections. The style is based on a [YouTube tutorial by Shuvam Kumar a.k.a Overreacted](https://www.youtube.com/watch?v=j0yZc2yfa7o).

![Site version 2](https://github.com/datamesse/datamesse.github.io/blob/main/src/assets-portfolio/img-2022-05-portfolio-website-react-original.png?raw=true)

The JavaScript title switch animation code was by [Ajay Narain Mathur on Stack Overflow](https://stackoverflow.com/questions/40878859/changing-a-heading-every-few-seconds-with-an-array-and-a-loop).

Archived source files are here: **(https://github.com/datamesse/datamesse.github.io/tree/main/src/z_version2)[https://github.com/datamesse/datamesse.github.io/tree/main/src/z_version2]**


#### December 2022 (Version 3)

I merged the technical style and colour scheme from Version 1 with Version 2's layout.
On the front page, each project has the name and logo of the main technology used.
It is re-designed as a compact portfolio preview gallery.

![Site version 3](https://github.com/datamesse/datamesse.github.io/blob/main/src/assets-portfolio/img-2022-12-portfolio-website-react-v3.gif?raw=true)



#### Other useful tools and references

CSS clip-path polygon creation tool by Bennett Feely
 * [BennettFeely.com/clippy/](https://bennettfeely.com/clippy/)

CSS glowing of div elements taken from this Stackoverflow post
 * [https://stackoverflow.com/questions/34821217/easily-create-an-animated-glow](https://stackoverflow.com/questions/34821217/easily-create-an-animated-glow)

Animated gif creation by recording screen
 * [ScreenToGif.com](https://www.screentogif.com/)

Font to SVG path creation tool by Dan Marshall
 * [DanMarshall.github.io/google-font-to-svg-path](https://danmarshall.github.io/google-font-to-svg-path)

Software logos and other art were used from:
 * [Flaticon.com](https://www.flaticon.com/uicons)
 * [StorySet.com](https://storyset.com/data)
 * [Wikimedia.org](https://upload.wikimedia.org/)
 * [WorldVectorLogo.com](https://worldvectorlogo.com/)



See instructions below on how to create your own GitHub Pages site.

# How to create React.js site and deploy to GitHub pages

Based on a post by Ibrahim Ragab
 * [https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

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

**Note:** If you hit an error whilst performing the push, it may be relating to number/size of files being sent, in which case from GitHub Desktop, try repushing, otherwise click the History tab and undo or reverse the commits that are pending, and resend the changes in smaller amounts.

## Using anchor tags for same page navigation

Based on this Stack Overflow post: [https://stackoverflow.com/questions/48223566/using-anchor-tags-in-react-router-4](https://stackoverflow.com/questions/48223566/using-anchor-tags-in-react-router-4)

1. Import React Router HashLink.

```
npm install --save react-router-hash-link
```

2. Add HashLink to the React component.

```
import { HashLink as Link } from 'react-router-hash-link';
```

3. Add link to React component.

```
<Link to="/pathLink#yourAnchorTag">Your link text</Link>
```

4. Add the div id reference to the React component.

```
<div id= "yourAnchorTag">
      <p>Linked to here<p>
</div>
```

## Adding donut charts for skill sets (used in design version 2)

Based on this [Youtube tutorial by Rizwan Khan](https://youtu.be/RUx1Zvv1qQU?t=3260).

Other important links below:

* [Official website for React Circular Progressbar](npmjs.com/package/react-circular-progressbar)

* [Sample code on how to customise the progress bar](https://codesandbox.io/s/vymm4oln6y?file=/index.js:6663-6673)

1. Install React Circular Progressbar

```
npm install react-circular-progressbar
```

2. Import the following reference and stylesheet into your React component.

```
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
```

3. Add the progressbar component. Note there are many variations (i.e. components to choose from), and the example below is one where you can add div elements inside the donut chart.

```
<CircularProgressbarWithChildren
    strokeWidth={3}
    value={100 - skill.score}
    styles={buildStyles({
        pathColor: "#23a9f2",
        trailColor: "#E9F6FE"
    })}>
    <label className='skill-name'>{ skill.shortname }</label>
    <img className='skill-icon'
      src={ skill.icon }
      alt={ skill.name }
    />
    <label className='skill-score'>Top {`${ skill.score }%`} of {skill.taken}</label>
    <label className='skill-date'>{skill.shortdate}</label>
</CircularProgressbarWithChildren>
```