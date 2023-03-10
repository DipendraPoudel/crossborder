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

import ApiClient from '../ApiClient';
import Rate from './Rate';

/**
 * The Rates model module.
 * @module model/Rates
 * @version 1.0.0
 */
class Rates {
    /**
     * Constructs a new <code>Rates</code>.
     * See child attributes
     * @alias module:model/Rates
     */
    constructor() { 
        
        Rates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Rates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Rates} obj Optional instance to populate.
     * @return {module:model/Rates} The populated <code>Rates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Rates();

            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], [Rate]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Rates</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Rates</code>.
     */
    static validateJSON(data) {
        if (data['rate']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['rate'])) {
                throw new Error("Expected the field `rate` to be an array in the JSON data but got " + data['rate']);
            }
            // validate the optional field `rate` (array)
            for (const item of data['rate']) {
                Rate.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * See child attributes
 * @member {Array.<module:model/Rate>} rate
 */
Rates.prototype['rate'] = undefined;






export default Rates;

