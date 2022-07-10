//var jest = require('jest');
//import app from "../index";
const supertest = require('supertest');
const {app, server} = require("../index");

const api = supertest(app);

//server ok, GET test
test('default are returned as json', async () => {
    await api.get('/').expect(200)
})

//without params
test('2text expect 400 without params', async () => {
    await api.post('/translate/2text').expect(400)
})
test('2morse expect 400 without params', async () => {
    await api.post('/translate/2morse').expect(400)
}) 

//no found with GET
test('2text can not get request', async () => {
    await api.get('/translate/2text').expect(404)
})
test('2morse can not get request', async () => {
    await api.get('/translate/2morse').expect(404)
}) 

//test translate
test('2text translate test', async () => {
    const response = await api.post('/translate/2text').expect(200).send({"text":". ... - --- / . ... / ..- -. .- / .--. .-. ..- . -... .- / -.. . / - .-. .- -.. ..- -.-. -.-. .. --- -. / .- / -- --- .-. ... ."});
    expect(response.body.result).toBe("esto es una prueba de traduccion a morse")
})
test('2morse translate test', async () => {
    const response = await api.post('/translate/2morse').expect(200).send({"text":"ESTO es UNA prueba de traduccion a morse"});
    expect(response.body.result).toBe(". ... - --- / . ... / ..- -. .- / .--. .-. ..- . -... .- / -.. . / - .-. .- -.. ..- -.-. -.-. .. --- -. / .- / -- --- .-. ... .")
}) 


test('mutual translate test with all characters', async () => {
    var originalText = "abcdefghijklmnopqrstuvwxyz0123456789";
    const response2morse = await api.post('/translate/2morse').expect(200).send({"text":originalText});
    var translatemorse = response2morse.body.result;
    const response2text = await api.post('/translate/2text').expect(200).send({"text":translatemorse});
    var translateText = response2text.body.result;
    
    //compere translates
    expect(originalText).toBe(translateText);
}) 


afterAll(() => {
    server.close();
})

/*describe('GET /tasks',()=>{
    test('should respond with a 200 status code',async ()=>{
        const response = await request(app).get('/tasks').send();
        console.log(response);
    });
});*/