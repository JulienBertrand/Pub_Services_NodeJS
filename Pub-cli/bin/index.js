#!/usr/bin/env node
const program = require('commander');
const main =require('../src/main')
program
    .version('1.0.0')
    .option('-l, --list', 'Get the pubs list')
    .option('-o, --open', 'Get the today\'s open pubs list ')
    .parse(process.argv);
if (program.list) {
    console.log(main.getListPubs());
}

if (program.open) {
    console.log(main.getListPubsOuvert());
}