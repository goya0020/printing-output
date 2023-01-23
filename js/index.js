let a = 3;
let b = 5;
let c;

let output = 'let a = 3;\n';
output += 'let b = 5;\n';
output += 'let c;\n';
output += '-----------\n';
output += 'a + b = ' + (a + b) + "\n";
output += 'a - b = ' + (a - b) + "\n";
output += 'a * b = ' + (a * b) + "\n";
output += 'a / b = ' + (a / b) + "\n";
output += 'a % b = ' + (a % b) + "\n";
output += 'a += b = ' + (a += b) + "\n";
output += 'a -= b = ' + (a -= b) + "\n";
output += 'a *= b = ' + (a *= b) + "\n";
output += 'a /= b = ' + (a /= b) + "\n";
output += 'a %= b = ' + (a %= b) + "\n";
output += 'a == b = ' + (a == b) + "\n";
output += 'a != b = ' + (a != b) + "\n";
output += 'a > b = ' + (a > b) + "\n";
output += 'a < b = ' + (a < b) + "\n";
output += '!a && !c = ' + (!a && !c) + "\n";
output += '!a || !c = ' + (!a || !c) + "\n";


let first_name = "Ritish";
let last_name = "Goyal";
let email = "goya0020@algonquinlive.com";

    output = 'My name is '
    output += first_name;
    output += ' ';
    output += last_name;
    output += '.'
    output += ' ';
    output += 'You can contact me at ';
    output += email;
    output += '.'
    
alert(output);


