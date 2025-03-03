// -------------------------------------------------------------
/*
	publish.js

					Feb/25/2025
*/
// -------------------------------------------------------------
// const brokerUrl = 'wss://broker.hivemq.com:8884/mqtt'
const brokerUrl = 'wss://s2.ekzemplaro.site:8883'
// const brokerUrl = 'wss://mqtt.eclipseprojects.io:443/mqtt'
const topic_out = '/iwasaki/links2'
const topic_in = '/iwasaki/links2/status'

// -------------------------------------------------------------
window.onload = ()=>
{
        document.querySelector("#outarea_aa").innerHTML = "*** publish.js *** start ***"
        document.querySelector("#broker").innerHTML = brokerUrl
        document.querySelector("#topic_out").innerHTML = topic_out
        document.querySelector("#topic_in").innerHTML = topic_in

const client = mqtt.connect(brokerUrl)

        // 接続時のイベント
client.on('connect', () => {
	console.log('Connected to MQTT broker')
	document.getElementById('status').innerText = 'Connected to MQTT broker'

	client.subscribe(topic_in, (err) => {
                if (!err) {
                    console.log('Subscribed to ' + topic_in)
                }
            })
        })

	client.on('message', (topic_in, message) => {
            console.log(`Received message on ${topic_in}: ${message.toString()}`)
	let str_in = `${message.toString()}`
	display_proc(str_in)
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
	publish_proc(client,topic_out,message)
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

	publish_proc(client,topic_out,message)
	})
}

// -------------------------------------------------------------
// [4]:
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
// [4-4]:
function get_current_date_proc()
{
	const today = new Date ()
	var ddx = today.getFullYear () + "-" + (today.getMonth () +1)
	ddx += "-" + today.getDate ()

	return ddx
}

// -------------------------------------------------------------
// [6]:
function publish_proc(client,topic_out,message)
{
	client.publish(topic_out, message, (err) => {
	if (!err) {
		console.log('Message published')
		document.getElementById('status').innerText = message
		}
	else {
		console.error('Publish error:', err)
		document.getElementById('status').innerText = 'Publish error: ' + err.message
		}
	})
}

// -------------------------------------------------------------
function display_proc(str_in)
{
	document.querySelector("#outarea_bb").innerHTML = str_in
	const dict_aa = JSON.parse(str_in)
	const device = dict_aa['device']
	const status = dict_aa['status']
	document.querySelector("#outarea_cc").innerHTML = device
	document.querySelector("#outarea_dd").innerHTML = status

	if (device == "aa")
		{
		if (status == "ON")
			{
		document.querySelector("#outarea_ee").innerHTML = "aa ON"
			button_aa.textContent = "ON"
			button_aa.style.color = "red"
			}
		else if (status == "OFF")
			{
		document.querySelector("#outarea_ee").innerHTML = "aa OFF"
			button_aa.textContent = "OFF"
			button_aa.style.color = "green"
			}
		}
	else if (device == "bb")
		{
		if (status == "ON")
			{
		document.querySelector("#outarea_ff").innerHTML = "bb ON"
			button_bb.textContent = "ON"
			button_bb.style.color = "red"
			}
		else if (status == "OFF")
			{
		document.querySelector("#outarea_ff").innerHTML = "bb OFF"
			button_bb.textContent = "OFF"
			button_bb.style.color = "green"
			}
		}
}

// -------------------------------------------------------------
