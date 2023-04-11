it('has the x-foo header', async () => {
  const baseUrl = global['baseUrl'];
  const rootResponse = await page.request.fetch(baseUrl);
  expect(rootResponse.status()).toBe(200);
  expect(rootResponse.headers()['x-foo']).toBe('bar');

  const response = await page.request.fetch(`${baseUrl}/test.txt`);
  expect(response.status()).toBe(200);
  expect(response.headers()['x-foo']).toBe('bar');
});
