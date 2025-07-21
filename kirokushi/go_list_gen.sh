sed -f sed_list ../concat_json/list.txt > list_processed.txt
#
list_json_gen/list_json_gen.py list_processed.txt list_processed.json
