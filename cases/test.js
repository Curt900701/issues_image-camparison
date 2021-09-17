describe("tests", function() {

    it("should be OK", async function() {

        await browser.url('http://www.baidu.com')
        await browser.checkElement($('#kw'), 'baidu', { /* some options */ })
    })
})