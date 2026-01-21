// eleventy.config.js
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginTOC from "eleventy-plugin-toc";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

export default async function(eleventyConfig) {
  // 1. Plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginTOC, { 
    tags: ['h2', 'h3'],
    wrapper: 'div',
    wrapperClass: 'toc-list'
  });

  // 2. Markdown Setup (Crucial for TOC IDs)
  const mdLib = markdownIt({ html: true }).use(markdownItAnchor);
  eleventyConfig.setLibrary("md", mdLib);

  // 3. ArcGIS Shortcode (Clean v3 syntax)
  eleventyConfig.addShortcode("arcgis", (id, height = "600px") => {
    return `<div class="arcgis-embed">
      <iframe width="100%" height="${height}" frameborder="0" src="https://www.arcgis.com/apps/mapviewer/index.html?webmap=${id}"></iframe>
    </div>`;
  });

// Ultilise the ArcGIS SDK
eleventyConfig.addShortcode("arcgisComponent", (id, height = "600px") => {
  return `
    <arcgis-map item-id="${id}" style="height: ${height}">
      <arcgis-zoom slot="top-left"></arcgis-zoom>
      <arcgis-legend slot="bottom-right"></arcgis-legend>
    </arcgis-map>
    <script type="module" src="https://js.arcgis.com/4.31/map-components/map-components.esm.js"></script>
  `;
});


  // Task Shortcodes
  eleventyConfig.addPairedShortcode("task", function(content, title, type = "info") {
  return `
    <article class="message is-${type} mb-5">
      <div class="message-header"><p>${title}</p></div>
      <div class="message-body">${content}</div>
    </article>`;
});


  // 4. Files to pass through to _site
  eleventyConfig.addPassthroughCopy("src/css");
   eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};