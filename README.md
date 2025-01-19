# Zilla MQTT over WebSocket Test
This is a demo to use MQTT over WebSocket with Zilla.

The MQTT client succcessfully connects to Zilla when run in nodejs, but fails to connect when run in a web browser.

## How to run
We have a Zilla server that accepts MQTT connections and an MQTT client that subscribes on topic `chat/#`.

The client uses [MQTT.js](https://github.com/mqttjs/MQTT.js).
### Start Zilla
Start Zilla with Kafka and kafka-ui using Docker Compose:
```
docker compose up -d
```
Zilla is listening on port 7114 for WebSocket connections and on port 7184 for TCP connections.

You can use the Mosquitto client to publish messages
```
mosquitto_pub -p 7183 -t chat/1 -m 'Hello World'
```

### Run the client on Node.js
The MQTT client on node.js works correctly.

Install dependencies:
```
npm install
```

Run the client with `node index.js` to start listening to messages on topic `chat/#`:
```
$ node index.js
Connecting to MQTT broker
Connected to ws://localhost:7114/mqtt
Subscribed to chat/#
Received message on topic chat/1: Hello World
```

### Run the client on a web browser
Open the file `index.html` with your web browser and check the console for output.

The client fails to connect to Zilla.
![image](https://github.com/user-attachments/assets/2285118f-735f-4866-b87f-a862723a1669)
