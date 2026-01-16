// -----------------------------------------------------------------------
//	bingo.js
//
//						Nov/12/2024
//
// -----------------------------------------------------------------------
'use strict'
// -----------------------------------------------------------------------
window.onload = ()=>
{
	document.querySelector("#outarea_aa").innerHTML = "*** bingo.js *** start ***"
	document.querySelector("#outarea_bb").innerText = "*** bingo.js *** start bb ***"

	var file_json = "./data_bingo.json"
	var place = ".contents"
	read_fetch_table_proc(file_json,place)

	document.querySelector("#outarea_gg").innerHTML = "*** bingo.js *** end ***"
	document.querySelector("#outarea_hh").innerText = "*** bingo.js *** end bb ***"
}

// -----------------------------------------------------------------------
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
//		console.log(data)
		const hash_aa = JSON.parse(data)

//		const array_aa = sort_array_proc(data_aa)

		show_table_proc(place,hash_aa)
})

}
// -----------------------------------------------------------------------
// [4]:
function show_table_proc(place,hash_aa)
{
	var str_out = ""
	str_out += "<table>"
	str_out += "<tr>"
	str_out += "<th>日付</th>"
	str_out += "<th>1年</th>"
	str_out += "<th>2年</th>"
	str_out += "<th>3年</th>"
	str_out += "<th>4年</th>"
	str_out += "<th>5年</th>"
	str_out += "<th>6年</th>"
	str_out += "<th>ひまわり</th>"
	str_out += "</tr>"

//	var no = data_aa.length

//	console.log(no)

	for (let key in hash_aa) {
		console.log(key)
		const value = hash_aa[key]
		str_out += record_proc(key,value)
		}
/*
	data_aa.forEach(function (aax)
		{
		str_out += record_proc(aax,no)
		no -= 1
		})
*/
	str_out += "</table>"

	document.querySelector(place).innerHTML = str_out
}

// -----------------------------------------------------------------------
function record_proc(key,value)
{
	var str_out = ""

	var icount = 0

	for (let kk in value) {
	str_out += "<tr>"
	str_out += "<td>"

	if (icount == 0)
		{
		str_out += key
		}
	str_out += "</td>"

	str_out += "<td>"
	str_out += kk
	str_out += "</td>"

	str_out += "<td>"
	str_out += value[kk][0]
	str_out += "</td>"

	str_out += "</tr>"

	icount += 1
	}
/*
	const llx = (aax.title).length

	str_out += "<td rowspan=" + llx + ">" + no + "</td>"
	str_out += "<td rowspan=" + llx + ">" + aax.told + "</td>"

	for (var it in aax.title)
		{
		str_out += "<td>" + aax.title[it] + "</td>"
		if (it == 0)
			{
			str_out += "<td rowspan=" + llx + ">" + aax.at + "</td>"
			}
		str_out += "</tr>"
		}
*/


	return str_out
}

// -----------------------------------------------------------------------
