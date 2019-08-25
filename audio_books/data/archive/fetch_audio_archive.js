#! /usr/bin/node
// ---------------------------------------------------------------
//	fetch_audio_archive.js
//
//					Jan/23/2019
//
// ---------------------------------------------------------------
var fs = require("fs")
var underscore = require('underscore')

var totaltime =require ("./totaltime")
// ---------------------------------------------------------------
// console.log ("*** 開始 ***")

const file_json_in=process.argv[2]
var data_archive = {}

console.log (file_json_in)

const json_str = fs.readFileSync (file_json_in)

if (1 < json_str.length)
	{
	var data_works = JSON.parse (json_str)
	fetch_audio_archive_proc (data_works,data_archive)
	}


var icount = 0
for (var key in data_works)
	{
	icount += 1
	}

var displayResult  = underscore.after (icount, function()
	{
	const json_str_out = JSON.stringify (data_archive)

	const file_archive_json = 'data_archive.json'
	fs.writeFile (file_archive_json,json_str_out,function (err)
		{
		if (err) {
			console.error ("Error on write: " + err)
			}
		})
	console.log ("*** 終了 ***")
	})

// ---------------------------------------------------------------
// [4]:
function fetch_audio_archive_proc (data_works,data_archive)
{
	for (var key in data_works)
		{
		const url_archive = data_works[key].url_archive
		archive_fetch_exec_proc (key,url_archive,data_archive)
		}
}

// ---------------------------------------------------------------
// [4-6]:
function archive_fetch_exec_proc (key,url_archive,data_archive)
{
	const url='https://archive.org/details/' + url_archive
	console.log (url)
	const url_json = url + '&output=json'
	const file_json = key + '.json'

	var https = require('https')

https.get(url_json, function(res) {
	var body = ''
	res.setEncoding('utf8')
	
	res.on ('data', function (chunk) {
	body += chunk
	})

	res.on('end', function() {

	const head_portion = body.substr (0,9)
	if (head_portion !== "<!DOCTYPE")
		{
	const data_aa = JSON.parse (body)

	var unit_aa = filter_arhive_shorten_proc (key,data_aa)

		unit_aa['url_archive'] = url_archive
		unit_aa['week'] = 0

console.log("url_archive = " + url_archive)
console.log("month = " + unit_aa.month)
console.log("week = " + unit_aa.week)

		data_archive[key] = unit_aa
 
		displayResult()
		}

	})

}).on('error', function(ee) {
	console.error(ee)
})
}

// ---------------------------------------------------------------
// [4-6-8]:
function filter_arhive_shorten_proc (key,data_aa)
{
	var unit_aa = new Object ()

//	console.log (data_aa.metadata.publicdate)
//	console.log (data_aa.item.downloads)

	const total_time = totaltime.archive_totaltime_proc (data_aa)

	console.log (total_time)
	unit_aa['total_time'] = total_time

	unit_aa['publicdate'] = data_aa.metadata.publicdate[0]
	unit_aa['downloads'] = 0
	unit_aa['week'] = 0
	unit_aa['month'] = 0

	if ('item' in data_aa)
		{
		if ('downloads' in data_aa.item)
			{
			unit_aa['downloads'] = data_aa.item.downloads
			unit_aa['week'] = data_aa.item.week
			unit_aa['month'] = data_aa.item.month
			}
		}

	return	unit_aa
}

// ---------------------------------------------------------------
