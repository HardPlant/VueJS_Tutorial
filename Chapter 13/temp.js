var digitArray = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');

function PASS(n) {
    var result = '';
    var start = true;
    for (var i = 32; i > 0;) {
        i -= 4;
        var digit = (n >> i) & 0xf;
        if (!start || digit != 0) {
            start = false;
            result += digitArray[digit]
        }
    }
    return (result == '' ? '0' : result)
}
//console.log(PASS(12342046413275659));

var c = '86 71 57 107 89 88 107 103 97 88 77 103 89 83 66 110 98 50 57 107 73 71 82 104 101 83 52 103 86 71 104 108 73 69 70 49 100 71 104 76 90 88 107 103 97 88 77 103 86 109 86 121 101 86 90 108 99 110 108 85 98 50 53 110 86 71 57 117 90 48 100 49 99 109 107 104'.split(' ')
var e = ''
for (var i = 0; i < c.length; i++) {
    e += String.fromCharCode(c[i])
}
//console.log(e)

var s = c.sort()
var j = 1;

var freq = 'szqkagczvcvyabpsyincgozdainvscbnivpnzvbpnyfkqhzmmpcqhzygzgfcxznvvzgdfnvbpnjyifxmpcqhzygbpnoyaimygbzgngbvmpcqhzygcbpinnbzqndicgxhiztozgcfmpcqhzygbpnjyifxeagzyimpcqhzygbpneagzyidicgxhiztozgcfmpcqhzygcgxcoyaibzqnvyabpsyincggcbzygcfmpcqhzygszqzvbpnozivbvyabpsyincgozdainvscbnibyjzgcqnxcfcbcgzvaeagzyiyivngzyidicgxhiztnungbzvampcqhzygvpzhcgxbpnyfkqhzmdcqnvvpnzvbpnozivbonqcfnvscbnibyjzgbpnyfkqhzmdcqnvbpnjyifxmpcqhzygvpzhvbpnoyaimygbzgngbvmpcqhzygvpzhvcgxbpndicgxhiztozgcfvpnzvygnyobpnqyvbpzdpfkinmydgzlnxcbpfnbnvcgxqnxzcozdainvzgvyabpsyinccvyochizfbpzvkncivpnzvicgsnxvnmygxzgbpnjyifxrkbpnzgbnigcbzygcfvscbzgdagzygvpnzvbpnmaiingbinmyixpyfxnioyifcxznvzgbpnvpyibhiydicqbpnoinnvscbzgdcgxbpnmyqrzgnxbybcfagxnibpnzvaeaxdzgdvkvbnqvpnzvcfvybpnozivbonqcfnvscbnibyvaihcvvbpnbjypaxincxhyzgbqcisagxnibpnzvaeaxdzgdvkvbnqvpnpcvgnunirnnghfcmnxyoobpnhyxzaqzgpningbzinmcinni'

s = freq.split('').sort()
res = {}
for (var i = 0; i < s.length; i++) {

    if (i == s.length - 1 || s[i] != s[i + 1]) {
        res[s[i]] = j
        j = 1;
    } else {
        j++;
    }
}

var sortable = [];
for (var key in res) {
    sortable.push([key, res[key]]);
}
sortable.sort(function(a, b) {
    return a[1] - b[1];
});

//console.log(sortable)

function binaryAgent(str) {

    var newBin = str.split(" ");
    var binCode = [];

    for (i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    return binCode.join("");
}
var bincode = '010011100101011001000011010101000100011001000100010101100010000001001011010001100010000001001010010011000100010101011010010001010101001001001011010100100100101000100000010100100100010101010101001000000100101101000110010101010101001001010000001000000101101001001010001000000101001000100000010110000100011001000110010101010010000001010101010100100101000000100000010100100100010101010101001000000101001001001100010010110101100101000010010101100101000000100000010110100100101000100000010001110100001101010010010110100101010101010100010010110101011101011010010010100100110101010110010010010101000001011001010100100100100101010101'
var decoded = bincode.replace(/(\d{8})/g, '$1 ').replace(/(^\s+|\s+$)/, '')
console.log(binaryAgent(decoded))