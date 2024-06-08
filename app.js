const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];

  // Main Question: Get the passengers' names using the data provided 

passengers.filter(e=>{
    // console.log(e.passengerName);
    if (e.isVegetarianOrVegan === true) {
        // console.log(e);
    }
})

// Bonus Part (a)- Return vegetarians/vegans

// Bonus Part (b)- Sort passengers by the number of connected flights in descending order

passengers.sort((a,b)=>{
    // console.log(a);
    // console.log(b);
    return a.connectedFlights - b.connectedFlights
})

console.log(passengers);