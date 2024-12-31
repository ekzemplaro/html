// -----------------------------------------------------------------------
//	read_fetch_table.js
//
//					Dec/17/2024
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
		const str_out = display_table_proc(dict_aa)
		document.querySelector(place).innerHTML = str_out
	}).catch((error) => {
		console.log(error)
	})
}

// -----------------------------------------------------------------------
