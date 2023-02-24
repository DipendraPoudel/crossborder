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

/**
 * The AvailableBalance model module.
 * @module model/AvailableBalance
 * @version 1.0.0
 */
class AvailableBalance {
    /**
     * Constructs a new <code>AvailableBalance</code>.
     * Object specifying available balance amount and currency.
     * @alias module:model/AvailableBalance
     */
    constructor() { 
        
        AvailableBalance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AvailableBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailableBalance} obj Optional instance to populate.
     * @return {module:model/AvailableBalance} The populated <code>AvailableBalance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AvailableBalance();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AvailableBalance</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AvailableBalance</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }

        return true;
    }


}



/**
 * Available amount for the corresponding account.
 * @member {String} amount
 */
AvailableBalance.prototype['amount'] = undefined;

/**
 * It is a 3-character ISO 4217 Alpha currency code.
 * @member {String} currency
 */
AvailableBalance.prototype['currency'] = undefined;






export default AvailableBalance;

