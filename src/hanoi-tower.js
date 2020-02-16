module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let obj = {}
    obj.turns = 2**disksNumber - 1;
    obj.seconds = (2**disksNumber - 1)/turnsSpeed*3600;
    return obj;
}