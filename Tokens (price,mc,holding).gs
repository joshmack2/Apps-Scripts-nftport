function getTokens() {

  var queryString = Math.random();

  var cmcTokenXpath = "//*[@id='__next']/div/div[1]/div[2]/div/div[3]/div/div[1]/div[2]/div[2]/div/div[1]/table/tbody/tr[1]/td";  
  var cmcMCXpath =  "/html/body/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div[3]/div[1]/div[1]/div/div[2]/div";
  var yahooMC = "/html/body/div[1]/div/div/div[1]/div/div[3]/div[1]/div/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr[1]/td[2]/span"
  var fishPricePath = "/html/body/div/div/main/div[2]/div[1]/div/div[1]/div[2]/div[1]"

  //ASSET URLS 
  //crypto pulls are from CMC
  //stock and other assets yahoo
  var bitcoinURL = "https://coinmarketcap.com/currencies/bitcoin/"
  var etherURL = "https://coinmarketcap.com/currencies/ethereum/"
  var fishURL = "https://analytics.sushi.com/tokens/0x2604e9f68259e609e8744fb67cc410d50fc9aa0f"
  var solanaURL = "https://coinmarketcap.com/currencies/solana/"
  var shibURL = "https://coinmarketcap.com/currencies/shiba-inu/"
  var samoURL = "https://coinmarketcap.com/currencies/samoyedcoin/"
  var wooURL = "https://coinmarketcap.com/currencies/woof/"
  var usdcURL = "https://coinmarketcap.com/currencies/usd-coin/"
  var sdogeURL = "https://coinmarketcap.com/currencies/soldoge/"
  var ensURL = "https://coinmarketcap.com/currencies/ethereum-name-service/"
  var cofURL ="https://finance.yahoo.com/quote/COF/"
  
  
  //ASSET MARKET PRICES
  var importBitcoin = '=IMPORTXML("' + bitcoinURL + '?' + queryString + '","'+ cmcTokenXpath + '")';
  var importEther = '=IMPORTXML("' + etherURL + '?' + queryString + '","'+ cmcTokenXpath + '")';
  var importFISH = '=IMPORTXML("https://analytics.sushi.com/tokens/0x2604e9f68259e609e8744fb67cc410d50fc9aa0f","/html/body/div/div/main/div[2]/div[1]/div/div[1]/div[2]/div[1]")';
  var importSolana = '=IMPORTXML("' + solanaURL + '?' + queryString + '","'+ cmcTokenXpath + '")';
  var importSHIB = '=IMPORTXML("' + shibURL + '?' + queryString + '","'+ cmcTokenXpath + '")';
  var importSAMO = '=IMPORTXML("' + samoURL + '?' + queryString + '","'+ cmcTokenXpath + '")';
  var importWOO = '=IMPORTXML("' + wooURL + '?' + queryString + '","'+ cmcTokenXpath + '")';
  var importSDOGE = '=IMPORTXML("' + sdogeURL + '?' + queryString + '","'+ cmcTokenXpath + '")';
  var importENS = '=IMPORTXML("' + ensURL + '?' + queryString + '","'+ cmcTokenXpath + '")';
  var importCOF = '=GOOGLEFINANCE("COF")';


  //ASSET MARKET CAPS
  var importBitcoinMC = '=IMPORTXML("' + bitcoinURL + '?' + queryString + '","'+ cmcMCXpath + '")';
  var importEtherMC = '=IMPORTXML("' + etherURL + '?' + queryString + '","'+ cmcMCXpath + '")';
  //var importFTTMC = '=IMPORTXML("' + fttURL + '?' + queryString + '","'+ cmcMCXpath + '")';
  var importSolanaMC = '=IMPORTXML("' + solanaURL + '?' + queryString + '","'+ cmcMCXpath + '")';
  var importSHIBMC = '=IMPORTXML("' + shibURL + '?' + queryString + '","'+ cmcMCXpath + '")';
  var importSAMOMC = '=IMPORTXML("' + samoURL + '?' + queryString + '","'+ cmcMCXpath + '")';
  var importusdcMC = '=IMPORTXML("' + usdcURL + '?' + queryString + '","'+ cmcMCXpath + '")';
  var importSDOGEMC = '=IMPORTXML("' + sdogeURL + '?' + queryString + '","'+ cmcMCXpath + '")';
  var importENSmc = '=IMPORTXML("' + ensURL + '?' + queryString + '","'+ cmcMCXpath + '")';
  var importCOFmc = '=IMPORTXML("' + cofURL + '?' + queryString + '","'+ yahooMC + '")';
    //importCOFmc.setNumberFormat("$#,##0.00;$(#,##0.00)");


  SpreadsheetApp.getActiveSheet().getRange('E2').setValue(importBitcoin);
  SpreadsheetApp.getActiveSheet().getRange('E3').setValue(importEther);
  //SpreadsheetApp.getActiveSheet().getRange('E4').setValue(importFISH);
  SpreadsheetApp.getActiveSheet().getRange('E6').setValue(importSolana);
  SpreadsheetApp.getActiveSheet().getRange('E7').setValue(importSHIB);
  SpreadsheetApp.getActiveSheet().getRange('E8').setValue(importSAMO);
  SpreadsheetApp.getActiveSheet().getRange('E9').setValue(importWOO);
  SpreadsheetApp.getActiveSheet().getRange('E11').setValue(importSDOGE);
  SpreadsheetApp.getActiveSheet().getRange('E12').setValue(importENS);
  SpreadsheetApp.getActiveSheet().getRange('E13').setValue(importCOF);
  //SpreadsheetApp.getActiveSheet().getRange('C12').setValue(importENS);
  //SpreadsheetApp.getActiveSheet().getRange('C12').setValue(importENS);
  
  

  SpreadsheetApp.getActiveSheet().getRange('F2').setValue(importBitcoinMC);
  SpreadsheetApp.getActiveSheet().getRange('F3').setValue(importEtherMC);
  //SpreadsheetApp.getActiveSheet().getRange('D5').setValue(importFTTMC);
  SpreadsheetApp.getActiveSheet().getRange('F6').setValue(importSolanaMC);
  SpreadsheetApp.getActiveSheet().getRange('F7').setValue(importSHIBMC);
  SpreadsheetApp.getActiveSheet().getRange('F8').setValue(importSAMOMC);
  SpreadsheetApp.getActiveSheet().getRange('F10').setValue(importusdcMC);
  //SpreadsheetApp.getActiveSheet().getRange('D11').setValue(importSDOGEMC);
  SpreadsheetApp.getActiveSheet().getRange('F12').setValue(importENSmc);
  SpreadsheetApp.getActiveSheet().getRange('F13').setValue(importCOFmc).setNumberFormat("$#,##0.00;$(#,##0.00)");

  SpreadsheetApp.getActiveSheet().getRange("A5:E5").clear(); //clear array in cell C33




var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

activeSheet.getRange("A5:D5").clear;


  var metamaskXpath = "//*[@id='ContentPlaceHolder1_divSummary']/div[1]/div[1]/div/div[2]/div[2]/div[2]/text()" ;  

  var metamaskURL = "https://etherscan.io/address/0x563861107b202906609e699f43edc823482ba7d7"

  var importMetaMask = '=IMPORTXML("' + metamaskURL + '?' + queryString + '","'+ metamaskXpath + '")';

  SpreadsheetApp.getActiveSheet().getRange('J3').setValue(importMetaMask);

}

function solNFTS(){


  var solpunkData = UrlFetchApp.fetch("https://qzlsklfacc.medianetwork.cloud/query_volume_per_collection?collection=solpunks");
  var degenapeData = UrlFetchApp.fetch("https://qzlsklfacc.medianetwork.cloud/query_volume_per_collection?collection=degenape");
  var smbData = UrlFetchApp.fetch("https://qzlsklfacc.medianetwork.cloud/query_volume_per_collection?collection=meerkatmillionairescc");
  var thugData = UrlFetchApp.fetch("https://qzlsklfacc.medianetwork.cloud/query_volume_per_collection?collection=thugbirdz");
  //var solpunkData = UrlFetchApp.fetch("https://qzlsklfacc.medianetwork.cloud/query_volume_per_collection?collection=solpunks");
  //var solpunkData = UrlFetchApp.fetch("https://qzlsklfacc.medianetwork.cloud/query_volume_per_collection?collection=solpunks");

  var solpunkContent = solpunkData.getContentText();
  var degenapeContent = degenapeData.getContentText();
  var smbContent = smbData.getContentText();
  var thugContent = thugData.getContentText();

  var solpunkJson = JSON.parse(solpunkContent);
  var degenapeJson = JSON.parse(degenapeContent);
  var smbJson = JSON.parse(smbContent);
  var thugJson = JSON.parse(thugContent);


  //var collection = json["totalVolume"]
  //var collection2 = json["floorPrice"]

  var spfp = solpunkJson["floorPrice"];
  var apefp = degenapeJson["floorPrice"];
  var smbfp = smbJson["floorPrice"];
  var thugfp = thugJson["floorPrice"];

  return [spfp, apefp,smbfp,thugfp];

}


