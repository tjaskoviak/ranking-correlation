var j2c    = require('json2csv')
  , fs     = require('fs')
  , file   = process.argv[2]
  , _      = require('underscore')
  , data

fs.readFile(file, 'utf8', function (err, data) {
  if (err) console.log(err)

  data = JSON.parse(data)

  console.log(data.length)

  var postId;
  var workerId;
  var rbase;
  var dirFlag;
  var jnd;
  var outH;
  var outL;
  var age;
  var sex;
  var handed;
  var degree;
  var monitor;
  var visExp;
  var corrExp;
  var strategy;
  var comments;
  console.log("postId,workerId,rbase,dirFlag,jnd,outH,outL,age,sex,handed,degree,monitor,visExp,corrExp,strategy,comments");
  _.each(data, function(row) {
    if(row.postId)
    {
      postId = row.postId;
      workerId = row.workerId;
      age = row.age;
      sex = row.sex;
      handed = row.handed;
      degree = row.degree;
      monitor = row.monitor;
      visExp = row.visualization_exp;
      corrExp = row.correlation_exp;
      strategy = row.strategy;
      comments = row.comments;
      
      if(row.main_0) {
      	rbase = row.main_0.rbase;
      	dirFlag = row.main_0.dirFlag;
      	jnd = row.main_0.JND;
      	outH = row.main_0.outH;
      	outL = row.main_0.outL;
      	console.log(postId + "," + workerId + "," + rbase + "," + dirFlag + "," + jnd + "," + outH + "," + outL + "," + age + "," + sex + "," + handed + "," + degree + "," + monitor + "," + visExp + "," + corrExp + "," + strategy + "," + comments);
      }
      if(row.main_1) {
      	rbase = row.main_1.rbase;
      	dirFlag = row.main_1.dirFlag;
      	jnd = row.main_1.JND;
      	outH = row.main_1.outH;
      	outL = row.main_1.outL;
      	console.log(postId + "," + workerId + "," + rbase + "," + dirFlag + "," + jnd + "," + outH + "," + outL + "," + age + "," + sex + "," + handed + "," + degree + "," + monitor + "," + visExp + "," + corrExp + "," + strategy + "," + comments);
      }
      if(row.main_2) {
      	rbase = row.main_2.rbase;
      	dirFlag = row.main_2.dirFlag;
      	jnd = row.main_2.JND;
      	outH = row.main_2.outH;
      	outL = row.main_2.outL;
      	console.log(postId + "," + workerId + "," + rbase + "," + dirFlag + "," + jnd + "," + outH + "," + outL + "," + age + "," + sex + "," + handed + "," + degree + "," + monitor + "," + visExp + "," + corrExp + "," + strategy + "," + comments);
      }
      if(row.main_3) {
      	rbase = row.main_3.rbase;
      	dirFlag = row.main_3.dirFlag;
      	jnd = row.main_3.JND;
      	outH = row.main_3.outH;
      	outL = row.main_3.outL;
      	console.log(postId + "," + workerId + "," + rbase + "," + dirFlag + "," + jnd + "," + outH + "," + outL + "," + age + "," + sex + "," + handed + "," + degree + "," + monitor + "," + visExp + "," + corrExp + "," + strategy + "," + comments);
      }
      if(row.main_4) {
      	rbase = row.main_4.rbase;
      	dirFlag = row.main_4.dirFlag;
      	jnd = row.main_4.JND;
      	outH = row.main_4.outH;
      	outL = row.main_4.outL;
      	console.log(postId + "," + workerId + "," + rbase + "," + dirFlag + "," + jnd + "," + outH + "," + outL + "," + age + "," + sex + "," + handed + "," + degree + "," + monitor + "," + visExp + "," + corrExp + "," + strategy + "," + comments);
      }
      if(row.main_5) {
      	rbase = row.main_5.rbase;
      	dirFlag = row.main_5.dirFlag;
      	jnd = row.main_5.JND;
      	outH = row.main_5.outH;
      	outL = row.main_5.outL;
      	console.log(postId + "," + workerId + "," + rbase + "," + dirFlag + "," + jnd + "," + outH + "," + outL + "," + age + "," + sex + "," + handed + "," + degree + "," + monitor + "," + visExp + "," + corrExp + "," + strategy + "," + comments);
      }
      if(row.main_6) {
      	rbase = row.main_6.rbase;
      	dirFlag = row.main_6.dirFlag;
      	jnd = row.main_6.JND;
      	outH = row.main_6.outH;
      	outL = row.main_6.outL;
      	console.log(postId + "," + workerId + "," + rbase + "," + dirFlag + "," + jnd + "," + outH + "," + outL + "," + age + "," + sex + "," + handed + "," + degree + "," + monitor + "," + visExp + "," + corrExp + "," + strategy + "," + comments);
      }
      if(row.main_7) {
      	rbase = row.main_7.rbase;
      	dirFlag = row.main_7.dirFlag;
      	jnd = row.main_7.JND;
      	outH = row.main_7.outH;
      	outL = row.main_7.outL;
      	console.log(postId + "," + workerId + "," + rbase + "," + dirFlag + "," + jnd + "," + outH + "," + outL + "," + age + "," + sex + "," + handed + "," + degree + "," + monitor + "," + visExp + "," + corrExp + "," + strategy + "," + comments);
      }
      if(row.main_8) {
      	rbase = row.main_8.rbase;
      	dirFlag = row.main_8.dirFlag;
      	jnd = row.main_8.JND;
      	outH = row.main_8.outH;
      	outL = row.main_8.outL;
      	console.log(postId + "," + workerId + "," + rbase + "," + dirFlag + "," + jnd + "," + outH + "," + outL + "," + age + "," + sex + "," + handed + "," + degree + "," + monitor + "," + visExp + "," + corrExp + "," + strategy + "," + comments);
      }
      if(row.main_9) {
      	rbase = row.main_9.rbase;
      	dirFlag = row.main_9.dirFlag;
      	jnd = row.main_9.JND;
      	outH = row.main_9.outH;
      	outL = row.main_9.outL;
      	console.log(postId + "," + workerId + "," + rbase + "," + dirFlag + "," + jnd + "," + outH + "," + outL + "," + age + "," + sex + "," + handed + "," + degree + "," + monitor + "," + visExp + "," + corrExp + "," + strategy + "," + comments);
      }
      if(row.main_10) {
      	rbase = row.main_10.rbase;
      	dirFlag = row.main_10.dirFlag;
      	jnd = row.main_10.JND;
      	outH = row.main_10.outH;
      	outL = row.main_10.outL;
      	console.log(postId + "," + workerId + "," + rbase + "," + dirFlag + "," + jnd + "," + outH + "," + outL + "," + age + "," + sex + "," + handed + "," + degree + "," + monitor + "," + visExp + "," + corrExp + "," + strategy + "," + comments);
      }
      if(row.main_11) {
      	rbase = row.main_11.rbase;
      	dirFlag = row.main_11.dirFlag;
      	jnd = row.main_11.JND;
      	outH = row.main_11.outH;
      	outL = row.main_11.outL;
      	console.log(postId + "," + workerId + "," + rbase + "," + dirFlag + "," + jnd + "," + outH + "," + outL + "," + age + "," + sex + "," + handed + "," + degree + "," + monitor + "," + visExp + "," + corrExp + "," + strategy + "," + comments);
      }
    }
  })

  console.log(data.length)

//  convert( data )
})

function convert(d) {
  var params = {
    data: d,
    fields: fields
  }
  j2c(params, function(err, csv) {
    if (err) console.log(err)
    console.log(csv)
  })
}

function filterUndefined (arr) {
  return _.filter(arr, function(row) {
    return _.every(fields, function(f) { return row[f] })
  })
}

function filterDebug (arr) {
  return _.filter(arr, function(row) {
    return row.workerId !== 'debug'
  })
}
