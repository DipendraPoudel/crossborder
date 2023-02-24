# Crossborder.Quote

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionReference** | **String** | This parameter contains the client provided unique reference number.  It holds alphanumeric special characters with a maximum length of 40 and a minimum length of 1. | [optional] 
**proposals** | [**Proposals**](Proposals.md) |  | [optional] 
**paymentType** | **String** | This parameter contains a three-digit code for the type of transaction that is being submitted. Available types and their uses are provided below:  B2P: Business Disbursement to Person - A disbursement of funds from a business to an individual account.  B2B: Business to Business- A transfer of funds from one business to another.  G2P: Government to Person - A disbursement of funds from a government agency to a private individual person&#39;s account.  P2P: Person to Person - A transfer of funds from one private individual person&#39;s account to another private individual person&#39;s account.  P2B: Person to Business - A payment by an individual person to a business  It holds a string of alphabet characters with an exact length of three. | [optional] 


