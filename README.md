# urls
## homepage
[https://code.insistime.com/qiao.util.all](https://code.insistime.com/qiao.util.all)

## github
[https://github.com/insistime/qiao.util.all](https://github.com/insistime/qiao.util.all)

## npm
[https://www.npmjs.com/package/qiao.util.all](https://www.npmjs.com/package/qiao.util.all)

# started
## install
npm install qiao.util.all

# api
## aes
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.all');

var data 	= '{"nihao":"name"}';
var key		= '12345612345612345612345612345611';
var s		= qiaoUtilEncode.AESEncrypt(data, key);
console.log(s);

var ss		= qiaoUtilEncode.AESDecrypt(s, key);
console.log(ss);
```

## 3des
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.all');

var data 	= '{"nihao":"name"}';
var key		= '123456123456123456112233';
var s		= qiaoUtilEncode.TDESEncrypt(data, key);
console.log(s);

var ss		= qiaoUtilEncode.TDESDecrypt(s, key);
console.log(ss);
```

# version
## 0.0.1.20181112
1. init project
2. modify md