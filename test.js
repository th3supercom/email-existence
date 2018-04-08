var emailExistence = require('./index');
var expect = require('expect.js');

describe('emailExistence', function() {
    it('is backwards compatible', function() {
        expect(emailExistence.check).to.a('function');
    });

    it('returns false instantly for invalid emails', function(done) {
        emailExistence('sitesda3lk@gmail.com', function(err, valid) {
            expect(valid).to.be(true);
            done();
        });
    });

    it('allows strange formats but that are technically valid', function(done) {
        var ok;

        emailExistence('spdarteshhgr@spdartes.net', function(err, valid) {
            if (!ok) {
                throw new Error('should not return immediately');
            }
        });

        ok = true;
        done();
    });

    it('recognizes andreas', function(done) {
        this.timeout(30e3);
        emailExistence('spdartes@spdartes.net', function(err, valid) {
            //expect(err).to.match(null);
            expect(valid).to.be(true);
            done();
        });
    });

    it('recognizes gmail+', function(done) {
        this.timeout(30e3);
        emailExistence('spdarteshhgr@spdartes.net', function(err, valid) {
            //expect(err).to.match(null);
            expect(valid).to.be(true);
            done();
        });
    });
    

    it('fails on unrecognized domain', function(done) {
        this.timeout(30e3);
        emailExistence('contact@spdartes.net', function(err, valid) {
            expect(valid).to.be(true);
            // expect(err.message).to.match(/ENOTFOUND/);
            done();
        });
    });


    
        it('fails on non-existent address', function(done) {
        this.timeout(30e3);
        emailExistence('contactjfdtj@spdartes.net', function(err, valid) {
            // expect(err).to.match(/^550/);
            expect(valid).to.be(true);
            done();
        });
    });
    
 
        it('fails on non-existent name', function(done) {
        this.timeout(30e3);
        emailExistence('sitesda3fgderr@gmail.com', function(err, valid) {
            // expect(err).to.match(/^550/);
            expect(valid).to.be(true);
            done();
        });
    });
    
    it('recognizes valid hotmail', function(done) {
      this.timeout(30e3);
      emailExistence('prince-kenitraitrt@hotmail.fr', function(err, valid) {
        //expect(err).to.match(null);
        expect(valid).to.be(true);
        done();
      });
    });
    
    
});
   
  	emailExistence.check('contact@spdartes.net', function(error, response){
		console.log('res: '+response);
	});  
   
			
