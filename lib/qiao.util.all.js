'use strict';

// util
exports.encode	= require('qiao.util.encode');
exports.file 	= require('qiao.util.file');
exports.json 	= require('qiao.util.json');
exports.moment 	= require('moment');
exports.string 	= require('qiao.util.string');
exports.timer	= require('qiao.util.timer');

// plugin
exports.cli		= require('qiao.plugin.cli');
exports.mysql 	= require('qiao.plugin.mysql');
exports.ajax 	= require('qiao.plugin.request');
exports.upload 	= require('qiao.plugin.upload');
exports.zip		= require('qiao.plugin.zip');

// ext
exports.cos		= require('qiao.ext.cos');
exports.oss		= require('qiao.ext.oss');
exports.txsms	= require('qiao.ext.txsms');
exports.weixin	= require('qiao.ext.weixin');