postachio-theme-sdk
===================

## Incomplete Warning

This is a highly experimental, incomplete SDK. It's work in progress. Use at your own risk and feel free to submit pull requests and bug reports.

## What's this for?

This module launches a development environment for working on Postach.io themes locally. In future it will be a dependency of our official themes.

### 1) Install SDK

Run the following command in Terminal to install the SDK through npm. 
```
npm install postachio-theme-sdk --save
```

### 2) Run Gulp Task

Run the `postachio` gulp task to start the server.
```
gulp postachio
```
Your development environment will be available at `localhost:8000`. It will listen for changes to LESS, CSS, HTML, and JS file extensions and restart the server.

## Need More Info? 

Check out our [help documentation](http://help.postach.io/tag/theme-code) for more information on theming Postach.io sites.

