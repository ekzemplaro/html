const mqtt = require('mqtt');

// WebSocket エンドポイント
const brokerUrl = 'wss://broker.hivemq.com:8884/mqtt'

// MQTT クライアントの作成
const client = mqtt.connect(brokerUrl)

client.on('connect', () => {
  console.log('Connected to MQTT broker')

  // トピックをサブスクライブ
  client.subscribe('testaa/topic', (err) => {
    if (!err) {
      console.log('Subscribed to testaa/topic')
    }
  })
})

client.on('message', (topic, message) => {
  console.log(`Received message on ${topic}: ${message.toString()}`)
})

client.on('error', (err) => {
  console.error('Connection error:', err)
})
