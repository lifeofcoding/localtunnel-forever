const address = require('address');
const localtunnel = require('localtunnel');

const http = require('http');

var ips = require('ips');

ips(function(err, data) {
  console.log(data); // ex: { local: '192.168.10.3', public: '70.22.12.182' }
  /*
var options = {
  host: 'ipv4bot.whatismyipaddress.com',
  port: 80,
  path: '/'
};

http.get(options, function(res) {
  console.log("status: " + res.statusCode);

  res.on("data", function(chunk) {
    console.log("BODY: " + chunk);
  });
}).on('error', function(e) {
  console.log("error: " + e.message);
}).on('end', function(data) {
*/

  //let IP = data;

  let options = {
    subdomain: 'hxccloud',
    local_host: data.local || '127.0.0.1',
    port: 8181,
  };

  const run = () => {
    let tunnel = localtunnel(options.port, options, (err, tl) => {
      if (err) {
        run(options, key);
      } else {
        console.log('Running', tl.url);
      }
    });

    tunnel.on('error', e => {
      console.log(e);
      run(options, key);
    });


    tunnel.on('close', e => {
      console.log(e);
      run(options, key);
    });
  };

  run();
});
