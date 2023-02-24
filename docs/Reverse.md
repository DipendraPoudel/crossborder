# Crossborder.Reverse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**senderCurrency** | **String** | This parameter contains the three-letter \&quot;ISO 4217\&quot; currency code in which the sender will send the payment. This parameter is required for reverse type.    Note that if no type is used then it defaults to forward type with the fees_included field set to \&quot;true.\&quot; A forward and a reverse type shouldn&#39;t be used together. Using forward.fees_included along with reverse.sender_currency throws an error.   It&#39;s an optional parameter that holds alphabet characters with an exact length of three  | [optional] 


