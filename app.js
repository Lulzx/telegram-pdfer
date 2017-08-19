var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var botgram = require('botgram')
var token = "396782391:AAEaeRqtm008tncXIelRat_pR9_JLUYApKw";
var bot = botgram(token);


bot.command("start", function (msg, reply, next) {
  console.log("Received a /start command from", msg.from.username);
  reply.text('یه لینک بده تا درستش کنم:/ اعصاب هم ندارم');
});
bot.text(function (msg, reply, next) {
  // var phantom = require('phantom');


  // var _ph, _page, _outObj;
  // console.log("started")

  // phantom.create().then(ph => {
  //     _ph = ph;
  //     console.log
  //     return _ph.createPage();
  // }).then(page => {
  //     _page = page;
  //     return _page.open('https://stackoverflow.com/');

  // }).then(status=>{
  //   console.log(status);
  //   return _page.render('stackoverflow.pdf');
  // }).then(pdf => {
  //     reply.document(pdf)
  //     return _page.property('content')
  // }).then(content => {
  //     console.log(content);
  //     _page.close();
  //     _ph.exit();
  // }).catch(e => console.log(e));

  // phantomjs screenshot
  var url = msg.text;
  var fname;

  if (url.indexOf('http://') != -1 || url.indexOf('https://') != -1) {


  } else {
    url = 'http://' + url;
  }
  url = url.substring(url.indexOf('http'));
  console.log(url)
  if (url.substring(url.indexOf(' ')).lastIndexOf('-n ') != -1) {


    var name = url.substring(url.lastIndexOf('-n') + 2);
console.log('1 >',name);
console.log(name.indexOf('"'))
    name = name.substring(name.indexOf('"',0)+1);
    name=name.substring(0,name.indexOf('"'));
    console.log('2 >',name)
    fname = name;
    url=url.substring(0, url.lastIndexOf('-n'));
    console.log(url)

  } else {
    if (url.indexOf('http://') != -1) {
      fname=url.substring(url.indexOf('http://')+7);
      if (fname.indexOf('/') != -1)
        fname=fname.substring(0,fname.indexOf('/'));
      
    }
    else if(url.indexOf('https://') != -1){
      fname=url.substring(url.indexOf('https://')+8);
      if (fname.indexOf('/') != -1)
        fname=fname.substring(0,fname.indexOf('/'));
      
    }
    else{
      if (url.indexOf('/') == -1)
        fname = url;
      else {
        fname = url.substring(0, url.indexOf('/'))
      }
    }
  }
  url = url.replace(' ', '').replace('\n', '')
  console.log(url)
  // console.log(url_to_process)
  // var phantom = require('phantom');
  // phantom.create([],function (ph) {
  //   console.log(ph)
  //   ph.createPage(function (page) {
  //     page.open(url_to_process, function (status) {
  //       console.log(status)
  //       if (status == "success") {

  //         // put images in public directory
  //         var image_file_name = url_to_process.replace(/\W/g, '_') + ".png"
  //         var image_path = public_dir + "/" + image_file_name
  //         page.render(image_path, function () {
  //           // redirect to static image
  //           reply.text("done")
  //         });
  //       } else {
  //         res.writeHead(404, {
  //           'Content-Type': 'text/plain'
  //         });
  //         res.end("404 Not Found");
  //       }
  //       page.close();
  //       ph.exit();
  //     });
  //   })


  // })
  // use default options
  var sentences = [
    ['باشه واسا',
      'ok w8',
      'میدم بت😐 شاید باورت نشه',
      'ناموسا؟😐 اوکی واسا',
      'میگم تو دست از این کارت بر نمی داری؟؟؟ باشه بابا',
      'اوکی',
      'باید روند اداری درخواستتون طی بشه:/ :))',
      'کارت ملی، شناسنامه و کارت سوخت رو 3 تا کپی بگیرین ضمیمه کنین',
      'حل و هماهنگه'
    ],
    ['🤔',
      'داره بررسی میشه',
      'یا حضرت پاول دورف، این چه سایتیه:/',
      'میگم حالا جدی لازمش داری؟؟',
      'داره سیستم گرم میشه;/',
      `حالا تا میاد آماده شه بذا واست یه داستان بگم😅

مردی قوی هیکل در چوب بری استخدام شدوتصمیم گرفت خوب کار کند
روز اول 18 درخت برید.رییسش به او تبریک گفت و اورا به ادامه کار تشویق کرد.روز بعد با انگیزه بیشتری کار کرد ، ولی 15 درخت برید.!!!!
روز سوم بیشتر کار کرد،اما فقط 10 درخت برید.به نظرش امد که ضعیف شده
پیش رییسش رفت .عذر خواست و گفت:
نمی دانم چرا هرچه بیشتر تلاش می کنم،درخت کمتری می برم!
رییس پرسید: آخرین بار کی تبرت را تیز کردی؟
او گفت: برای این کار وقت نداشتم.تمام مدت مشغول بریدن درختان بودم !

خوندی دیگه؟:/`
    ],
    [
      '🤔 huuuumm',
      '🤔🤔 hummmmmmmmmmmmmmmmmmm',
      '🤔 ay donya... daryaft shod?',
      '🤔 به نظر میرسه که داره کار می کنه'
    ],
    [
      '🤔 داره جالب میشه',
      'بیگیییر',
      'الان خوبی؟؟',
      'are we done dude?',
      'حالا میذاری بخوابم؟;/'
    ]
  ]
  var phantom = require('phantom');
  var fs = require('fs');

  fs.mkdir(path.join(__dirname, 'public/files/' + Date.now()))
  var name = path.join(__dirname, 'public/files/' + Date.now() + '/' + fname);
  phantom.create().then(function (ph) {
    ph.createPage().then(function (page) {
      var i = Math.floor((Math.random() * (sentences[0].length - 1)) + 0);
      page.property('viewportSize', {
        width: 1280,
        height: 1024
      }).then(function () {});
      console.log('sen[0][' + i + '] > ', sentences[0][i])
      reply.text(sentences[0][i])
      console.log(url)
      page.open(url).then(function (status) {
        setTimeout(function () {
          var keywordstext='';
          
          page.property('plainText').then(function(content) {
            console.log(content);
            var extract = require('auto-keywords');
            
           var keywords = extract(content);
           console.log(keywords)
           for(var i=0;i<keywords.length;i++){
             keywordstext+='#'+keywords[i]+' ';
           }
            });
          var i = Math.floor((Math.random() * (sentences[1].length - 1)) + 0);
          console.log('sen[1][' + i + '] > ', sentences[1][i])
          reply.text(sentences[1][i])
          page.render(name + '.pdf').then(function () {
            console.log('Page Rendered');
            try {
              var i = Math.floor((Math.random() * (sentences[2].length - 1)) + 0);
              console.log('sen[2][' + i + '] > ', sentences[2][i])
              reply.text(sentences[2][i])
              var doc = fs.createReadStream(name + '.pdf');
              // console.log(doc)
              // doc.path=doc.path.replace(name,'guzu')
              console.log(keywordstext)
              reply.action('upload_document').document(doc,'🍓 '+url+'\n🍐'+keywordstext)
            } catch (e) {
              reply.text("agha pdfesh dar nmiad😑")
            }
            page.render(name + '.png').then(function () {
              console.log('Page Rendered');
              try {
                var i = Math.floor((Math.random() * (sentences[3].length - 1)) + 0);
                console.log('sen[3][' + i + '] > ', sentences[3][i])
                reply.text(sentences[3][i])
                var photo = fs.createReadStream(name + '.png')

                reply.action('upload_photo').photo(photo,'🍓 '+url+'\n🍐'+keywordstext);
                // reply.action('upload_document').document(photo)
                
              } catch (e) {
                reply.text("agha axesh dar nmiad😑")
              }
              ph.exit();
            });

          });
        }, 5000);

      });
    });
  });



  // last argument is optional, sets the width and height for the viewport to render the pdf from. (see additional options) 
  //  var pdfName=Date.now()+'.pdf'
  //  // use default options 
  // NodePDF.render('http://www.google.com', 'google.pdf', function(err, filePath){
  //   // handle error and filepath 
  //   console.log(err,filePath)
  // });

  // var webshot = require('webshot');


  // var renderStream = webshot(msg.text);
  // var name=Date.now()+'.png';
  // var file = fs.createWriteStream(name, {encoding: 'binary'});

  // renderStream.on('data', function(data) {
  //   console.log(data)
  //   file.write(data.toString('binary'), 'binary',function(){

  //     reply.photo(fs.createReadStream(name))
  //   });

  // });
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;