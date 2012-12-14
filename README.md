    npm install sloop

**loop over a selected portion of a buffer**

    var Sampler = require('./sloop')
    var buf = new Buffer('beepboopbaapboom')
    
    var start = 0 // buf index to start
    , byteSize = 4 // size of each sample in bytes
    , duration = 4 // length of loop in samples (not bytes)
    ;
    
    sample = Sampler(buf, 0, duration, byteSize)
    
    var t = setInterval(
      function(){
      console.log(sample().toString())
    }, 333)
