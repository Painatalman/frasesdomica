!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("micaquote",[],e):"object"==typeof exports?exports.micaquote=e():o.micaquote=e()}(this,function(){return function(o){function e(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return o[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};return e.m=o,e.c=t,e.i=function(o){return o},e.d=function(o,t,a){e.o(o,t)||Object.defineProperty(o,t,{configurable:!1,enumerable:!0,get:a})},e.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(t,"a",t),t},e.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},e.p="",e(e.s=1)}([function(o,e){o.exports={quotes:["Tenho saudades do bluescreen","Para mim, é o standard","Faço de um beco sem saída uma autoestrada","Preciso de um terceiro monitor...","Vou acabar com a internet","Vou criar um novo git","Quero programar em VR","A culpa é do *nome!","Façam isso, nem que eu pague!","A malta do *departamento não faz nada!","Há uma lista que separa... não sei o quê, mas ya!","O *programa é estúpido!","Uma coisa é fazer pró Mac, outra é fazer DO Mac..."],dialogs:[]}},function(o,e,t){function a(o,e){this.quotes=o||r.quotes,this.dialogs=e||r.dialogs}var r=t(0);a.prototype.getRandomQuoteOrDialog=function(){var o=this.quotes.concat(this.dialogs);return o[Math.floor(Math.random()*o.length)]},a.prototype.getRandomQuote=function(){return this.quotes[Math.floor(Math.random()*this.quotes.length)]},o.exports=a}])});