module.exports = function getSeason(date) {
    if (date == undefined || date == 0) return 'Unable to determine the time of year!';
    let t = {}.toString.call(date);
    
    if (!date instanceof Date || !t.includes('Date')) throw new Error();
    
    let month = date.getMonth();
    
    if (month<=1 || month==11) return "winter";
    if (month<=4) return "spring";
    if (month<=7) return "summer";
    if (month<=10) return "autumn";
        
};
