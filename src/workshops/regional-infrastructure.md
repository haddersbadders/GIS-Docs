---
layout: layout.njk
title: Regional GIS Assessment 2026
tags: workshop
toc: true
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

{% arcgisComponent "4cc9f0ba8e8c4d68b50c01c17efd4730" %}