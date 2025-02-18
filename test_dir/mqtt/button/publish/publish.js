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

const id_aa_on = document.getElementById('aa_on')
const id_aa_off = document.getElementById('aa_off')
const id_bb_on = document.getElementById('bb_on')
const id_bb_off = document.getElementById('bb_off')

document.getElementById('aa_on').addEventListener('click', () => {
	
	const message =  message_gen_proc('aa','on')
	publish_proc(topic,message)
	id_aa_on.style.color = "blue"
	id_aa_off.style.color = "black"
	})

document.getElementById('aa_off').addEventListener('click', () => {
	const message =  message_gen_proc('aa','off')
	publish_proc(topic,message)
	id_aa_off.style.color = "blue"
	id_aa_on.style.color = "black"
	})
document.getElementById('bb_on').addEventListener('click', () => {
	const message =  message_gen_proc('bb','on')
	publish_proc(topic,message)
	bb_on.style.color = "blue"
	bb_off.style.color = "black"
	})

document.getElementById('bb_off').addEventListener('click', () => {
	const message =  message_gen_proc('bb','off')
	publish_proc(topic,message)
	bb_on.style.color = "black"
	bb_off.style.color = "blue"
	})

// -------------------------------------------------------------
function message_gen_proc(device,status)
{
	let data_aa = new Object ()
	data_aa['device'] = device
	data_aa['status'] = status
	data_aa['date'] = get_current_date_proc()
	const message = JSON.stringify(data_aa)

	return message
}

// -------------------------------------------------------------
function get_current_date_proc()
{
	const today = new Date ()
	var ddx = today.getFullYear () + "-" + (today.getMonth () +1)
	ddx += "-" + today.getDate ()

	return ddx
}

// -------------------------------------------------------------
