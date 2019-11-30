//var input = readline();
//var str = readline().toLowerCase();

var str = readline();
var Unique_Str = Array.from(new Set(str)).join('');

var letters = new Object;

for(n = 0, length = str.length; n < length; n++) {
	var Q = str.charAt(n)
	letters[Q] = (isNaN(letters[Q]) ? 1 : letters[Q] + 1);
}

for(key in letters) {
	print(key + ' -> ' + letters[key]);
}

print('Unique String = '+ Unique_Str.length);