// -------------------------------------------------------------
/*
	publish.js

					Feb/21/2025
*/
// -------------------------------------------------------------
// const brokerUrl = 'wss://broker.hivemq.com:8884/mqtt'
const brokerUrl = 'wss://mqtt.eclipseprojects.io:443/mqtt'
const topic = '/iwasaki/links2'

// -------------------------------------------------------------
window.onload = ()=>
{
        document.querySelector("#outarea_aa").innerHTML = "*** publish.js *** start ***"

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


document.getElementById('button_aa').addEventListener('click', () => {
	
	let message = ""

	if (button_aa.textContent == "OFF")
		{
		message =  message_gen_proc('aa','on')
		button_aa.textContent = "ON"
		button_aa.style.color = "red"
		}
	else
		{
		message =  message_gen_proc('aa','off')
		button_aa.textContent = "OFF"
		button_aa.style.color = "green"
		}
	publish_proc(client,topic,message)
	})

document.getElementById('button_bb').addEventListener('click', () => {
	let message = ""

	if (button_bb.textContent == "OFF")
		{
		message =  message_gen_proc('bb','on')
		button_bb.textContent = "ON"
		button_bb.style.color = "red"
		}
	else
		{
		message =  message_gen_proc('bb','off')
		button_bb.textContent = "OFF"
		button_bb.style.color = "green"
		}

	publish_proc(client,topic,message)
	})
}

// -------------------------------------------------------------
function publish_proc(client,topic,message)
{
            // メッセージをパブリッシュ
	client.publish(topic, message, (err) => {
	if (!err) {
		console.log('Message published')
		document.getElementById('status').innerText = message
//		document.getElementById('status').innerText = `${message}`
//		document.getElementById('status').innerText = `Published: ${message} to ${topic} on ${brokerUrl}`
		} else {
		console.error('Publish error:', err)
		document.getElementById('status').innerText = 'Publish error: ' + err.message
		}
	})
}

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
