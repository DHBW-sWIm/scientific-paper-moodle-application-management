# ProcessInstanceQueryRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **int** |  | [optional] 
**size** | **int** |  | [optional] 
**sort** | **string** |  | [optional] 
**order** | **string** |  | [optional] 
**process_instance_id** | **string** |  | [optional] 
**process_business_key** | **string** |  | [optional] 
**process_definition_id** | **string** |  | [optional] 
**process_definition_key** | **string** |  | [optional] 
**super_process_instance_id** | **string** |  | [optional] 
**sub_process_instance_id** | **string** |  | [optional] 
**exclude_subprocesses** | **bool** |  | [optional] [default to false]
**involved_user** | **string** |  | [optional] 
**suspended** | **bool** |  | [optional] [default to false]
**include_process_variables** | **bool** |  | [optional] [default to false]
**variables** | [**\Swagger\Client\Model\QueryVariable[]**](QueryVariable.md) |  | [optional] 
**tenant_id** | **string** |  | [optional] 
**tenant_id_like** | **string** |  | [optional] 
**without_tenant_id** | **bool** |  | [optional] [default to false]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


