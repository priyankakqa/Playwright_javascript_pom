class LoginPage {
 constructor(page){ this.page=page; }
 async navigate(url){ await this.page.goto(url); }
}
module.exports = LoginPage;
