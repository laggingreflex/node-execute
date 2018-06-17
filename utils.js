const Path = require('path');
const OS = require('os');

const _ = exports;

_.cwd = (...path) => Path.join(process.cwd(), ...path);
_.homedir = (...path) => Path.join(OS.homedir(), ...path);
_.nxDir = (...path) => _.homedir('.node_modules', ...path);

_.exit = (msg, code = 1) => {
  console.error(msg);
  process.exit(code);
}

_.file = process.argv[2];

_.args = process.argv.slice(3);
