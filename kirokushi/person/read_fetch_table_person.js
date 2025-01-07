// -----------------------------------------------------------------------
//	read_fetch_table_person.js
//
//					Jan/07/2025
//
// -----------------------------------------------------------------------
'use strict'
// -----------------------------------------------------------------------
// [8-4]:
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
		let str_name = ""
		for (let name in dict_aa)
			{
			str_name += '<button id="' + name + '" '
			str_name += 'onclick="filter_proc(this)">' 
			str_name += name + "</button>"
			}
//		console.log(str_name)
		document.querySelector(".area_button").innerHTML = str_name
	}).catch((error) => {
		console.log(error)
	})
}

// -----------------------------------------------------------------------
