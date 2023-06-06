command-101
==

experiments in command line processing
--

# Steps 

First part is from my article:

* https://scriptable.com/how-to-create-a-command-line-interface-with-nodejs-cli-zero-setup/

## Step 1. Create a new project

```sh
mkdir -p ~/projects/javascript/command-101
cd ~/projects/javascript/command-101
```

## Step 2. Initialize the project

```sh
npm init -y
```

## Step 3. Edit package.json

* Open package.json in your favorite code editor
* Replace the line for the "main" property with this line and save the file:

```json
"bin": "./index.js",
```

## Step 4. Create index.js
* Create index.js through the editor or via this command:

```sh
touch index.js
```

## Step 5. Update index.js
Open index.js, add this code, and save the file:

```sh
#!/usr/bin/env node

console.log("Hello world!")
```

The first line is very important to run as a node-based CLI.  Do not change or move it.

## Step 6. Test the file locally

Run this command to test the file:

```sh
node index.js
```

Verify that the hello message is printed to the terminal.

## Step 7. Initialize git
To initialize git for this project, run this command:

```sh
git init 
```

Add the files (note the period (.) at the end of the command):

```sh
git add .
```
Commit the files:

```sh
git commit -m "feat: init commit"
```

## Step 8. Create a git repo

For this example, we want the user to be able to have the utility install itself automatically via the command line. To do that, the target users need to be able to read from your repo.  

To create a new repo in GitHub, browse over to this site and follow the instructions:

```sh
https://github.com/new
```

In my case, I created a public repo that can be found here:

```sh
https://github.com/mitchallen/command-101
```

If you have an internal or private repo, be sure to give target users access.