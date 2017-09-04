var request = require('request-promise-native');
const cheerio = require('cheerio');

request = request.defaults({jar: true});

const options = {
    url: 'http://www.google.com/ncr',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16'
    }
};

module.exports = async function search(query){
    let song = {
        anime: '',
        link: '',
        name: '',
        description: '',
        info: '',
        lyrics: '',
        english: null
    }

    try{

        await request(options);

        let body = await request(`https://www.google.com/search?gws_rd=ssl&site=&source=hp&q=anime%20lyrics%20dot%20com%20${query.replace(/\s/g, '%20')}&oq=google`)

        let $ = cheerio.load(body);

        let result = $('.r').first(); //$($('.r')[0])
        let link = result.children('a')[0].attribs.href.substring(7);
        let cutoff = link.indexOf('&sa=U');
        link = link.substring(0, cutoff);
        
        song.link = link;

        let b = await request(link);
        $ = cheerio.load(b);

        let text = $('td').first().text();

        song.name = $('h1:not(#logo)').first().text();
        song.anime = $(`a[href='anime/${link.substring(8).split('/')[2]}/']`).text();

        let descIndex = text.indexOf('Description: ');

        if(text.includes('English Translation')){
            let lyrics = english = '';
            $(".romaji").get().forEach((el, i, arr) => {
                lyrics += $(el).text().replace('Lyrics from Animelyrics.com', '');
            });
            $(".translation").get().forEach((el, i, arr) => {
                english += $(el).text().replace('Lyrics from Animelyrics.com', '');
            });
            song.lyrics = lyrics;
            song.english = english;

            let songInfo = text.substring(descIndex, text.indexOf('View Kanji')).replace(/(\t|\s{2,})/g, '\n');
            song.description = songInfo.substring(13, songInfo.indexOf('\n'));
            song.info = songInfo.substring(songInfo.indexOf('\n') + 1);
        }
        else
        {
            let lyricIndex = text.indexOf('Lyrics from Animelyrics.com') + 27;
            song.lyrics = text.substring(lyricIndex, text.indexOf('Transliterated')).replace(/(\t|\s{2,})/g, '');

            let pre = text.substring(descIndex, lyricIndex).replace(/(\t|\s{2,})/g, '\n').split('\n').slice(0, -3);
            song.description = pre[0].substring(12);
            song.info = pre[1];
        }

        return song;

/**
            request(link, (err, res, b) => {
                $ = cheerio.load(b);

                let text = $('td').first().text();

                song.name = $('h1:not(#logo)').first().text();

                let lyricIndex = text.indexOf('Lyrics from Animelyrics.com') + 27;
                song.lyrics = text.substring(lyricIndex);

                //text = text.replace(/[\s+][\s+]/g,'');
                let descIndex = text.indexOf('Description: ');

                let pre = text.substring(descIndex, lyricIndex).replace(/\s{2,}/g, '\n').split('\n').slice(0, -3);

                console.log(pre);
                return ;
                //console.log(song);
            })
        });
    });
    **/
    }catch(err){
        throw err;
    }
}