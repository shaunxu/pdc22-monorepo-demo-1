import { assert } from "chai";
import { lib } from "../src";

describe("test lib", () => {
    it("should return lib", () => {
        assert.strictEqual(lib(), "lib");
    });
});