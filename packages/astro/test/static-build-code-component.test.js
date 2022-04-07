import { loadFixture } from './test-utils.js';
import { expect } from 'chai';
import cheerio from 'cheerio';

describe('Code component inside static build', () => {
	let fixture;

	before(async () => {
		fixture = await loadFixture({
			root: './fixtures/static-build-code-component/',
		});
		await fixture.build();
	});

	it('Is able to build successfully', async () => {
		const html = await fixture.readFile('/index.html');
		const $ = cheerio.load(html);
		expect($('pre').length, 1, 'pre tag loaded');
	});
});
