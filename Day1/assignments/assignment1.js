// const { program } = require('commander');
import {program} from 'commander';
import fs from 'fs';

console.log(process.argv); 


program
  .name('File CLI')
  .description('CLI to do file based tasks')
  .version('1.0.0');

program
  .command("countwords")
  .description("Count the number of words in a given file")
  .argument('<file>', 'filepath to read from')
  .action((file) => {
    fs.readFile(file,"utf-8",(err,data)=>{
        if(err){
            console.error(`Error reading the file ${err.message}`);
        }else{
            const result = data.trim().split(/\s+/);
            console.log(`You have ${result.length} words in this file`);
        }
    })
  });

program
  .command("countletters")
  .description("Count the number of letters in a given file")
  .argument('<file>', 'filepath to read from')
  .action((file) => {
    fs.readFile(file,"utf-8",(err,data)=>{
        if(err){
            console.error(`Error reading the file ${err.message}`);
        }else{
            const result = data.trim().split(/\s+/);
            const numberOfLetters = result.reduce((acc,curr)=>{return acc+curr.length},0);
            console.log(`You have ${numberOfLetters} words in this file`);
        }
    })
  });


program.parse();