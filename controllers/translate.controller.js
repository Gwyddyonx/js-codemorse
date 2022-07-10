//import { MorseService } from "../services/code-morse.service";

var codeMorseService = require('../services/code-morse.service');

exports.morse2Text = function (req, res, next) {
    //validate parms
    const originalText = req.body.text ? req.body.text : "";
    if (originalText == "") {
        res.status(400).send({ error: "the text to translate is invalid or empty" });
    }

    //IMPORTANT: I MAKE THIS FUNCTION VERY STRICT WITH THE WITH THE ALLOWED CHARACTERS
    //function morse to text :)
    var result = codeMorseService.translate2Human(originalText);

    //return results, if lenght > 1, the translate it's ok, maybe... direct json result
    if (result.length >= 0) {
        res.status(200).send({ result });
    } else {
        res.status(400).send({ error: "the text to translate is invalid or have invalid characters" });
    }


}
exports.text2Morse = function (req, res, next) {

    //validate parms
    const originalText = req.body.text ? req.body.text.toLowerCase() : "";
    if (originalText == "") {
        res.status(400).send({ message: "the text to translate is invalid or empty" });
    }

    let bits = [];

    originalText.split('').forEach(element => {
        //push in array, the strings of bits
        //console.log("element",element.charCodeAt(0).toString(2));
        bits.push(element.charCodeAt(0).toString(2));
    });

    //function bits to morse :)
    var result = codeMorseService.decodeBits2Morse(bits);

    //return results, if lenght > 1, the translate it's ok, maybe... direct json result
    if (result.length >= 0) {
        res.status(200).send({ result });
    } else {
        res.status(400).send({ error: "the text to translate is invalid or have invalid characters" });
    }



}