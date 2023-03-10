# Crossborder.GovernmentIds

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**governmentIdUri** | **String** | This is a conditional URI describing the government issued identification for the sending/receiving consumer or organization.&lt;br&gt;The data format for the government Id URI may include up to 5 components and each component may vary on acceptable characters and length.  The overall length of the parameter including all 5 components is a maximum length of 200 and a minimum length of 1.  Data format (URI Format): &lt;schema &gt;:&lt;id-number&gt;;expiration-date&#x3D;&lt;expiration-date&gt;; issue-date&#x3D;&lt;date-of-issue&gt;;country&#x3D;&lt;issuing-country&gt;  Schema: alpha, lower case, length 3.  Acceptable values: ppn, ssn, ein, tin, aln, cus, idc, dln   Valid Schema Value Meanings:  ppn - passport number&lt;br&gt;ssn - social security number&lt;br&gt;  ein - employer identification number&lt;br&gt;tin - tax identification number&lt;br&gt;aln - alien registration number&lt;br&gt;cus - customer number&lt;br&gt;idc - identity card number&lt;br&gt;dln - drivers license number   Id-number alphanumeric, max length: 80    Expiration Date YYYY-MM-DD in ISO8061 format, max length 10    Issue Date YYYY-MM-DD in ISO8061 format, max length 10    Issuing Country 3 letter ISO country code representing  the country that issues the id.    The Expiration Date, Issue Date, and Issuing Country may not be applicable in all cases.  | [optional] 


