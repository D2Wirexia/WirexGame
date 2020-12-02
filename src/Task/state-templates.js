/*
Как добавить новую категорию?
- Оформите его в виде:
{
	img: [
		'<ссылка>',
		'<ссылка>',
		'<ссылка>'
	],
	answer: 'ответ'
}

Как добавить символ верхней кавычки (апостроф) в блок?
 - К примеру "О'Коннор", нужно это сделать в виде: 'О\'Коннор'
 тоесть перед апострофом поставить символ '\'
*/

/*
!!! Добавлять не более 12 песен !!!

Как добавить новую категорию?
 - Оформите его в виде:
{
	name: 'название песни',
	word: ['слово1', 'слово2', 'слово3', 'слово4', 'слово5'],
	mus: mus<порядковый номер>,
	img: '<ссылка>',
	prompt: 'подсказка к песне' (ставить null если пусто)
}

Как добавить символ верхней кавычки (апостроф) в блок?
 - К примеру "О'Коннор", нужно это сделать в виде: 'О\'Коннор'
 тоесть перед апострофом поставить символ '\'
 */
import mus1 from './../library/mus1.mp3'
import mus2 from './../library/mus2.mp3'
import mus3 from './../library/mus3.mp3'
import mus4 from './../library/mus4.mp3'
import mus5 from './../library/mus5.mp3'
import mus6 from './../library/mus6.mp3'
import mus7 from './../library/mus7.mp3'
import mus8 from './../library/mus8.mp3'
import mus9 from './../library/mus9.mp3'
import mus10 from './../library/mus10.mp3'
import mus11 from './../library/mus11.mp3'
import mus12 from './../library/mus12.mp3'


export const WhatCommon = [
	{
		img: [
			'https://for-travels.ru/wp-content/uploads/2017/11/gorod-Nju-Jork.jpg',
			'https://shophelp.ru//uploads/images/topic/2016/11/02/9a918a46cb_1000.jpg',
			'https://user30887.clients-cdnnow.ru/uploads/5f42be1ca2166729754685.jpg'
		],
		answer: 'Новый'
	},
	{
		img: [
			'https://aif-s3.aif.ru/images/005/064/08ab20afca72c92f8d100c433ad38c9f.jpg',
			'https://s1.1zoom.me/big7/505/Monuments_311474.jpg',
			'https://russkiymir.ru/upload/medialibrary/5b1/5b1c12eaf9b3cb3ba6311d097fe3f0f3.jpg'
		],
		answer: 'Защита'
	},
	{
		img: [
			'https://слышувижу.рф/wp-content/uploads/2018/11/CHasy-naruchnye-govoryashhie-dlya-slepyh-ARS-TK2007.jpg',
			'https://api.tpstatic.ru/upload/medialibrary/983/koshka_metit_territoriyu.jpg',
			'https://www.westfalika.ru/upload/iblock/f4f/%D0%A8%D0%BD%D1%83%D1%80%D0%BA%D0%B8-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B5.jpg'
		],
		answer: 'Тянуть'
	},
	{
		img: [
			'https://cdn2.unrealengine.com/Diesel%2Fblog%2Foctober-feature-update%2FLBRY-1600x900-60f04ae664f97f93eadf3361cbc3cc5fee6f1640.png',
			'https://i.obozrevatel.com/gallery/2017/11/28/13568max.jpg',
			'https://cdn2.img.inosmi.ru/images/24703/72/247037237.jpg'
		],
		answer: 'Качать'
	},
	{
		img: [
			'https://avtozvuk-info.ru/wp-content/uploads/2014/12/kak-zapisat-muzyku-na-disk-dlya-avtomagnitoly.jpg',
			'https://cdn.kanalukraina.tv/i/image_680x382/uploads/public/uploads/public/novosti/5d9ac5f9ea38f_2.jpeg',
			'https://woodpresent.com.ua/wp-content/uploads/2017/07/notebook_kraft-1000x750.jpg'
		],
		answer: 'Запись'
	},
	{
		img: [
			'https://autoburum.com/files/images/blog/1170vacf698.jpg',
			'https://www.tehnari.ru/attachments/f100/97387d1347963472-2012-06-18_00006.jpg',
			'https://www.rubaltic.ru/upload/iblock/20e/20e798c5d785d30cd05cec4e2a6b0557.jpg'
		],
		answer: 'Тормоз'
	},
	{
		img: [
			'https://aif-s3.aif.ru/images/015/146/d23d6dff8ee8358073b5eae545268afe.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQa-2-t3NWJaREUhD9m_aecygV_9LfGFjpIcQ&usqp=CAU',
			'https://www.kaluga-poisk.ru/system/Cover/images/000/144/698/big/Shining.jpg'
		],
		answer: 'Боль'
	},
	{
		img: [
			'https://www.film.ru/sites/default/files/styles/thumb_g_674x450/public/movies/frames/Step-Up-All-In-01.jpg',
			'https://www.oblgazeta.ru/media/article_photos/2f52374c6fb60b27fa987b77c1787856c09d405fb39d037f8c442fd6.png.1024x0_q85.jpg',
			'https://www.autocentre.ua/wp-content/uploads/2017/12/Kontrol-dvizheniya-po-zadnemu-steklu.jpg'
		],
		answer: 'Ход'
	},
	{
		img: [
			'https://prostotech.com/uploads/posts/2018-05/medium/1526169758_screenshot_110.jpg',
			'https://sm-news.ru/wp-content/uploads/2020/05/04/02-3-1300x675.jpg',
			'https://static.mk.ru/upload/entities/2020/07/03/16/articles/facebookPicture/68/df/78/e7/f08dd2395a93251146e83d02732872f8.jpg'
		],
		answer: 'Светить'
	},
	{
		img: [
			'https://regnum.ru/uploads/pictures/news/2019/09/21/regnum_picture_1569030846165787_normal.jpg',
			'https://glavcom.ua/img/article/6132/78_main.jpeg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKDzLPBEyBBqBvKZQmtEMyaTSHP1YUEeAbEg&usqp=CAU'
		],
		answer: 'Братья'
	},
	{
		img: [
			'https://images.ua.prom.st/1791479573_apelsinovye-palochki-25.jpg',
			'https://rentpro.com.ua/wp-content/uploads/2017/09/BB0159.jpg',
			'https://zooplanet.net.ua/wp-content/uploads/2018/02/%D0%9B%D0%B0%D0%BA%D0%BE%D0%BC%D1%81%D1%82%D0%B2%D0%BE-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA-%E2%80%93-%D0%A0%D0%BE%D0%B3-%D0%B1%D1%83%D0%B9%D0%B2%D0%BE%D0%BB%D0%B0-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-Trixie.jpg'
		],
		answer: 'Мороженое'
	},
	{
		img: [
			'https://image.freepik.com/free-photo/young-man-shocked-and-screaming_58466-7041.jpg',
			'https://optomarket.com.ua/media/wysiwyg/pokupki468.jpg',
			'https://i.miningwiki.ru/thumb/0/0a/1273821111_ug_01.jpg/300px-1273821111_ug_01.jpg'
		],
		answer: 'Гореть'
	},
	{
		img: [
			'https://snitsa.ru/img/resources/4b19244f-c9de-44cd-8dc4-d09081ab4e76.jpg',
			'https://www.eco-chistka.ru/img/coffe-1.jpg',
			'https://live24.ru/uploads/posts/2020-01/1579343391_screenshot_2020-01-18-rodinka-v-pupke-i-na-zhivote-magicheskoe-znachenie-otmetin-na-tele_3-jpg-izobrazhenie-jpeg-1000-66_.png'
		],
		answer: 'Пятно'
	},
	{
		img: [
			'https://www.shokoladki.ru/articles/gorkiy-shokolad-polza-i-vred.jpg',
			'https://ydobreniam.ru/wp-content/uploads/2017/10/1-min-1.jpg',
			'https://mama66.ru/wp-content/uploads/post-36905-2017-04-06-04-04-07.jpeg'
		],
		answer: 'Горький'
	},
	{
		img: [
			'https://img.dni.ru/binaries/v3_main/328818.jpg',
			'https://shkolazhizni.ru/img/content/i111/111288_or.jpg',
			'https://www.meme-arsenal.com/memes/732bfb674852eaa3e5d3885c08de94fa.jpg'
		],
		answer: 'Закатывать'
	},
	{
		img: [
			'https://s0.rbk.ru/v6_top_pics/media/img/2/44/754598877062442.jpeg',
			'https://lapku.ru/images/43309/poni.jpg',
			'https://doc.by/assets/uploads/2018/03/brus.jpg'
		],
		answer: 'Не растет'
	},
	{
		img: [
			'https://fishki.net/picsw/092011/06/auto/nomer/auto-002.jpg',
			 'https://cdn.super.ua/2018/06/super.ua-1528104557.jpg',
			 'https://gohotels.com.ua/images/gohotels/hotel/3436/343547/030f187593ec51504b9d3146a3a097b3.JPG'
		],
		answer: 'Номер'
	},
	{
		img: [
			'https://turisto.com/blog/wp-content/uploads/2018/01/duty-free-alcohol-2.jpg',
			'https://zooclub.ru/attach/29000/29287.jpg',
			'https://guidepc.ru/wp-content/uploads/2018/11/wsi-imageoptim-xSUSmuSAwW6TAZyGapIY.jpg'
		],
		answer: 'Фри'
	},
	{
		img: [
			'https://www.expertboxing.ru/wp-content/uploads/2010/05/kak-uklonyatsya-ot-udarov-v-bokse.jpg',
			'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3662-3663-4335-a661-663061393839__rabbit-2174679_1280.jpg',
			'https://images.ua.prom.st/930521297_panel-ogon-v.jpg'
		],
		answer: 'Разводить'
	},
	{
		img: [
			'https://s.pfst.net/2010.01/321518714d5d0226366dc54eec866c90095c3_b.jpg',
			'https://i2.rozetka.ua/goods/8467861/59552062_images_8467861036.jpg',
			'https://thumbs.dreamstime.com/t/%D0%BB%D0%BE%D0%BA%D0%BE%D1%82%D1%8C-%D0%B8-%D1%80%D1%83%D0%BA%D0%B0-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9-%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D0%BE%D1%81%D1%8B%D0%BB%D0%BA%D0%B5-100380980.jpg'
		],
		answer: 'Кусать'
	},
	{
		img: [
			'https://static-cse.canva.com/image/92152/213.png',
			'https://mobile-review.com/articles/2018/image/10-reasons-yandex-phone/1.jpg',
			'https://images.ua.prom.st/1831717240_velosiped-bez-skorostej.jpg'
		],
		answer: 'Рама'
	},
	{
		img: [
			'https://m.buro247.ru/images/Sherlock2.jpg',
			'https://hi-news.ru/wp-content/uploads/2020/01/google9262.jpg',
			 'https://agressor.com.ua/uploads/8640/item/zoom/i3976217-d22761f81960e34f6bb422c7fde879dd.jpg'
		],
		answer: 'Искать'
	},
];

export const GuessMusic = [
	{
		name: 'Post Malone - rockstar',
		musicSRC: 'https://cdn1.muzgoo.net/uploads/files/2018-02/1518625879_03_-post-malone-feat_-21-savage-rockstar.mp3'
	},
	{
		name: 'John Legend - All Of Me',
		musicSRC: 'https://dl.mp3mob.net/uploads/files/2019-08/1565874513_john-legend-all-of-me.mp3'
	},
	{
		name: 'Ariana Grande - Side To Side',
		musicSRC: 'https://dl.sonq.ru/music/49525/Nicki-Minaj-feat-Ariana-Grande_-_Side-To-Side_sonq.ru.mp3'
	},
	{
		name: 'Maroon 5 - Animals',
		musicSRC: 'https://mp3name.net/download.php?id=26135'
	},
	{
		name: 'Taylor Swift - Blank Space',
		musicSRC: 'https://sefon.pro/api/mp3_download/direct/58597/3vUCAB6SH20xSPzf258bldMRjWbxWlDiZOGZHdsE3muJdiNXIA8mDGFpInqOnZjMevt_mOjjuUd4zqiHitrwB2dIWhZOTl3HP9hzTyUtyFvgfKfgfn9wvQ1phNzLuiwEenaFn9s_36Y8zZJxAHIzZKrpM1qOaEc49Mps4Q/'
	},
	{
		name: 'Little Big - UNO',
		musicSRC: 'https://vipik.net/files/music/2020/04/Klava_Koka_Transleyt_-_UNO_Little_Big_na_russkom.mp3'
	},
	{
		name: 'BTS - Fake Love (cover Клава Кока)',
		musicSRC: 'https://muzup.ru/uploads/music/2018/08/Klava_Koka_Fake_Love_BTS_ft_Dima_Maslennikov.mp3'
	},
	{
		name: 'Zedd - Stay',
		musicSRC: 'https://sefon.pro/api/mp3_download/direct/73520/3vUCANJ4P3Yu1AcSynoG0AtZ5nGXbTg7OH9Veg-24N_EmD8UZQdi-60LZ_54h_JpJaTlb-w-2XcvlxCNeL9-z9zeUXPdEl9vnI_ZrLLBeNnI7r-q7F8aOkqupRdcB6FOcgzMR1Vi0V_vNcu644r7-uLBz51tX8yHho728g/'
	},
	{
		name: 'Taylor Swift - Style',
		musicSRC: 'https://sefon.pro/api/mp3_download/direct/58509/3vUCADmKI4hOcE0Fw9ambpJG4lysGvx3ZkgyUgjrdWrnpDf9qOq-7R7dLHHmXorvoI5QQUqtFgEeFewlVhAK4ALaWIzKmYTuPAaxFhhX6BLd0oouqBdDNtC41UTXjmW4_OczrZ7xqAYijY09EGZFdkxGb8oXNQMA4Z6AXA/'
	},
	{
		name: 'Justin Timberlake - Can\'t Stop The Feeling',
		musicSRC: 'https://музыка.me/download/MWExM2Q1NGQ5ZjM5MzY0MjU2OWY5OGU3ZTQ4NWRiOTF8bG9hZA.mp3'
	},
	{
		name: 'Sabrina Carpenter - Thumbs',
		musicSRC: 'https://музыка.me/download/MjAyMDk0NGM3OGVhMDBhYmNlNjFlZDMyNzk2ODNkY2N8bG9hZA.mp3'
	},
	{
		name: 'Ed Sheeran & Justin Bieber - I Don\'t Care',
		musicSRC: 'https://muz-bars.ru/uploads/files/2019-05/1557864075_ed-sheeran-justin-bieber-i-don039t-care-muz-bar_net.mp3'
	}
];

export const MusicWord = [
	{
		name: 'Niletto - Любимка',
		word: ['я', 'просто', 'трачу', 'свой', 'тайм'],
		mus: mus1,
		img: 'https://www.musicnews1.org/_pu/385/15699839.jpg',
		prompt: null
	},
	{
		name: 'Александр Рыбак - Небеса Европы',
		word: ['песни', 'моей', 'любви', 'без', 'границ'],
		mus: mus2,
		img: 'https://i.ytimg.com/vi/izej_xd-ESE/maxresdefault.jpg',
		prompt: 'И гуляют по бульварам столиц'
	},
	{
		name: 'Artik & Asti - Грустный Дэнс',
		word: ['ты', 'так', 'красиво', 'теряешь', 'меня'],
		mus: mus3,
		img: 'https://i.ytimg.com/vi/X33CqddiYdU/hqdefault.jpg',
		prompt: 'Как в паутине большой сети, Ты рассыпаешься в памяти'
	},
	{
		name: 'Валентин Стрыкало - Наше лето',
		word: ['в этом', 'мире', 'только', 'мы', 'одни'],
		mus: mus4,
		img: 'https://clippz.ru/images/valentin-stryikalo-nashe-leto_md1n6027/22.jpg',
		prompt: 'Но когда печаль в моей душе я вспоминаю'
	},
	{
		name: 'Андрей Губин — Девушки, как звёзды',
		word: ['что', 'светят', 'в небе', 'до', 'утра'],
		mus: mus5,
		img: 'https://i.ytimg.com/vi/lfnkf310LRo/mqdefault.jpg',
		prompt: 'Ходят девушки такие, Что не верится глазам.'
	},
	{
		name: 'Ramil\' - Сияй',
		word: ['целый', 'мир', 'что', 'дотла', 'горит'],
		mus: mus6,
		img: 'https://i.ytimg.com/vi/nI6ZP9nz4Y8/maxresdefault.jpg',
		prompt: 'И твой поцелуй тут был бы не причем'
	},
	{
		name: 'Zivert - Credo',
		word: ['каждому', 'по факту', 'рядом', 'нужен', 'человек'],
		mus: mus7,
		img: 'https://zivert.life/wp-content/uploads/2020/02/1581866359374-1.jpg',
		prompt: 'Это так абстрактно, Это бабочки эффект'
	},
	{
		name: 'Тима Белорусских - Мокрый кроссы',
		word: ['фонари', 'для', 'нас', 'не', 'гаснут'],
		mus: mus8,
		img: 'https://i.ytimg.com/vi/48Heq9b3UNU/hqdefault.jpg',
		prompt: 'На нашей улице сказки'
	},
	{
		name: 'Филипп Киркоров - Цвет настроения синий',
		word: ['страсть', 'над', 'ней', 'имеет', 'власть'],
		mus: mus9,
		img: 'https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2018/04/kirkorov.png?fit=1914%2C811&ssl=1',
		prompt: 'Внутри Мартини, а в руках бикини'
	},
	{
		name: 'Сергей Лазарев - Это все она',
		word: ['глаза', 'такие', 'синие', 'глаза', 'магнит'],
		mus: mus10,
		img: 'https://i.ytimg.com/vi/qPMypN6lQU0/maxresdefault.jpg',
		prompt: 'На платье распустились лилии и я убит'
	},
	{
		name: 'Клава Кока - Покинула Чат',
		word: ['твоя', 'песенка', 'спета', 'колонки', 'молчат'],
		mus: mus11,
		img: 'https://tntmusic.ru/media/content/share_image/2020-03-05_14-01-58__e0d27138-5ee9-11ea-a0d2-fd32c361bc6e.jpg',
		prompt: 'Заливаешь боль, боль на своих тусовках'
	},
	{
		name: 'MONATIK - Кружит',
		word: ['так', 'особенно', 'сегодня', 'чувства', 'кипят'],
		mus: mus12,
		img: 'https://i.ytimg.com/vi/n0-f2_CJA9A/maxresdefault.jpg',
		prompt: 'Оказалось, вокруг тебя весь мир'
	},

];

export const PutInPlaces = [
	{
		img: [
			'https://sposob.com.ua/wa-data/public/shop/products/47/43/24347/images/52546/52546.345x0.jpg',
			'https://toysmarket.by/image/cache/catalog/product/fbr37-fxl44_5c0d91b5bdc238fa78dfa26eb06b1a21-1500x1500.jpg',
			'https://babypro.ua/images/product_images/popup_images/111249_0.jpg',
			'https://melkiy.com/image/cache/catalog/images/dlya-devochek/ever-after-high/DenNaslediya/1_1-1280x1280.jpg',
			'https://cp12.nevsepic.com.ua/65-5/1354567199-0364657-www.nevsepic.com.ua.jpg',
			'https://toysline.com.ua/content/images/44/kukla-lol-surpriz-omg-disko-skeyter-lol-surprise-omg-roller-chick-567196-59677078138868_small11.png',
		],
		concept: ['Monster High', 'Barbie', 'Bratz', 'Ever After High', 'Robert Tonner',
			'LOL Surprise'],
		conceptRand: ['Barbie', 'Ever After High', 'Robert Tonner', 'Monster High', 'Bratz', 'LOL Surprise'],
	},
	{
		img: [
			'https://pics.botanichka.ru/wp-content/uploads/2016/08/Gloriosa-01.jpg',
			'https://www.sudakdom.ru/193/images/1.JPG',
			'https://www.domrastenia.com/images/foto/cvety/medinilla/medinilla3.jpg',
			'https://mrdachnik.com/wp-content/uploads/2019/03/Myosotis.jpg',
			'https://kak2z.ru/my_tagimg/img/2015/07/22/23b92.jpg',
			'https://rastenievod.com/wp-content/uploads/2017/05/1-700x466.jpg'
		],
		concept: ['Глориоза', 'Ландыш', 'Мединилла', 'Незабудка', 'Миддлемист', 'Гортензия'],
		conceptRand: ['Незабудка', 'Глориоза', 'Миддлемист', 'Ландыш', 'Гортензия', 'Мединилла']
	},
	{
		img: [
			'https://vse-vino.ru/wp-content/auploads/253091/retsepty-prigotovleniya-punsha.jpg',
			'https://borisfen-market.com.ua/image/data/2015/05/%D0%A1%D0%B0%D0%BC%D0%B1%D1%83%D0%BA%D0%B0%20%D0%98%D0%B1%D0%B8%D1%86%D0%B0%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80.jpg',
			'https://wine-shopper.ru/image/cache/catalog/%20%D0%B2%D0%B8%D0%BD%D0%B0/333/00_1-4-600x600.jpg',
			'https://vzboltay.com/uploads/posts/2015-03/1427120459_mojito.jpg',
			'https://produktoff.com/static/upload/goods/19/94219_square.jpg',
			'https://borisfen-market.com.ua/image/data/2016/04/xenta_05.jpg'
		],
		concept: ['Индия', 'Италия', 'Португалия', 'Куба', 'Франция', 'Швейцария'],
		conceptRand: ['Португалия', 'Франция', 'Швейцария', 'Индия', 'Куба', 'Италия']
	},
	{
		img: [
			'https://www.gastronom.ru/binfiles/images/20180530/b9c4dc6c.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeTjeQpLfVvtaY8-pwtaPwpfFMhaivLSVowQ&usqp=CAU',
			'https://static.1000.menu/img/content/29283/adobo-iz-kuricy_1540483319_1_max.jpg',
			'https://st2.depositphotos.com/1000538/5670/i/950/depositphotos_56702357-stock-photo-rakfisk.jpg',
			'https://e0.edimdoma.ru/data/recipes/0009/8091/98091-ed4_wide.jpg?1491805656',
			'https://www.photorecept.ru/wp-content/uploads/2018/10/paprikash-iz-kurinoj-grudki.jpg'
		],
		concept: ['Бразилия', 'Турция', 'Филиппины', 'Норвегия', 'Испания', 'Венгрия'],
		conceptRand: ['Испания', 'Турция', 'Норвегия', 'Венгрия', 'Бразилия', 'Филиппины']
	},
	{
		img: [
			'https://u.kanobu.ru/screenshots/69/ad96b240-3285-4abb-978f-6c948a772a98.jpg',
			 'https://live24.ru/uploads/posts/2020-05/1589551407_1.jpg',
			 'https://top-mmorpg.ru/uploads/posts/2018-02/1519246411_sistemnye-trebovaniya-fortnite-top-mmorpg_ru.jpg',
			 'https://st.overclockers.ru/legacy/blog/362268/113919_O.jpg',
			'https://media.kg-portal.ru/games/o/outerworlds/images/outerworlds_11.jpg',
			'https://cdn.igromania.ru/mnt/articles/f/1/4/e/3/a/30195/preview/66a194a17b3d5004_1200xH.jpg',
		],
		concept: ['RE3', 'Mafia 3', 'Fortnite', 'Metro Exodus', 'The Outer Worlds', 'Rage 2'],
		conceptRand: ['Fortnite', 'Rage 2', 'RE3', 'Metro Exodus', 'Mafia 3', 'The Outer Worlds'],
	},
	{
		img: [
			'https://cdn.igromania.ru/mnt/news/8/2/a/c/9/9/78084/4f317f6128c0a49a_1200xH.jpg',
			 'https://cs8.pikabu.ru/post_img/big/2017/02/24/5/148791823112231380.jpg',
			 'https://cdn.igromania.ru/mnt/articles/d/b/9/2/2/5/29930/html/more/4addd90dcdfe9712_848xH.jpg',
			 'https://citaty.info/files/portraits/unnamed_0.jpg',
			 'https://pm1.narvii.com/6899/107f4fffdab6c458f2ce0212fa1061c639fc6dedr1-1200-900v2_uhq.jpg',
			 'https://pbs.twimg.com/profile_images/1221334331182002176/p67x3b2J_400x400.png'
		],
		concept: ['Цири', 'Nier', 'Соня Блэйд', 'Трисс Меригольд', 'Шани', 'Лара Крофт'],
		conceptRand: ['Трисс Меригольд', 'Цири', 'Лара Крофт', 'Nier', 'Соня Блэйд', 'Шани'],
	},
	{
		img: [
			'https://static10.tgstat.ru/channels/_0/56/56f0932ad9bcb20890c067c294638cf8.jpg',
			'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.169.1349.1349a/s640x640/91372225_267158610966461_602633055288564864_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=PO0NszR93yAAX_Aj2ga&oh=af6886c6c6402d9954ad6da597e1e565&oe=5FC9DA01',
			'https://svirtus.cdnvideo.ru/SO9sxAqnAkR1tN1Kg6jXFhWvYMM=/0x0:371x371/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/d4/d4e61b79893464edf8fac84d5b25bcd6.jpg?m=6abf7ca4aedde894c0fb76aea5a89542',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNX82bEVzlpEh3V0XTAV9BBiLCQwlUgPSjsQ&usqp=CAU',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5SX-mAZePnayNx9Qf-F5mwb3nGHLQ8uH9oQ&usqp=CAU',
			'https://a.t30p.ru/?twitch.tv%2Ffruktozka',
		],
		concept: ['AhriNyan', 'Leya', 'AVDEECH', 'Yuuechka', 'tati', 'Fruktozka'],
		conceptRand: ['AVDEECH', 'AhriNyan', 'Fruktozka', 'tati', 'Leya', 'Yuuechka'],
	},
	{
		img: [
			'https://yt3.ggpht.com/a/AATXAJzfJyQYYJF41bBgHgkJQSMikBZU7r0muXpHowXyVg=s900-c-k-c0x00ffffff-no-rj',
			'https://images-awards.donationalerts.com/requests/1104?1565260634',
			'https://i.ytimg.com/vi/9kBFeZ9Q-_s/maxresdefault.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLeydOup6Erl_78kRIz1bDIna6uwd86BcT2g&usqp=CAU',
			'https://svirtus.cdnvideo.ru/OYi9DlGDf-uv1cAD_JNoTssaoQI=/0x0:1080x1080/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/16/16abaa1a67dc84ac370f41fe59527ea9.jpg?m=72a4b33bdc462db6fecd0e624f14812a',
			'data:image/jpeg;base64,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',
		],
		concept: ['buster', 'PCH3LK1N', 'ZLOYn', 'Mokrivskyi', 'Evelone', 'StRoGo'],
		conceptRand: ['PCH3LK1N', 'ZLOYn', 'Evelone', 'Mokrivskyi', 'StRoGo', 'buster'],
	},
];

export const WhatAndWithWho = {
	img: [
		'https://vokrug.tv/pic/news/a/2/e/d/a2ed8828096278b77e40cfd6535761d3.jpg',
		'https://24smi.org/public/media/celebrity/2018/09/18/wvmmmdehitx2-rebel-uilson.jpg',
		'https://aws.kiiiosk.store/uploads/shop/9519/uploads/product_image/image/568857/screen-shot-2019-08-06-at-3-15-12-pm-1565118965.png',
		'https://www.afisha.uz/ui/materials/2020/02/0594791_b.jpeg',
		'https://russia-in-us.com/wp-content/uploads/2018/11/479x478_0_a85816425625ba00e6b2ee55d1c2c86d@479x478_0x0a330c9a_8487029821534524847.jpeg',
	],
	name: ['Дженнифер Лоуренс', 'Ребел Уилсон', 'Ариана Гранде', 'Билли Айлиш', 'Скарлетт Йоханссон'],
	questions: ['Трахнул', 'Женился', 'Изменял', 'Убил', 'Дружил'],
};

export const puntoSwitcher = [
	{
		answer: 'Пекинес',
		codeWord: 'Пенис',
		description: 'Порода собак'
	},
	{
		answer: 'Шавуха',
		codeWord: 'Шлюха',
		description: 'Еда'
	},
	{
		answer: '',
		codeWord: '',
		description: ''
	},

];