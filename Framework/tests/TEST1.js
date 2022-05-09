// const { default: $ } = require('webdriverio/build/commands/browser/$');
const code = require('../PageObject/Locators')
const func = require('../Utility/functions')
const data= require('../PageObject/testdata')

describe("Login Test" , async()=>

{
    it('Login Success page title' , async()=>
    {
        await browser.url(data.Url);
        await func.SETVALUE(code.username ,data.name);
        await func.SETVALUE(code.password , data.password);
        await func.CLICK(code.signIn);
        await browser.pause(2000);
        console.log(await func.GETPAGETITLE());
        //assertion
        await expect(browser).toHaveUrlContaining(data.Urlassertion);
        await expect(browser).toHaveTitle(data.title);
    
    
    
    })
})