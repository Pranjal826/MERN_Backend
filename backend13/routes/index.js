var express = require('express');
var router = express.Router();
const countryList=require("country-list")
const fs=require("fs")
const countryNames = countryList.getNames();
const languageList=[
	{"language":"Afar","code":"aa"},
	{"language":"Abkhazian","code":"ab"},
	{"language":"Afrikaans","code":"af"},
	{"language":"Akan","code":"ak"},
	{"language":"Amharic","code":"am"},
	{"language":"Aragonese","code":"an"},
	{"language":"Arabic","code":"ar"},
	{"language":"Assamese","code":"as"},
	{"language":"Avar","code":"av"},
	{"language":"Aymara","code":"ay"},
	{"language":"Azerbaijani","code":"az"},
	{"language":"Bashkir","code":"ba"},
	{"language":"Belarusian","code":"be"},
	{"language":"Bulgarian","code":"bg"},
	{"language":"Bihari","code":"bh"},
	{"language":"Bislama","code":"bi"},
	{"language":"Bambara","code":"bm"},
	{"language":"Bengali","code":"bn"},
	{"language":"Tibetan","code":"bo"},
	{"language":"Breton","code":"br"},
	{"language":"Bosnian","code":"bs"},
	{"language":"Catalan","code":"ca"},
	{"language":"Chechen","code":"ce"},
	{"language":"Chamorro","code":"ch"},
	{"language":"Corsican","code":"co"},
	{"language":"Cree","code":"cr"},
	{"language":"Czech","code":"cs"},
	{"language":"Old Church Slavonic / Old Bulgarian","code":"cu"},
	{"language":"Chuvash","code":"cv"},
	{"language":"Welsh","code":"cy"},
	{"language":"Danish","code":"da"},
	{"language":"German","code":"de"},
	{"language":"Divehi","code":"dv"},
	{"language":"Dzongkha","code":"dz"},
	{"language":"Ewe","code":"ee"},
	{"language":"Greek","code":"el"},
	{"language":"English","code":"en"},
	{"language":"Esperanto","code":"eo"},
	{"language":"Spanish","code":"es"},
	{"language":"Estonian","code":"et"},
	{"language":"Basque","code":"eu"},
	{"language":"Persian","code":"fa"},
	{"language":"Peul","code":"ff"},
	{"language":"Finnish","code":"fi"},
	{"language":"Fijian","code":"fj"},
	{"language":"Faroese","code":"fo"},
	{"language":"French","code":"fr"},
	{"language":"West Frisian","code":"fy"},
	{"language":"Irish","code":"ga"},
	{"language":"Scottish Gaelic","code":"gd"},
	{"language":"Galician","code":"gl"},
	{"language":"Guarani","code":"gn"},
	{"language":"Gujarati","code":"gu"},
	{"language":"Manx","code":"gv"},
	{"language":"Hausa","code":"ha"},
	{"language":"Hebrew","code":"he"},
	{"language":"Hindi","code":"hi"},
	{"language":"Hiri Motu","code":"ho"},
	{"language":"Croatian","code":"hr"},
	{"language":"Haitian","code":"ht"},
	{"language":"Hungarian","code":"hu"},
	{"language":"Armenian","code":"hy"},
	{"language":"Herero","code":"hz"},
	{"language":"Interlingua","code":"ia"},
	{"language":"Indonesian","code":"id"},
	{"language":"Interlingue","code":"ie"},
	{"language":"Igbo","code":"ig"},
	{"language":"Sichuan Yi","code":"ii"},
	{"language":"Inupiak","code":"ik"},
	{"language":"Ido","code":"io"},
	{"language":"Icelandic","code":"is"},
	{"language":"Italian","code":"it"},
	{"language":"Inuktitut","code":"iu"},
	{"language":"Japanese","code":"ja"},
	{"language":"Javanese","code":"jv"},
	{"language":"Georgian","code":"ka"},
	{"language":"Kongo","code":"kg"},
	{"language":"Kikuyu","code":"ki"},
	{"language":"Kuanyama","code":"kj"},
	{"language":"Kazakh","code":"kk"},
	{"language":"Greenlandic","code":"kl"},
	{"language":"Cambodian","code":"km"},
	{"language":"Kannada","code":"kn"},
	{"language":"Korean","code":"ko"},
	{"language":"Kanuri","code":"kr"},
	{"language":"Kashmiri","code":"ks"},
	{"language":"Kurdish","code":"ku"},
	{"language":"Komi","code":"kv"},
	{"language":"Cornish","code":"kw"},
	{"language":"Kirghiz","code":"ky"},
	{"language":"Latin","code":"la"},
	{"language":"Luxembourgish","code":"lb"},
	{"language":"Ganda","code":"lg"},
	{"language":"Limburgian","code":"li"},
	{"language":"Lingala","code":"ln"},
	{"language":"Laotian","code":"lo"},
	{"language":"Lithuanian","code":"lt"},
	{"language":"Latvian","code":"lv"},
	{"language":"Malagasy","code":"mg"},
	{"language":"Marshallese","code":"mh"},
	{"language":"Maori","code":"mi"},
	{"language":"Macedonian","code":"mk"},
	{"language":"Malayalam","code":"ml"},
	{"language":"Mongolian","code":"mn"},
	{"language":"Moldovan","code":"mo"},
	{"language":"Marathi","code":"mr"},
	{"language":"Malay","code":"ms"},
	{"language":"Maltese","code":"mt"},
	{"language":"Burmese","code":"my"},
	{"language":"Nauruan","code":"na"},
	{"language":"North Ndebele","code":"nd"},
	{"language":"Nepali","code":"ne"},
	{"language":"Ndonga","code":"ng"},
	{"language":"Dutch","code":"nl"},
	{"language":"Norwegian Nynorsk","code":"nn"},
	{"language":"Norwegian","code":"no"},
	{"language":"South Ndebele","code":"nr"},
	{"language":"Navajo","code":"nv"},
	{"language":"Chichewa","code":"ny"},
	{"language":"Occitan","code":"oc"},
	{"language":"Ojibwa","code":"oj"},
	{"language":"Oromo","code":"om"},
	{"language":"Oriya","code":"or"},
	{"language":"Ossetian","code":"os"},
	{"language":"Punjabi","code":"pa"},
	{"language":"Pali","code":"pi"},
	{"language":"Polish","code":"pl"},
	{"language":"Pashto","code":"ps"},
	{"language":"Portuguese","code":"pt"},
	{"language":"Quechua","code":"qu"},
	{"language":"Raeto Romance","code":"rm"},
	{"language":"Kirundi","code":"rn"},
	{"language":"Romanian","code":"ro"},
	{"language":"Russian","code":"ru"},
	{"language":"Rwandi","code":"rw"},
	{"language":"Sanskrit","code":"sa"},
	{"language":"Sardinian","code":"sc"},
	{"language":"Sindhi","code":"sd"},
	{"language":"Sango","code":"sg"},
	{"language":"Serbo-Croatian","code":"sh"},
	{"language":"Sinhalese","code":"si"},
	{"language":"Slovak","code":"sk"},
	{"language":"Slovenian","code":"sl"},
	{"language":"Samoan","code":"sm"},
	{"language":"Shona","code":"sn"},
	{"language":"Somalia","code":"so"},
	{"language":"Albanian","code":"sq"},
	{"language":"Serbian","code":"sr"},
	{"language":"Swati","code":"ss"},
	{"language":"Southern Sotho","code":"st"},
	{"language":"Sundanese","code":"su"},
	{"language":"Swedish","code":"sv"},
	{"language":"Swahili","code":"sw"},
	{"language":"Tamil","code":"ta"},
	{"language":"Telugu","code":"te"},
	{"language":"Tajik","code":"tg"},
	{"language":"Thai","code":"th"},
	{"language":"Tigrinya","code":"ti"},
	{"language":"Turkmen","code":"tk"},
	{"language":"Tagalog","code":"tl"},
	{"language":"Tswana","code":"tn"},
	{"language":"Tonga","code":"to"},
	{"language":"Turkish","code":"tr"},
	{"language":"Tsonga","code":"ts"},
	{"language":"Tatar","code":"tt"},
	{"language":"Twi","code":"tw"},
	{"language":"Tahitian","code":"ty"},
	{"language":"Uyghur","code":"ug"},
	{"language":"Ukrainian","code":"uk"},
	{"language":"Urdu","code":"ur"},
	{"language":"Venda","code":"ve"},
	{"language":"Vietnamese","code":"vi"},
	{"language":"Volapük","code":"vo"},
	{"language":"Walloon","code":"wa"},
	{"language":"Wolof","code":"wo"},
	{"language":"Xhosa","code":"xh"},
	{"language":"Yiddish","code":"yi"},
	{"language":"Yoruba","code":"yo"},
	{"language":"Zhuang","code":"za"},
	{"language":"Chinese","code":"zh"},
	{"language":"Zulu","code":"zu"}
]

function Books() {
  return JSON.parse(fs.readFileSync("public/books.json", "utf-8"));
}
function WriteBooks(book) {
    fs.writeFileSync("public/books.json", JSON.stringify(book));
}
const x = Books();

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/register", function (req, res, next) {
  res.render("register", {
      country: countryNames,
      language: languageList,
  });
});

router.post("/register", function (req, res, next) {
  x.push(req.body);
  fs.writeFileSync("./public/books.json", JSON.stringify(x));
  res.redirect("/show");
});

router.get("/show", function (req, res, next) {
  res.render("show", { books: Books() });
  // Redirect to books.json after show
});
router.get("/delete/:index", function (req, res, next) {
    let x = Books();
    x.splice(req.params.index, 1);
    WriteBooks(x);
    res.redirect("/show");
});
router.get('/update/:index',function(req,res){
	const books = Books();
    const book = books[req.params.index];
    res.render("update", {
        index: req.params.index,
        countryNames: countryNames,
        languageNames: languageList,
        book,
    });
})
router.post("/update/:index", function (req, res, next) {
    let x = Books();
    x[req.params.index] = req.body;
    WriteBooks(x);
    res.redirect("/show");
});
module.exports = router;
