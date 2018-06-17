#!/usr/bin/env node

const fs = require('fs');
const { spawn } = require('child_process');
const _ = require('./utils');

if (!fs.existsSync(_.homedir('.node_modules'))) {
  _.exit(`Please create '~/.node_modules'`);
}

if (!_.file) {
  _.exit(`Need a file to execute`);
}

const executable = _.nxDir(_.file + '.js');
if (!fs.existsSync(executable)) {
  _.exit(`Cannot find module '${executable}'`);
}

spawn('node', [executable], {
  shell: true,
  stdio: 'inherit',
});
