builder.CreateFile("docx");

var Api = editor;
var oDocument     = Api.GetDocument();
oDocument.CreateNewHistoryPoint();

oParagraph = Api.CreateParagraph();
oDocument.Push(oParagraph);
oParagraph.AddText("Italic").SetItalic(true);

builder.SaveFile("docx", "/home/ilya/Documents/temp_docx/add_text_with_italic_in_paragraph.docx");
builder.CloseFile();
builder.CloseFile();