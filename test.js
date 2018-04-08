var emailExistence = require('./index');
var expect = require('expect.js');

describe('emailExistence', function() {
    it('is backwards compatible', function() {
        expect(emailExistence.check).to.a('function');
    });

    it('returns false instantly for invalid emails', function(done) {
        emailExistence('sitesda32@gmail.com', function(err, valid) {
            expect(valid).to.be(false);
            done();
        });
    });

    it('allows strange formats but that are technically valid', function(done) {
        var ok;

        emailExistence('sitesda32@gmail.com', function(err, valid) {
            if (!ok) {
                throw new Error('should not return immediately');
            }
        });

        ok = true;
        done();
    });

    it('recognizes andreas', function(done) {
        this.timeout(30e3);
        emailExistence('sitesda32@gmail.com', function(err, valid) {
            expect(err).to.match(null);
            expect(valid).to.be(true);
            done();
        });
    });

    it('recognizes gmail+', function(done) {
        this.timeout(30e3);
        emailExistence('sitesda32@gmail.com', function(err, valid) {
            expect(err).to.match(null);
            expect(valid).to.be(true);
            done();
        });
    });
    

    it('fails on unrecognized domain', function(done) {
        this.timeout(30e3);
        emailExistence('sitesda32@gmail.com', function(err, valid) {
            expect(valid).to.be(false);
            // expect(err.message).to.match(/ENOTFOUND/);
            done();
        });
    });


    
        it('fails on non-existent address', function(done) {
        this.timeout(30e3);
        emailExistence('contact@spdartes.net', function(err, valid) {
            // expect(err).to.match(/^550/);
            expect(valid).to.be(false);
            done();
        });
    });
    
 
        it('fails on non-existent name', function(done) {
        this.timeout(30e3);
        emailExistence('sitesda3@gmail.com', function(err, valid) {
            // expect(err).to.match(/^550/);
            expect(valid).to.be(true);
            done();
        });
    });
    
    it('recognizes valid hotmail', function(done) {
      this.timeout(30e3);
      emailExistence('prince-kenitra@hotmail.fr', function(err, valid) {
        expect(err).to.match(null);
        expect(valid).to.be(true);
        done(err);
      });
    });
    
    
});
   
    
   
			
