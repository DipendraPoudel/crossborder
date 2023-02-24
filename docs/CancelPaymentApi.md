# Crossborder.CancelPaymentApi

All URIs are relative to *https://sandbox.api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelRequest**](CancelPaymentApi.md#cancelRequest) | **POST** /send/v1/partners/{partner-id}/crossborder/{payment-id}/cancel | This resource is ONLY usable for cash-out and some mobile money providers. For those scenarios, it only allows a cancel request for a transaction that is in a PENDING status.  NOTE:  This functionality does not work for bank account channels. For the sample code to run successfully, please use a Payment Id of a transaction that is in PENDING status and avoid reusing same payment Id for multiple cancellations.



## cancelRequest

> CancelPaymentWrapper cancelRequest(partnerId, paymentId, cancelPaymentRequestWrapper)

This resource is ONLY usable for cash-out and some mobile money providers. For those scenarios, it only allows a cancel request for a transaction that is in a PENDING status.  NOTE:  This functionality does not work for bank account channels. For the sample code to run successfully, please use a Payment Id of a transaction that is in PENDING status and avoid reusing same payment Id for multiple cancellations.

### Example

```javascript
import Crossborder from 'crossborder';

let apiInstance = new Crossborder.CancelPaymentApi();
let partnerId = BEL_MASEND5ged2; // String | This is a path parameter that accepts the provider assigned identification.   It holds a string of alphanumeric special characters with an maximum length of 35.
let paymentId = 0999999034810154901; // String | This is a path parameter that accepts the system generated unique payment identifier.  This is the id of the payment to cancel
let cancelPaymentRequestWrapper = new Crossborder.CancelPaymentRequestWrapper(); // CancelPaymentRequestWrapper | Contains the details of the request message.
apiInstance.cancelRequest(partnerId, paymentId, cancelPaymentRequestWrapper, (error, data, response) => {
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
 **partnerId** | **String**| This is a path parameter that accepts the provider assigned identification.   It holds a string of alphanumeric special characters with an maximum length of 35. | 
 **paymentId** | **String**| This is a path parameter that accepts the system generated unique payment identifier.  This is the id of the payment to cancel | 
 **cancelPaymentRequestWrapper** | [**CancelPaymentRequestWrapper**](CancelPaymentRequestWrapper.md)| Contains the details of the request message. | 

### Return type

[**CancelPaymentWrapper**](CancelPaymentWrapper.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/xml, application/json
- **Accept**: application/xml, application/json

