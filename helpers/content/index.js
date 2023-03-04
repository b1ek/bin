const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.join(process.cwd(), '/usercontent');
console.log(root);

const make_id = () => {
    return crypto.randomBytes(8).toString('hex');
};

async function get(id) {
    return fs.readFile(path.join(root, id));
}

async function write(fname, data) {
    return fs.writeFile(path.join(root, fname), data);
}

async function create(data) {
    const id = make_id();
    await fs.writeFile(path.join(root, id), data);
    return id;
}

module.exports = { get, write, create, make_id };