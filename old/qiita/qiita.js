// -----------------------------------------------------------------------
//	qiita.js
//
//					May/07/2022
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
//	jQuery ("button").click (function ()
	jQuery ("button").on ("click", function ()
		{
		const id_select = this.id

		jQuery("#outarea_bb").text ("this.id = " + this.id)

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
			tag_targets = ['PHP','PHP7','PHP8']
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

		case 'FetchAPI':
			tag_targets = ['FetchAPI']
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

		case 'Dart':
			tag_targets = ['Dart']
			break

		case 'Julia':
			tag_targets = ['Julia']
			break

		case 'Kotlin':
			tag_targets = ['Kotlin']
			break

		case 'AWS':
			tag_targets = ['AWS','aws-cli','APIGateway','awsIoT',
				'AppSync']
			break

		case 'Lambda':
			tag_targets = ['lambda']
			break

		case 'Bluemix':
			tag_targets = ['Bluemix']
			break

		case 'gcloud':
			tag_targets = ['gcloud','GoogleCloudPlatform']
			break

		case 'GoogleCloudFunctions':
			tag_targets = ['GoogleCloudFunctions']
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
			tag_targets = ['Chatwork']
			break

		case 'GitHub':
			tag_targets = ['GitHub']
			break

		case 'GitLab':
			tag_targets = ['GitLab']
			break

		case 'COTOHA':
			tag_targets = ['COTOHA']
			break

		case 'Kaggle':
			tag_targets = ['Kaggle']
			break

		case 'SORACOM':
			tag_targets = ['SORACOM','SoracomHarvest']
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

		case 'CouchDB':
			tag_targets = ['CouchDB']
			break

		case 'Redis':
			tag_targets = ['Redis']
			break

		case 'MariaDB':
			tag_targets = ['mariadb','MySQL']
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

		case 'GoogleSpreadSheet':
			tag_targets = ['GoogleSpreadSheet']
			break

		case 'PDF':
			tag_targets = ['PDF','mpdf']
			break

		case 'Django':
			tag_targets = ['Django']
			break

		case 'Flask':
			tag_targets = ['Flask']
			break

		case 'Bottle':
			tag_targets = ['bottle']
			break

		case 'FastAPI':
			tag_targets = ['FastAPI']
			break

		case 'Laravel':
			tag_targets = ['laravel5.6','Laravel']
			break

		case 'FuelPHP':
			tag_targets = ['fuelphp1.8']
			break

		case 'Flight':
			tag_targets = ['Flight']
			break

		case 'Genie':
			tag_targets = ['Genie']
			break

		case 'Express':
			tag_targets = ['Express']
			break

		case 'Koa.js':
			tag_targets = ['Koa.js']
			break

		case 'Nest.js':
			tag_targets = ['NestJS']
			break

		case 'Node-RED':
			tag_targets = ['node-red']
			break

		case 'Echo':
			tag_targets = ['echo']
			break

		case 'Gin':
			tag_targets = ['gin']
			break

		case 'Vue.js':
			tag_targets = ['Vue.js','nuxt.js']
			break

		case 'React.js':
			tag_targets = ['React']
			break

		case 'WordPress':
			tag_targets = ['WordPress']
			break

		case 'Grafana':
			tag_targets = ['grafana']
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

		case 'WebDAV':
			tag_targets = ['webdav']
			break

		case 'udp':
			tag_targets = ['udp']
			break

		case 'mqtt':
			tag_targets = ['mqtt','mqtts','paho-mqtt','mosquitto','paho','AzureIoTHub']
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

		case 'LetsEncrypt':
			tag_targets = ['letsencrypt']
			break

		case 'JWT':
			tag_targets = ['JWT']
			break

		case 'deb':
			tag_targets = ['deb']
			break

		case 'upload':
			tag_targets = ['upload']
			break

		case 'cookie':
			tag_targets = ['cookie']
			break

		case 'base64':
			tag_targets = ['base64']
			break

		case 'GraphQL':
			tag_targets = ['GraphQL']
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

		case 'machine_learning':
			tag_targets = ['機械学習']
			break

		case 'audio':
			tag_targets = ['audio']
			break

		case 'TextToSpeech':
			tag_targets = ['TextToSpeech']
			break

		case '仮想環境':
			tag_targets = ['仮想環境','lxc','lxd','Docker']
			break

		case '翻訳':
			tag_targets = ['翻訳']
			break
			
		case '自然言語処理':
			tag_targets = ['自然言語処理','mecab','GiNZA']
			break

		case 'Graphics':
			tag_targets = ['graph','d5.js','chart.js','canvas',
				'grafana','Kibana']
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

		case 'SQLAlchemy':
			tag_targets = ['sqlalchemy']
			break

		case 'ArchLinux':
			tag_targets = ['archLinux']
			break

		case 'Ubuntu':
			tag_targets = ['Ubuntu']
			break

		case 'CentOS':
			tag_targets = ['centos7','CentOS']
			break

		case 'Alpine':
			tag_targets = ['alpine']
			break

		case 'Raspberry':
			tag_targets = ['Raspberry','RaspberryPi']
			break

		case 'Arduino':
			tag_targets = ['Arduino','ArduinoUno']
			break

		case 'WioLTE':
			tag_targets = ['WioLTE']
			break

		case 'M5Stack':
			tag_targets = ['M5stackCore2']
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
