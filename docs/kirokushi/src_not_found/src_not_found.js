// -----------------------------------------------------------------------
//	src_not_found.js
//
//					Jul/15/2025
//
// -----------------------------------------------------------------------
'use strict'

// -----------------------------------------------------------------------
window.onload = ()=>
{
	document.querySelector("#outarea_aa").innerHTML = "*** src_not_found.js *** start ***"

	const file_json = "./file_not_found.json"

	const place = ".contents"

	read_fetch_table_proc(file_json,place)

	document.querySelector("#outarea_hh").innerHTML = "*** src_not_found.js *** end ***"
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
		const array_aa = JSON.parse(data)

		show_table_proc(place,array_aa)
	})

}
// -----------------------------------------------------------------------
// [4-6]:
function show_table_proc(place,array_aa)
{
	let str_out = ""
	str_out += "<table>"

	str_out += display_th()

	let icount = 1

	for (let it in array_aa)
		{
		const value = array_aa[it]
		str_out += "<tr><td>" + value + "</td></tr>"
		}

	str_out += display_th()
	str_out += "</table>"

	document.querySelector(place).innerHTML = str_out
}

// -----------------------------------------------------------------------
// [4-6-2]:
function display_th()
{
	let str_out = ""
	str_out += "<tr>"
	str_out += "<th>題名</th>"
	str_out += "</tr>"

	return str_out
}

// -----------------------------------------------------------------------
