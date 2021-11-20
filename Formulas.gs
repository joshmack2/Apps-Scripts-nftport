function mymutantFormulas() {

  SpreadsheetApp.getActiveSheet().getRange('C33').clear("=(D32 + B3)"); //clear array in cell C33

  SpreadsheetApp.getActiveSheet().getRange('B33').setFormula("=sum(B30:B32)");
  SpreadsheetApp.getActiveSheet().getRange('C34').setFormula("C30 + C32");
  SpreadsheetApp.getActiveSheet().getRange('D33').setFormula("D30 + D32");

  SpreadsheetApp.getActiveSheet().getRange('F30').setFormula("=$C$30*$B$3");
  SpreadsheetApp.getActiveSheet().getRange('F32').setFormula("=$C$32*$B$3");
  SpreadsheetApp.getActiveSheet().getRange('F33').setFormula("=(F30 + F32)");

  SpreadsheetApp.getActiveSheet().getRange('G30').setFormula("=(D30/B30)-1");
  SpreadsheetApp.getActiveSheet().getRange('G32').setFormula("=(D32/B32)-1");
  SpreadsheetApp.getActiveSheet().getRange('G33').setFormula("=(D33/B33)-1");

  SpreadsheetApp.getActiveSheet().getRange('H30').setFormula("=(D30 * B3)");
  SpreadsheetApp.getActiveSheet().getRange('H32').setFormula("=(D32 * B3)");
  SpreadsheetApp.getActiveSheet().getRange('H33').setFormula("=(H30 + H32)");


  SpreadsheetApp.getActiveSheet().getRange('H38').setFormula("=(D38 * B3)");
  SpreadsheetApp.getActiveSheet().getRange('H39').setFormula("=(D39 * B3)");
  SpreadsheetApp.getActiveSheet().getRange('H40').setFormula("=(D40 * B3)");
  SpreadsheetApp.getActiveSheet().getRange('H41').setFormula("=(D41 * B3)");
  SpreadsheetApp.getActiveSheet().getRange('H42').setFormula("=(D42 * B3)");
  SpreadsheetApp.getActiveSheet().getRange('H43').setFormula("=(D43 * B3)");
  SpreadsheetApp.getActiveSheet().getRange('H44').setFormula("=(D44 * B3)");
  SpreadsheetApp.getActiveSheet().getRange('H45').setFormula("=(D45 * B3)");


  SpreadsheetApp.getActiveSheet().getRange('H14').setFormula("=sum(H2:H13)");

/*
  SpreadsheetApp.getActiveSheet().getRange('B33').setFormula("=sum(B30:B32)");
  SpreadsheetApp.getActiveSheet().getRange('B33').setFormula("=sum(B30:B32)");
  SpreadsheetApp.getActiveSheet().getRange('B33').setFormula("=sum(B30:B32)");
  SpreadsheetApp.getActiveSheet().getRange('B33').setFormula("=sum(B30:B32)");

*/


}
