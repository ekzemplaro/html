					Jul/25/2025 PM 13:26

マウント

rclone mount google-drive: ~/google-drive --daemon --vfs-cache-mode full

list_spread
	出力	title_id.json

spread_to_json/parse_title_id

	入力	title_id.json

	出力
		title_list.txt

		json に変換していないファイル

			../data/乙女中_2025-03-13.json

spread_to_json

	出力	spread_to_json/data/*.json

convert_json

	command_gen.sh

	2020年度以降の 絹義務を除く


	filter_json を呼んでいる

	出力	data/*hh.json

divide_rows	2020年度以降の 絹義務小,絹義務中

	filter_json を呼んでいる

	出力	data/*hh.json

		json_to_spread

----------------------------------------------------------
ここからは、次のコマンドで流れる

./go_after.sh

concat_json
	入力	../data/*_hh.json
	出力	data.json

kana
	次を呼ぶ

		title_kana_gen
			入力	data.json
			出力	dict_title.json

		name_kana_gen
			入力	data.json
			出力	dict_name.json

dictionary
	入力	data.json
		dict_title.json
		dict_name.json

	次を呼ぶ

		to_dict
			出力	data_dict.json

		to_school_dict
			出力	dict_school.json

		to_person_dict
			出力	dict_person.json

		to_grade_dict
			出力	dict_grade.json

assign_source

	入力
		dictionary/data_dict.json
		gen_source/sources.json

	出力
		data_src.json
		file_not_found.json

browser

	go_get.sh

	go_list_gen.sh

	http-server

	確認が出来たら

		 go_sync.sh

----------------------------------------------------------
