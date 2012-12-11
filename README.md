    npm install sloop

**loop over a selected portion of a buffer**

    var Sampler = require('sloop')
    var buf = new Buffer('beepboopbaapboom')
    
    var start = 0
      , duration = buf.length
      , bytelength = 4;

    sample = Sampler(buf, 0, buf.length, 4)
    
    var t = setInterval(
    	function(){
	  console.log(sample().toString())
	}, 333)
