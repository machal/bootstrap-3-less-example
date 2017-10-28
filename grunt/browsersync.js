// browserSync: sledovani zmen v souborech
// ---------------------------------------

'use strict';

module.exports = {
	dev: {
	    bsFiles: {
	        src : 'dist/css/*.css'
	    },
	    options: {
	        watchTask: true,
	        server: {
            	baseDir: './'
          }
	    }
	}
};



