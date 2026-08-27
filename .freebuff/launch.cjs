const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const cwd = path.resolve(__dirname, '..');
const logFile = path.join(__dirname, 'preview-9dc86be6-0b29-4718-9301-2ee0f071e949.log');
const errFile = logFile + '.err';

const log = fs.createWriteStream(logFile);
const errlog = fs.createWriteStream(errFile);

const p = spawn('node.exe', ['node_modules/vite/bin/vite.js', '--host', '--port', '5173'], {
  cwd,
  detached: true,
  stdio: ['ignore', 'pipe', 'pipe'],
});

p.stdout.pipe(log);
p.stderr.pipe(errlog);
p.unref();
console.log(p.pid);
