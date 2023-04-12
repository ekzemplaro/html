#
FOLDER="https://www.library.akishima.tokyo.jp/ohanashikai/pdf/adult"
#
# for no in 231 232 233 234 235
for no in 247
do
	wget ${FOLDER}"/"${no}".pdf"
done
