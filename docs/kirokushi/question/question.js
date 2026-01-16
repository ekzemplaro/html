// -----------------------------------------------------------------------
//	question.js
//
//					Jul/15/2025
//
// -----------------------------------------------------------------------
'use strict'

// -----------------------------------------------------------------------
window.onload = ()=>
{
//	document.querySelector("#outarea_aa").innerHTML = "*** question.js *** start ***"

	const file_text = "./question.txt"

	const place = ".contents"

	read_fetch_table_proc(file_text,place)

//	document.querySelector("#outarea_hh").innerHTML = "*** question.js *** end ***"
}

// -----------------------------------------------------------------------
// [4]:
function read_fetch_table_proc(url,place)
{
	fetch(url).then((response) => {
		if(!response.ok) {
			console.log('Read error!')
			throw new Error('error')
		} 
		console.log('Read ok!')
		return response.text()
	}).then((data)  => {

		show_data_proc(place,data)
	})
}
// -----------------------------------------------------------------------
// [4-6]:
function show_data_proc(place,data)
{
	let str_out = ""
	str_out += "<pre>"

	str_out += data

	str_out += "</pre>"

	document.querySelector(place).innerHTML = str_out
}

// -----------------------------------------------------------------------
