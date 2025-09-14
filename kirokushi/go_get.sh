#
#	go_get.sh
#						Aug/13/2025
#
DICTIONARY="../process/dictionary"
ASSIGN_SOURCE="../process/assign_source"
#
cp -p $DICTIONARY/data_dict.json titles
cp -p $DICTIONARY/dict_school.json schools
cp -p $DICTIONARY/dict_fiscal.json fiscal
cp -p $DICTIONARY/dict_person.json person
cp -p $DICTIONARY/dict_grade.json grades
#
cp -p $ASSIGN_SOURCE/data_src.json titles_with_src
cp -p $ASSIGN_SOURCE/file_not_found.json src_not_found
#
# rsync -avzz --delete ../data/ ./data
#
