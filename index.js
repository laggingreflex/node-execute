#!/usr/bin/env node

const fs = require('fs');
const { spawn } = require('child_process');
const _ = require('./utils');

if (!fs.existsSync(_.homedir('.node_modules'))) {
  _.exit(`Please create '~/.node_modules'`);
}

if (process.argv.length < 3) {
  _.exit(`Need a module name to execute`);
}

const moduleRawPath = _.nxDir(process.argv[2]);
let moduleRequirePath;
try {
  moduleRequirePath = require.resolve(_.nxDir(process.argv[2]));
} catch (error) {
  _.exit(`Cannot find module '${moduleRawPath}'`);
}

process.argv.splice(1, 2, moduleRequirePath);

require(moduleRequirePath);
