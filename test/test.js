var should = require('chai').should(),
    download = require('../lib/download'),
    fs = require('fs'),
    fetch_upload_s3 = require('../');


describe('test download', function(done){
  before(function(done){
    download('https://npmjs.org/static/npm.png', 'npm_logo.png', done);
  });

  it('should have created the file', function(done) {
    fs.exists('./.tmp/fetch_upload_s3/npm_logo.png', function(exists){
      exists.should.be.true;
      done()
    });
  });

});
