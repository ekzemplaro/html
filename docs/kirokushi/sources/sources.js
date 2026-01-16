// -----------------------------------------------------------------------
//	sources.js
//
//					Apr/19/2025
//
// -----------------------------------------------------------------------
// 'use strict'

// -----------------------------------------------------------------------
window.onload = ()=>
{
	document.querySelector("#outarea_aa").innerHTML = "*** sources.js *** start ***"

	const file_json = "./sources.json"

	const place = ".contents"

	read_fetch_table_proc(file_json,place)

	document.querySelector("#outarea_hh").innerHTML = "*** sources.js *** end ***"
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
		const dict_aa = JSON.parse(data)

		show_table_proc(place,dict_aa)
	})

}
// -----------------------------------------------------------------------
// [4-6]:
function show_table_proc(place,dict_aa)
{
	let str_out = ""
	str_out += "<table>"

	str_out += display_th()

	let icount = 1


	for (let key in dict_aa)
		{
		console.log(key)
		const value = dict_aa[key]
		str_out += record_proc(key,value)
		}

	str_out += display_th()
	str_out += "</table>"

	document.querySelector(place).innerHTML = str_out
}

// -----------------------------------------------------------------------
// [4-6-4]:
function record_proc(key,value)
{
	const times = value.length

// console.log(times)

	let str_out = "<tr>"

	str_out += "<td rowspan=" + times + ">" + key + "</td>"


	value.forEach(function(bbx)
		{
	str_out += "<td>" + bbx + "</td>"
	str_out += "</tr>"
		})

	return str_out
}

// -----------------------------------------------------------------------
// [4-6-2]:
function display_th()
{
	let str_out = ""
	str_out += "<tr>"
	str_out += "<th>題名</th>"
	str_out += "<th>出典</th>"
	str_out += "</tr>"

	return str_out
}

// -----------------------------------------------------------------------
