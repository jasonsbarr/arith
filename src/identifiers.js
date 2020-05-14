// constants
const DIGIT = /[0-9]/;
const INTEGER = /^[+-]?#?[o|b|x]?[0-9]+$/;
const FLOAT = /^[-+]?#?[o|b|x]?[0-9]+\.[0-9]+$/;
const WHITESPACE = /\s+/;
const LETTER = /[A-Za-z]/;
const VALID_SPECIAL_CHARS = [
  "_",
  "-",
  "=",
  "$",
  "%",
  "&",
  "!",
  "?",
  "*",
  "+",
  "/",
  "\\",
  "|",
  ">",
  "<",
  "^",
  "@",
];
const KEYWORDS = [
  "true",
  "false",
  "nil",
  "if",
  "cond",
  "else",
  "lambda",
  "define",
  "let",
  "type",
  "class",
  "struct",
];
const PUNCTUATION = ",:[]{}.,`'";

// token identifiers
const isDigit = (char) => DIGIT.test(char);

const isInteger = (str) => INTEGER.test(str);

const isFloat = (str) => FLOAT.test(str);

const isLetter = (char) => LETTER.test(char);

const isValidSpecialChar = (char) =>
  VALID_SPECIAL_CHARS.includes(char);

const isWhitespace = (char) => WHITESPACE.test(char);

const isComma = (char) => char === ",";

const isPeriod = (char) => char === ".";

const isUnderscore = (char) => char === "_";

const isDollarSign = (char) => char === "$";

const isLeftParen = (char) => char === "(";

const isRightParen = (char) => char === ")";

const isParen = (char) => isLeftParen(char) || isRightParen(char);

const isEndOfInput = (input, pos) =>
  pos >= input.length || input[pos] == undefined;

const isSeparator = (char) =>
  isWhitespace(char) || isComma(char) || isParen(char);

const isDoubleQuote = (char) => char === '"';

const isSemicolon = (char) => char === ";";

const isEndOfLine = (char) => char === "\n";

const isKeyword = (word) => KEYWORDS.includes(word);

const isPunctuation = (char) => KEYWORDS.indexOf(char) > -1;

const isHash = (char) => char === "#";

const isPlusOrMinus = (char) => "+-".indexOf(char) > -1;

module.exports = {
  isDigit,
  isInteger,
  isFloat,
  isLetter,
  isValidSpecialChar,
  isWhitespace,
  isComma,
  isPeriod,
  isUnderscore,
  isDollarSign,
  isLeftParen,
  isRightParen,
  isParen,
  isSeparator,
  isEndOfInput,
  isDoubleQuote,
  isSemicolon,
  isEndOfLine,
  isKeyword,
  isPunctuation,
  isHash,
  isPlusOrMinus,
};
