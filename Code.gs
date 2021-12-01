//creates the function and sets the parameter
function MyPortfolio(tickers, values) {
  
  var total = [] //list 
  var sums = {} //dictionary or map that will bring it to ur final list

  for(i =0; i<tickers.length; i++){ //most common code to get through a list
    
    var t = tickers[i].toString()
      
    if(t != "Cash" ){
      
        if(t in sums){
          sums[t] += Number(values[i]) //add the number of shares to the current shares for that ticker 
        }
        else{
          sums[t] = Number(values[i])
      }
    }
  }

//taking the ticker (sums) that are > 0 
  for(var ticker in sums){
    if(sums[ticker]>0){
      total.push([ticker,sums[ticker]])
    }
  }
  return total

  // function metamask(){
  //   var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  //   var metamaskXpath = "//*[@id='ContentPlaceHolder1_divSummary']/div[1]/div[1]/div/div[2]/div[2]/div[2]/text()" ;  
  //   var metamaskURL = "https://etherscan.io/address/0x563861107b202906609e699f43edc823482ba7d7"
  //   var importMetaMask = '=IMPORTXML("' + metamaskURL + '?' + queryString + '","'+ metamaskXpath + '")';
  //   SpreadsheetApp.getActiveSheet().getRange('B6').setValue(importMetaMask);}



}


