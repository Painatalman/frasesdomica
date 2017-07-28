var data = require('./data/data.json');

function MicaquoteHelper(quotes, dialogs, extras) {
    this.quotes = quotes || data.quotes;
    this.dialogs = dialogs || data.dialogs;
    this.extras = extras || data.extras;
    this.lastIndex = null;

    this.extraTypeWildcard = '$'; // WARNING: not actually used, but was set here in order to be clear to programmers
}

/**
 * Returns a list containing one or more quotes.
 * In case its length is more than 1, then it refers to a dialog
 * @return {[type]} [description]
 */
MicaquoteHelper.prototype.getRandomQuoteOrDialog = function() {
    var quotesAndDialogs = this.quotes.concat(this.dialogs);

    var quoteAndDialogsLength = quotesAndDialogs.length;
    var currentIndex = 0;
    var lastIndex = this.lastIndex;

    if (quoteAndDialogsLength > 1) {
      do {
        currentIndex = Math.floor(Math.random()*quoteAndDialogsLength);
      } while (currentIndex === lastIndex);
    }

    this.lastIndex = currentIndex;

    var selectedQuoteOrDialog = quotesAndDialogs[currentIndex];
    var selectedQuoteOrDialogQuotes = [];
    var output = [];

    var self = this;

    // create a list of quotes to be converted
    if (!(selectedQuoteOrDialog instanceof Array)) {
      selectedQuoteOrDialogQuotes.push(selectedQuoteOrDialog);
    } else {
      selectedQuoteOrDialogQuotes = selectedQuoteOrDialog;
    }

    selectedQuoteOrDialogQuotes.forEach(function(quote){
      output.push(
        quote.replace(/\$(\w+)/g, function(match, capture){return self.getRandomExtra(capture)}.bind(this))
      );
    })

    return output;
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
};

MicaquoteHelper.prototype.getRandomExtra = function(type) {
    if (!this.extras[type]) {
        throw new Error('there are no extras of type' + type);
    } else {
        return this.extras[type][Math.floor(Math.random()*this.extras[type].length)]
    }
};

module.exports = MicaquoteHelper;
