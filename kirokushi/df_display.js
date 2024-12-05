// ---------------------------------------------------------------
//	df_display.js
//
//					Dec/05/2024
//
// ---------------------------------------------------------------
// 'use strict'

// ---------------------------------------------------------------
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

// ---------------------------------------------------------------
fetch('data.json')
  .then(response => response.json())
  .then(data => {
//    console.log(data); // コンソールに表示

var str_out = ""

str_out += "<table>"
str_out += display_th()

for (it in data)
	{
	str_out += "<tr>"
	str_out += "<td>" + data[it]['title'] + "</td>"
	str_out += "<td>" + data[it]['school'] + "</td>"
	str_out += "<td>" + data[it]['class'] + "</td>"
	str_out += "<td>" + data[it]['date_held'] + "</td>"
	str_out += "<td>" + data[it]['name'] + "</td>"
/*
	str_out += "<td>"
	str_out += JSON.stringify(data[it])
	str_out += "</td>"
*/
	str_out += "</tr>"
	}
str_out += display_th()
str_out += "</table>"

const app = document.getElementById('app')
app.innerHTML = str_out
	
})

// ---------------------------------------------------------------
