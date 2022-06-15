const { default: mongoose } = require("mongoose");
const { User } = require("../models/user.model");


module.exports = {
    getAllUsers: async (req, res) => {
        const users = await User.find();
        res.json(users);
    },
    createUser: async (req, res) => {
        const { firstName, lastName, email, age, password } = req.body;
        let user = new User({ firstName, lastName, email, age, password });
        // try{
        //     await user.save();
        //     res.status(201).json(user);
        // }catch(error){
        //     res.status(400).json(error);
        // }
       
        user.save().then((doc)=>{
            res.status(201).json(doc);
        })
        .catch((error)=>{
            res.status(400).json(error);
        })

        // user.save((error,doc)=>{
        //     if(!error){
        //         return res.status(201).json(doc)
        //     }
        //     res.status(400).json(error);
        // });
    },
    findOneById: (req, res) => {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                message: "Please verify id"
            })
        }
        User.findById(id).then((doc)=>{
            if(!doc){
                return res.status(404).send("User Not Found")
            }
            res.status(200).json(doc)
        })
        .catch((error)=>{
            res.status(400).json(error)
        })
    },
    deleteOneById: (req, res) => {
        const { id } = req.params;
    },
    updateOneById: (req, res) => {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                message: "Please verify id"
            })
        }

        const { firstName, lastName, email, age } = req.body;
        User.findByIdAndUpdate(id, { firstName, lastName, email, age }, { new: true })
            .then((doc)=>{
                if(!doc){
                    return res.status(404).send("User Not Found")
                }
                res.status(200).json(doc)
            })
            .catch((error)=>{
                res.status(400).json(error)
            })
    }
}

let response  ={
	"_id": "62a9b744336dca9de15a3191",
	"firstName": "John",
	"lastName": "Doe",
	"email": "john.doe@esprit.tn",
	"age": 25,
	"createdAt": "2022-06-15T10:41:13.916Z",
	"updatedAt": "2022-06-15T10:41:13.916Z",
	"__v": 0
}

let gett = {
	"_id": "62a9b744336dca9de15a3191",
	"firstName": "John updated 22",
	"lastName": "Doe",
	"email": "john.doe@esprit.tn",
	"age": 25,
	"createdAt": "2022-06-15T10:41:13.916Z",
	"updatedAt": "2022-06-15T11:09:22.199Z",
	"__v": 0
}