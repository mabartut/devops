function findUserById(userId, users) {
    return users.find(function (user) { return user.id === userId; });
}
var users = [
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
];
var result = findUserById(2, users);
console.log(result);
