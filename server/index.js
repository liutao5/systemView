const { spawn } = require('child_process');
const WebSocket = require('ws').Server;

const top = spawn('top', ['-b']);

top.stdout.on('data', data => {
    console.log(data)
})

const ws = new WebSocket({
    port: 3001,
})

ws.on('connection', wss => {
    wss.on('message', req => {
        console.log('request:', req)
        wss.send('received!', err => {
            console.log('error:', err)
        })
        setInterval(() => {
            wss.send('received!', err => {
                if (err) {
                    console.log('error:', err)
                }
            })
        }, 1000)
    })
})

ws.on('close', data => {
    console.log(data)
})