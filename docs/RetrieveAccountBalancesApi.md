# Crossborder.RetrieveAccountBalancesApi

All URIs are relative to *https://sandbox.api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllAccountBalances**](RetrieveAccountBalancesApi.md#getAllAccountBalances) | **GET** /send/partners/{partner_id}/crossborder/accounts | This resource is used to retrieve all prefunded accounts associated with the provided Partner Id, with an option to pull back their associated balances.



## getAllAccountBalances

> [Account] getAllAccountBalances(partnerId, opts)

This resource is used to retrieve all prefunded accounts associated with the provided Partner Id, with an option to pull back their associated balances.

This API requires only partner_id to retrieve all the accounts and their respective balances. This API will provide balances information only when include_balance parameter is passed as true. This will fetch openingBalance, processedAmount, availableBalance, reservedBalance, settlementAccountBalance and thresholdAmount if any configured.

### Example

```javascript
import Crossborder from 'crossborder';

let apiInstance = new Crossborder.RetrieveAccountBalancesApi();
let partnerId = BEL_MASEND5ged2; // String | It holds a string of alphanumeric special characters with a length of up to 35. This should be valid value and provided by user.
let opts = {
  'includeBalance': true // String | If include_balance = true, the responses will include Account details along with balance details. If include_balance = false, balance details will be omitted and only account details will be returned.
};
apiInstance.getAllAccountBalances(partnerId, opts, (error, data, response) => {
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
 **partnerId** | **String**| It holds a string of alphanumeric special characters with a length of up to 35. This should be valid value and provided by user. | 
 **includeBalance** | **String**| If include_balance &#x3D; true, the responses will include Account details along with balance details. If include_balance &#x3D; false, balance details will be omitted and only account details will be returned. | [optional] [default to &#39;false&#39;]

### Return type

[**[Account]**](Account.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

