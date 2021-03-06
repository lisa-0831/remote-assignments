function countAandB(input) {
    var ans = 0
    for (var i = 0; i < input.length; i++) {
        if (input[i] == 'a') {
            ans += 1
        } else if (input[i] == 'b') {
            ans += 1
        }
    }
    return ans
}

function toNumber(input) {
    var ans_lst = []
    for (var i = 0; i < input.length; i++) {
        ans_lst.push(input[i].charCodeAt(0) - 96)
    }
    return ans_lst
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 âaâ letters and 1 âbâ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0 
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]