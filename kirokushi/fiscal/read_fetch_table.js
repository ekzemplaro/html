// -----------------------------------------------------------------------
//	read_fetch_table.js
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

		console.log(dict_aa['f2018'])
//		const str_out = display_table_proc(dict_aa)
//		document.querySelector(place).innerHTML = str_out
	}).catch((error) => {
		console.log(error)
	})
}

// -----------------------------------------------------------------------
