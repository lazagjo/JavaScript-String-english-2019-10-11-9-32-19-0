// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log(name);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
sentenceArr = sentence.split(' ');
sentence = "";

for(var i=0; i<sentenceArr.length;i++)
{
	sentenceArr[i] = sentenceArr[i].charAt(0).toUpperCase() + sentenceArr[i].slice(1);
	sentence = sentence + sentenceArr[i] + " ";
}
console.log(sentence);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money = money.substring(3);
console.log(money);