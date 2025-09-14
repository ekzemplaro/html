					Aug/14/2025 PM 17:13

マウント

rclone mount google-drive: ~/google-drive --daemon --vfs-cache-mode full

rclone mount google-drive: ~/google-drive-shared \
  --daemon --drive-shared-with-me --vfs-cache-mode full

doc/oyama/from_hatakeyama で、ローカルに必要なデータをコピー

ローカルから、年度別のドライブにアップロード

------------------------------------------------------------------
出典

	gen_source

		入力	source_2025-03-25.xlsx
		出力	sources.json

------------------------------------------------------------------
list_spread

	GAS を使って、年度単位で、ファイルのID を求める

		get_file_ids

	json_merge
		作成された　JSON ファイルを title_id.json にマージする

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

	make

	command_gen.sh

	2020年度以降の 絹義務を除く


	filter_json を呼んでいる

	出力	data/*hh.json

divide_rows	2020年度以降の 絹義務小,絹義務中

	make

	filter_json を呼んでいる

	出力	data/*hh.json

		json_to_spread

----------------------------------------------------------
この段階で、単体データの確認をするには、

	public/go_list_gen.sh を実行する必要がある。
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

		add_kana
			出力	data2.json

		to_dict
			出力	data_dict.json

		to_school_dict
			出力	dict_school.json

		to_fiscal_dict
			出力	dict_fiscal.json

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

	ここまでは、
		./go_after.sh
		が行う。

	http-server

	確認が出来たら

		 go_sync.sh

			http://localhost/uchida/kirokushi
			に同期する。


----------------------------------------------------------
'//' で始まるコラムは、コメント扱いにする。

例	絹義務小_2023-09-20 4年
----------------------------------------------------------
