SSL = function(key, cert, port){
	var httpProxy = Npm.require('http-proxy');

	proxy = httpProxy.createServer({
		target: {
    		host: 'localhost',
    		port: process.env.PORT
  		},
  		ssl: {
    		key,
    		cert
 		},
 		ws: true,
 		xfwd: true
 	}).listen(port);
	
	proxy.on("error", function(err) {
        	console.log("HTTP-PROXY NPM MODULE ERROR: " + err);
      	});
};
