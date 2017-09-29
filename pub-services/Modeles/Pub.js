const _ = require('lodash');
const Owner = require('./Owner');
const Beer = require('../Modeles/Beer');


class Pub {
    constructor(name, owner, openDays, openHours, Beers) {
        this.name = name;
        this.Owner= owner;
        this.opendays=openDays;
        this.openHours=openHours;
        this.Beers= _.forEach(Beers, beer => new Beer(beer.type, beer.name));
    }
}

module.exports= Pub;