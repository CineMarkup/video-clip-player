# Video Annotation Editor and player

Video clip editor in html5 on MEAN stack

## How to use
Add a main video URL, then start adding clips

## Install

Get repository contents
```shell script
npm install
```
Fixing audit issue
```shell script
npm audit fix
```

Install angular cli command-line interface tool 
```shell script
npm install -g @angular/cli
```

## Run 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

![run](screenshots/Screenshot%20from%202021-01-24%2009-49-25.png)

## Save
Data is saved in Local Storage

## Hotkeys
- ctrl+shift+right: play to next clip
- ctrl+shift+left: play to previous clip

## Screenshots

Making a clip
![make1](screenshots/Screenshot%20from%202021-01-24%2009-45-49.png =150x150)

![make2](screenshots/Screenshot%20from%202021-01-24%2009-47-13.png) <!-- .element height="50%" width="50%" -->

Clip added succesfully notification 
![addedclip](screenshots/Screenshot%20from%202021-01-24%2009-47-24.png){:height="50%" width="50%"}

List of clips
![list](screenshots/Screenshot%20from%202021-01-24%2009-46-19.png)

Edit a Clip
![editclip](screenshots/Screenshot%20from%202021-01-24%2009-48-55.png)


## References 

- https://angular.io/cli version 7.1.1

Angular Cli 

Schematic commands
- ng new : Creates and initializes a new Angular application that is the default project for a new workspace.
- generate 
- add
- update

Misc 
help, version, config, doc,analytics

Task commands
- ng build : Compiles an Angular app into an output directory named dist/ at the given output path. https://angular.io/cli/build
- ng run : Runs an Architect target with an optional custom builder configuration defined in your project.
- ng config : Retrieves or sets Angular configuration values in the angular.json file 
- ng serve : Builds and serves your app, rebuilding on file changes.

## Debugging 

**Issue 1** node-sass missing 
```shell script
Error: Cannot find module 'node-sass'
```
**solution** It can be downloaded as local package
```shell script
sudo npm install --save-dev  --unsafe-perm node-sass
```
\
**Issue 2** Sass incompatiable version
```shell script
Error: Node Sass version 5.0.0 is incompatible with ^4.0.0.
```
**solution** Ensure the node-sass version is in version 4
```shell script
npm install node-sass@4.14.1
```
\
**Issue 3**
```shell script
strip-ansi): Error: ENOSPC: System limit for number of file watchers reached,
```
**solution** 
```shell script
npm ci
```
\
**Issue 4** Mousetrap instance
```shell script
ERROR in node_modules/angular2-hotkeys/lib/hotkey.model.d.ts(24,9): error TS1086: An accessor cannot be declared in an ambient context.
node_modules/angular2-hotkeys/lib/hotkeys.service.d.ts(9,16): error TS2304: Cannot find name 'MousetrapInstance'.
```
**solution** update angular cli
```shell script
ng update --next @angular/cli --force
```
\
**Issue 5** Invalid config in angular.json
```shell script
 Invalid config found at /home/altanai/Angular/video-clip-player-master/angular.json. CLI should be an object.
```
**solution**To update Angular Cli global:
```shell script
npm uninstall -g angular-cli
npm cache clean 
npm install -g @angular/cli@latest
```
To update Angular cli dev
```shell script
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install
```
to update angular cli
```shell script
ng update @angular/cli --migrate-only --from=1.7.4
```
\
**Issue 6** unhandled exception with ` contains both .browserslistrc and browserslist`
**solution** Delete .browserslistrc

\
**Issue 7** ENOSPC: System limit for number of file watchers reached | Ubuntu 
```shell script
ENOSPC: System limit for number of file watchers reached 
```
**solution** To increase the file watchers limit
```shell script
cat /proc/sys/fs/inotify/max_user_watches
```
You might get output like this some integer. `8192`
Now increase the limit by entering the next command
```shell script
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
```
The above command will set your file watcher limit to 524288. To see whether it is set or not, type
```shell script
sudo sysctl -p
```
output `fs.inotify.max_user_watches = 524288`
ref : https://bestafiko.medium.com/npm-npm-start-error-enospc-system-limit-for-number-of-file-watchers-reached-bdc0eab0a159'

\
**Issue 8**  Cannot find name 'Promise'
```shell script
TS2583: Cannot find name 'Promise'. Do you need to change your target library? Try changing the `lib` compiler option to es2015 or later.
```
or 
```
 Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'?
```
**solution** change your target to es6 inside tsconfig.json
```
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "types": [],
    "target": "es6"
  },
```
and 
```shell script
npm install @types/node --save-dev
```

---