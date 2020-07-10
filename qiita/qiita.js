// -----------------------------------------------------------------------
//	qiita.js
//
//					Jul/10/2020
//
// -----------------------------------------------------------------------
jQuery  (function ()
{
	jQuery("#outarea_aa").text("*** qiita.js *** start ***")

	const file_json = "./qiita_out.json"

	jQuery.getJSON(file_json,function(rec)
		{
		var str_out = display_table_proc (rec)
		jQuery(".contents").html (str_out)

		button_click_monitor(rec)
		})

	jQuery("#outarea_hh").text("*** qiita.js *** end ***")
})

// -----------------------------------------------------------------------
// [8]:
function button_click_monitor(rec)
{
	jQuery ("button").click (function ()
		{
		const id_select = this.id

		jQuery("#outarea_bb").text (this.id)

		jQuery ("button").css ("color","black")
		jQuery ("#" + this.id).css ("color","blue")

		var str_out = ""
		var data_new = []

		switch (id_select)
			{
	 		case "all":
				str_out = display_table_proc (rec)
				break

			case "likes":
				data_new = filter_likes_proc(rec)
				str_out = display_table_proc(data_new)
				break

			case "likes_sorted":
				data_new = filter_likes_proc(rec)
				data_new.sort(compare_proc)
				str_out = display_table_proc(data_new)
				break

			default:
				data_new = filter_proc (rec,id_select)
				str_out = display_table_proc(data_new)
				break
			}

		jQuery(".contents").html (str_out)

		})
}

// -----------------------------------------------------------------------
function filter_likes_proc (rec)
{
	var data_new = []
	rec.forEach(function(unit)
		{
		if (0 < unit.likes_count)
			{
			data_new.push(unit)
			}
		})

	var str_tmp = ""
	str_tmp += data_new.length + "<br />"
	jQuery("#outarea_cc").html(str_tmp)

	return	data_new
}

// -----------------------------------------------------------------------
function filter_proc (rec,id_select)
{
	var tag_targets = [""]

	switch (id_select)
		{
		case 'python':
			tag_targets = ['Python3','Python']
			break

		case 'php':
			tag_targets = ['PHP','PHP7']
			break

		case 'perl':
			tag_targets = ['Perl']
			break

		case 'nodejs':
			tag_targets = ['Node.js']
			break

		case 'TypeScript':
			tag_targets = ['TypeScript']
			break

		case 'Deno':
			tag_targets = ['deno']
			break

		case 'jQuery':
			tag_targets = ['jQuery']
			break

		case 'golang':
			tag_targets = ['golang','Go']
			break

		case 'ruby':
			tag_targets = ['Ruby']
			break

		case 'Java':
			tag_targets = ['Java']
			break

		case 'cplus':
			tag_targets = ['C++']
			break

		case 'csharp':
			tag_targets = ['C#']
			break

		case 'fsharp':
			tag_targets = ['F#']
			break

		case 'R':
			tag_targets = ['R']
			break

		case 'Prolog':
			tag_targets = ['Prolog','SWI-Prolog']
			break

		case 'Bash':
			tag_targets = ['Bash']
			break

		case 'curl':
			tag_targets = ['curl']
			break

		case 'rust':
			tag_targets = ['Rust']
			break

		case 'AWS':
			tag_targets = ['AWS','aws-cli','APIGateway']
			break

		case 'Lambda':
			tag_targets = ['lambda']
			break

		case 'Bluemix':
			tag_targets = ['Bluemix']
			break

		case 'gcloud':
			tag_targets = ['gcloud','GoogleCloudPlatform','GoogleSpreadSheet']
			break

		case 'Azure':
			tag_targets = ['Azure','AzureIoTHub','MicrosoftAzure']
			break

		case 'Heroku':
			tag_targets = ['Heroku']
			break

		case 'Domo':
			tag_targets = ['Domo']
			break

		case 'Facebook':
			tag_targets = ['Facebook']
			break

		case 'Twitter':
			tag_targets = ['Twitter','TwitterAPI']
			break

		case 'chatwork':
			tag_targets = ['chatwork']
			break

		case 'GitHub':
			tag_targets = ['GitHub']
			break

		case 'COTOHA':
			tag_targets = ['COTOHA']
			break

		case 'Kaggle':
			tag_targets = ['Kaggle']
			break

		case 'DynamoDB':
			tag_targets = ['DynamoDB']
			break

		case 'FireStore':
			tag_targets = ['Firestore']
			break

		case 'MongoDB':
			tag_targets = ['MongoDB']
			break

		case 'Redis':
			tag_targets = ['Redis']
			break

		case 'MariaDB':
			tag_targets = ['mariadb']
			break

		case 'PostgreSQL':
			tag_targets = ['PostgreSQL']
			break

		case 'Sqlite':
			tag_targets = ['sqlite','SQLite3']
			break

		case 'Elasticsearch':
			tag_targets = ['Elasticsearch']
			break

		case 'InfluxDB':
			tag_targets = ['influxdb']
			break

		case 'Excel':
			tag_targets = ['Excel','XLSX']
			break

		case 'PDF':
			tag_targets = ['PDF']
			break

		case 'Django':
			tag_targets = ['Django']
			break

		case 'Flask':
			tag_targets = ['Flask']
			break

		case 'Laravel':
			tag_targets = ['laravel5.6']
			break

		case 'FuelPHP':
			tag_targets = ['fuelphp1.8']
			break

		case 'Flight':
			tag_targets = ['Flight']
			break

		case 'Express':
			tag_targets = ['Express']
			break

		case 'Node-RED':
			tag_targets = ['node-red']
			break

		case 'Echo':
			tag_targets = ['echo']
			break

		case 'Vue.js':
			tag_targets = ['Vue.js']
			break

		case 'React.js':
			tag_targets = ['React']
			break

		case 'Scraping':
			tag_targets = ['scraping','beautifulsoup4']
			break

		case 'Web':
			tag_targets = ['Web']
			break

		case 'Nginx':
			tag_targets = ['nginx']
			break

		case 'Apache':
			tag_targets = ['Apache','Apache2.4']
			break

		case 'Tomcat':
			tag_targets = ['Tomcat','tomcat9']
			break

		case 'uWSGI':
			tag_targets = ['uwsgi']
			break

		case 'Selenium':
			tag_targets = ['Selenium','SeleniumGrid']
			break

		case 'HTTP':
			tag_targets = ['HTTP','HttpClient']
			break

		case 'Rest-API':
			tag_targets = ['REST-API']
			break

		case 'gRPC':
			tag_targets = ['gRPC']
			break

		case 'mail':
			tag_targets = ['mail','imap','postfix','gmail']
			break

		case 'dotenv':
			tag_targets = ['dotenv']
			break

		case 'OCR':
			tag_targets = ['OCR']
			break

		case 'WebAPI':
			tag_targets = ['WebAPI']
			break

		case 'Operation':
			tag_targets = ['運用']
			break

		case 'Tutorial':
			tag_targets = ['tutorial']
			break

		case 'SoftEther':
			tag_targets = ['SoftEther_VPN','vpncmd']
			break

		case 'covid19':
			tag_targets = ['コロナウイルス']
			break

		case 'pandas':
			tag_targets = ['pandas']
			break

		case 'pillow':
			tag_targets = ['pillow']
			break

		case 'beautifulsoup':
			tag_targets = ['beautifulsoup4']
			break

		case 'ArchLinux':
			tag_targets = ['archLinux']
			break

		case 'Ubuntu':
			tag_targets = ['Ubuntu']
			break

		case 'CentOS':
			tag_targets = ['centos7']
			break

		case 'Raspberry':
			tag_targets = ['Raspberry','RaspberryPi']
			break

		case 'ChromeBook':
			tag_targets = ['Chromebook']
			break

		}

	var data_new = []
	rec.forEach(function(unit)
		{
		var flag_out = false
		unit.tags.forEach(function(tag)
			{
			for (var it in tag_targets)
				{
				if (tag.name == tag_targets[it])
					{
					flag_out = true
					}
				}
			})

		if (flag_out)
			{
			data_new.push(unit)
			}
		})

	return	data_new
}

// -----------------------------------------------------------------------
function compare_proc(left,right)
{
	const aa = left.likes_count
	const bb = right.likes_count

	var rvalue = 0


	if (bb < aa)
		{
		rvalue = -1
		}
	else if (aa < bb)
		{
		rvalue = 1
		}
	else
		{
		const pp = left.no
		const qq = right.no

		if (qq < pp)
			{
			rvalue = -1
			}
		else if (pp < qq)
			{
			rvalue = 1
			}
		}

	return	rvalue
}

// -----------------------------------------------------------------------
