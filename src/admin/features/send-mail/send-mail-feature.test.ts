import * as send_mail_feature from "./send-mail-feature"
// @ponicode
describe("send_mail_feature.sendMailFeature", () => {
    test("0", () => {
        let callFunction: any = () => {
            send_mail_feature.sendMailFeature()
        }
    
        expect(callFunction).not.toThrow()
    })
})
