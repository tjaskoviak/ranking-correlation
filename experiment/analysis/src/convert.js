var j2c    = require('json2csv')
  , fs     = require('fs')
  , file   = process.argv[2]
  , _      = require('underscore')
  , fields = [ // EDIT THESE
      'key',
      'name',
      'num',
      'chartType',
      'targetA',
      'targetB',
      'actualDiff',
      'input',
      'time',
      'chartData_1',
      'chartData_2',
      'chartData_3',
      'chartData_4',
      'chartData_5',
      'chartData_6',
      'chartData_7',
      'chartData_8',
      'chartData_9',
      'chartData_10'
    ]
  , data

fs.readFile(file, 'utf8', function (err, data) {
  if (err) console.log(err)

  data = JSON.parse(data)

  // filters any undefined data (it makes R scripting easier)
  data = filterUndefined(data)

  // use 'debug' for your workerId when testing experiments, 
  //   comment out if you want to analyze data from yourself
  data = filterDebug(data) 

  //filter for specific keys here
  data = _.filter(data, function(d) { return _.contains(['j58ihqdp', 'j58ig5vm', 'j59m2hq1', 'j59m5zpw', 'j59m5fjj', 'j59lxylj'], d.key); })

  convert( data )
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
