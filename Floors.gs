function getETHfloors() {
  var queryString = Math.random();

  var offer6803URL =  "https://opensea.io/assets/0xaadba140ae5e4c8a9ef0cc86ea3124b446e3e46a/6803";
  var offer7253URL =  "https://opensea.io/assets/0xaadba140ae5e4c8a9ef0cc86ea3124b446e3e46a/7253"; 
  //var floorURL = "https://etherscan.io/token/0xaAdBA140Ae5e4c8a9eF0Cc86EA3124b446e3E46A";

  var offerXpath = "/html/body/div[1]/div[1]/main/div/div/div/div[1]/div/div[1]/div[2]/div[1]/div/section/div/div[2]/div[1]/div[2]/text()";
  //var floorXpath = "/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span";  


  var import6803offer = '=IMPORTXML("' + offer6803URL + '?' + queryString + '","'+ offerXpath + '")';
  var import7253offer = '=IMPORTXML("' + offer7253URL + '?' + queryString + '","'+ offerXpath + '")';
  var importMCfloor = '=RIGHT( LEFT(ARRAYFORMULA(IFERROR(IMPORTXML("https://etherscan.io/token/0xaAdBA140Ae5e4c8a9eF0Cc86EA3124b446e3E46A","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))),LEN(ArrayFormula(IFERROR(IMPORTXML("https://etherscan.io/token/0xaAdBA140Ae5e4c8a9eF0Cc86EA3124b446e3E46A","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))))-6),7)';
  
  var import0n1floor = '=RIGHT( LEFT(ARRAYFORMULA(IFERROR(IMPORTXML("https://etherscan.io/token/0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))),LEN(ArrayFormula(IFERROR(IMPORTXML("https://etherscan.io/token/0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))))-6),7)';
  
  var importRKLfloor = '=RIGHT( LEFT(ARRAYFORMULA(IFERROR(IMPORTXML("https://etherscan.io/token/0xef0182dc0574cd5874494a120750fd222fdb909a","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))),LEN(ArrayFormula(IFERROR(IMPORTXML("https://etherscan.io/token/0xef0182dc0574cd5874494a120750fd222fdb909a","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))))-6),7)' ;

  var importRKLsneak = '=RIGHT( LEFT(ARRAYFORMULA(IFERROR(IMPORTXML("https://etherscan.io/token/0x5180f2a553e76fac3cf019c8011711cf2b5c6035","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))),LEN(ArrayFormula(IFERROR(IMPORTXML("https://etherscan.io/token/0x5180f2a553e76fac3cf019c8011711cf2b5c6035","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))))-6),7)' ;

  var importJadufloor = '=RIGHT( LEFT(ARRAYFORMULA(IFERROR(IMPORTXML("https://etherscan.io/token/0xd0F0C40FCD1598721567F140eBf8aF436e7b97cF","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))),LEN(ArrayFormula(IFERROR(IMPORTXML("https://etherscan.io/token/0xd0F0C40FCD1598721567F140eBf8aF436e7b97cF","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))))-6),7)';
  
  var importSSoWfloor = '=RIGHT( LEFT(ARRAYFORMULA(IFERROR(IMPORTXML("https://etherscan.io/token/0x88091012eedf8dba59d08e27ed7b22008f5d6fe5","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))),LEN(ArrayFormula(IFERROR(IMPORTXML("https://etherscan.io/token/0x88091012eedf8dba59d08e27ed7b22008f5d6fe5","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))))-6),7)' ;
  
  var importOmnifloor = '=RIGHT( LEFT(ARRAYFORMULA(IFERROR(IMPORTXML("https://etherscan.io/token/0xb5f3dEE204cA76E913bb3129BA0312b9f0f31D82","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))),LEN(ArrayFormula(IFERROR(IMPORTXML("https://etherscan.io/token/0xb5f3dEE204cA76E913bb3129BA0312b9f0f31D82","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))))-6),7)' ;
  
  var import256floor = '';
  var importOpenfloor = '=RIGHT( LEFT(ARRAYFORMULA(IFERROR(IMPORTXML("https://etherscan.io/token/0x1308c158e60d7c4565e369df2a86ebd853eef2fb","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))),LEN(ArrayFormula(IFERROR(IMPORTXML("https://etherscan.io/token/0x1308c158e60d7c4565e369df2a86ebd853eef2fb","/html/body/div[1]/main/div[4]/div[1]/div[1]/div/div[2]/div[1]/div/div/span/span"))))-6),7)';




  SpreadsheetApp.getActiveSheet().getRange('C30').setValue(import6803offer);
  SpreadsheetApp.getActiveSheet().getRange('C32').setValue(import7253offer);
  SpreadsheetApp.getActiveSheet().getRange('D30').setValue(importMCfloor);
  SpreadsheetApp.getActiveSheet().getRange('D32').setValue(importMCfloor);
  
  SpreadsheetApp.getActiveSheet().getRange('D38').setValue(import0n1floor);
  SpreadsheetApp.getActiveSheet().getRange('D39').setValue(importRKLfloor);
  SpreadsheetApp.getActiveSheet().getRange('D40').setValue(importRKLsneak);
  SpreadsheetApp.getActiveSheet().getRange('D41').setValue(importJadufloor);
  SpreadsheetApp.getActiveSheet().getRange('D42').setValue(importSSoWfloor);
  SpreadsheetApp.getActiveSheet().getRange('D43').setValue(importOmnifloor);
  SpreadsheetApp.getActiveSheet().getRange('D45').setValue(importOpenfloor);

}

  //grab the rest of the collections
  /*
  var bitcoinURL = "https://coinmarketcap.com/currencies/bitcoin/"
  var etherURL = "https://coinmarketcap.com/currencies/ethereum/"
  var fttURL = "https://coinmarketcap.com/currencies/ftx-token/"
  var solanaURL = "https://coinmarketcap.com/currencies/solana/"
  var shibURL = "https://coinmarketcap.com/currencies/shiba-inu/"
  var samoURL = "https://coinmarketcap.com/currencies/samoyedcoin/"
  var wooURL = "https://coinmarketcap.com/currencies/woof/"
  var usdcURL = "https://coinmarketcap.com/currencies/usd-coin/"
*/