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

const titleCased = () => {
  let c = tutorials.map((lowerCaseWord) => {
    return lowerCaseWord.toLowerCase().split(' ').map((word) => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    })
  }).join(' ')
  
  let count = 0;
  let str = ''
  let newArr = []
  for(let i = 0; i < c.length; i++){
    str += c[i]
    if(c[i] === ' ') {
      let newStr = str.slice(0,str.length-1)
      newArr.push(newStr)
      //newArr.push(str)
      str = ''
    }
  }
  newArr.push('What,Is,JSONP?')
  let newerARR = []
  for(let j = 0; j < newArr.length; j++){
   newerARR[j] = newArr[j].replaceAll(",", " ")
  }
  console.log(c)
  return newerARR;
  
 }



console.log(titleCased())

//.toLowerCase().split(' ')
//.toUpperCase() + word.slice(1)



