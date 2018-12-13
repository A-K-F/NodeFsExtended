'use strict';

const fs = require('./fsPromisifier');
const path = require('path');


const mktree = async (pathString) => {
	try {
		await fs.mkdir(pathString);
	} catch (error) {
		if (error.code == 'ENOENT') {
			await mktree(path.dirname(pathString));
			return fs.mkdir(pathString);
		} else if (error.code != 'EEXIST') {
			throw error;
		};
	};
};

const mktreeSync = (pathString) => {
	try {
		fs.mkdirSync(pathString);
	} catch (error) {
		if (error.code == 'ENOENT') {
			mktreeSync(path.dirname(pathString));
			return fs.mkdirSync(pathString);
		} else if (error.code != 'EEXIST') {
			throw error;
		};
	};
};

module.exports = {
	...fs,
	mktree,
	mktreeSync
};
