#! /usr/bin/python
#
#	pdf_move.py
#
#						Mar/28/2023
#
import  sys
import  PyPDF2
from PyPDF2 import Transformation
#
# ------------------------------------------------------------------
def pdf_merge_proc(pdf_reader1,deltx,delty):
	pages= len(pdf_reader1.pages)
	nn_out = int((pages + 1) / 2)
	sys.stderr.write("pages = %d\n" % pages)
	sys.stderr.write("nn_out = %d\n" % nn_out)
#
	pdf_writer = PyPDF2.PdfWriter()
#
	it = 0
	page_obj_a = pdf_reader1.pages[it]

	page_obj_out = PyPDF2.PageObject.create_blank_page(width=deltx, height=delty)
#
	page_obj_out.merge_page(page_obj_a)
#
	pdf_writer.add_page(page_obj_out)
#
	return pdf_writer
# ------------------------------------------------------------------
sys.stderr.write ("*** 開始 ***\n")
pdf_in = sys.argv[1]
pdf_out = sys.argv[2]
#
pdf_file_in = open(pdf_in, 'rb')
pdf_reader1 = PyPDF2.PdfReader(pdf_file_in)
page_num = pdf_reader1.getNumPages()
p = pdf_reader1.getPage(0)
p_size = p.mediaBox
p_width = p_size.getWidth()
p_height = p_size.getHeight()
print(p_width)
print(p_height)
#
height = 480
height = 465
pdf_writer = pdf_merge_proc(pdf_reader1,p_width,height)
#
pdf_output_file = open(pdf_out, 'wb')
pdf_writer.write(pdf_output_file)
pdf_output_file.close()
pdf_file_in.close()
#
sys.stderr.write ("*** 終了 ***\n")
# ------------------------------------------------------------------
