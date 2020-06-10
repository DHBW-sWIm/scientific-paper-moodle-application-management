# Swagger\Client\HistoryApi

All URIs are relative to *https://activiti.ganymed.me/activiti-rest/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createComment**](HistoryApi.md#createComment) | **POST** /history/historic-process-instances/{processInstanceId}/comments | Create a new comment on a historic process instance
[**deleteComment**](HistoryApi.md#deleteComment) | **DELETE** /history/historic-process-instances/{processInstanceId}/comments/{commentId} | Delete a comment on a historic process instance
[**deleteHitoricProcessInstance**](HistoryApi.md#deleteHitoricProcessInstance) | **DELETE** /history/historic-process-instances/{processInstanceId} | Delete a historic process instance
[**deleteTaskInstance**](HistoryApi.md#deleteTaskInstance) | **DELETE** /history/historic-task-instances/{taskId} | Delete a historic task instance
[**getComment**](HistoryApi.md#getComment) | **GET** /history/historic-process-instances/{processInstanceId}/comments/{commentId} | Get a comment on a historic process instance
[**getComments**](HistoryApi.md#getComments) | **GET** /history/historic-process-instances/{processInstanceId}/comments | Get all comments on a historic process instance
[**getHistoricActivityInstances**](HistoryApi.md#getHistoricActivityInstances) | **GET** /history/historic-activity-instances | Get historic activity instances
[**getHistoricDetailInfo**](HistoryApi.md#getHistoricDetailInfo) | **GET** /history/historic-detail | Get historic detail
[**getHistoricDetailVariableData**](HistoryApi.md#getHistoricDetailVariableData) | **GET** /history/historic-detail/{detailId}/data | Get the binary data for a historic detail variable
[**getHistoricInstanceVariableData**](HistoryApi.md#getHistoricInstanceVariableData) | **GET** /history/historic-variable-instances/{varInstanceId}/data | Get the binary data for a historic task instance variable
[**getHistoricProcessInstance**](HistoryApi.md#getHistoricProcessInstance) | **GET** /history/historic-process-instances/{processInstanceId} | Get a historic process instance
[**getHistoricProcessInstanceVariableData**](HistoryApi.md#getHistoricProcessInstanceVariableData) | **GET** /history/historic-process-instances/{processInstanceId}/variables/{variableName}/data | Get the binary data for a historic process instance variable
[**getHistoricTaskInstanceVariableData**](HistoryApi.md#getHistoricTaskInstanceVariableData) | **GET** /history/historic-task-instances/{taskId}/variables/{variableName}/data | Get the binary data for a historic task instance variable
[**getHistoricVariableInstances**](HistoryApi.md#getHistoricVariableInstances) | **GET** /history/historic-variable-instances | List of historic variable instances
[**getProcessIdentityLinks**](HistoryApi.md#getProcessIdentityLinks) | **GET** /history/historic-process-instances/{processInstanceId}/identitylinks | Get the identity links of a historic process instance
[**getTaskIdentityLinks**](HistoryApi.md#getTaskIdentityLinks) | **GET** /history/historic-task-instances/{taskId}/identitylinks | Get the identity links of a historic task instance
[**getTaskInstance**](HistoryApi.md#getTaskInstance) | **GET** /history/historic-task-instances/{taskId} | Get a single historic task instance
[**listHistoricProcessInstances**](HistoryApi.md#listHistoricProcessInstances) | **GET** /history/historic-process-instances | List of historic process instances
[**listHistoricTaskInstances**](HistoryApi.md#listHistoricTaskInstances) | **GET** /history/historic-task-instances | Get historic task instances
[**queryActivityInstances**](HistoryApi.md#queryActivityInstances) | **POST** /query/historic-activity-instances | Query for historic activity instances
[**queryHistoricDetail**](HistoryApi.md#queryHistoricDetail) | **POST** /query/historic-detail | Query for historic details
[**queryHistoricProcessInstance**](HistoryApi.md#queryHistoricProcessInstance) | **POST** /query/historic-process-instances | Query for historic process instances
[**queryHistoricTaskInstance**](HistoryApi.md#queryHistoricTaskInstance) | **POST** /query/historic-task-instances | Query for historic task instances
[**queryVariableInstances**](HistoryApi.md#queryVariableInstances) | **POST** /query/historic-variable-instances | Query for historic variable instances


# **createComment**
> \Swagger\Client\Model\CommentResponse createComment($process_instance_id, $body)

Create a new comment on a historic process instance

Parameter saveProcessInstanceId is optional, if true save process instance id of task with comment.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | processInstanceId
$body = new \Swagger\Client\Model\CommentResponse(); // \Swagger\Client\Model\CommentResponse | 

try {
    $result = $apiInstance->createComment($process_instance_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->createComment: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| processInstanceId |
 **body** | [**\Swagger\Client\Model\CommentResponse**](../Model/CommentResponse.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\CommentResponse**](../Model/CommentResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteComment**
> deleteComment($process_instance_id, $comment_id)

Delete a comment on a historic process instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the historic process instance to delete the comment for.
$comment_id = "comment_id_example"; // string | The id of the comment.

try {
    $apiInstance->deleteComment($process_instance_id, $comment_id);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->deleteComment: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the historic process instance to delete the comment for. |
 **comment_id** | **string**| The id of the comment. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteHitoricProcessInstance**
> deleteHitoricProcessInstance($process_instance_id)

Delete a historic process instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | 

try {
    $apiInstance->deleteHitoricProcessInstance($process_instance_id);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->deleteHitoricProcessInstance: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**|  |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteTaskInstance**
> deleteTaskInstance($task_id)

Delete a historic task instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | 

try {
    $apiInstance->deleteTaskInstance($task_id);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->deleteTaskInstance: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**|  |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getComment**
> \Swagger\Client\Model\CommentResponse getComment($process_instance_id, $comment_id)

Get a comment on a historic process instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the historic process instance to get the comment for.
$comment_id = "comment_id_example"; // string | The id of the comment.

try {
    $result = $apiInstance->getComment($process_instance_id, $comment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->getComment: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the historic process instance to get the comment for. |
 **comment_id** | **string**| The id of the comment. |

### Return type

[**\Swagger\Client\Model\CommentResponse**](../Model/CommentResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getComments**
> \Swagger\Client\Model\CommentResponse[] getComments($process_instance_id)

Get all comments on a historic process instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance to get the comments for.

try {
    $result = $apiInstance->getComments($process_instance_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->getComments: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance to get the comments for. |

### Return type

[**\Swagger\Client\Model\CommentResponse[]**](../Model/CommentResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getHistoricActivityInstances**
> \Swagger\Client\Model\DataResponse getHistoricActivityInstances($activity_id, $activity_instance_id, $activity_name, $activity_type, $execution_id, $finished, $task_assignee, $process_instance_id, $process_definition_id, $tenant_id, $tenant_id_like, $without_tenant_id)

Get historic activity instances



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activity_id = "activity_id_example"; // string | An id of the activity instance.
$activity_instance_id = "activity_instance_id_example"; // string | An id of the historic activity instance.
$activity_name = "activity_name_example"; // string | The name of the historic activity instance.
$activity_type = "activity_type_example"; // string | The element type of the historic activity instance.
$execution_id = "execution_id_example"; // string | The execution id of the historic activity instance.
$finished = true; // bool | Indication if the historic activity instance is finished.
$task_assignee = "task_assignee_example"; // string | The assignee of the historic activity instance.
$process_instance_id = "process_instance_id_example"; // string | The process instance id of the historic activity instance.
$process_definition_id = "process_definition_id_example"; // string | The process definition id of the historic activity instance.
$tenant_id = "tenant_id_example"; // string | Only return instances with the given tenantId.
$tenant_id_like = "tenant_id_like_example"; // string | Only return instances with a tenantId like the given value.
$without_tenant_id = true; // bool | If true, only returns instances without a tenantId set. If false, the withoutTenantId parameter is ignored.

try {
    $result = $apiInstance->getHistoricActivityInstances($activity_id, $activity_instance_id, $activity_name, $activity_type, $execution_id, $finished, $task_assignee, $process_instance_id, $process_definition_id, $tenant_id, $tenant_id_like, $without_tenant_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->getHistoricActivityInstances: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity_id** | **string**| An id of the activity instance. | [optional]
 **activity_instance_id** | **string**| An id of the historic activity instance. | [optional]
 **activity_name** | **string**| The name of the historic activity instance. | [optional]
 **activity_type** | **string**| The element type of the historic activity instance. | [optional]
 **execution_id** | **string**| The execution id of the historic activity instance. | [optional]
 **finished** | **bool**| Indication if the historic activity instance is finished. | [optional]
 **task_assignee** | **string**| The assignee of the historic activity instance. | [optional]
 **process_instance_id** | **string**| The process instance id of the historic activity instance. | [optional]
 **process_definition_id** | **string**| The process definition id of the historic activity instance. | [optional]
 **tenant_id** | **string**| Only return instances with the given tenantId. | [optional]
 **tenant_id_like** | **string**| Only return instances with a tenantId like the given value. | [optional]
 **without_tenant_id** | **bool**| If true, only returns instances without a tenantId set. If false, the withoutTenantId parameter is ignored. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getHistoricDetailInfo**
> \Swagger\Client\Model\DataResponse getHistoricDetailInfo($id, $process_instance_id, $execution_id, $activity_instance_id, $task_id, $select_only_form_properties, $select_only_variable_updates)

Get historic detail



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = "id_example"; // string | The id of the historic detail.
$process_instance_id = "process_instance_id_example"; // string | The process instance id of the historic detail.
$execution_id = "execution_id_example"; // string | The execution id of the historic detail.
$activity_instance_id = "activity_instance_id_example"; // string | The activity instance id of the historic detail.
$task_id = "task_id_example"; // string | The task id of the historic detail.
$select_only_form_properties = true; // bool | Indication to only return form properties in the result.
$select_only_variable_updates = true; // bool | Indication to only return variable updates in the result.

try {
    $result = $apiInstance->getHistoricDetailInfo($id, $process_instance_id, $execution_id, $activity_instance_id, $task_id, $select_only_form_properties, $select_only_variable_updates);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->getHistoricDetailInfo: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The id of the historic detail. | [optional]
 **process_instance_id** | **string**| The process instance id of the historic detail. | [optional]
 **execution_id** | **string**| The execution id of the historic detail. | [optional]
 **activity_instance_id** | **string**| The activity instance id of the historic detail. | [optional]
 **task_id** | **string**| The task id of the historic detail. | [optional]
 **select_only_form_properties** | **bool**| Indication to only return form properties in the result. | [optional]
 **select_only_variable_updates** | **bool**| Indication to only return variable updates in the result. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getHistoricDetailVariableData**
> string[] getHistoricDetailVariableData($detail_id)

Get the binary data for a historic detail variable

The response body contains the binary value of the variable. When the variable is of type binary, the content-type of the response is set to application/octet-stream, regardless of the content of the variable or the request accept-type header. In case of serializable, application/x-java-serialized-object is used as content-type.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$detail_id = "detail_id_example"; // string | 

try {
    $result = $apiInstance->getHistoricDetailVariableData($detail_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->getHistoricDetailVariableData: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **detail_id** | **string**|  |

### Return type

**string[]**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getHistoricInstanceVariableData**
> string[] getHistoricInstanceVariableData($var_instance_id)

Get the binary data for a historic task instance variable

The response body contains the binary value of the variable. When the variable is of type binary, the content-type of the response is set to application/octet-stream, regardless of the content of the variable or the request accept-type header. In case of serializable, application/x-java-serialized-object is used as content-type.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$var_instance_id = "var_instance_id_example"; // string | 

try {
    $result = $apiInstance->getHistoricInstanceVariableData($var_instance_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->getHistoricInstanceVariableData: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_instance_id** | **string**|  |

### Return type

**string[]**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getHistoricProcessInstance**
> \Swagger\Client\Model\HistoricProcessInstanceResponse getHistoricProcessInstance($process_instance_id)

Get a historic process instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | 

try {
    $result = $apiInstance->getHistoricProcessInstance($process_instance_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->getHistoricProcessInstance: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**|  |

### Return type

[**\Swagger\Client\Model\HistoricProcessInstanceResponse**](../Model/HistoricProcessInstanceResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getHistoricProcessInstanceVariableData**
> string[] getHistoricProcessInstanceVariableData($process_instance_id, $variable_name)

Get the binary data for a historic process instance variable

The response body contains the binary value of the variable. When the variable is of type binary, the content-type of the response is set to application/octet-stream, regardless of the content of the variable or the request accept-type header. In case of serializable, application/x-java-serialized-object is used as content-type.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | 
$variable_name = "variable_name_example"; // string | 

try {
    $result = $apiInstance->getHistoricProcessInstanceVariableData($process_instance_id, $variable_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->getHistoricProcessInstanceVariableData: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**|  |
 **variable_name** | **string**|  |

### Return type

**string[]**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getHistoricTaskInstanceVariableData**
> string[] getHistoricTaskInstanceVariableData($task_id, $variable_name, $scope)

Get the binary data for a historic task instance variable

The response body contains the binary value of the variable. When the variable is of type binary, the content-type of the response is set to application/octet-stream, regardless of the content of the variable or the request accept-type header. In case of serializable, application/x-java-serialized-object is used as content-type.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | 
$variable_name = "variable_name_example"; // string | 
$scope = "scope_example"; // string | 

try {
    $result = $apiInstance->getHistoricTaskInstanceVariableData($task_id, $variable_name, $scope);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->getHistoricTaskInstanceVariableData: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**|  |
 **variable_name** | **string**|  |
 **scope** | **string**|  | [optional]

### Return type

**string[]**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getHistoricVariableInstances**
> \Swagger\Client\Model\DataResponse getHistoricVariableInstances($process_instance_id, $task_id, $exclude_task_variables, $variable_name, $variable_name_like)

List of historic variable instances



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The process instance id of the historic variable instance.
$task_id = "task_id_example"; // string | The task id of the historic variable instance.
$exclude_task_variables = true; // bool | Indication to exclude the task variables from the result.
$variable_name = "variable_name_example"; // string | The variable name of the historic variable instance.
$variable_name_like = "variable_name_like_example"; // string | The variable name using the like operator for the historic variable instance.

try {
    $result = $apiInstance->getHistoricVariableInstances($process_instance_id, $task_id, $exclude_task_variables, $variable_name, $variable_name_like);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->getHistoricVariableInstances: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The process instance id of the historic variable instance. | [optional]
 **task_id** | **string**| The task id of the historic variable instance. | [optional]
 **exclude_task_variables** | **bool**| Indication to exclude the task variables from the result. | [optional]
 **variable_name** | **string**| The variable name of the historic variable instance. | [optional]
 **variable_name_like** | **string**| The variable name using the like operator for the historic variable instance. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getProcessIdentityLinks**
> \Swagger\Client\Model\HistoricIdentityLinkResponse[] getProcessIdentityLinks($process_instance_id)

Get the identity links of a historic process instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | 

try {
    $result = $apiInstance->getProcessIdentityLinks($process_instance_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->getProcessIdentityLinks: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**|  |

### Return type

[**\Swagger\Client\Model\HistoricIdentityLinkResponse[]**](../Model/HistoricIdentityLinkResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTaskIdentityLinks**
> \Swagger\Client\Model\HistoricIdentityLinkResponse[] getTaskIdentityLinks($task_id)

Get the identity links of a historic task instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | 

try {
    $result = $apiInstance->getTaskIdentityLinks($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->getTaskIdentityLinks: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**|  |

### Return type

[**\Swagger\Client\Model\HistoricIdentityLinkResponse[]**](../Model/HistoricIdentityLinkResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTaskInstance**
> \Swagger\Client\Model\HistoricTaskInstanceResponse getTaskInstance($task_id)

Get a single historic task instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | 

try {
    $result = $apiInstance->getTaskInstance($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->getTaskInstance: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**|  |

### Return type

[**\Swagger\Client\Model\HistoricTaskInstanceResponse**](../Model/HistoricTaskInstanceResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listHistoricProcessInstances**
> \Swagger\Client\Model\DataResponse listHistoricProcessInstances($process_instance_id, $process_definition_key, $process_definition_id, $business_key, $involved_user, $finished, $super_process_instance_id, $exclude_subprocesses, $finished_after, $finished_before, $started_after, $started_before, $started_by, $include_process_variables, $tenant_id, $tenant_id_like, $without_tenant_id)

List of historic process instances



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | An id of the historic process instance.
$process_definition_key = "process_definition_key_example"; // string | The process definition key of the historic process instance.
$process_definition_id = "process_definition_id_example"; // string | The process definition id of the historic process instance.
$business_key = "business_key_example"; // string | The business key of the historic process instance.
$involved_user = "involved_user_example"; // string | An involved user of the historic process instance.
$finished = true; // bool | Indication if the historic process instance is finished.
$super_process_instance_id = "super_process_instance_id_example"; // string | An optional parent process id of the historic process instance.
$exclude_subprocesses = true; // bool | Return only historic process instances which aren�t sub processes.
$finished_after = "finished_after_example"; // string | Return only historic process instances that were finished after this date.
$finished_before = "finished_before_example"; // string | Return only historic process instances that were finished before this date.
$started_after = "started_after_example"; // string | Return only historic process instances that were started after this date.
$started_before = "started_before_example"; // string | Return only historic process instances that were started before this date.
$started_by = "started_by_example"; // string | Return only historic process instances that were started by this user.
$include_process_variables = true; // bool | An indication if the historic process instance variables should be returned as well.
$tenant_id = "tenant_id_example"; // string | Only return instances with the given tenantId.
$tenant_id_like = "tenant_id_like_example"; // string | Only return instances with a tenantId like the given value.
$without_tenant_id = true; // bool | If true, only returns instances without a tenantId set. If false, the withoutTenantId parameter is ignored.

try {
    $result = $apiInstance->listHistoricProcessInstances($process_instance_id, $process_definition_key, $process_definition_id, $business_key, $involved_user, $finished, $super_process_instance_id, $exclude_subprocesses, $finished_after, $finished_before, $started_after, $started_before, $started_by, $include_process_variables, $tenant_id, $tenant_id_like, $without_tenant_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->listHistoricProcessInstances: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| An id of the historic process instance. | [optional]
 **process_definition_key** | **string**| The process definition key of the historic process instance. | [optional]
 **process_definition_id** | **string**| The process definition id of the historic process instance. | [optional]
 **business_key** | **string**| The business key of the historic process instance. | [optional]
 **involved_user** | **string**| An involved user of the historic process instance. | [optional]
 **finished** | **bool**| Indication if the historic process instance is finished. | [optional]
 **super_process_instance_id** | **string**| An optional parent process id of the historic process instance. | [optional]
 **exclude_subprocesses** | **bool**| Return only historic process instances which aren�t sub processes. | [optional]
 **finished_after** | **string**| Return only historic process instances that were finished after this date. | [optional]
 **finished_before** | **string**| Return only historic process instances that were finished before this date. | [optional]
 **started_after** | **string**| Return only historic process instances that were started after this date. | [optional]
 **started_before** | **string**| Return only historic process instances that were started before this date. | [optional]
 **started_by** | **string**| Return only historic process instances that were started by this user. | [optional]
 **include_process_variables** | **bool**| An indication if the historic process instance variables should be returned as well. | [optional]
 **tenant_id** | **string**| Only return instances with the given tenantId. | [optional]
 **tenant_id_like** | **string**| Only return instances with a tenantId like the given value. | [optional]
 **without_tenant_id** | **bool**| If true, only returns instances without a tenantId set. If false, the withoutTenantId parameter is ignored. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listHistoricTaskInstances**
> \Swagger\Client\Model\DataResponse listHistoricTaskInstances($task_id, $process_instance_id, $process_definition_key, $process_definition_key_like, $process_definition_id, $process_definition_name, $process_definition_name_like, $process_business_key, $process_business_key_like, $execution_id, $task_definition_key, $task_name, $task_name_like, $task_description, $task_description_like, $task_category, $task_delete_reason, $task_delete_reason_like, $task_assignee, $task_assignee_like, $task_owner, $task_owner_like, $task_involved_user, $task_priority, $finished, $process_finished, $parent_task_id, $due_date, $due_date_after, $due_date_before, $without_due_date, $task_completed_on, $task_completed_after, $task_completed_before, $task_created_on, $task_created_before, $task_created_after, $include_task_local_variables, $include_process_variables, $tenant_id, $tenant_id_like, $without_tenant_id)

Get historic task instances



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | An id of the historic task instance.
$process_instance_id = "process_instance_id_example"; // string | The process instance id of the historic task instance.
$process_definition_key = "process_definition_key_example"; // string | The process definition key of the historic task instance.
$process_definition_key_like = "process_definition_key_like_example"; // string | The process definition key of the historic task instance, which matches the given value.
$process_definition_id = "process_definition_id_example"; // string | The process definition id of the historic task instance.
$process_definition_name = "process_definition_name_example"; // string | The process definition name of the historic task instance.
$process_definition_name_like = "process_definition_name_like_example"; // string | The process definition name of the historic task instance, which matches the given value.
$process_business_key = "process_business_key_example"; // string | The process instance business key of the historic task instance.
$process_business_key_like = "process_business_key_like_example"; // string | The process instance business key of the historic task instance that matches the given value.
$execution_id = "execution_id_example"; // string | The execution id of the historic task instance.
$task_definition_key = "task_definition_key_example"; // string | The task definition key for tasks part of a process
$task_name = "task_name_example"; // string | The task name of the historic task instance.
$task_name_like = "task_name_like_example"; // string | The task name with like operator for the historic task instance.
$task_description = "task_description_example"; // string | The task description of the historic task instance.
$task_description_like = "task_description_like_example"; // string | The task description with like operator for the historic task instance.
$task_category = "task_category_example"; // string | Select tasks with the given category. Note that this is the task category, not the category of the process definition (namespace within the BPMN Xml).
$task_delete_reason = "task_delete_reason_example"; // string | The task delete reason of the historic task instance.
$task_delete_reason_like = "task_delete_reason_like_example"; // string | The task delete reason with like operator for the historic task instance.
$task_assignee = "task_assignee_example"; // string | The assignee of the historic task instance.
$task_assignee_like = "task_assignee_like_example"; // string | The assignee with like operator for the historic task instance.
$task_owner = "task_owner_example"; // string | The owner of the historic task instance.
$task_owner_like = "task_owner_like_example"; // string | The owner with like operator for the historic task instance.
$task_involved_user = "task_involved_user_example"; // string | An involved user of the historic task instance
$task_priority = "task_priority_example"; // string | The priority of the historic task instance.
$finished = true; // bool | Indication if the historic task instance is finished.
$process_finished = true; // bool | Indication if the process instance of the historic task instance is finished.
$parent_task_id = "parent_task_id_example"; // string | An optional parent task id of the historic task instance.
$due_date = "due_date_example"; // string | Return only historic task instances that have a due date equal this date.
$due_date_after = "due_date_after_example"; // string | Return only historic task instances that have a due date after this date.
$due_date_before = "due_date_before_example"; // string | Return only historic task instances that have a due date before this date.
$without_due_date = true; // bool | Return only historic task instances that have no due-date. When false is provided as value, this parameter is ignored.
$task_completed_on = "task_completed_on_example"; // string | Return only historic task instances that have been completed on this date.
$task_completed_after = "task_completed_after_example"; // string | Return only historic task instances that have been completed after this date.
$task_completed_before = "task_completed_before_example"; // string | Return only historic task instances that have been completed before this date.
$task_created_on = "task_created_on_example"; // string | Return only historic task instances that were created on this date.
$task_created_before = "task_created_before_example"; // string | Return only historic task instances that were created before this date.
$task_created_after = "task_created_after_example"; // string | Return only historic task instances that were created after this date.
$include_task_local_variables = true; // bool | An indication if the historic task instance local variables should be returned as well.
$include_process_variables = true; // bool | An indication if the historic task instance global variables should be returned as well.
$tenant_id = "tenant_id_example"; // string | Only return historic task instances with the given tenantId.
$tenant_id_like = "tenant_id_like_example"; // string | Only return historic task instances with a tenantId like the given value.
$without_tenant_id = true; // bool | If true, only returns historic task instances without a tenantId set. If false, the withoutTenantId parameter is ignored.

try {
    $result = $apiInstance->listHistoricTaskInstances($task_id, $process_instance_id, $process_definition_key, $process_definition_key_like, $process_definition_id, $process_definition_name, $process_definition_name_like, $process_business_key, $process_business_key_like, $execution_id, $task_definition_key, $task_name, $task_name_like, $task_description, $task_description_like, $task_category, $task_delete_reason, $task_delete_reason_like, $task_assignee, $task_assignee_like, $task_owner, $task_owner_like, $task_involved_user, $task_priority, $finished, $process_finished, $parent_task_id, $due_date, $due_date_after, $due_date_before, $without_due_date, $task_completed_on, $task_completed_after, $task_completed_before, $task_created_on, $task_created_before, $task_created_after, $include_task_local_variables, $include_process_variables, $tenant_id, $tenant_id_like, $without_tenant_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->listHistoricTaskInstances: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| An id of the historic task instance. | [optional]
 **process_instance_id** | **string**| The process instance id of the historic task instance. | [optional]
 **process_definition_key** | **string**| The process definition key of the historic task instance. | [optional]
 **process_definition_key_like** | **string**| The process definition key of the historic task instance, which matches the given value. | [optional]
 **process_definition_id** | **string**| The process definition id of the historic task instance. | [optional]
 **process_definition_name** | **string**| The process definition name of the historic task instance. | [optional]
 **process_definition_name_like** | **string**| The process definition name of the historic task instance, which matches the given value. | [optional]
 **process_business_key** | **string**| The process instance business key of the historic task instance. | [optional]
 **process_business_key_like** | **string**| The process instance business key of the historic task instance that matches the given value. | [optional]
 **execution_id** | **string**| The execution id of the historic task instance. | [optional]
 **task_definition_key** | **string**| The task definition key for tasks part of a process | [optional]
 **task_name** | **string**| The task name of the historic task instance. | [optional]
 **task_name_like** | **string**| The task name with like operator for the historic task instance. | [optional]
 **task_description** | **string**| The task description of the historic task instance. | [optional]
 **task_description_like** | **string**| The task description with like operator for the historic task instance. | [optional]
 **task_category** | **string**| Select tasks with the given category. Note that this is the task category, not the category of the process definition (namespace within the BPMN Xml). | [optional]
 **task_delete_reason** | **string**| The task delete reason of the historic task instance. | [optional]
 **task_delete_reason_like** | **string**| The task delete reason with like operator for the historic task instance. | [optional]
 **task_assignee** | **string**| The assignee of the historic task instance. | [optional]
 **task_assignee_like** | **string**| The assignee with like operator for the historic task instance. | [optional]
 **task_owner** | **string**| The owner of the historic task instance. | [optional]
 **task_owner_like** | **string**| The owner with like operator for the historic task instance. | [optional]
 **task_involved_user** | **string**| An involved user of the historic task instance | [optional]
 **task_priority** | **string**| The priority of the historic task instance. | [optional]
 **finished** | **bool**| Indication if the historic task instance is finished. | [optional]
 **process_finished** | **bool**| Indication if the process instance of the historic task instance is finished. | [optional]
 **parent_task_id** | **string**| An optional parent task id of the historic task instance. | [optional]
 **due_date** | **string**| Return only historic task instances that have a due date equal this date. | [optional]
 **due_date_after** | **string**| Return only historic task instances that have a due date after this date. | [optional]
 **due_date_before** | **string**| Return only historic task instances that have a due date before this date. | [optional]
 **without_due_date** | **bool**| Return only historic task instances that have no due-date. When false is provided as value, this parameter is ignored. | [optional]
 **task_completed_on** | **string**| Return only historic task instances that have been completed on this date. | [optional]
 **task_completed_after** | **string**| Return only historic task instances that have been completed after this date. | [optional]
 **task_completed_before** | **string**| Return only historic task instances that have been completed before this date. | [optional]
 **task_created_on** | **string**| Return only historic task instances that were created on this date. | [optional]
 **task_created_before** | **string**| Return only historic task instances that were created before this date. | [optional]
 **task_created_after** | **string**| Return only historic task instances that were created after this date. | [optional]
 **include_task_local_variables** | **bool**| An indication if the historic task instance local variables should be returned as well. | [optional]
 **include_process_variables** | **bool**| An indication if the historic task instance global variables should be returned as well. | [optional]
 **tenant_id** | **string**| Only return historic task instances with the given tenantId. | [optional]
 **tenant_id_like** | **string**| Only return historic task instances with a tenantId like the given value. | [optional]
 **without_tenant_id** | **bool**| If true, only returns historic task instances without a tenantId set. If false, the withoutTenantId parameter is ignored. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **queryActivityInstances**
> \Swagger\Client\Model\DataResponse queryActivityInstances($body)

Query for historic activity instances

All supported JSON parameter fields allowed are exactly the same as the parameters found for getting a collection of historic task instances, but passed in as JSON-body arguments rather than URL-parameters to allow for more advanced querying and preventing errors with request-uri�s that are too long.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\HistoricActivityInstanceQueryRequest(); // \Swagger\Client\Model\HistoricActivityInstanceQueryRequest | 

try {
    $result = $apiInstance->queryActivityInstances($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->queryActivityInstances: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\HistoricActivityInstanceQueryRequest**](../Model/HistoricActivityInstanceQueryRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **queryHistoricDetail**
> \Swagger\Client\Model\DataResponse queryHistoricDetail($body)

Query for historic details

All supported JSON parameter fields allowed are exactly the same as the parameters found for getting a collection of historic process instances, but passed in as JSON-body arguments rather than URL-parameters to allow for more advanced querying and preventing errors with request-uri�s that are too long.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\HistoricDetailQueryRequest(); // \Swagger\Client\Model\HistoricDetailQueryRequest | 

try {
    $result = $apiInstance->queryHistoricDetail($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->queryHistoricDetail: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\HistoricDetailQueryRequest**](../Model/HistoricDetailQueryRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **queryHistoricProcessInstance**
> \Swagger\Client\Model\DataResponse queryHistoricProcessInstance($body)

Query for historic process instances

All supported JSON parameter fields allowed are exactly the same as the parameters found for getting a collection of historic process instances, but passed in as JSON-body arguments rather than URL-parameters to allow for more advanced querying and preventing errors with request-uri�s that are too long. On top of that, the query allows for filtering based on process variables. The variables property is a JSON-array containing objects with the format as described here.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\HistoricProcessInstanceQueryRequest(); // \Swagger\Client\Model\HistoricProcessInstanceQueryRequest | 

try {
    $result = $apiInstance->queryHistoricProcessInstance($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->queryHistoricProcessInstance: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\HistoricProcessInstanceQueryRequest**](../Model/HistoricProcessInstanceQueryRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **queryHistoricTaskInstance**
> \Swagger\Client\Model\DataResponse queryHistoricTaskInstance($body)

Query for historic task instances

All supported JSON parameter fields allowed are exactly the same as the parameters found for getting a collection of historic task instances, but passed in as JSON-body arguments rather than URL-parameters to allow for more advanced querying and preventing errors with request-uri�s that are too long. On top of that, the query allows for filtering based on process variables. The taskVariables and processVariables properties are JSON-arrays containing objects with the format as described here.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\HistoricTaskInstanceQueryRequest(); // \Swagger\Client\Model\HistoricTaskInstanceQueryRequest | 

try {
    $result = $apiInstance->queryHistoricTaskInstance($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->queryHistoricTaskInstance: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\HistoricTaskInstanceQueryRequest**](../Model/HistoricTaskInstanceQueryRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **queryVariableInstances**
> \Swagger\Client\Model\DataResponse queryVariableInstances($body)

Query for historic variable instances

All supported JSON parameter fields allowed are exactly the same as the parameters found for getting a collection of historic process instances, but passed in as JSON-body arguments rather than URL-parameters to allow for more advanced querying and preventing errors with request-uri�s that are too long. On top of that, the query allows for filtering based on process variables. The variables property is a JSON-array containing objects with the format as described here.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\HistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\HistoricVariableInstanceQueryRequest(); // \Swagger\Client\Model\HistoricVariableInstanceQueryRequest | 

try {
    $result = $apiInstance->queryVariableInstances($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HistoryApi->queryVariableInstances: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\HistoricVariableInstanceQueryRequest**](../Model/HistoricVariableInstanceQueryRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

