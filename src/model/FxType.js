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
import Forward from './Forward';
import Reverse from './Reverse';

/**
 * The FxType model module.
 * @module model/FxType
 * @version 1.0.0
 */
class FxType {
    /**
     * Constructs a new <code>FxType</code>.
     * Either a forward fx_type or a reverse fx_type should be submitted, but not both. All fx_type parameters are optional (forward fees included &#x3D; true when fx_type not provided). Forward fx_type should not be used with the Customer Managed Sender Pricing model.   Note that you would not provide these fields if proposal_id was provided because the data will be based on the quote provided.
     * @alias module:model/FxType
     */
    constructor() { 
        
        FxType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FxType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FxType} obj Optional instance to populate.
     * @return {module:model/FxType} The populated <code>FxType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FxType();

            if (data.hasOwnProperty('forward')) {
                obj['forward'] = Forward.constructFromObject(data['forward']);
            }
            if (data.hasOwnProperty('reverse')) {
                obj['reverse'] = Reverse.constructFromObject(data['reverse']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FxType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FxType</code>.
     */
    static validateJSON(data) {
        // validate the optional field `forward`
        if (data['forward']) { // data not null
          Forward.validateJSON(data['forward']);
        }
        // validate the optional field `reverse`
        if (data['reverse']) { // data not null
          Reverse.validateJSON(data['reverse']);
        }

        return true;
    }


}



/**
 * @member {module:model/Forward} forward
 */
FxType.prototype['forward'] = undefined;

/**
 * @member {module:model/Reverse} reverse
 */
FxType.prototype['reverse'] = undefined;






export default FxType;

