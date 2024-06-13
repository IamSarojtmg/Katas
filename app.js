function removeUrlAnchor(url) {
// console.log(url.length);
let index = url.indexOf('#')
// console.log(index, 'index');

let sub = url.length - index

// console.log(sub,'sub');





  if(url.includes('#')){
// return url.slice(9,-sub)
   console.log(url.slice(0,-sub))
 }

 return url


}
removeUrlAnchor("www.codewars.com#about");
removeUrlAnchor("https://toast.mil#broc");
removeUrlAnchor("www.codewars.com/katas/");
removeUrlAnchor('http://www.egg.com#p')
removeUrlAnchor('www.egg.gov#mieng')
