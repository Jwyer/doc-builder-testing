builder.CreateFile("docx");
var Api = editor;

var oDocument     = Api.GetDocument();
oDocument.CreateNewHistoryPoint();

var oParagraph, oTable, oTableRow, oCell, oCellContent, oRun, oDrawing;

var oParagraph = Api.CreateParagraph();
oParagraph.SetIndLeft(1500);
var oFinalSection   = oDocument.GetFinalSection();
var oDocContent = oFinalSection.GetHeader("default", true);
oDocContent.Push(oParagraph);
oParagraph.AddText("LeftIndent");

builder.SaveFile("docx", "text_leftindent_in_header.docx");
builder.CloseFile();