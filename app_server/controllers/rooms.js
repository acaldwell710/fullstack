var fs = require('fs');

var hotels = JSON.parse(fs.readFileSync('./data/hotels.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {title: 'Travlr Getaways', hotels });
};

module.exports = {
    rooms
};