const chai = require('chai');
const chaiHttp = require('chai-http'); // Import chai-http
const expect = chai.expect;
const server = require('../app'); // Import the server from app.js
// Tell chai to use the chai-http plugin
chai.use(chaiHttp);
describe('Simple Web App Tests', () => {
6
it('should return a 200 status code', (done) => {
chai.request(server)
.get('/')
.end((err, res) => {
expect(res).to.have.status(200);
done();
});
});
it('should contain "Welcome" in the body', (done) => {
chai.request(server)
.get('/')
.end((err, res) => {
expect(res.text).to.include('Welcome');
done();
});
});
});