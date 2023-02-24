# Crossborder.RetrievePaymentApi

All URIs are relative to *https://sandbox.api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayment**](RetrievePaymentApi.md#getPayment) | **GET** /send/v1/partners/{partner-id}/crossborder/{payment-id} | This resource is used to retrieve the Payment transaction using the payment ID. When using the Retrieve Payment API resource to check the status of a PENDING payment, it should be used no more than every 30 minutes for each payment being retrieved.  NOTE: For the test to run successfully, please use the payment Id of an existing transaction that was created using the Payment API.
[**transactionStatus**](RetrievePaymentApi.md#transactionStatus) | **GET** /send/v1/partners/{partner-id}/crossborder | 



## getPayment

> RetrievePaymentWrapper getPayment(partnerId, paymentId)

This resource is used to retrieve the Payment transaction using the payment ID. When using the Retrieve Payment API resource to check the status of a PENDING payment, it should be used no more than every 30 minutes for each payment being retrieved.  NOTE: For the test to run successfully, please use the payment Id of an existing transaction that was created using the Payment API.

This resource is used to retrieve the Payment transaction using the payment ID. When using the Retrieve Payment API resource to check the status of a PENDING payment, it should be used no more than every 30 minutes for each payment being retrieved.  NOTE: For the test to run successfully, please use the payment Id of an existing transaction that was created using the Payment API.

### Example

```javascript
import Crossborder from 'crossborder';

let apiInstance = new Crossborder.RetrievePaymentApi();
let partnerId = BEL_MASEND5ged2; // String | This is a path parameter that accepts the provider assigned identification.   It holds a string of alphanumeric special characters with an maximum length of 35.
let paymentId = 0999999034810154901; // String | This is a path parameter that accepts the system generated unique payment identifier.  It holds a string of alphanumeric special characters with a maximum length of 31 and a minimum length of 1.
apiInstance.getPayment(partnerId, paymentId, (error, data, response) => {
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
 **paymentId** | **String**| This is a path parameter that accepts the system generated unique payment identifier.  It holds a string of alphanumeric special characters with a maximum length of 31 and a minimum length of 1. | 

### Return type

[**RetrievePaymentWrapper**](RetrievePaymentWrapper.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json


## transactionStatus

> RetrievePaymentWrapper transactionStatus(partnerId, ref)



This resource is used to retrieve the Payment transaction using the transaction_reference. When using theRetrieve Payment API resource to check the status of a PENDING payment, it should be used no more than every 30 minutes for each payment being retrieved.  NOTE: For the test to run successfully, please use the transaction_reference of an existing transaction that was created using the Payment API.

### Example

```javascript
import Crossborder from 'crossborder';

let apiInstance = new Crossborder.RetrievePaymentApi();
let partnerId = BEL_MASEND5ged2; // String | This is a path parameter that accepts the provider assigned identification.  It holds a string of alphanumeric special characters with an maximum length of 35.
let ref = 0999999034810154901; // String | This is a path parameter that accepts the client-provided unique reference number of the transaction. The string held must be unique per transaction. Note that when utilizing a quote, this parameter's value must be identical to the value created for the associated quote.  It holds a string of alphanumeric special characters with a maximum length of 40 and a minimum length of 1.
apiInstance.transactionStatus(partnerId, ref, (error, data, response) => {
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
 **partnerId** | **String**| This is a path parameter that accepts the provider assigned identification.  It holds a string of alphanumeric special characters with an maximum length of 35. | 
 **ref** | **String**| This is a path parameter that accepts the client-provided unique reference number of the transaction. The string held must be unique per transaction. Note that when utilizing a quote, this parameter&#39;s value must be identical to the value created for the associated quote.  It holds a string of alphanumeric special characters with a maximum length of 40 and a minimum length of 1. | 

### Return type

[**RetrievePaymentWrapper**](RetrievePaymentWrapper.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

