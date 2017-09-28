var pub = require('../services/pubs.services');
var moment = require('moment');
var assert = require('assert');
var expect = require('chai').expect;


try {
    console.log(pub.PubList());
}
catch (e) {
    console.log(e.message);
}
console.log(' ');
try {
    console.log(pub.PubListOuvert(moment().format('dddd')));
}
catch (e) {
    console.log(e.message);
}
console.log(' ');
try {
    console.log(pub.PubListOuvert('Tuesday'));
}
catch (e) {
    console.log(e.message);
}
console.log(' ');
try {
    console.log(pub.PubListOuvert('Monday'));
}
catch (e) {
    console.log(e.message);
}





describe('pubs.services', function(){
    describe('PubList()', function() {
        it('vérifie que la liste de pubs retournée n\'est pas vide', function(){
            assert.equal(pub.PubList(), []);
        });
    });
});

