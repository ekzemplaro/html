// -----------------------------------------------------------------------
//	titles_with_src.js
//
//					Jun/02/2025
//
// -----------------------------------------------------------------------
// 'use strict'

// -----------------------------------------------------------------------
window.onload = ()=>
{
//        document.querySelector("#outarea_aa").innerHTML = "*** titles_with_src.js *** start ***"

	const file_json = "./data_src.json"

	const place = ".contents"

	read_fetch_table_proc(file_json,place)

 //       document.querySelector("#outarea_hh").innerHTML = "*** titles_with_src.js *** end ***"
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

	let icount = 0

	console.log(dict_aa)

	for (let key in dict_aa)
		{
		const value = dict_aa[key]
		str_out += record_proc(key,value)
		icount += 1
		}

	str_out += display_th()
	str_out += "</table>"

	document.querySelector(place).innerHTML = str_out
	document.querySelector('.count').innerText = icount
}

// -----------------------------------------------------------------------
// [4-6-4]:
function record_proc(key,value)
{
	const times = value['times']
	let src = ""

	if ('src' in value)
		{
		src += value['src']
		}

	let str_out = "<tr>"

	str_out += "<td rowspan=" + times + ">" + key + "</td>"
	str_out += "<td rowspan=" + times + ">"

	let array_src = src.split(",")
	let llx = array_src.length

	if (0 < llx)
		{
		for (let it in array_src)
			{
			str_out += "<p>" + array_src[it] + "</p>"
			}
		}

	str_out += "</td>"

	value['records'].forEach(function (bbx)
		{
		str_out += "<td>" + bbx['school'] + "</td>"
		str_out += "<td>" + bbx['target'] + "</td>"
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
	let str_out = ""
	str_out += "<tr>"
	str_out += "<th>題名</th>"
	str_out += "<th>出典</th>"
	str_out += "<th>場所</th>"
	str_out += "<th>対象</th>"
	str_out += "<th>年月日</th>"
	str_out += "<th>語った人</th>"
	str_out += "</tr>"

	return str_out
}

// -----------------------------------------------------------------------
