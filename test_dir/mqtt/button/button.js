        // MQTTブローカーのURL (WebSocket)
//        const brokerUrl = 'wss://broker.hivemq.com:8884/mqtt';
        const brokerUrl = 'wss://mqtt.eclipseprojects.io:443/mqtt'

        // MQTTクライアントの作成
        const client = mqtt.connect(brokerUrl);

        // 接続時のイベント
        client.on('connect', () => {
            console.log('Connected to MQTT broker');
            // トピックを購読
const topic = '/topic/qos0'
            client.subscribe(topic, (err) => {
                if (!err) {
                    console.log('Subscribed to ' + topic);
                }
            });
        });

        // メッセージ受信時のイベント
        client.on('message', (topic, message) => {
            console.log(`Received message on ${topic}: ${message.toString()}`);
        });

        // エラー時のイベント
        client.on('error', (err) => {
            console.error('Connection error:', err);
        });

        // 切断時のイベント
        client.on('close', () => {
            console.log('Connection closed');
        });
