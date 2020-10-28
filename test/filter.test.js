import chai from "chai";
import { filter } from "../app.js";

describe('filter test', () => {
    it('should show the animals matching with the ry string pattern', () => {
        const result = filter('ry');
        chai.expect(result).to.equal('[{"name":"Uzuzozne","people":[{"name":"Lillie Abbott","animals":[{"name":"John Dory"}]}]},{"name":"Satanwi","people":[{"name":"Anthony Bruno","animals":[{"name":"Oryx"}]}]}]');
    });
});