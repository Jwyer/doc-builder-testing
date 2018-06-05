builder.CreateFile("pptx");
var Presentation = Api.GetPresentation();
var Slide = Presentation.GetSlideByIndex(0);
var Table = Api.CreateTable(3,1);
Slide.AddObject(Table);
var cell1 = Table.GetRow(0).GetCell(0);
var cell2= Table.GetRow(0).GetCell(1);
cell1.GetContent().GetElement(0).AddText('cell1');
cell2.GetContent().GetElement(0).AddText('cell2');
builder.SaveFile("pptx", "GetCell.pptx");
builder.CloseFile();
