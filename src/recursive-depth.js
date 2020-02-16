module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (typeof (arr) !== "object") {
            return 0;
        }

        let max = 0;
        arr.forEach(it => {
            max = Math.max(this.calculateDepth(it), max);
        });

        return max + 1;
    }

};
