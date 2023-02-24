# Crossborder.Rate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partnerId** | **String** | This parameter holds a string of alphanumeric special characters with a max length of 35. | [optional] 
**eventType** | **String** | This parameter holds information related to an escalated FX rate or a standard published FX rate.  Valid values:  - CARDFX_PUB - A new FX rate published as part of its scheduled standard publication.  - CARDFX_ESC - One or more FX rates have been escalated resulting in an out of Schedule Push. Only updated FX rates are provided.   Note: Out of Schedule push rates are sent on rare occasions when a typical market fluctuations exist. | [optional] 
**type** | **String** | This parameter indicates whether the FX rate is tiered or single. Only specially configured Customers will have tiered rates provided; Single is standard.   Valid values :   - tiered   - single   | [optional] 
**use** | **String** | Indicates the intended use of this FX rate, i.e. Rate used for the Customer Managed Sender Pricing or Mastercard Managed Sender Pricing. This is based on the business model of the participating Customer.   Customer Managed Sender Pricing &#x3D; CMSP  Mastercard Managed Sender Pricing &#x3D; MMSP  Valid values:  - CMSP  - MMSP | [optional] 
**fromCurrencyCode** | **String** | This parameter contains a \&quot;FROM\&quot; currency code in three-letter \&quot;ISO 4217\&quot;. This is the sending currency.  It holds a string of alphabet characters with an exact length of three. | [optional] 
**toCurrencyCode** | **String** | This parameter contains a \&quot;TO\&quot; currency code in three-letter \&quot;ISO 4217\&quot;. This is the beneficiary currency.  It holds a string of alphabet characters with an exact length of three. | [optional] 
**validFrom** | **String** | This parameter contains the effective \&quot;FROM\&quot; date/time and indicates when the FX rate becomes valid.  It holds an \&quot;ISO 8601\&quot; timestamp of the format: \&quot;YYYY-MM-DDTHH:MM:SSZ\&quot; | [optional] 
**validTo** | **String** | This parameter contains the \&quot;TO\&quot; date/time for this FX rate and indicates when the FX rate becomes expired. It holds an \&quot;ISO 8601\&quot; timestamp of the format: \&quot;YYYY-MM-DDTHH:MM:SSZ\&quot;  NOTE: If there are any delays receiving updated rates, Customers utilizing the Expired Rates feature should continue to utilize expired rates until they receive new rates. | [optional] 
**accountType** | **String** | Identification of the beneficiary account type this rate should be used for. Rates can be different based on the beneficiary account type.  Valid values:  - BANK  - E-WALLET  - CARD  - CASH-OUT | [optional] 
**tierIdentifierRate** | **String** | NOTE: This is applicable for future use only; the value will not be provided, and the field will be blank.  Contains the reference rate that should be used to select the tier of the rate. Amounts in tiers are always provided in \&quot;FROM\&quot; currency. The provided rate should be used to calculate the beneficiary amount, then that beneficiary amount will be used to select the appropriate Tier.   This is only applicable if OI is configured for tiered rates. The format for this value is up to 10 numbers to the left of the decimal and 10 numbers to the right of the decimal.  | [optional] 
**tiers** | [**Tiers**](Tiers.md) |  | [optional] 


