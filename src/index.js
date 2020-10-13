const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let index = 0;
	let arrayNumber = [];
	
    for (let i = 0; i <= expr.length; i++) {	
    	if (i > 0 && i % 10 === 0) {
    	let subStr = expr.slice(index, i);
    	let io = subStr.indexOf(1);
    	let str = subStr.slice(io);
    	
    	arrayNumber.push(str);
    		index += 10;
    	}
    }
    
    for (let i = 0; i < arrayNumber.length; i++) {
    	for (let k = 0; k < arrayNumber[i].length; k++) {
    	
    	arrayNumber[i] = arrayNumber[i].replace('10', '.');
    	arrayNumber[i] = arrayNumber[i].replace('11', '-');
    	}
    	arrayNumber[i] = arrayNumber[i].replace('*', ' ');
    }
    
    for (let symbol in MORSE_TABLE) {
    	for (let i = 0; i < arrayNumber.length; i++) {
    		if (symbol === arrayNumber[i]) {
    		arrayNumber[i] = MORSE_TABLE[symbol];
    	    }
    	}
    }
		let word = arrayNumber.join('');
		return word;
}

module.exports = {
    decode
}
