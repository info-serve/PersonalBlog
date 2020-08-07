## Random Code 
# install:
``` 
npm install --save svg-captcha 
```
# with express 
```
var svgCaptcha = require('svg-captcha');
 
app.get('/captcha', function (req, res) {
    var captcha = svgCaptcha.create();
    req.session.captcha = captcha.text;
    
    res.type('svg');
    res.status(200).send(captcha.data);
});
```
# api 
> svgCaptcha.create(options)

- size: 4 // size of random string
- ignoreChars: '0o1i' // filter out some characters like 0o1i
- noise: 1 // number of noise lines
- color: true // characters will have distinct colors instead of grey, true if background option is set
- background: '#cc9966' // background color of the svg image
- width: number // width of captcha
- height: number // height of captcha
- fontSize: number // captcha text size
- charPreset: string // random character preset

 > other API 见 [svg-captcha ](https://www.npmjs.com/package/svg-captcha)