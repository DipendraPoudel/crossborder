# Crossborder.CardedRateApi

All URIs are relative to *https://sandbox.api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFxRates**](CardedRateApi.md#getFxRates) | **GET** /send/v1/partners/{partner-id}/crossborder/rates | 



## getFxRates

> RatesWrapper getFxRates(partnerId)



The Carded Rate APIs are part of an opt-in service that provides FX rates for currency pairs supported by an OI who has opted in to participate in the service. The Carded Rate APIs will provide dealable FX rates, rate IDs, effective times, as well as other information. OIs who have not opted into this service but code to these APIs will not receive rates (Push API) and will receive an error by the system upon submitting a request (Pull API). Refer to the Mastercard Cross-Border Services Product guide for further details on the service.     The FX Rate API - Pull, if used as the primary mechanism to retrieve FX rates, will require the OI to create a scheduler that will call this API based on refresh times per currency pair provided by Mastercard Send.

### Example

```javascript
import Crossborder from 'crossborder';

let apiInstance = new Crossborder.CardedRateApi();
let partnerId = BEL_MASEND5ged2; // String | Path Param - This is the Assigned Provider Id. Details- This parameter holds a string of alphanumeric special characters with a maximum length of 35.
apiInstance.getFxRates(partnerId, (error, data, response) => {
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
 **partnerId** | **String**| Path Param - This is the Assigned Provider Id. Details- This parameter holds a string of alphanumeric special characters with a maximum length of 35. | 

### Return type

[**RatesWrapper**](RatesWrapper.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

