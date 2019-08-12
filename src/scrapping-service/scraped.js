let axios = require('axios');
let cheerio = require('cheerio');

let url = 'https://www.instant-gaming.com/es/juegos/steam/';


axios.get(url)
    .then( response => {
        let $ = cheerio.load(response.data);
        let gamesList = [];
        
        $('.item.mainshadow').each(function(i) {
            gamesList[i] = {
                title: $(this).children('.name').text(),
                image: $(this).find('.picture.mainshadow').attr('src'),
                price: $(this).find('.price').text().trim(),
                discount:$(this).find('.discount').text()
                
            }
        });
        console.log(gamesList);
        return gamesList;
    })
    
    .catch(error => {
        console.log(error);
        
    })