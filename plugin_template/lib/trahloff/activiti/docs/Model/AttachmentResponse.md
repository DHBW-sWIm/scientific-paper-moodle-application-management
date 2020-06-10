# AttachmentResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] 
**url** | **string** |  | [optional] 
**name** | **string** |  | [optional] 
**user_id** | **string** |  | [optional] 
**description** | **string** |  | [optional] 
**type** | **string** | Can be any arbitrary value. When a valid formatted media-type (e.g. application/xml, text/plain) is included, the binary content HTTP response content-type will be set the the given value. | [optional] 
**task_url** | **string** |  | [optional] 
**process_instance_url** | **string** |  | [optional] 
**external_url** | **string** | contentUrl:In case the attachment is a link to an external resource, the externalUrl contains the URL to the external content. If the attachment content is present in the Activiti engine, the contentUrl will contain an URL where the binary content can be streamed from. | [optional] 
**content_url** | **string** |  | [optional] 
**time** | [**\DateTime**](\DateTime.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


