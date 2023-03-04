const gulp      = require('gulp');
const { spawn } = require('child_process');
const log       = require('fancy-log');

const spawn_dev = () => {
    return spawn('node', ['--inspect=0.0.0.0', 'index.js'], {stdio: 'inherit'});
}

let node;
let shutdown = false;

gulp.task('run_dev', (cb) => {

    log('Running application in development mode...');
    node = spawn_dev();

    function watch(cb) {
        if (shutdown == true) return cb();
        log('Files changed, restarting node...');
        node.kill('SIGTERM');
        node = spawn_dev();
        cb();
    }

    gulp.watch('.', { events: 'all' }, watch);
    cb();
});

function shutdown_f() {
    shutdown = true;
    node.kill('SIGINT');
    node.kill('SIGTERM');
}

process.on('SIGINT', shutdown_f);
process.on('SIGTERM', shutdown_f);