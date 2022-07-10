exports.translate2Human = function (morse) {
    //const with morse-alphabet mapping
    const morseMap = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0',
        //if there is a double space, it will be taken as a space
        '': ' ',
        // space = /
        '/': ' ',
        //Fullstop = line break
        '.-.-.-': '\n'
    }

    try {
        let resultTranslate = "";
        morse.split(" ").forEach(element => {
            //IMPORTANT: I MAKE THIS FUNCTION VERY STRICT WITH THE WITH THE ALLOWED CHARACTERS
            char = morseMap[element];
            if (char) {
                resultTranslate += char;
            } else {
                //characters invalid
                return "";
            }
        });
        return resultTranslate;
    } catch (error) {
        console.log(error);
        return "";
    }

}

exports.decodeBits2Morse = function (bits) {
    //const with bits-morse mapping, because, that is so fckng fast!!!
    console.log(bits);
    const bitMap = {
        '1100001': '.-',
        '1100010': '-...',
        '1100011': '-.-.',
        '1100100': '-..',
        '1100101': '.',
        '1100110': '..-.',
        '1100111': '--.',
        '1101000': '....',
        '1101001': '..',
        '1101010': '.---',
        '1101011': '-.-',
        '1101100': '.-..',
        '1101101': '--',
        '1101110': '-.',
        '1101111': '---',
        '1110000': '.--.',
        '1110001': '--.-',
        '1110010': '.-.',
        '1110011': '...',
        '1110100': '-',
        '1110101': '..-',
        '1110110': '...-',
        '1110111': '.--',
        '1111000': '-..-',
        '1111001': '-.--',
        '1111010': '--..',
        '110001': '.----',
        '110010': '..---',
        '110011': '...--',
        '110100': '....-',
        '110101': '.....',
        '110110': '-....',
        '110111': '--...',
        '111000': '---..',
        '111001': '----.',
        '110000': '-----',
        // space = /
        '100000': '/',
        //Fullstop = line break
        '1010': '.-.-.-'
    }

    try {
        let resultTranslate = "";
        bits.forEach(element => {
            //IMPORTANT: I MAKE THIS FUNCTION VERY STRICT WITH THE WITH THE ALLOWED CHARACTERS
            let char = bitMap[element];
            if (char) {
                resultTranslate += " " + char;

            } else {
                //characters invalid
                return "";
            }
        });
        return resultTranslate.trim();
    } catch (error) {
        console.log(error);
        return "";
    }
}

