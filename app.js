const express = require('express')
const morgan = require('morgan')
const func = require('functions')

const app = express()

const members = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Julie'
    },
    {
        id: 3,
        name: 'Jack'
    }
]

app.use(morgan('dev'))

app.get('/api/v1/members/:id', (req, res) => {
    if (req.params.id > 0 && req.params.id <= members.length) {
        res.json(func.success(members[(req.params.id) - 1].name)) 
    } else {
        res.json(func.error("erreur"))
    }
         
})

app.get('/api/v1/members', (req, res) => {
    console.log(req.query)
    if(req.query.max){
        if(req.query.max > 0 ) {
            res.json(func.success(members.slice(0, req.query.max)))
        } else {
            res.json(func.error('mauvaise valeur'))
    } }else {
        console.log(res.query)
        console.log('ici')
        res.json(func.success(members))
    }
})

app.listen(8080, () => {
    console.log('started')
}) 


