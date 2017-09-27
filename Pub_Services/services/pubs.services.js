var pubs=require('../mocks/pub.json');
var _= require('lodash');

function PubList() {
    return pubs;

}
//console.log(pubs);

function PubListJours(){
    var nbrPub = _.size(pubs);
    console.log(nbrPub);
    for (var i=0; i<nbrPub; i++){
      var pubTab= pubs[i].name;
      var pubTabOpen = pubs[i].openDays;
console.log(pubTab);
console.log(pubTabOpen);
    }
   // return pubsjours;
}

PubListJours();
