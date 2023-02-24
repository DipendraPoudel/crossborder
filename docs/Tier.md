# Crossborder.Tier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fromAmount** | **String** | NOTE: This is applicable for future use only; the value will not be provided, and the field will be blank.  Future use: This parameter contains the starting amount for tiered rate calculation in \&quot;FROM\&quot; currency.  It holds a numeric value with a maximum length of 22.  For partners utilizing non-tiered pricing, this value will always be zero blank. For partners utilizing tiered pricing, this value will represent the starting amount for the tier. | [optional] 
**rateId** | **String** | This parameter contains a system generated unique ID associated with the rate. This ID must be included in the payment in order to identify to the system which rate should be used for payment processing. It holds an alphanumeric value with a maximum length of 64. Example: 11ig8xy5uc10fm11cymngqstcqq | [optional] 
**askRate** | **String** | NOTE: This is applicable for future use only; the value will not be provided, and the field will be blank.  Future use: This parameter contains the ask rate value for this tier, which is the price at which market participants are willing to sell currencies.  The format for this value is 1 to 10 numbers to the left of the decimal and 1 to 10 numbers to the right of the decimal.  | [optional] 
**midRate** | **String** | NOTE: This is applicable for future use only; the value will not be provided, and the field will be blank.  Future use: This parameter contains the mid-market rate value for this tier, which is the mid-point between the buy and the sell prices of the two currencies to an exchange rate. It holds an integer value with a maximum length of 21.  The format for this value is 1 to 10 numbers to the left of the decimal and 1 to 10 numbers to the right of the decimal. | [optional] 
**bidRate** | **String** | This parameter contains the rate used for the given corridor transaction. It is the rate used to calculate the sender or originating institution amount into the beneficiary amount.  The format for this value is 1 to 10 numbers to the left of the decimal and 1 to 10 numbers to the right of the decimal.  | [optional] 


