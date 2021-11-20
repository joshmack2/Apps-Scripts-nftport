function woofPrice() {
  var app = SpreadsheetApp;
  var activeSheet = app.getActiveSpreadsheet().getActiveSheet();
  var url = "https://api.dexlab.space/v1/prices/";
  var marketAddy = activeSheet.getRange(4,3).getValue();
  var xpath = "/last";

  var fullURL = url +marketAddy+ xpath;
  var prices = UrlFetchApp.fetch(fullURL)

   var woofContent = prices.getContentText();
   var woofJSON = JSON.parse(woofContent);
   var marketPrice = woofJSON["data"]["price"];
  
  for(var i=0;i<4;i++){
      
      var marketAddress = activeSheet.getRange(i+4,3).getValue();
      marketAddy = UrlFetchApp.fetch("https://api.dexlab.space/v1/prices/"+marketAddress+"/last");
      activeSheet.getRange(i+4,4).setValue(marketAddy);

  }

}

