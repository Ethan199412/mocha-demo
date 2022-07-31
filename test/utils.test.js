import Utils from "../src/utils";
import { expect } from 'chai'

describe('Utils 的测试', function () {
    it('1 减 1 应该等于 0', function () {
        expect(Utils.minus(1, 1)).to.be.equal(0);
    });

    it('2 乘 3 应该等于 6', function () {
        expect(Utils.mult(2, 3)).to.be.equal(6);
    });
});