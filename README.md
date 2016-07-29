# PBC Style Guide

In order to build the website you will need [node.js](https://nodejs.org/en/) installed.

To install the project dependencies type `npm install` from the root directory of the project. This only needs to be done the very first time.

To build the site and start the local development server type `gulp`. Any changes you make automatically update the files in the 'build' directory. (If you get any errors running the `gulp` command on Windows, running the `gulp clean` task manually afterwards should clear up the issue. There seems to be a problem with the gulp plugin `run-sequence` on Windows, so the server can sometimes start before the previous tasks have completed.)

To update the style guide hosted on Premera's FTP server, replace all of the files in the 'www/style-guide/' directory with the files in your local 'build' directory.
