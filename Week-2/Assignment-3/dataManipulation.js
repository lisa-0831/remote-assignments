function count(input) {
    var letterAndCountObj = {};
    for (var i = 0; i < input.length; i++) {
        if (input[i] in letterAndCountObj) {
            letterAndCountObj[input[i]] += 1;
        } else {
            letterAndCountObj[input[i]] = 1;
        }
    }
    return letterAndCountObj
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}



function groupByKey(input) {
    var addValueObj = {};
    for (var i = 0; i < input.length; i++) {
        if (input[i]['key'] in addValueObj) {
            addValueObj[input[i]['key']] += input[i]['value'];
        } else {
            addValueObj[input[i]['key']] = input[i]['value'];
        }
    }
    return addValueObj
}

let input2 = [
    { key: 'a', value: 3 },
    { key: 'b', value: 1 },
    { key: 'c', value: 2 },
    { key: 'a', value: 3 },
    { key: 'c', value: 5 }
]
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}