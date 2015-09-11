'use strict';

var through = require('through2');

var plugin = function (options, sync) {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            return cb(null, file);
        }

        if (file.isStream()) {
            return cb(new PluginError('gulp-es6-anno-del-sonar', 'Streaming not supported'));
        }

        var str = file.contents.toString();
        var regExPattern = /@\w(.|\n*)+?\)\n*/g;
        str = str.replace(regExPattern, '');
        file.contents = new Buffer(str);
        this.push(file);
        cb();
    });
};

module.exports = plugin;

