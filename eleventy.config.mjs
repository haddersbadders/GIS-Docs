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

  // 4. Files to pass through to _site
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    pathPrefix: "/gis-docs/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};