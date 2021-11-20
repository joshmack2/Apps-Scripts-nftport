function yerrHi() {

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var values = [
[ "2.000", "1,000,000", "$2.99" ]
];

var range = sheet.getRange("B38:B40");
range.setValues(values);
}


/*
setValues(values: Object[][]): SpreadsheetApp.Range
Sets a rectangular grid of values (must match dimensions of this range).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
var values = [
[ "2.000", "1,000,000", "$2.99" ]
];

var range = sheet.getRange("B2:D2");
range.setValues(values);
```
*/
  /*
  SpreadsheetApp.getActiveSheet().getRange('E30').setValue("$720");
  SpreadsheetApp.getActiveSheet().getRange('E32').setValue("$543");
  SpreadsheetApp.getActiveSheet().getRange('E33').setFormula("=SUM(E30:E32)");


  SpreadsheetApp.getActiveSheet().getRange('B38').setValue("2.54");
  SpreadsheetApp.getActiveSheet().getRange('B39').setValue("1.75");
  SpreadsheetApp.getActiveSheet().getRangeList("B38:B46").setValues(".15"); 
  SpreadsheetApp.getActiveSheet().getRange('B41').setFormula("");
  SpreadsheetApp.getActiveSheet().getRange('B42').setValue("$720");
  SpreadsheetApp.getActiveSheet().getRange('B43').setValue("$543");
  SpreadsheetApp.getActiveSheet().getRange('B44').setFormula("=SUM(E30:E32)");
  SpreadsheetApp.getActiveSheet().getRange('B45').setValue("$720");
  SpreadsheetApp.getActiveSheet().getRange('B46').setValue("$543");
  SpreadsheetApp.getActiveSheet().getRange('B33').setFormula("=SUM(E30:E32)");
*/


