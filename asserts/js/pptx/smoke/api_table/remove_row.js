builder.CreateFile("pptx");
var Presentation = Api.GetPresentation();
var Slide = Presentation.GetSlideByIndex(0);
var Table = Api.CreateTable(1,3);
Table.RemoveRow(Table.GetRow(0).GetCell(0));
Slide.AddObject(Table);
builder.SaveFile("pptx", "RemoveRow.pptx");
builder.CloseFile();
