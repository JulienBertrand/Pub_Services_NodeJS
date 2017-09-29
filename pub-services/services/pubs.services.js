const Jsonpubs = require('../mocks/pub.json');
const _ = require('lodash');
const Pub = require('../Modeles/Pub');
const Owner = require('../Modeles/Owner');
const OpenHours=require('../Modeles/OpenHours')

function PubList() {
    if (Jsonpubs) {
        return _.forEach(Jsonpubs, pub =>{
            return new Pub(
                pub.name,
                new Owner(
                    pub.owner.firstname,
                    pub.owner.lastname,
                    pub.owner.mail),
                pub.opendays,
                new OpenHours(
                    pub.openHours.start,
                    pub.openHours.end),
                pub.Beers
            )
        });

    }
    else {
        throw new Error('La liste de pubs est incorrecte');
    }
}
function PubListOuvert(day) {
   // var nbrPub = _.size(pubs);
    return _.filter(PubList(), pub => _.includes(pub.openDays, day));
//ArrowFunction
    if (pubListOuvert) {
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
console.log(PubList());