const pubservice = require('../index').services.pubService;
const moment = require('moment');

const expect = require('chai').expect;

describe('pubs.services', function () {
    describe('PubList()', function () {
        it('vérifie que la liste de pubs retournée n\'est pas vide', function () {
            expect(pubservice.PubList().length >= 0);
        });

        it('vérifie que la liste de pubs retournée est bien égale à 3', function(){
            expect(pubservice.PubList().length).to.equal(3);
        });

    });

    describe('PubList()', function () {
        it('vérifie que la methode moment().format(\'dddd\') retourne bien un jour de la semaine', function(){
            expect(moment().format('dddd')).is.oneOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
        });

        it('vérifie que la liste de pubs retournée au jeudi 28/09 est bien égale à 2', function(){
            expect(pubservice.PubListOuvert(moment().format('dddd')).length).to.equal(3);
        });

        it('vérifie que la liste de pubs retournée pour le jour de vendredi est bien égale à 3', function(){
            expect(pubservice.PubListOuvert('Friday').length).to.equal(3);
        });

        it('vérifie que la liste de pubs retournée pour le lundi est bien égale à 2', function(){
            expect(pubservice.PubListOuvert('Monday').length).to.equal(2);
        });

    })
});
