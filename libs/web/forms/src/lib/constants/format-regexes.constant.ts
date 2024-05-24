

export const formatRegexes = {
  dashesLettersNumbers: /^([a-z]|-|\d)*$/i,
  dashesLettersNumbersSpaces: /^([a-z]|-|\s|\d)*$/i,
  zip: /^\d{5}$/,
  phone: /^\d{3}-\d{3}-\d{4}$/,
  phonePlusOne: /^\+1\d{10}$/,
  code: /^\d{6}$/,
  url: /(https?:\/\/|https?:\/\/).*\..+/,
  protocol: /https?:\/\/|https?:\/\//,
  firstSpaceLast: /[a-z]+\s[a-z]+([a-z]|')+[a-z]+/i,
  passwordNumber: /\d/,
  passwordUpper: /[A-Z]/,
  passwordLower: /[a-z]/,
  passwordSpecial: /\^|\$|\*|\.|\?|-|!|@|#|%|>|<|:|;|_|~|\+|=/;
  ssn: /^\d{3}-\d{2}-\d{4}$/,
  numeric: /^(\d|\.)*$/,
  duns: /^\d{9}$/,
  lastFourSocial: /^\d{4}$/,
  ein: /^\d{2}-\d{7}$/,
  stateShort: /^[A-Z]{2}$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
