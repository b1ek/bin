const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const glob = require('glob');

const root = path.join(process.cwd(), '/usercontent');
const { MAXFILES } = process.env;

console.log(root);


let initalized = false;

let submitted = 0;

async function init() {
    if (initalized) return;
    glob(root + '/**', undefined, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        files.filter(file => {
            return !file.startsWith('.');
        }).forEach(file => {
            submitted++;
        });
        initalized = true;
    });
}

function submitted() {return submitted;}

const make_id = () => {
    return crypto.randomBytes(8).toString('hex');
};

async function get(id) {
    init();
    return fs.readFileSync(path.join(root, id)).toString();
}

async function write(fname, data) {
    init();
    submitted++;
    return fs.writeFile(path.join(root, fname), data, () => {});
}

async function create(data) {
    if (submitted >= MAXFILES) return "NA";
    const id = make_id();
    await write(id, data);
    return id;
}

module.exports = { get, write, create, make_id, submitted };