# Frontend
CruzHacks 2023 Main frontend Repo

To set up, run
```
$ npm install
```
in the cloned repo. Then to run the Android app, do
```
$ npx react-native run-android
```
Be sure to have JDK 11 installed! Otherwise you might run into issues when building the app.

## How it works
React-Native works by using component tags that are recognized in JSX (a hybrid of JavaScript and HTML in one file), and return elements rendering the corresponding views in Android and iOS (the JSX is translated to JavaScript using Babel). These components are defined as functions that return certain elements, which can then be used in tags to render mobile UI elements, recognize gestures, and perform navigation. The UI element components are obtained through the set of core components (e.g., `<Text>`, `<SafeArea>`, etc.) or through third party modules installed using `npm` from the [React Native Directory](https://reactnative.directory/). Hermes is the JavaScript engine used by React-Native (as opposed to Google's `v8` and others).

# Express.js
This is used for spawning the web server where data is inserted into. It uses `sqlite3` for local backend database storage.

## TODO
* Restrict Maps API key in Google cloud
