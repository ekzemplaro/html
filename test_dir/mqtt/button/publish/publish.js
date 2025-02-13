
// const brokerUrl = 'wss://broker.hivemq.com:8884/mqtt'
const brokerUrl = 'wss://mqtt.eclipseprojects.io:443/mqtt'

const client = mqtt.connect(brokerUrl)

        // 接続時のイベント
client.on('connect', () => {
	console.log('Connected to MQTT broker')
	document.getElementById('status').innerText = 'Connected to MQTT broker'
        })

        // エラー時のイベント
client.on('error', (err) => {
	console.error('Connection error:', err)
	document.getElementById('status').innerText = 'Connection error: ' + err.message
	})

document.getElementById('publishButton').addEventListener('click', () => {
//	const topic = 'testaa/topic'
	const topic = '/topic/qos0'
	const message = 'Hello from Web Browser Feb/13/2025 PM 17:26'

            // メッセージをパブリッシュ
	client.publish(topic, message, (err) => {
	if (!err) {
		console.log('Message published')
		document.getElementById('status').innerText = `Published: ${message} to ${topic}`
		} else {
		console.error('Publish error:', err)
		document.getElementById('status').innerText = 'Publish error: ' + err.message
		}
	})
        
	})
