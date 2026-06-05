const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
test('sample', async ({page}) => {
 const login = new LoginPage(page);
 await login.navigate('https://example.com');
});
