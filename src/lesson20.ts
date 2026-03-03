type User = {
    id: number
    name: string
    email: string
}

function findUserById(userId: number, users: User[]): User | undefined {
    return users.find((user) => user.id === userId)
}

const users: User[] = [
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
]

const result = findUserById(2, users)
console.log(result)