const userData = require('../models/user')


const getAllUsers = (req, res)=>{
    res.json(userData)
}

const getOneUser = (req, res)=> {
    let user = userData.filter(user=>user.id==req.params.id)
    res.json(user)
}

const createOneUser = (req, res) => {
    const newUser = {
        id: req.body.id,
        name: req.body.name,
        address: req.body.address,
        status: req.body.status
    }
    userData.push(newUser)
    res.json(newUser)
}


module.exports = {getAllUsers, getOneUser, createOneUser}
