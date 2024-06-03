interface userInterface {
  id: number;
  name: string;
  age?: number;
}

let user: userInterface = {
  id: 1,
  name: "Saroj",
  age:55
};

if (!user.age) {
  console.log("the user has not given us the age");
} else {
  console.log(user.age);
}
