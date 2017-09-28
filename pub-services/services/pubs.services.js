const pubs = require('../mocks/pub.json');
const _ = require('lodash');

function PubList() {
    if (pubs !== undefined) {
        return pubs;
    }
    else {
        throw new Error('La liste de pubs est vide');
    }
}
function PubListOuvert(day) {
   // var nbrPub = _.size(pubs);
    const pubListOuvert = _.filter(pubs, function(pub){return _.includes(pub.openDays, day)});
    if (pubListOuvert !== undefined) {
        return pubListOuvert;
    }
    else {
        throw new Error('La liste de pubs est vide');
    }
    // for (var i = 0; i < nbrPub; i++) {
    //     if (pubs[i].openDays.includes(day)) {
    //         pubListOuvert.push(pubs[i].name);
    //     }
    // }

}

module.exports = {

        PubList,
        PubListOuvert

};
