import { Selector } from "testcafe"

fixture Getting Started
.page http://zero.webappsecurity.com/

test.only("Valid login test", async t=>{
   await t.click("#signin_button");
   await t.debug();
})

test("Valid login test", async t=>{

    //await t.debug();
 })

