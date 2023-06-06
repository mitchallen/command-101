## command-101
==
experiments in command line processing
--

# Steps

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
