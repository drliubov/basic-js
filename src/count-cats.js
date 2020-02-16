module.exports = function countCats(catsMatrix) {
    let cat = 0;
    for (let i = 0; i < catsMatrix.length; i++) {
        for (let j = 0; j < catsMatrix[i].length; j++) {
            if (catsMatrix[i][j] == "^^") {
                cat++;
            }

        }
    }
    return cat;
};
