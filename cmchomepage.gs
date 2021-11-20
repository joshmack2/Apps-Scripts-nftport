function cmc() {

var app = SpreadsheetApp;
var ss = app.getActiveSpreadsheet();
var activeSheet = ss.getActiveSheet();

activeSheet.getRange("A1").setFormula('=IMPORTHTML("https://coinmarketcap.com/","table",1)');

}