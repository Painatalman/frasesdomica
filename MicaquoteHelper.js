var data = require('./data/data.json');

function MicaquoteHelper(quotes, dialogs, extras) {
    this.quotes = quotes || data.quotes;
    this.dialogs = dialogs || data.dialogs;
    this.extras = extras || data.extras;
    this.lastIndex = null;

    this.extraTypeWildcard = '$'; // WARNING: not actually used, but was set here in order to be clear to programmers
}

MicaquoteHelper.prototype.getRandomQuoteOrDialog = function() {
    var quotesAndDialogs = this.quotes.concat(this.dialogs);
    var defaultOptions = {
        asString: false
    };

    return [].concat(quotesAndDialogs[Math.floor(Math.random()*quotesAndDialogs.length)]);
}

MicaquoteHelper.prototype.getRandomDialog = function (options) {
    defaultOptions = {
        asString: false, // return all quotes joined by a common character
        separator: ' - ', // the character that separates quotes in the joined string
    }
}

MicaquoteHelper.prototype.getRandomQuote = function() {
  var quoteLength = this.quotes.length;
  var currentIndex = 0;
  var lastIndex = this.lastIndex;

  if (quoteLength > 1) {
    do {
      currentIndex = Math.floor(Math.random()*quoteLength);
    } while (currentIndex === lastIndex);
  }

  this.lastIndex = currentIndex;

  return this.quotes[currentIndex].replace(/\$(\w+)/g, function(match, capture){return this.getRandomExtra(capture)}.bind(this));
}

MicaquoteHelper.prototype.getRandomExtra = function(type) {
    if (!this.extras[type]) {
        throw new Error('there are no extras of type' + type);
    } else {
        return this.extras[type][Math.floor(Math.random()*this.extras[type].length)]
    }
}

MicaquoteHelper.prototype.appendRandomQuote = function (){};
MicaquoteHelper.prototype.appendRandomDialog = function (){};

module.exports = MicaquoteHelper;
