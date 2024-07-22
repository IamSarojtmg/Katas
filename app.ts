function alphabetPosition(text:string):string {
  const position:string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const newArr:number[] = []
for (let i = 0; i < text.length; i++) {
  const element = text[i].toLowerCase()
  newArr.push(position.indexOf(element)+1)
  }
const filter = newArr.filter(e=>{
  return e !== 0
  })
return filter.toString().replaceAll(',',' ')
}
alphabetPosition("The sunset sets at twelve o' clock.")//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"




// let x:string = ''
// let y:number[] = [1,2,3]

// x = y.toString()

// console.log(x.replaceAll(',',' '));
