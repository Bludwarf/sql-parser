// Generated by CoffeeScript 1.12.5
(function() {
  var buildParser;

  buildParser = function() {
    var parser;
    parser = require('./compiled_parser').parser;
    parser.lexer = {
      lex: function() {
        var ref, tag;
        ref = this.tokens[this.pos++] || [''], tag = ref[0], this.yytext = ref[1], this.yylineno = ref[2];
        return tag;
      },
      setInput: function(tokens) {
        this.tokens = tokens;
        return this.pos = 0;
      },
      upcomingInput: function() {
        return "";
      }
    };
    parser.yy = require('./nodes');
    return parser;
  };

  exports.parser = buildParser();

  exports.parse = function(str) {
    return buildParser().parse(str);
  };

}).call(this);
