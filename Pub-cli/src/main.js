const pubService = require('../../pub-services');
const moment = require('moment');

function getListPubs() {
    return pubService.services.pubService.PubList();
}

function getListPubsOuvert() {
    return pubService.services.pubService.PubListOuvert(moment().format('dddd'));
}


module.exports = {
    getListPubs,
   getListPubsOuvert
};