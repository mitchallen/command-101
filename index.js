#!/usr/bin/env node

import { Command, Option } from "commander";
import { default as figlet } from "figlet";

function main() {
    const program = new Command();
  
    console.log(figlet.textSync("MYCMD"));
    console.log(`node: ${process.version}`);
}

main();