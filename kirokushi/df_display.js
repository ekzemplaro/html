// -----------------------------------------------------------------------
//	df_display.js
//
//					Dec/07/2024
//
// -----------------------------------------------------------------------
// 'use strict'

// -----------------------------------------------------------------------
window.onload = ()=>
{
//        document.querySelector("#outarea_aa").innerHTML = "*** df_display.js *** start ***"

	const file_json = "./data_dict.json"

	const place = ".contents"

	read_fetch_table_proc(file_json,place)

 //       document.querySelector("#outarea_hh").innerHTML = "*** df_display.js *** end ***"
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
	var str_out = ""
	str_out += "<table>"

	str_out += display_th()

	var icount = 1

	console.log(dict_aa)

//	dict_aa.forEach(function (aax)
	for (var key in dict_aa)
		{
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
	const times = value['times']

	var str_out = "<tr>"

	str_out += "<td rowspan=" + times + ">" + key + "</td>"

	value['records'].forEach(function (bbx)
		{
	str_out += "<td>" + bbx['school'] + "</td>"
	str_out += "<td>" + bbx['class'] + "</td>"
	str_out += "<td>" + bbx['date_held'] + "</td>"
	str_out += "<td>" + bbx['name'] + "</td>"
	str_out += "</tr>"
		})

	return str_out
}

// -----------------------------------------------------------------------
// [4-6-2]:
function display_th()
{
	var str_out = ""
	str_out += "<tr>"
	str_out += "<th>題名</th>"
	str_out += "<th>場所</th>"
	str_out += "<th>対象</th>"
	str_out += "<th>年月日</th>"
	str_out += "<th>語った人</th>"
	str_out += "</tr>"

	return str_out
}

// -----------------------------------------------------------------------
