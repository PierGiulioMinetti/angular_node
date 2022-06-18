import express from 'express';

const app = express();
const PORT = 3000;

/**
 * DISABLE CORS POLICY
 */
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
})

const posts = [
    {
        title: 'Sun',
        body: 'Is shining outside'
    },
    {
        title: 'Moon',
        body: 'Talking to the moon'
    },
]

app.get('/', (req, res) => {
    res.send('HELLO EXPRESS!!!!')
})

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})
