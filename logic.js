const str = 'madam'

//conv to array
//use reverse
//check if they are same or not

function x(str){

  const toArr = str.split('')

  
  const reverse = toArr.reverse()

  
  const join = reverse.join('')
  
str === join ? console.log(true) : console.log(false);
  
}

x(str)
