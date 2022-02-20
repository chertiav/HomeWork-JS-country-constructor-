function getObj() {return this};

function Country(title, capital, population, area) {
    this.title = title;
    this.capital = capital;
    this.population = population;
    this.area = area;
    getCountry = getObj;
}

const Ukraine = new Country('Ukraine', 'Kyiv', 41167336, 603628 + ' km2');
const Germany = new Country('Federal Republic of Germany', 'Berlin', 83190556, 357022 + ' km2');

function printCountry(obj){
    for (let key in obj) {
        getObj(obj);
        console.log(`${key}: ${obj[key]}`);
    }
}

printCountry(Ukraine);
printCountry(Germany);
