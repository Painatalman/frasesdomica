var data = require('./data/data.json');

function MicaquoteHelper(quotes, dialogs) {
    this.quotes = quotes || data.quotes;
    this.dialogs = dialogs || data.dialogs;
}

MicaquoteHelper.prototype.getRandomQuoteOrDialog = function() {
    var quotesAndDialogs = this.quotes.concat(this.dialogs);
    
    return quotesAndDialogs[Math.floor(Math.random()*quotesAndDialogs.length)];
}

MicaquoteHelper.prototype.getRandomQuote = function() {
    return this.quotes[Math.floor(Math.random()*this.quotes.length)];
}

module.exports = MicaquoteHelper;