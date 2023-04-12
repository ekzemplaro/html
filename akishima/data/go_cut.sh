#
# for no in 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246
for no in 247
do
	file_in=${no}".pdf"
	file_out_b="b"${file_in}
	file_out_c="c"${file_in}
	./pdf_move.py ${file_out_b} ${file_out_c}
done
#
