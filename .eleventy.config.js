module.exports = function (eleventyConfig) {
    // Copy the files in the assets folder
    eleventyConfig.addPassthroughCopy("assets");

    // Default layout for all files
    eleventyConfig.addGlobalData("layout", "base.html");

    return {
      dir: {
        includes: "../layouts",
        input: "pages",
      },
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
    };
  };

  