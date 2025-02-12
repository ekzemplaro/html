const mqtt = require('mqtt');

// WebSocket エンドポイント
const brokerUrl = 'ws://broker.hivemq.com:8000/mqtt';

// MQTT クライアントの作成
const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  console.log('Connected to MQTT broker');

  // メッセージをパブリッシュ
  client.publish('testaa/topic', 'Good Afternoon from MQTT.js', (err) => {
    if (!err) {
      console.log('Message published');
    } else {
      console.error('Publish error:', err);
    }
    client.end(); // 接続を閉じる
  });
});

client.on('error', (err) => {
  console.error('Connection error:', err);
});
