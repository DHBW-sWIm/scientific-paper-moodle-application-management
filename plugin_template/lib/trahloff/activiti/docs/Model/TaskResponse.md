# TaskResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] 
**url** | **string** |  | [optional] 
**owner** | **string** |  | [optional] 
**assignee** | **string** |  | [optional] 
**delegation_state** | **string** | Delegation-state of the task, can be null, \&quot;pending\&quot; or \&quot;resolved\&quot;. | [optional] 
**name** | **string** |  | [optional] 
**description** | **string** |  | [optional] 
**create_time** | [**\DateTime**](\DateTime.md) |  | [optional] 
**due_date** | [**\DateTime**](\DateTime.md) |  | [optional] 
**priority** | **int** |  | [optional] 
**suspended** | **bool** |  | [optional] [default to false]
**task_definition_key** | **string** |  | [optional] 
**tenant_id** | **string** |  | [optional] 
**category** | **string** |  | [optional] 
**form_key** | **string** |  | [optional] 
**parent_task_id** | **string** |  | [optional] 
**parent_task_url** | **string** |  | [optional] 
**execution_id** | **string** |  | [optional] 
**execution_url** | **string** |  | [optional] 
**process_instance_id** | **string** |  | [optional] 
**process_instance_url** | **string** |  | [optional] 
**process_definition_id** | **string** |  | [optional] 
**process_definition_url** | **string** |  | [optional] 
**variables** | [**\Swagger\Client\Model\RestVariable[]**](RestVariable.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


