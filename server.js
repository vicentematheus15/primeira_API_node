const fastify = require('fastify')
const crypto = require('crypto')

const server = fastify()

const courses = [ 
    {id: '1', title: 'curso de Node.js'},
    {id: '2', title: 'curso de React'},
    {id: '3', title: 'curso de React Native'}
]
 


server.get('/courses', () => {
    return courses
})

server.post('/courses', (req, res) => {
    const courseId = crypto.randomUUID()

    courses.push({id: courseId, title: 'Novo Curso'})

    return res.status(201).send({courseId})
})







server.listen({port:3333}).then(() => {
    console.log("HTTP server running ")
})