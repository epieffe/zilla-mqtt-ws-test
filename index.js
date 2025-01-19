const mqtt = require('mqtt')

const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
const host = 'ws://localhost:7114/mqtt'
const options = {
    clientId: clientId,
    clean: true
}
console.log('Connecting to MQTT broker')
const client = mqtt.connect(host, options)

client.on('connect', () => {
    console.log(`Connected to ${host}`)

    client.subscribe("chat/#", (err) => {
        if (!err) {
            console.log('Subscribed to chat/#')
        } else {
            console.error('Error while subscribing to topic', err)
        }
    })
})

client.on("message", (topic, message) => {
    console.log(`Received message on topic ${topic}:`, message.toString());
});

client.on('error', (err) => {
    console.error('Connection error: ', err)
    client.end()
})

client.on('reconnect', () => {
    console.log('Reconnecting...')
})
