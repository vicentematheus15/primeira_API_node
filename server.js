const fastify = require('fastify')
const crypto = require('crypto')

const server = fastify()

const courses = [ 
    {id: '1', title: 'curso de Node.js'},
    {id: '2', title: 'curso de React'},
    {id: '3', title: 'curso de React Native'}
]
 


server.get('/courses', () => {
    return {courses}
})

server.get('/courses/:id', (request, reply) => {
    const courseId = request.params.id

    const course = courses.find(course => course.id === courseId)

    if (course){
        return {course}
    }

    return reply.status(404).send()
})

server.post('/courses', (request, reply) => {
    const courseId = crypto.randomUUID()
    const courseTitle = request.body.title

    if(!courseTitle){
        return reply.status(400).send({message: 'Título obrigatório'})
    }

    courses.push({id: courseId, title: courseTitle})

    return reply.status(201).send({courseId})
})







server.listen({port:3333}).then(() => {
    console.log("HTTP server running ")
})