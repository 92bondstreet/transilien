/*global describe, it */
/*eslint max-nested-callbacks:0 */
'use strict';

var expect = require('chai').expect;
var transilien = require('../lib/transilien');

var options = {'url': 'http://www.transilien.com/itineraire/ligne/init?codeLigne='};


describe('require transilien', function(){

  describe('new Transilien', function () {

    it('should be a Function', function () {
      expect(transilien).to.be.a('function');
    });

    it('should expose lignes function', function () {
      expect(transilien.lignes).to.be.a('function');
    });

    it('should has default options', function(){
      expect(transilien._options).to.be.not.empty();
      expect(transilien._options.url).to.be.eql(options.url);
    });
  });

  describe('._checkCallback()', function () {

    it('should detect a not-callback argument', function(){
      expect(transilien._checkCallback('callback')).not.to.be.ok();
    });

    it('should detect a true callback argument', function(){
      var callback = function(){};
      expect(transilien._checkCallback(callback)).to.be.ok();
    });

  });

  describe.skip('._isUp()', function () {

    it('should detect url is DOWN because not found', function(){
    });

    it('should detect url is DOWN because server is down', function(){
    });

    it('should detect url is UP', function(){
    });

  });

  describe.skip('._getStatus()', function () {

    it('should return Empty object for a unknown DOM', function(){
    });

    it('should return Status object for the line', function(){
    });

  });

  describe.skip('.lignes()', function () {

    describe('With no arguments', function(){
      it('should throw Error with no arguments', function(){
        expect(transilien.lignes()).to.throwError();
      });
    });

    describe('With callback argument', function(){
      it('should get Status of all lines', function() {
      });
    });

    describe('With lines array and callback argument', function(){

      var lines = ['L', 'U'];

      it('should get Status of specified lines', function(done) {
        this.timeout(50000);
        transilien.lignes(lines, function(err, status){
          if (err){
            throw err;
          }
          expect(status).to.have.length(2);

          for(var message in status){
            expect(message).to.have.property('line');
            expect(message).to.have.property('message');
            expect(message).to.have.property('status');
          }

          done();
        });
      });

    });


  });

});
