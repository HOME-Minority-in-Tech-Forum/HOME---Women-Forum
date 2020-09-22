const supertest = require('supertest');
const app = require('../server/server.js')
const request = supertest(app);
//reference
//https://stackoverflow.com/questions/63319638/firestore-internal-assertion-failed-unexpected-state-when-unit-testing-with-j
describe('Testing GET endpoints',  () => {
    it('test the / endpoint', async done => {
        // console.log('hello')
        const response = await request.get('/')
        expect(response.status).toBe(200);
        expect(response.text).toBe('Welcome');
        // console.log(response.body)
        done();
    });

    it('test the /api/companies endpoint', async done => {
        // console.log('hello')
        const response = await request.get('/api/companies')
        expect(response.status).toBe(200);
        // expect(response.body).toBe(true);
        // console.log(response.body)
        done();
    })
})