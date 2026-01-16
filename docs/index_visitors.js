// -----------------------------------------------------------------------
//	index_visitors.js
//
//					May/05/2023
//
// -----------------------------------------------------------------------
window.onload = ()=>
{
	document.querySelector("#outarea_aa").innerHTML
		= "*** index_visitors.js *** start ***"

	const url_php = "./index_visitors.php"

	fetch(url_php).then((response) => {
		if(!response.ok) {
			console.log('Read error!')
			throw new Error('error')
		} 
		console.log('Read ok!')
		return response.text()
	}).then((data)  => {
//		console.log(data)
document.querySelector("#visitors").innerHTML = data

})

	document.querySelector("#outarea_hh").innerHTML
		= "*** index_visitors.js *** end ***"
}

// -----------------------------------------------------------------------
