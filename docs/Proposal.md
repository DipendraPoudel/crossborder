# Crossborder.Proposal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | This parameter contains a system generated unique proposal identifier.  It holds a string of alphanumeric special characters with a maximum length of 30 and a minimum length of 0. | [optional] 
**resourceType** | **String** | This parameter contains the type of proposals.proposal[].resource type. It is conditional and will only hold a string with the value \&quot;proposal\&quot;. Note that it is provided if proposals.proposal[] is populated. | [optional] 
**feesIncluded** | **Boolean** | This parameter indicates how the sender_amount was interpreted to compute the amount fields in this proposal  It holds a Boolean value of either \&quot;true\&quot; or \&quot;false\&quot;. | [optional] 
**expirationDate** | **String** | The date and time when this proposal will expire, i.e. after which it can no longer be used to initiate a payment.  It holds an \&quot;ISO 8601\&quot; timestamp of the format. For JSON:YYYY-MMDDTHH:MM:SSÂ±hh[:mm] , For XML: YYYY-MMDDTHH:MM:SS.SSSÂ±hh[:mm] | [optional] 
**quoteFxRate** | **String** | This parameter contains the rate used for the given corridor transaction. It is the rate used to calculate the sender or originating institution amount into the beneficiary amount.   The format for this value is 1 to 10 numbers to the left of the decimal and 1 to 10 numbers to the right of the decimal. | [optional] 
**chargedAmount** | [**ChargedAmount**](ChargedAmount.md) |  | [optional] 
**creditedAmount** | [**CreditedAmount**](CreditedAmount.md) |  | [optional] 
**principalAmount** | [**PrincipalAmount**](PrincipalAmount.md) |  | [optional] 
**additionalDataList** | [**AdditionalDataList**](AdditionalDataList.md) |  | [optional] 
**confirmationExpiryTime** | **String** | This parameter contains the time when this proposal will expire, i.e. after which it can no longer be used to confirm.  It holds an \&quot;ISO 8601\&quot; timestamp of the format \&quot;YYYY-MMDDTHH:MM:SS.SSSÂ±hh[:mm]\&quot;  | [optional] 


