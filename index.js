#!/usr/bin/env node

import { Command, Option } from "commander";
import { default as figlet } from "figlet";

import { optionEasterEgg } from "./option-easter-egg.js";
import { optionMoo } from "./option-moo.js";
import { optionGenerate } from "./option-generate.js";

function main() {
    const program = new Command();

    program
        .version("0.0.1", "-v, --version", "output the current version")
        .addHelpText("before", figlet.textSync("MYCMD"))
        .addHelpText("before", `node: ${process.version}`)
        .helpOption("-h, --help", "display help")
        .description("My CLI Tool")

        .argument("<file>", "input file")
        // node index.js ~/temp/test.txt --parse
        .option("    --parse", "parse the file")
        // node index.js moo.txt --easteregg
        .addOption(new Option("    --easteregg").hideHelp())
        // node index.js moo --easteregg
        .addOption(new Option("    --moo").hideHelp())

        .addHelpText(
            "after",
            "\nTo setup an alias:\n" +
            "\n  1. Add this to ~/.bashrc or ~/.zshrc" +
            '\n\n       alias mycmd="npm exec --yes -- https://github.com/mitchallen/command-101";\n' +
            "\n  2. save it" +
            "\n  3. $ source ~/.bashrc (or ~/.zshrc)" +
            "\n  4. $ mycmd --help" +
            `\n`
        )

        .action((file, options) => {
            // console.log(`ROOT: ${file}, ${JSON.stringify(options,null,2)}`)
            if (options.parse) optionParse(file);
            if (options.easteregg) optionEasterEgg(file);
            if (options.moo) optionMoo(file);
        });

    program
        .command("alpha")
        .description("alpha target")
        .argument("<label>", "target label")
        // node index.js alpha fubar --generate
        .option("    --generate", "generate a label")
        .action((label, options) => {
            // console.log(`ALPHA: ${label}, ${JSON.stringify(options,null,2)}`)
            if (options.generate) optionGenerate(label);
        });

    program.parse(process.argv);
    const options = program.opts();
    // console.log(`OPTIONS: ${JSON.stringify(options,null,2)}`)          
}

main();