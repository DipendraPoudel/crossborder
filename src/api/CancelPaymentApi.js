/**
 * Crossborder
 * MasterCard Cross-Border Services enables banks in their capacity as 
 * Originating Institutions to send cross-border payments for various payment types 
 * including person-to-person payments (P2P), person-to-business payments (P2B), 
 * business-to-person disbursements (B2P), business-to-business payments (B2B), 
 * and government-to-person disbursement (G2P). Mastercard Cross-Border Services supports
 *  a variety of payout options, including bank accounts, mobile money accounts, consumer cards, 
 * and retail cash pick-up.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CancelPaymentRequestWrapper from '../model/CancelPaymentRequestWrapper';
import CancelPaymentWrapper from '../model/CancelPaymentWrapper';

/**
* CancelPayment service.
* @module api/CancelPaymentApi
* @version 1.0.0
*/
export default class CancelPaymentApi {

    /**
    * Constructs a new CancelPaymentApi. 
    * @alias module:api/CancelPaymentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cancelRequest operation.
     * @callback module:api/CancelPaymentApi~cancelRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CancelPaymentWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This resource is ONLY usable for cash-out and some mobile money providers. For those scenarios, it only allows a cancel request for a transaction that is in a PENDING status.  NOTE:  This functionality does not work for bank account channels. For the sample code to run successfully, please use a Payment Id of a transaction that is in PENDING status and avoid reusing same payment Id for multiple cancellations.
     * @param {String} partnerId This is a path parameter that accepts the provider assigned identification.   It holds a string of alphanumeric special characters with an maximum length of 35.
     * @param {String} paymentId This is a path parameter that accepts the system generated unique payment identifier.  This is the id of the payment to cancel
     * @param {module:model/CancelPaymentRequestWrapper} cancelPaymentRequestWrapper Contains the details of the request message.
     * @param {module:api/CancelPaymentApi~cancelRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CancelPaymentWrapper}
     */
    cancelRequest(partnerId, paymentId, cancelPaymentRequestWrapper, callback) {
      let postBody = cancelPaymentRequestWrapper;
      // verify the required parameter 'partnerId' is set
      if (partnerId === undefined || partnerId === null) {
        throw new Error("Missing the required parameter 'partnerId' when calling cancelRequest");
      }
      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling cancelRequest");
      }
      // verify the required parameter 'cancelPaymentRequestWrapper' is set
      if (cancelPaymentRequestWrapper === undefined || cancelPaymentRequestWrapper === null) {
        throw new Error("Missing the required parameter 'cancelPaymentRequestWrapper' when calling cancelRequest");
      }

      let pathParams = {
        'partner-id': partnerId,
        'payment-id': paymentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/xml', 'application/json'];
      let accepts = ['application/xml', 'application/json'];
      let returnType = CancelPaymentWrapper;
      return this.apiClient.callApi(
        '/send/v1/partners/{partner-id}/crossborder/{payment-id}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
