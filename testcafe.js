import { Selector } from 'testcafe'

fixture`Getting Started`
    .page`https://www.demoblaze.com/`


test('Valid Sign up test'), async t => {
    await t.click("#signin2");
    await t.typeText("#sign-username", "mynul120");
    await t.typeText("#sign-password", "1234567");
    await t
        .setNativeDialogHandler(() => true)
        .click(Selector("button").withText("Sign up"));
    await t.debug();
}