const express = require('express')
const app = express()
const port = 3000

app.post('/analysis', (req, res) => {
    res.json({ msg: 'Not implemented yet.' })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
