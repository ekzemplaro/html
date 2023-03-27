// -----------------------------------------------------------------------
//	akishima.js
//
//						Mar/27/2023
//
// -----------------------------------------------------------------------
'use strict'
// -----------------------------------------------------------------------
window.onload = ()=>
{
document.querySelector("#outarea_aa").innerText = "*** akishima *** start ***"

var no = 245
var str_out = ""

const array_no = [246,245,244,243,242,241,240,239,238,237,236,235,234,233,232,231,230]

array_no.forEach (element => str_out += gen_data(element))

document.querySelector(".contents").innerHTML = str_out

document.querySelector("#outarea_hh").innerText = "*** akishima *** end ***"

}

// -----------------------------------------------------------------------
function gen_data(no)
{
var str_out = ""
str_out += "<p>第 " + no + " 回</p>" 
const str_out_aa = '<iframe id="Example_a" title="246.pdf" width="800" height="400" src="http://localhost/uchida/akishima/pdf.js/web/viewer.html?file=../../data/'
const str_out_bb = 'b' + no
const str_out_cc = '.pdf" > </iframe> <p />'

str_out += str_out_aa + str_out_bb + str_out_cc

	return str_out
}

// -----------------------------------------------------------------------
