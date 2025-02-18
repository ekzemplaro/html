const mqtt = require('mqtt');

// WebSocket エンドポイント
// const brokerUrl = 'wss://broker.hivemq.com:8884/mqtt'
// const topic_sub = 'testaa/topic'
const brokerUrl = 'wss://mqtt.eclipseprojects.io:443/mqtt'
// const topic_sub = '/topic/qos0' 
const topic_sub = '/iwasaki/links2' 
// MQTT クライアントの作成
const client = mqtt.connect(brokerUrl)

client.on('connect', () => {
  console.log('Connected to MQTT broker')

  // トピックをサブスクライブ
  client.subscribe(topic_sub, (err) => {
    if (!err) {
      console.log('Subscribed to ' + topic_sub)
    }
  })
})

client.on('message', (topic, message) => {
  console.log(`Received message on ${topic}: ${message.toString()}`)
})

client.on('error', (err) => {
  console.error('Connection error:', err)
})

