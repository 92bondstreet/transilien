#!/usr/bin/env node
'use strict';
var meow = require('meow');
var transilien = require('./index');

var cli = meow({
  'help': [
    'Usage',
    '  transilien <input>',
    '',
    'Example',
    '  transilien Unicorn'
  ].join('\n')
});

transilien(cli.input[0]);
