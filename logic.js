function getData() {
    console.log('Data Fetched')
  }
  
  function debounce(callback, delay) {
    let timer
    return function() {
    //   clearTimeout(timer) // built in method
      timer = setTimeout(() => { //bult in method
        callback(); 
      }, delay)
    }
  }
  
  const betterFunction = debounce(getData, 1000)

  betterFunction()
