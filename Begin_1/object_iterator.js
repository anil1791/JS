const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "johndoe@example.com",
    isStudent: ["abc","dfd","dfs"]
}
//  for in loop is used for object
for (const key in person) {
    console.log(`${key} :- ${person[key]}`);
}
