module.exports = {
   outputDir: 'dist',
   baseUrl: "/",
   pages: {
    index: {
      // entry for the pages
      entry: "C:/Users/Stephen/source/repos/Traders/Web/resources/src/client/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: 'index.html',     
    },
    admin: {
      entry: "C:/Users/Stephen/source/repos/Traders/Web/resources/src/admin/main.js",
      // the source template
      template: "public/admin.html",
      // output as dist/index.html
      filename: 'admin.html',   
    }
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    // subpage: ''
  }
}