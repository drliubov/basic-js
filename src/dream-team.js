module.exports = function createDreamTeam(members) {
    let dreamTeam = [];
    
    if (!Array.isArray(members)) return false;
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] !== 'string') continue;
        dreamTeam.push(members[i].trim()[0]);
    }
    
   return dreamTeam.map(x=>x.toUpperCase()).sort().join('');
    

};
