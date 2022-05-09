// const { default: $ } = require("webdriverio/build/commands/element/$");



class GoogleLocators
{

get username()
{
    return $('#username');
}

get password()
{
    return $("//input[@type='password']");
}

get signIn()
{
    return $('#signInBtn');
}

}


module.exports = new GoogleLocators()