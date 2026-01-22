# Overview 

Using [Eleventy](https://www.11ty.dev/) for a framework to develop GIS workshops. 

## Structure

Here's an overview of the directory structure:

- **root** - where the Eleventy app and configs live
- **src** - the main development area, where all the markdown, html, css etc live
- **src/_includes** - the html template bits of the site
- **src/css** - additional CSS for the site
- **src/images** - add any and all images in here
- **src/workshops** - add markdown files in here, one for each workshop
- **node_modules** - where all the dependencies live. This is generated when working locally
- **_site** - where the site files are written to. Their fnal destination

## Looking at the files

Let's ahave a look at what some of the files do. 

**eleventy.config.mjs** - this is the configuaration of Eleventy, with all the fucntions and instructions.

**package.json** - this gets generated automatically, contains a  bit of metadata and lists dependencies. it is used to "install" the site after cloning locally with Github. ``npm install``. 

**src/_includes/layout.njk** - HTML/Nunjucks template file. The overall structure of each page. 

**src/index.md** - the homepage markdown file. 

**src/workshops/workshops.11tydata.json** - A *directory data file* used to inject front-matter into all markdown files in the directory. This one contains:

```
{
    "layout": "layout.njk", //applies the default layout
    "tags": ["workshop"],   //adds the tag "workshop" which is used to collect and list workshops in the sidebar
    "permalink": "/workshops/{{ page.fileSlug }}/", //defines the URL structure
    "toc": "true"   //ensures the table of contents displays in the workshop page
  }
```
**src/workshops/*.md** - All the markdown files for workshops. Add front-matter to the top of the file: 

```
---
title: The title of the workshop
---
```
The other front-matter is automatically inserted. Then add your markdown, shortcodes and even HTML! 

