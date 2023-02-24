/**
 * Crossborder
 * MasterCard Cross-Border Services enables banks in their capacity as Originating Institutions to send cross-border payments for various payment types including person-to-person payments (P2P), person-to-business payments (P2B), business-to-person disbursements (B2P), business-to-business payments (B2B), and government-to-person disbursement (G2P). Mastercard Cross-Border Services supports a variety of payout options, including bank accounts, mobile money accounts, consumer cards, and retail cash pick-up.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Crossborder);
  }
}(this, function(expect, Crossborder) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Crossborder.Quote();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Quote', function() {
    it('should create an instance of Quote', function() {
      // uncomment below and update the code to test Quote
      //var instance = new Crossborder.Quote();
      //expect(instance).to.be.a(Crossborder.Quote);
    });

    it('should have the property transactionReference (base name: "transaction_reference")', function() {
      // uncomment below and update the code to test the property transactionReference
      //var instance = new Crossborder.Quote();
      //expect(instance).to.be();
    });

    it('should have the property proposals (base name: "proposals")', function() {
      // uncomment below and update the code to test the property proposals
      //var instance = new Crossborder.Quote();
      //expect(instance).to.be();
    });

    it('should have the property paymentType (base name: "payment_type")', function() {
      // uncomment below and update the code to test the property paymentType
      //var instance = new Crossborder.Quote();
      //expect(instance).to.be();
    });

  });

}));