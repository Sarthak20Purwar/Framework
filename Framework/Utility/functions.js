class functions
{
    async SETVALUE(webelement , value)
    {
    
        await webelement.setValue(value);
    }

    async CLICK(webelement)
    {
        await webelement.click();
    }

    async GETTEXT(webelement)
    {
        return await webelement.getText();
    }

    async GETPAGETITLE()
    {
        return await browser.getTitle();
    }

    
}

module.exports = new functions()