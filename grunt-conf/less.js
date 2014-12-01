'use strict';
module.exports = {
    options: {
        paths: [ 'client' ]
    },
    dev: {
        options: {
            compress: true,
            sourceMap: true,
            sourceMapFilename: 'dev/assets/style.css.map',
            sourceMapURL: 'style.css.map'
        },
        files: {
            'dev/assets/style.css': [
                'client/*.less',
                'client/assets/*.less',
                'client/welcome/*.less',
                'node_modules/norman-*/**/*.less',
                '!node_modules/norman-*/node_modules/**/*.less'
            ]
        }
    }
};
