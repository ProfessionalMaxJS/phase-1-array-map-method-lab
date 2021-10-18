// const titleCased = () => {
//   return tutorials
// }

// for (i=0; i<list.length; i++)
// {
// function titleCase(list) {
//   return Array.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }
// titleCase(list[i])
// }


/*
function titleCased(sayings) {
const listOfSayings = 
  sayings.map((sayings) => 
  sayings.map((word) =>
  {
  word.toLowerCase().split(' ');
  return word.replace(word[0], word[0].toUpperCase); 
}
  ))

return listOfSayings;
}
 
*/

// {
  //   const titledSentence(list) => list.toLowerCase().split(' ').map(function(word) {
  //     return (word.charAt(0).toUpperCase() + word.slice(1));
  //   }).join(' ');
  //   return titledSentence;
  // }
  // }}
  
  const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
  ];
  
  
const titleCased = (titles) => {

let enTitled = [];

for (let i=0; i<titles.length; i++){
  let title = titles[i] 
  // title = title.toLowerCase();
  let words = title.split(' ');
  words = words.map((words) => (words.charAt(0).toUpperCase()+words.slice(1)));
  title = words.join(' ');
  enTitled.push(title);
}
return enTitled;
}


titleCased(tutorials);
