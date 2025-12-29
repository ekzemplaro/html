// -----------------------------------------------------------------------
//	titles_fifty.js
//
//					Nov/08/2025
//
// -----------------------------------------------------------------------
'use strict'

let dict_aa = []
// -----------------------------------------------------------------------
window.onload = ()=>
{
	document.querySelector("#outarea_aa").innerHTML = "*** titles_fifty.js *** start ***"

	const file_json = "./data_src.json"

	const place = ".contents"

	read_fetch_table_proc(file_json,place)

	document.querySelector("#outarea_hh").innerHTML = "*** titles_fifty.js *** end ***"
}

// -----------------------------------------------------------------------
function filter_proc(obj)
{
	const id_select = obj.id
	document.querySelector("#outarea_bb").innerHTML = "*** filter_proc *** " + id_select
	document.querySelector("#outarea_bb").innerHTML = "obj.id = " + obj.id
	let elements = document.querySelectorAll('button')
	document.querySelector("#outarea_cc").innerHTML = elements.length
	for (let it=0; it<elements.length; it += 1)
		{
		document.getElementById(elements[it].id).style.color = "black"
		}
	document.getElementById(obj.id).style.color = "blue"

	let str_out = ""
	let data_new = []
	data_new = filter_fifty_proc(dict_aa,id_select)
	const place = ".contents"
	show_table_proc(place,data_new)
//	str_out = display_table_school_proc(data_new)
//	document.querySelector(".contents").innerHTML = str_out
}

// -----------------------------------------------------------------------
function filter_fifty_proc (rec,id_select)
{
	let dict_new = {}

	let char_check = 'あいうえお'

	switch (id_select)
		{
		case 'ka':
			char_check = 'かきくけこ'
			break

		case 'sa':
			char_check = 'さしすせそ'
			break

		case 'ta':
			char_check = 'たちつてと'
			break

		case 'na':
			char_check = 'なにぬねの'
			break

		case 'ha':
			char_check = 'はひふへほ'
			break

		case 'ma':
			char_check = 'まみむめも'
			break

		case 'ya':
			char_check = 'やゆよ'
			break

		case 'ra':
			char_check = 'らりるれろ'
			break

		case 'wa':
			char_check = 'わを'
			break

		}

	for (let key in dict_aa)
		{
		const ch_first = dict_aa[key]['title_kana'][0]
		if (char_check.includes(ch_first))
			{
			dict_new[key] = dict_aa[key]
			}
		}
/*
	let icount = 0
	for (let key in dict_aa)
		{
		dict_new[key] = dict_aa[key]
		icount += 1

		if (5 < icount)
			{
			break
			}
		}
*/

	return	dict_new
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
		dict_aa = JSON.parse(data)

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

//	console.log(dict_aa)

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

	let array_src = src.split(",")
	let llx_src = array_src.length

	let str_out = "<tr>"

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
//	str_out += "<th>出典</th>"
	str_out += "<th>場所</th>"
	str_out += '<th class="target">対象</th>'
	str_out += "<th>年月日</th>"
	str_out += "<th>語った人</th>"
	str_out += "</tr>"

	return str_out
}

// -----------------------------------------------------------------------
