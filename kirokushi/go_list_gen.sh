#
ls ../data/*_hh.json > list.txt
#
sed -f sed_list list.txt > list_processed.txt
#
list_json_gen/list_json_gen.py list_processed.txt list_processed.json
