// -----------------------------------------------------------------------
//	fetch.js
//
//					May/09/2022
//
// -----------------------------------------------------------------------
'use strict'
// -----------------------------------------------------------------------
// [8-4]:
function read_fetch_proc(url,place)
{
	fetch(url).then((response) => {
		if(!response.ok) {
			console.log('Read error!')
			throw new Error('error')
		} 
		console.log('Read ok!')
		return response.text()
	}).then((data)  => {
		console.log(data)
		document.querySelector(place).innerHTML = data
	}).catch((error) => {
		console.log(error)
	})
}

// -----------------------------------------------------------------------
// [8]:
function fetch_proc(obj)
{
	const key = obj.id
	const place = "#contents"

	document.querySelector("#outarea_bb").innerHTML = key + " clicked ***"

	const matches = document.querySelectorAll("button")

	console.log("matches.length = " + matches.length)
	for (var it=0; it < matches.length; it += 1)
		{
		const id = matches[it].id
		console.log("id = " + id)
		const elemx = document.getElementById(id)
		elemx.style.color = 'black'
		}

	const elem = document.getElementById(key)
	elem.style.color = 'blue'

	const file_in = "./doc/" + key + ".txt"

	const data_aa = read_fetch_proc(file_in,place)
}

// -----------------------------------------------------------------------
