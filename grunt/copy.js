'use strict';

module.exports = {
	main: {
	  files: [
	    {
        expand: true,
        cwd: 'node_modules/bootstrap/less/',
        src: ['**'],
        dest: 'src/less/vendor/bootstrap/'
      },
	  ]
	}
};
