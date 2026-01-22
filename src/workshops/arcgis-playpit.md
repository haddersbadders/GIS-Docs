---
layout: layout.njk
title: ArcGIS Playpit
tags: workshop
toc: true
---
This page is to demonstrate the ArcGIS Maps SDK for JavaScript. 

### A basic example

<div class="box p-0" style="overflow: hidden;">
  <div id="viewDiv" style="height: 500px; width: 100%;"></div>
</div>

<script>
  require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
    // 1. Create the Map model
    const myMap = new Map({
      basemap: "streets-vector" 
    });

    // 2. Create the View (the actual visual component)
    const view = new MapView({
      container: "viewDiv",
      map: myMap,
      zoom: 13,
      center: [-1.4701, 53.3811] // Longitude, Latitude (Sheffield)
    });
  });
  require(["esri/widgets/Search"], function(Search) {
  const searchWidget = new Search({
    view: view
  });
  // Add the widget to the top-right corner of the view
  view.ui.add(searchWidget, {
    position: "top-right"
  });
});
</script>

```js
<script>
  require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
    // 1. Create the Map model
    const myMap = new Map({
      basemap: "streets-vector" 
    });

    // 2. Create the View (the actual visual component)
    const view = new MapView({
      container: "viewDiv",
      map: myMap,
      zoom: 13,
      center: [-1.4701, 53.3811] // Longitude, Latitude (Sheffield)
    });
  });
</script>
```