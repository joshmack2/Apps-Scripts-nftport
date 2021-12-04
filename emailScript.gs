function lolmyFunction() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Sheet15");

  const h1 = ws.getRange("C1").getValue();
  const headers = ws.getRange("A2:K2").getValues();
  const ticker = headers[0][0];
  const shares = headers[0][1];
  const dca = headers[0][2];
  const currentPrice = headers[0][3];
  const changePCT = headers[0][4];
  const changeDolla = headers[0][5];
  const cost = headers[0][6];
  const value = headers[0][7];
  const gainpct = headers[0][8];
  const gaindollar = headers[0][9];
  const total = headers[0][10];

  const lr = ws.getLastRow();

  const tableRangeValues = ws.getRange(3, 1,lr-3,11).getDisplayValues();

  const totalLine = ws.getRange(lr,1, 1, 11).getDisplayValues();
  const totalText = totalLine[0][0];
  const totalSum = totalLine[0][10];

  const htmlTemplate = HtmlService.createTemplateFromFile("email");

  htmlTemplate.h1 = h1;
  htmlTemplate.ticker = ticker;
  htmlTemplate.shares = shares;
  htmlTemplate.dca = dca;
  htmlTemplate.currentPrice = currentPrice;
  htmlTemplate.changePCT = changePCT;
  htmlTemplate.changeDolla = changeDolla;
  htmlTemplate.cost = cost;
  htmlTemplate.value = value;
  htmlTemplate.gainpct = gainpct;
  htmlTemplate.gaindollar = gaindollar;
  htmlTemplate.total = total;
  htmlTemplate.totalText = totalText;
  htmlTemplate.totalSum = totalSum;

  htmlTemplate.tableRangeValues = tableRangeValues;

  const htmlForEmail = htmlTemplate.evaluate().getContent();

  GmailApp.sendEmail(
    "mreaglefan23@gmail.com",
    "Your Daily Port",
    "Please open this email with a client that supports HTML",
    { htmlBody: htmlForEmail }
  );  
}

