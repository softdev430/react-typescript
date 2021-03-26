#!/usr/bin/env node

const meow = require("meow");
const fgh = require("./index");

const cli = meow(
  `
    Usage
      [options]
 
    Options
      --workdaysOnly, -w Use this option if you don't want to commit on weekends.
      --commitsPerDay, -c Customize how many commits a day to make.
      --startDate, -s Start date in yyyy/MM/dd format.
      --endDate, -e End date yyyy/MM/dd format.
      
    Examples
      --workdaysOnly
      --commitsPerDay "0,3"
      --startDate yyyy/MM/dd --endDate yyyy/MM/dd
`,
  {
    flags: {
      startDate: {
        type: "string",
        alias: "s"
      },
      endDate: {
        type: "string",
        alias: "e"
      },
      workdaysOnly: {
        type: "boolean",
        alias: "w",
        default: "false"
      },
      commitsPerDay: {
        type: "string",
        alias: "c",
        default: "0,3"
      }
    }
  }
);

fgh(cli.flags);
