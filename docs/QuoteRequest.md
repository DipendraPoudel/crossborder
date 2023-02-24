# Crossborder.QuoteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionReference** | **String** | This parameter contains the client-provided unique reference number of the transaction. This value will be utilized as the transaction_reference ID of the payment if a consumer decides to move forward with a payment using the submitted quote. The string held must be unique per transaction.  This parameter holds a string of alphanumeric special characters with a maximum length of 40 and a minimum length of 1.  | 
**senderAccountUri** | **String** | For all transactions, including nested payments, the Sender Account URI scheme is a mandatory parameter based on the account that is initiating the transaction and must contain the ultimate sender&#39;s unique account details for the actual mobile wallet, ewallet, account identifier, bank account or card that is initiating the transaction.  Accordingly, this field should not include a blanket or general account managed by the Debtor Agent.   It holds a string of alphanumeric special characters with a maximum length of 200 and a minimum length of 1.   | 
**recipientAccountUri** | **String** | This parameter contains the URI identifying a beneficiary&#39;s account to receive the payment.   Note that in this parameter, when using the \&quot;pan\&quot; scheme, the \&quot;exp\&quot; property is optional.  It holds a string of alphanumeric special characters with a maximum length of 200 and a minimum length of 1. Refer to the \&quot;Recipient Account URI\&quot; section on \&quot;Additional Resources\&quot; page for details about scheme specific data. | 
**paymentAmount** | [**PaymentAmount**](PaymentAmount.md) |  | 
**paymentOriginationCountry** | **String** | This parameter contains the three-letter \&quot;ISO 3166-1 alpha-3\&quot; country code representing the country in which the payment is being initiated.  It holds a string of alphabet characters with an exact length of three. | 
**paymentType** | **String** | This parameter contains the three-digit code for the type of transaction that is being submitted. Available types and their uses are provided below:  B2P: Business Disbursement to Person - A disbursement of funds from a business to an individual account.  B2B: Business to Business- A transfer of funds from one business to another.  G2P: Government to Person - A disbursement of funds from a government agency to a private individual person&#39;s account.  P2P: Person to Person - A transfer of funds from one private individual person&#39;s account to another private individual person&#39;s account.  P2B: Person to Business - A payment by an individual person to a business   It holds a string of alphabet characters with an exact length of three.  | 
**quoteType** | [**QuoteType**](QuoteType.md) |  | [optional] 
**bankCode** | **String** | This parameter contains the bank code associated with the bank name and bank identifier code (BIC) provided by the customer. This parameter is required only for specific bank service provider endpoints identified as part of corridor data details.  It&#39;s a conditional parameter that holds alphanumeric special characters with a maximum length of 225 and a minimum length of 1. | [optional] 
**additionalData** | [**AdditionalData**](AdditionalData.md) |  | [optional] 


