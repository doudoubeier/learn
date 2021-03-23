// const withCss = require('@zeit/next-css')

// if (typeof require !== 'undefined') {
//     require.extensions['.css'] = file => { }
// }

// module.exports = withCss({})
const withCSS = require('@zeit/next-css');
module.exports = withCSS()