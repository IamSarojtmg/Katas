interface owner {
  name: string;
  age: number;
}

interface pet {
  breed: string;
  weight: number;
}

type customer = owner & pet;

const custDetail = (details: customer): void => {
  console.log(
    `${details.name} is the owner of the the ${details.breed} whose weight is ${details.weight}`
  );
};

custDetail({
  name: "Saroj",
  breed: "dog",
  weight: 70,
});
