# animelyrics
A hacky scraper for https://www.animelyrics.com.

There may be some errors in the results.

## Installation
```npm install animelyrics```

## Example
```
const search = require('animelyrics');

search('caste room').then(song => {
    console.log(song.anime)
    console.log('-------------')
    console.log(song.lyrics)
})
```

OUTPUT
```
Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e
-------------
kirari chou ga tondetta
sunabokori ga daichi ni mau
haruka kanatasoredemo sora ni akogareta
niramedohoshi wa ochinai
douyatte tsukamaeyou?
kono basho karatoozakaru gunjou no shita debyoudou ga wana o haru
heya ni hari ga ochiru
hikage to hizashi majiwariENTOROPII ga michiteku
seigenteki jiyuu no naka dekimi wa dou ikiru no ka tte
towareta mitai daStep by Stepsukoshizutsu
tsukamitorundahikari o
henka wa kowakunaishinka o togeyou
haiagarunandodemo
sora wa itsudemo matte iru
bokura wachikyuu tte heya o aruku tabibitosemarikuru uso no otofuantei na azamuki
nigeyou to wa omowanai
omoide o tsumiageteirokoku naru shitsuon
sashinoberu kara tsukandesekai wa kimi dake janai
tomo ni tatakau yoDay by Daymitsukatta
ibasho no naka detashika ni
musubitsuitekukizuna ga aru kara
kyozou tachikuzureteku
hontou no chikaramukidasu
bokura waiku beki sora ni chikazuite irufuwari chou ga hana ni tou
"ima no basho de manzoku kai?"
sora o se ni shiteutsukushiku azawaratteta
daichi o kerichou ni tsuzuku
bokura wa imatobitatsuStep by Stepsukoshizutsu
tsukamitorundahikari o
henka wa kowakunaishinka o togeyou
haiagarunandodemo
sora wa itsudemo matte iru
hitori ja hirakenai tobira no mae
kimi to issho narabajiyuu ni nareru
```