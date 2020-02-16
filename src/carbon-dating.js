const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    let year = 0;
    if (typeof sampleActivity !== 'string') return false;

    let num = parseFloat(sampleActivity);

    if (isNaN(num) || num <= 0 || num > MODERN_ACTIVITY) return false;
    year = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
    return year;
};
