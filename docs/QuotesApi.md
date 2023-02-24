# Crossborder.QuotesApi

All URIs are relative to *https://sandbox.api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotes**](QuotesApi.md#quotes) | **POST** /send/v1/partners/{partner-id}/crossborder/quotes | 



## quotes

> QuoteWrapper quotes(partnerId, quoteRequestWrapper)



This resource provides information on a cross-border payment before it is initiated and submitted. The information provided includes the amount to be credited to the beneficiary, the amount to charge the sender, the Origination Institution settlement amount, the FX rate, and more.  NOTE: For the test to run correctly, please use an unique transaction_reference on each run. 

### Example

```javascript
import Crossborder from 'crossborder';

let apiInstance = new Crossborder.QuotesApi();
let partnerId = BEL_MASEND5ged2; // String | This is a path parameter that accepts the provider assigned identification.  It holds a string of alphanumeric special characters with an maximum length of 35.
let quoteRequestWrapper = new Crossborder.QuoteRequestWrapper(); // QuoteRequestWrapper | Contains the details of the request message.
apiInstance.quotes(partnerId, quoteRequestWrapper, (error, data, response) => {
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
 **quoteRequestWrapper** | [**QuoteRequestWrapper**](QuoteRequestWrapper.md)| Contains the details of the request message. | 

### Return type

[**QuoteWrapper**](QuoteWrapper.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/xml, application/json
- **Accept**: application/xml, application/json

