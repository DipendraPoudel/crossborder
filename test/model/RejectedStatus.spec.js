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
    instance = new Crossborder.RejectedStatus();
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

  describe('RejectedStatus', function() {
    it('should create an instance of RejectedStatus', function() {
      // uncomment below and update the code to test RejectedStatus
      //var instance = new Crossborder.RejectedStatus();
      //expect(instance).to.be.a(Crossborder.RejectedStatus);
    });

    it('should have the property code (base name: "Code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new Crossborder.RejectedStatus();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "Message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new Crossborder.RejectedStatus();
      //expect(instance).to.be();
    });

  });

}));
