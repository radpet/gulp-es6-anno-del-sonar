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
    var regExPatternSingleLine = /@[A-Z][\w]+\(.*\)/g;
    str = str.replace(regExPatternSingleLine, '');

    var patternMultiLine = /@[A-Z][\w]+\((\s|\S)*?\)(?!\")/g;
    var multilineMatches = str.match(patternMultiLine);
    for (var i in multilineMatches) {
      str = str.replace(multilineMatches[i], function () {
        var result = "";
        for (var k = 0; k < multilineMatches[i].match(/\n/g).length; k++) {
          result += "\n";
        }
        return result;
      });
    }
    str = str.replace(patternMultiLine, '');

    var regExPatternSingle = /@[A-Z][\w]+/g;
    str = str.replace(regExPatternSingle, '');
    file.contents = new Buffer(str);
    this.push(file);
    cb();
  });
};

module.exports = plugin;

