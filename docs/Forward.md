# Crossborder.Forward

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feesIncluded** | **String** | This parameter indicates how payment fees will be paid. If true, fees are subtracted from the sender&#39;s amount. If false, then the sender will pay fees in addition to the sender&#39;s amount.   Note that if no type is used then it defaults to forward type with the fees_included field set to \&quot;true\&quot;. A forward and a reverse type shouldn&#39;t be used together. Using forward.fees_included along with reverse.sender_currency throws an error.  It&#39;s an optional parameter that holds a Boolean value. Valid values are \&quot;true\&quot; or \&quot;false\&quot;.  | [optional] 
**receiverCurrency** | **String** | This parameter contains the three-letter \&quot;ISO 4217\&quot; currency code of the account to receive the funds. This parameter is required for forward type where the beneficiary Account uri &#x3D; pan.  It&#39;s an optional parameter that holds alphabet characters with an exact length of three. | [optional] 


