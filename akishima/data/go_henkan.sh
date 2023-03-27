#
#for no in 236 237 238 239 240 241 242 243 244 245 246
for no in 230 231 232 233 234 235
do
	file_in=${no}".pdf"
	file_out_a="a"${file_in}
	file_out_b="b"${file_in}
	pdftk ${file_in} cat 1 output ${file_out_a}
	./blank_pdf.py 140 ${file_out_a} ${file_out_b}
done


