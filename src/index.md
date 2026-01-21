---
layout: layout.njk
title: GIS Documentation Portal
---

## Available Workshops
Explore the interactive guides and ArcGIS maps below:

<ul>
{%- for item in collections.workshop -%}
  <li>
    <a href="{{ item.url }}"><strong>{{ item.data.title }}</strong></a>
  </li>
{%- endfor -%}
</ul>

And the rest is yet to come! 