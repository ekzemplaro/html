// -------------------------------------------------------------
/*
	button.js
					Feb/25/2025
*/
// -------------------------------------------------------------
window.onload = ()=>
{
//        const brokerUrl = 'wss://broker.hivemq.com:8884/mqtt'
const brokerUrl = 'wss://mqtt.eclipseprojects.io:443/mqtt'
const topic = '/iwasaki/links2/status'

document.querySelector("#outarea_aa").innerHTML = "*** button.js *** start ***"
const client = mqtt.connect(brokerUrl)

        // 接続時のイベント
client.on('connect', () => {
            console.log('Connected to MQTT broker')
            // トピックを購読
            client.subscribe(topic, (err) => {
                if (!err) {
                    console.log('Subscribed to ' + topic)
                }
            })
        })

        // メッセージ受信時のイベント
        client.on('message', (topic, message) => {
            console.log(`Received message on ${topic}: ${message.toString()}`)
	let str_in = `${message.toString()}`
	display_proc(str_in)
        })

        // エラー時のイベント
        client.on('error', (err) => {
            console.error('Connection error:', err)
        })

        // 切断時のイベント
        client.on('close', () => {
            console.log('Connection closed')
        })
}

// -------------------------------------------------------------
function display_proc(str_in)
{
	document.querySelector("#outarea_bb").innerHTML = str_in
	document.querySelector("#outarea_ff").innerHTML = str_in

	const dict_aa = JSON.parse(str_in)
	const device = dict_aa['device']
	const status = dict_aa['status']
	document.querySelector("#outarea_cc").innerHTML = device
	document.querySelector("#outarea_dd").innerHTML = status
}

// -------------------------------------------------------------
