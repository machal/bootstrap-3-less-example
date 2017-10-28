// LESS: kompilace do CSS
// ----------------------

'use strict';

module.exports = {
  dist: {
  	options: {
  	    sourceMap: true
  	},
    files: {
      'dist/css/style.css': ['src/less/index.less']
    }
  }
};
