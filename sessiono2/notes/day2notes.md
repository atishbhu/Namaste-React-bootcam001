
# Day 02 

### NPM:- 
It is the default package manager for the JavaScript runtime environment Node.js.

npm is used to manage packages (libraries, tools, and frameworks) that are published on the npm registry. Developers can use npm to install packages, update packages, and uninstall packages from their projects. npm also allows developers to manage dependencies between packages, by creating a package.json file that lists the required packages and their versions.

npm provides a command-line interface (CLI) that can be used to interact with the package registry and manage packages. Some common npm commands include:

- npm init: initializes a new Node.js project and creates a package.json file.
- npm install <package>: installs a package and its dependencies.
- npm update: updates all packages in the current project to the latest version.
- npm uninstall <package>: uninstalls a package and its dependencies.
- npm search <keyword>: searches the npm registry for packages containing the given keyword.
- npm is widely used by JavaScript developers and has become the de facto standard for managing packages in Node.js projects.
- npm is package manager for node js. npm has two things  
    1):- CLI is for downloading package using commond line

    2):- online repository for publishing the packages 
- Every Node application has a package.json file that includes metadata about the
application. This includes the name of the application, its version, dependencies,
etc.
- We use NPM to download and install 3rd-party packages from NPM registry:
- All the installed packages and their dependencies are stored under
node_modules folders. This folder should be excluded from the source control.
- Node packages follow semantic versioning: major.minor.patch
- Useful NPM commands are:






#### Install a package 

```bash
  npm i <packageName>
```
### parcel/webpack:-

parcel and webpacks are bundler. Bundler is used to merge multiple file into single
file which is called bundle. bundle is used to load entire webpage at once. bundler
provides the features like HMR, dev server, code spliting and much more.

### .parcle-caches:-

parcel caches everything it to rebuild to disk. if you restart the dev server then parcel 
only rebuild those file that is changed after last ran. Parcel keep tracks of all the file. 
By default the cache is stored iin .parcel-cache.

### npx :-

- npx is a tool that is used to execute packages from the Node.js registry without having to install them globally or locally. It is often used to run command-line tools or scripts that are published on the registry.

### dependencies vs Devdependencies:-

Dependencies are packages or libraries that are necessary for the project to run successfully. These packages are typically listed in a project's "package.json" file and are installed when the project is set up or deployed. Dependencies are essential components that the application relies on in order to function, and they are typically things like utility libraries, frameworks, and tools that are needed to run the application.

On the other hand, devDependencies are packages or libraries that are only needed during the development of the project, but are not required for the final product. These packages are typically used for testing, building, and other development tasks. Examples of devDependencies might include testing frameworks, build tools, and other development-related libraries.

The key difference between dependencies and devDependencies is that dependencies are necessary for the application to function, while devDependencies are only necessary for development tasks. When a project is deployed, only the dependencies will be installed and included in the final product, while the devDependencies will be excluded. This helps to reduce the size and complexity of the final product, and ensures that only the necessary components are included.

### Tree shaking:-

Tree shaking is an algorithm that are used to remove dead code while bundling with
the help of bundler like webpack,parcel,browserfy. 

### Hot Module Replacement:-

- HMR is tool that are used to update the browser at runtime without needing whole 
page refresh.
- HMR stands for Hot Module Replacement, which is a feature in modern web development frameworks that allows for the real-time updating of code changes without needing to refresh the browser.

With HMR, developers can see the results of code changes immediately, without needing to manually reload the page or restart the server. This can greatly speed up the development process and make it easier to test and iterate on code changes.

HMR works by replacing only the changed module or file in the application, rather than reloading the entire page or application. This is done by setting up a WebSocket connection between the client and server, which allows the server to push updated modules to the client as they are changed.

HMR is commonly used in modern front-end frameworks like React, Vue.js, and Angular, as well as in server-side frameworks like Node.js. It is a powerful tool for improving the development workflow, reducing development time, and improving the overall quality of web applications.

### .gitignore :- 

If we do not want to push a particular file in git then with the help of .gitignore
file we add that file .gitignore and then git does not tracks that file.

-it should contain files/folders generated by the OS, IDE.

- temporary or cached folders/files
- node_models, dist folder
- log files
- hidden files
- personal files

### package.json vs package.lock.json:-
 Both package.json and package-lock.json files are related to managing dependencies in a Node.js project.

- Every Node application has a package.json file that includes metadata about the application. This includes the name of the application, its version, dependencies,etc. 
   package.json is a configuration file for Node.js projects that defines various properties related to the project, such as name, version, description, entry point, dependencies, and scripts. It also lists the required dependencies for the project, which can be installed using the npm install command. Developers can add, remove or update dependencies in the package.json file and then run npm install to install or update the dependencies.
- package.lock.json is automatically generated when we run any npm command.It is kind of much more specific description of dependencies from package.json. It include not just dependencies and the version number and but also exactly where the dependencies coming from. and verify that package is not corrupt with integrity check and also includes version and information all of the dependencies in the tree not just direct dependencies.
    package-lock.json, on the other hand, is a file that is automatically generated by npm when dependencies are installed or updated. It serves as a record of the exact versions of all installed packages, including their transitive dependencies. This ensures that all developers and servers working on the project are using the same versions of the packages, which helps to prevent version conflicts or unintended changes to dependencies. When npm install is run, it uses the package-lock.json file to install the exact versions of the dependencies specified in the file.

### why should not modify package.lock.json:-

We should not modify package.lock.json because when we start developing our project
then we install project dependencies. In package.lock.json , all the dependencies
exact version are stored during developing when we will modify package.lock.json
there may be chance changed dependencies version when we run npm command and also
there may be a chance of different behaviour of our application so that's why 
we should not modify package.lock.json.

### node_models:-

- In node_models, all the dependencies code are stored which are needed by our application and also dependencies is also depends on some other code that is also stored. 
- It is not good practice to push node_models to git because all our application dependencies is stored in package.json and when we run npm i then all dependencies automatically will install.

### dist:-

dist the minified version of our project that is build for production. dist folder 
is created when we build our project.

### browserlist:-

browserlist is used to specify which browser is supported by your frontend application
by specifying in config file.

### noscript tag:-

noscript tag is used for providing alternative content for the browser in which
script tag is not supported. 

### manifest.json:-

manifest files provide the capability to change how an installed application will look like on the user's desktop or mobile device.
