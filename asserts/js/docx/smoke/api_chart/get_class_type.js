builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oDrawing;
oParagraph = oDocument.GetElement(0);
oDrawing = Api.CreateChart("bar3D", [[200, 240, 280],[250, 260, 280]], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oDrawing.SetVerAxisTitle("USD In Hundred Thousands", 10);
oDrawing.SetHorAxisTitle("Year", 11);
oDrawing.SetLegendPos("bottom");
oDrawing.SetShowDataLabels(false, false, true);
oDrawing.SetTitle("Financial Overview", 13);
oParagraph.AddDrawing(oDrawing);
var oClassType = oDrawing.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class Type = " + oClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();