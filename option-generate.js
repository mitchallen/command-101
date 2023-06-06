import * as cowsay from "cowsay";

export function optionGenerate(message) {
  let output = cowsay.say({ text: message });
  console.log(output);
}