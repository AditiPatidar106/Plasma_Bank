
const express = require('express')

const router = express.Router()
const donorSchemaCopy = require('../models/DonorInfoModels')




router.post('/donorForm1', (request, response)=>{
    const donorInfoUser = new donorSchemaCopy({
         donorname : request.body.donorname,
         donoremail: request.body.donoremail,
         donorcontact: request.body.donorcontact,
         donorcity: request.body.donorcity,
         donorstate: request.body.donorstate,
         donorpin: request.body.donorpin,
         donorage: request.body.donorage,
         donorgender: request.body.donorgender,
         donorbloodgroup: request.body.donorbloodgroup
    })
    donorInfoUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})
   


router.route('/doneeForm1').get((request, response)=>{
    const data=donorSchemaCopy.find();
    response.send(data).then(info => response.json(info))
})

module.exports = router