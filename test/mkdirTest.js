var fsExt = require('../index.js');
const path = require('path');
// const util = require('util');

// fsExt.rmdir = util.promisify(fsExt.rmdir);

describe('Make tests', () => {
	it('Enables basic fs methods.', async () => {
		await fsExt.mkdir('./helloTest');
		await fsExt.rmdir('./helloTest');
		return;
	});

	const testPath = path.join(__dirname, 'hello/this/is/a/tree');

	it('Makes a tree synchronously.', async () => {
		fsExt.mktreeSync(testPath);

		let rmPath = testPath;
		fsExt.rmdirSync(rmPath);
		fsExt.rmdirSync(rmPath = path.dirname(rmPath));
		fsExt.rmdirSync(rmPath = path.dirname(rmPath));
		fsExt.rmdirSync(rmPath = path.dirname(rmPath));
		fsExt.rmdirSync(path.dirname(rmPath));
		return;
	});

	it('Makes a tree asynchronously.', async () => {
		await fsExt.mktree(testPath);

		let rmPath = testPath;
		await fsExt.rmdir(rmPath);
		await fsExt.rmdir(rmPath = path.dirname(rmPath));
		await fsExt.rmdir(rmPath = path.dirname(rmPath));
		await fsExt.rmdir(rmPath = path.dirname(rmPath));
		await fsExt.rmdir(path.dirname(rmPath));
		return;
	});
});
