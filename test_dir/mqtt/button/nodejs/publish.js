const mqtt = require('mqtt')

// WebSocket エンドポイント
const brokerUrl = 'wss://broker.hivemq.com:8884/mqtt'

// MQTT クライアントの作成
const client = mqtt.connect(brokerUrl)

client.on('connect', () => {
console.log('Connected to MQTT broker')

  // メッセージをパブリッシュ
const message = 'Good Afternoon Feb/13/2025'
client.publish('testaa/topic', message, (err) => {
    if (!err) {
      console.log('Message published')
    } else {
      console.error('Publish error:', err)
    }
    client.end() // 接続を閉じる
  })
})

client.on('error', (err) => {
  console.error('Connection error:', err)
})
