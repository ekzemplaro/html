// -------------------------------------------------------------
/*
	publish.js

					Feb/18/2025
*/
// -------------------------------------------------------------
function publish_proc(topic,message)
{
            // メッセージをパブリッシュ
	client.publish(topic, message, (err) => {
	if (!err) {
		console.log('Message published')
		document.getElementById('status').innerText = `Published: ${message} to ${topic} on ${brokerUrl}`
		} else {
		console.error('Publish error:', err)
		document.getElementById('status').innerText = 'Publish error: ' + err.message
		}
	})
}

// -------------------------------------------------------------
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

//	const topic = 'testaa/topic'
// const topic = '/topic/qos0'
const topic = '/iwasaki/links2'

document.getElementById('aa_on').addEventListener('click', () => {
	const message = 'AA On PM 16:21'
	publish_proc(topic,message)
	})

document.getElementById('aa_off').addEventListener('click', () => {
	const message = 'AA Off PM 16:21'
	publish_proc(topic,message)
	})
document.getElementById('bb_on').addEventListener('click', () => {
	const message = 'BB On PM 16:21'
	publish_proc(topic,message)
	})

document.getElementById('bb_off').addEventListener('click', () => {
	const message = 'BB Off PM 16:21'
	publish_proc(topic,message)
	})




// -------------------------------------------------------------
