# Crossborder.PaymentApi

All URIs are relative to *https://sandbox.api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payment**](PaymentApi.md#payment) | **POST** /send/v1/partners/{partner-id}/crossborder/payment | 



## payment

> PaymentWrapper payment(partnerId, paymentRequestWrapper)



This resource is used to initiate and submit a cross-border payment. There are three options available:  Option #1: Payment with a quote - This option allows associating the FX rate and amounts calculated for a previously submitted quote to the payment by including the proposal Id of the quote in the payment request. For these payments, the fields filled in the quote do not need to be provided in the payment, but if they are, they will process without error as long as the data matches what was sent in the Quote that generated the proposal_id. Submitting a successful Quote API call will generate a proposal Id.  Note: An exception is for the bank_code field. If bank_code was provided in the the quote and provided again in the payment, then the newly provided value will be used. If using a proposal_id and the bank_code was provided in the quote, then that value will be automatically copied into the payment.  Option #2: Payment with Carded Rate - In this option, Carded Rate is offered as an opt-in functionality to obtain the FX rates for all the currency pairs that you support, for a valid period of time.   NOTE: Carded rate can be also obtained using the FX Push API or file based approach.  Option #3: Payment without a quote - In this option, the proposal ID is left blank and all required fields for a payment must be provided in the request. For these payments, the FX rate that is valid at the time the payment is submitted, will be applied to the payment and all of the calculated amounts provided in the payment response will be based on this FX rate.  NOTE: For the test to run successfully, please use an unique transaction_reference on each run.

### Example

```javascript
import Crossborder from 'crossborder';

let apiInstance = new Crossborder.PaymentApi();
let partnerId = BEL_MASEND5ged2; // String | This is a path parameter that accepts the provider assigned identification.  It holds a string of alphanumeric special characters with an maximum  length of 35.
let paymentRequestWrapper = new Crossborder.PaymentRequestWrapper(); // PaymentRequestWrapper | Contains the details of the request message.
apiInstance.payment(partnerId, paymentRequestWrapper, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partnerId** | **String**| This is a path parameter that accepts the provider assigned identification.  It holds a string of alphanumeric special characters with an maximum  length of 35. | 
 **paymentRequestWrapper** | [**PaymentRequestWrapper**](PaymentRequestWrapper.md)| Contains the details of the request message. | 

### Return type

[**PaymentWrapper**](PaymentWrapper.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/xml, application/json
- **Accept**: application/xml, application/json

