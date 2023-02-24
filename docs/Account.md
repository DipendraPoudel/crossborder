# Crossborder.Account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | Settlement Account Balance Identifier. | [optional] 
**settlementCurrency** | **String** | Currency for settlement should have strict length 3 only. | [optional] 
**accountState** | **String** | Valid value ACTIVE | [optional] 
**openingBalanceTimestamp** | **String** | Time at which opening balance is calculated on the particular day. Its a time-only value with zone details, And the format looks like [HH:MM:SSZ]. | [optional] 
**balanceAsOfTimestamp** | **String** | Date and time at which  balance amount is calculated on the particular day as an ISO 8601 Timestamp in UTC. [YYYY-MM-DDTHH:MM:SSZ]. | [optional] 
**balanceDetails** | [**BalanceDetails**](BalanceDetails.md) |  | [optional] 


