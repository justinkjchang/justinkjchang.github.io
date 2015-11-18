# Personal Website: justinkjchang.github.io

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Notes

### Copying files with grunt
For files being copied over, ctrl-f for 'copy: {' in Gruntfile.js

### Installing with bower
bower install --save name-of-package
Note that --save updates bower.json, autogenerating css and script links between <!-- bower:css --> <!-- endbower --> and <!-- bower:js --> <!-- endbower -->

## Common issues

### Conflicts when pushing to master (website branch)
Use [deployWebsite](https://github.com/justinkjchang/justinkjchang.github.io/blob/src/deployWebsite) script (deletes master branch first, and then pushes it again)

## When all else fails..
* grunt clean && grunt build
* check jslint warnings/errors