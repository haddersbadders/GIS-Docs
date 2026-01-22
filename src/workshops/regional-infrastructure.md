---
title: Regional GIS Assessment 2026

---

## Executive Summary
This document provides an look at using Eleventy for GIS stuff. 

## Interactive embedded Map
Below is the live ArcGIS Map showing the survey boundaries.

{% arcgis "4cc9f0ba8e8c4d68b50c01c17efd4730" %}

## Data Processing Code
The following script was used to clean the attribute table:

```javascript
const status = "Active";
console.log(`Filtering layers for: ${status}`);
```


## Components

Needs API key.  But can be integrated so that the webpage can interact with the component, a bit more powerful than iframes. 

Possibly install via npm.

```liquid
{% raw %}
{% arcgisComponent "4cc9f0ba8e8c4d68b50c01c17efd4730" %}
{% endraw %}
```