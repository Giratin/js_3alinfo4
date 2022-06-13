

// const getAllUsers = (req, res) => {

// }

// const createUser = (req, res) => {

// }

// module.exports.getAllUsers = getAllUsers;
// module.exports = {
//     getAllUsers: getAllUsers
// }

// module.exports = {
//     getAllUsers
// }



// module.exports.getOneById = (req, res) => {

// }

var users = [];

const incrementId = () => {
    if (users.length == 0) {
        return 1;
    }
    let id = users[users.length - 1].id + 1;
    return id;
}

const veriyEmailUnique = (email) => {
    const userIndex = users.findIndex((el) => {
        return el.email == email;
    })
    return userIndex == -1
}

module.exports = {
    getAllUsers: (req, res) => {
        res.json(users);
    },
    createUser: (req, res) => {
        //const firstName = req.body.firstName etc..
        if (!veriyEmailUnique(req.body.email)) {
            return res.status(405).json({ error: "Email already registered" });
        }
        // const { firstName, lastName, email, age } = req.body;
        // const newUser = {
        //     firstName, lastName, email, age, id: incrementId()
        // }
        const newUser = { ...req.body, id: incrementId() };

        users.push(newUser)
        res.status(201).json(newUser);
        // users.push(req.body)
    },
    findOneById: (req, res) => {
        const { id } = req.params;
    },
    deleteOneById: (req, res) => {
        const { id } = req.params;
    },
    updateOneById: (req, res) => {
        const { id } = req.params;
    }
}