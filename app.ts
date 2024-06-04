interface vehicle {
  name: string;
  COO: string;
  readonly modelNum: number;
}

const merc: vehicle = {
  name: "Mercedes",
  COO: "Germany",
  modelNum: 22,
};

merc.name = 'BMW'
merc.modelNum = 99

console.log(merc);

