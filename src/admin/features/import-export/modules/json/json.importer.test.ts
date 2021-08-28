import * as json_importer from "./json.importer"
// @ponicode
describe("json_importer.jsonImporter", () => {
    test("0", async () => {
        await json_importer.jsonImporter("foo bar", "bc23a9d531064583ace8f67dad60f6bb")
    })

    test("1", async () => {
        await json_importer.jsonImporter("This is a Text", "a1969970175")
    })

    test("2", async () => {
        await json_importer.jsonImporter("Hello, world!", "withdrawal transaction at Kovacek Inc using card ending with ***6291 for IRR 718.83 in account ***77705372")
    })

    test("3", async () => {
        await json_importer.jsonImporter("This is a Text", false)
    })

    test("4", async () => {
        await json_importer.jsonImporter("This is a Text", "deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125")
    })

    test("5", async () => {
        await json_importer.jsonImporter("", Infinity)
    })
})
