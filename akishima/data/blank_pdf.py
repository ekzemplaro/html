#! /usr/bin/python
#
#	blank_pdf.py
#
#						Mar/26/2023
#
# ------------------------------------------------------------------
import sys
from pdfrw import PdfReader
from pdfrw.buildxobj import pagexobj
from pdfrw.toreportlab import makerl
from reportlab.pdfgen import canvas
import reportlab.lib.colors as color

# ------------------------------------------------------------------
def blank_square_proc(pdf_canvas,xx,yy,width,height):
	pdf_canvas.setFillColor(color.white)
	pdf_canvas.rect(xx, yy, width, height,stroke=False, fill=True)
# ------------------------------------------------------------------
def blank_proc(pdf_canvas,height):
#
#	height = 150
#	height = 140
#	height = 170
	blank_square_proc(pdf_canvas,10,10,600,height)
#
# ------------------------------------------------------------------
sys.stderr.write("*** 開始 ***\n")
height = int(sys.argv[1])
file_in = sys.argv[2]
file_out = sys.argv[3]
sys.stderr.write("height = %d\n" % height)
sys.stderr.write(file_in + "\n")
sys.stderr.write(file_out + "\n")
#
pdf_canvas = canvas.Canvas(file_out)

pdf_obj = PdfReader(file_in,decompress=False)

page = pdf_obj.pages
pp = pagexobj(page[0])
pdf_canvas.doForm(makerl(pdf_canvas, pp))

blank_proc(pdf_canvas,height)

pdf_canvas.showPage()
pdf_canvas.save()
#
sys.stderr.write("*** 終了 ***\n")
# ------------------------------------------------------------------
