// -----------------------------------------------------------------------
//	titles_tellers.js
//
//					Sep/13/2025
//
// -----------------------------------------------------------------------
'use strict'

// -----------------------------------------------------------------------
window.onload = ()=>
{
//        document.querySelector("#outarea_aa").innerHTML = "*** titles_tellers.js *** start ***"

	const file_json = "./data_src_teller.json"

	const place = ".contents"

	read_fetch_table_proc(file_json,place)

 //       document.querySelector("#outarea_hh").innerHTML = "*** titles_tellers.js *** end ***"
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

	let no = 1

//	console.log(dict_aa)

	for (let key in dict_aa)
		{
		const value = dict_aa[key]
		str_out += record_proc(no,key,value)
		no += 1
		}

	str_out += display_th()
	str_out += "</table>"

	document.querySelector(place).innerHTML = str_out
	document.querySelector('.count').innerText = icount
}

// -----------------------------------------------------------------------
// [4-6-4]:
function record_proc(no,key,value)
{
	const times = value['times']
	let src = ""

	if ('src' in value)
		{
		src += value['src']
		}

	let array_src = src.split(",")
	let llx_src = array_src.length

	let str_out = "<tr>"

	str_out += "<td rowspan=" + times + '" >'  + no + "</td>"

	let title_out = '<div class="bold">' + key + '</div>'

	if (0 < llx_src)
		{
		title_out += "<blockquote>"
		for (let it in array_src)
			{
			title_out += array_src[it] + "<br />"
			}
		title_out += "</blockquote>"
		}
	str_out += "<td rowspan=" + times + ' class="title">'  + title_out + "</td>"
/*
	str_out += "<td rowspan=" + times + ">" + key + "</td>"
	str_out += "<td rowspan=" + times + ">"

	if (0 < llx_src)
		{
		for (let it in array_src)
			{
			str_out += array_src[it] + "<br />"
			}
		}

	str_out += "</td>"
*/

	value['records'].forEach(function (bbx)
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
	str_out += "<th>No</th>"
	str_out += "<th>題名</th>"
	str_out += "<th>語る人</th>"
	str_out += "</tr>"

	return str_out
}

// -----------------------------------------------------------------------
