// -----------------------------------------------------------------------
//	read_fetch_table.js
//
//					Jul/21/2025
//
// -----------------------------------------------------------------------
// 'use strict'

// -----------------------------------------------------------------------
/*
	const file_json = "./data_in.json"

	const place = ".contents"

	read_fetch_table_proc(file_json,place)
*/
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
	let icount = 0
	str_out += "<table>"

	str_out += display_th()

	console.log(array_aa)

	for (let it in array_aa)
		{
		const value = array_aa[it]
		str_out += record_proc(value)
		icount += 1
		}

	str_out += display_th()
	str_out += "</table>"

	document.querySelector(place).innerHTML = str_out
	document.querySelector('.count').innerText = icount
}

// -----------------------------------------------------------------------
// [4-6-4]:
function record_proc(value)
{

	let str_out = "<tr>"

	str_out += "<td>" + value['school'] + "</td>"
	str_out += "<td>" + value['date_held'] + "</td>"
	str_out += "<td>" + value['target'] + "</td>"
	str_out += "<td>" + value['title'] + "</td>"
	str_out += "<td>" + value['name'] + "</td>"
	str_out += "</tr>"

	return str_out
}

// -----------------------------------------------------------------------
// [4-6-2]:
function display_th()
{
	let str_out = ""
	str_out += "<tr>"
	str_out += "<th>場所</th>"
	str_out += "<th>年月日</th>"
	str_out += "<th>対象</th>"
	str_out += "<th>題名</th>"
	str_out += "<th>語った人</th>"
	str_out += "</tr>"

	return str_out
}

// -----------------------------------------------------------------------
