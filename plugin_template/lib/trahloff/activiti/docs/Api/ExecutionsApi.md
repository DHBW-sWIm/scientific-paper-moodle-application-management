# Swagger\Client\ExecutionsApi

All URIs are relative to *https://activiti.ganymed.me/activiti-rest/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExecutionVariable**](ExecutionsApi.md#createExecutionVariable) | **POST** /runtime/executions/{executionId}/variables | Create variables on an execution
[**createOrUpdateExecutionVariable**](ExecutionsApi.md#createOrUpdateExecutionVariable) | **PUT** /runtime/executions/{executionId}/variables | Update variables on an execution
[**deleteLocalVariables**](ExecutionsApi.md#deleteLocalVariables) | **DELETE** /runtime/executions/{executionId}/variables | Delete all variables for an execution
[**deletedExecutionVariable**](ExecutionsApi.md#deletedExecutionVariable) | **DELETE** /runtime/executions/{executionId}/variables/{variableName} | Delete a variable for an execution
[**executeExecutionAction**](ExecutionsApi.md#executeExecutionAction) | **PUT** /runtime/executions | Signal event received
[**getActiveActivities**](ExecutionsApi.md#getActiveActivities) | **GET** /runtime/executions/{executionId}/activities | Get active activities in an execution
[**getExecution**](ExecutionsApi.md#getExecution) | **GET** /runtime/executions/{executionId} | Get an execution
[**getExecutionVariable**](ExecutionsApi.md#getExecutionVariable) | **GET** /runtime/executions/{executionId}/variables/{variableName} | Get a variable for an execution
[**getExecutionVariableData**](ExecutionsApi.md#getExecutionVariableData) | **GET** /runtime/executions/{executionId}/variables/{variableName}/data | Get the binary data for an execution
[**getExecutions**](ExecutionsApi.md#getExecutions) | **GET** /runtime/executions | List of executions
[**listExecutionVariables**](ExecutionsApi.md#listExecutionVariables) | **GET** /runtime/executions/{executionId}/variables | List of variables for an execution
[**performExecutionAction**](ExecutionsApi.md#performExecutionAction) | **PUT** /runtime/executions/{executionId} | Execute an action on an execution
[**queryExecutions**](ExecutionsApi.md#queryExecutions) | **POST** /query/executions | Query executions
[**updateExecutionVariable**](ExecutionsApi.md#updateExecutionVariable) | **PUT** /runtime/executions/{executionId}/variables/{variableName} | Update a variable on an execution


# **createExecutionVariable**
> object createExecutionVariable($execution_id)

Create variables on an execution



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$execution_id = "execution_id_example"; // string | The id of the execution to create the new variable for.

try {
    $result = $apiInstance->createExecutionVariable($execution_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->createExecutionVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execution_id** | **string**| The id of the execution to create the new variable for. |

### Return type

**object**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createOrUpdateExecutionVariable**
> object createOrUpdateExecutionVariable($execution_id)

Update variables on an execution



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$execution_id = "execution_id_example"; // string | The id of the execution to the variables for.

try {
    $result = $apiInstance->createOrUpdateExecutionVariable($execution_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->createOrUpdateExecutionVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execution_id** | **string**| The id of the execution to the variables for. |

### Return type

**object**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteLocalVariables**
> deleteLocalVariables($execution_id)

Delete all variables for an execution



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$execution_id = "execution_id_example"; // string | 

try {
    $apiInstance->deleteLocalVariables($execution_id);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->deleteLocalVariables: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execution_id** | **string**|  |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deletedExecutionVariable**
> deletedExecutionVariable($execution_id, $variable_name, $scope)

Delete a variable for an execution



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$execution_id = "execution_id_example"; // string | 
$variable_name = "variable_name_example"; // string | 
$scope = "scope_example"; // string | 

try {
    $apiInstance->deletedExecutionVariable($execution_id, $variable_name, $scope);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->deletedExecutionVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execution_id** | **string**|  |
 **variable_name** | **string**|  |
 **scope** | **string**|  | [optional]

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **executeExecutionAction**
> executeExecutionAction($body)

Signal event received



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\ExecutionActionRequest(); // \Swagger\Client\Model\ExecutionActionRequest | 

try {
    $apiInstance->executeExecutionAction($body);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->executeExecutionAction: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ExecutionActionRequest**](../Model/ExecutionActionRequest.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getActiveActivities**
> string[] getActiveActivities($execution_id)

Get active activities in an execution

Returns all activities which are active in the execution and in all child-executions (and their children, recursively), if any.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$execution_id = "execution_id_example"; // string | The id of the execution to get activities for.

try {
    $result = $apiInstance->getActiveActivities($execution_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->getActiveActivities: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execution_id** | **string**| The id of the execution to get activities for. |

### Return type

**string[]**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getExecution**
> \Swagger\Client\Model\ExecutionResponse getExecution($execution_id)

Get an execution



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$execution_id = "execution_id_example"; // string | The id of the execution to get.

try {
    $result = $apiInstance->getExecution($execution_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->getExecution: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execution_id** | **string**| The id of the execution to get. |

### Return type

[**\Swagger\Client\Model\ExecutionResponse**](../Model/ExecutionResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getExecutionVariable**
> \Swagger\Client\Model\RestVariable getExecutionVariable($execution_id, $variable_name, $scope)

Get a variable for an execution



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$execution_id = "execution_id_example"; // string | The id of the execution to the variables for.
$variable_name = "variable_name_example"; // string | Name of the variable to get.
$scope = "scope_example"; // string | Either local or global. If omitted, local variable is returned (if exists). If not, a global variable is returned (if exists).

try {
    $result = $apiInstance->getExecutionVariable($execution_id, $variable_name, $scope);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->getExecutionVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execution_id** | **string**| The id of the execution to the variables for. |
 **variable_name** | **string**| Name of the variable to get. |
 **scope** | **string**| Either local or global. If omitted, local variable is returned (if exists). If not, a global variable is returned (if exists). | [optional]

### Return type

[**\Swagger\Client\Model\RestVariable**](../Model/RestVariable.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getExecutionVariableData**
> string[] getExecutionVariableData($execution_id, $variable_name, $scope)

Get the binary data for an execution



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$execution_id = "execution_id_example"; // string | 
$variable_name = "variable_name_example"; // string | 
$scope = "scope_example"; // string | 

try {
    $result = $apiInstance->getExecutionVariableData($execution_id, $variable_name, $scope);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->getExecutionVariableData: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execution_id** | **string**|  |
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

# **getExecutions**
> \Swagger\Client\Model\DataResponse getExecutions($id, $activity_id, $process_definition_key, $process_definition_id, $process_instance_id, $message_event_subscription_name, $signal_event_subscription_name, $parent_id, $tenant_id, $tenant_id_like, $without_tenant_id, $sort)

List of executions



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = "id_example"; // string | Only return models with the given version.
$activity_id = "activity_id_example"; // string | Only return executions with the given activity id.
$process_definition_key = "process_definition_key_example"; // string | Only return process instances with the given process definition key.
$process_definition_id = "process_definition_id_example"; // string | Only return process instances with the given process definition id.
$process_instance_id = "process_instance_id_example"; // string | Only return executions which are part of the process instance with the given id.
$message_event_subscription_name = "message_event_subscription_name_example"; // string | Only return executions which are subscribed to a message with the given name.
$signal_event_subscription_name = "signal_event_subscription_name_example"; // string | Only return executions which are subscribed to a signal with the given name.
$parent_id = "parent_id_example"; // string | Only return executions which are a direct child of the given execution.
$tenant_id = "tenant_id_example"; // string | Only return process instances with the given tenantId.
$tenant_id_like = "tenant_id_like_example"; // string | Only return process instances with a tenantId like the given value.
$without_tenant_id = true; // bool | If true, only returns process instances without a tenantId set. If false, the withoutTenantId parameter is ignored.
$sort = "sort_example"; // string | Property to sort on, to be used together with the order.

try {
    $result = $apiInstance->getExecutions($id, $activity_id, $process_definition_key, $process_definition_id, $process_instance_id, $message_event_subscription_name, $signal_event_subscription_name, $parent_id, $tenant_id, $tenant_id_like, $without_tenant_id, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->getExecutions: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Only return models with the given version. | [optional]
 **activity_id** | **string**| Only return executions with the given activity id. | [optional]
 **process_definition_key** | **string**| Only return process instances with the given process definition key. | [optional]
 **process_definition_id** | **string**| Only return process instances with the given process definition id. | [optional]
 **process_instance_id** | **string**| Only return executions which are part of the process instance with the given id. | [optional]
 **message_event_subscription_name** | **string**| Only return executions which are subscribed to a message with the given name. | [optional]
 **signal_event_subscription_name** | **string**| Only return executions which are subscribed to a signal with the given name. | [optional]
 **parent_id** | **string**| Only return executions which are a direct child of the given execution. | [optional]
 **tenant_id** | **string**| Only return process instances with the given tenantId. | [optional]
 **tenant_id_like** | **string**| Only return process instances with a tenantId like the given value. | [optional]
 **without_tenant_id** | **bool**| If true, only returns process instances without a tenantId set. If false, the withoutTenantId parameter is ignored. | [optional]
 **sort** | **string**| Property to sort on, to be used together with the order. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listExecutionVariables**
> \Swagger\Client\Model\RestVariable[] listExecutionVariables($execution_id, $scope)

List of variables for an execution



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$execution_id = "execution_id_example"; // string | The id of the execution to the variables for.
$scope = "scope_example"; // string | Either local or global. If omitted, both local and global scoped variables are returned.

try {
    $result = $apiInstance->listExecutionVariables($execution_id, $scope);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->listExecutionVariables: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execution_id** | **string**| The id of the execution to the variables for. |
 **scope** | **string**| Either local or global. If omitted, both local and global scoped variables are returned. | [optional]

### Return type

[**\Swagger\Client\Model\RestVariable[]**](../Model/RestVariable.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **performExecutionAction**
> \Swagger\Client\Model\ExecutionResponse performExecutionAction($execution_id, $body)

Execute an action on an execution

## Request body (signal an execution):   ```JSON {   \"action\":\"signal\" } ```   Both a variables and transientVariables property is accepted with following structure ```JSON {   \"action\":\"signal\",   \"variables\" : [     {       \"name\": \"myVar\",       \"value\": \"someValue\"     }   ] }```   ## Request body (signal event received for execution)   ```JSON {   \"action\":\"signal\" } ```   Notifies the execution that a signal event has been received, requires a signalName parameter. Optional variables can be passed that are set on the execution before the action is executed.## Request body (signal event received for execution)   ```JSON {   \"action\":\"messageEventReceived\",   \"messageName\":\"myMessage\"   \"variables\": [  ] } ```

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$execution_id = "execution_id_example"; // string | The id of the execution to execute action on.
$body = new \Swagger\Client\Model\ExecutionActionRequest(); // \Swagger\Client\Model\ExecutionActionRequest | 

try {
    $result = $apiInstance->performExecutionAction($execution_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->performExecutionAction: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execution_id** | **string**| The id of the execution to execute action on. |
 **body** | [**\Swagger\Client\Model\ExecutionActionRequest**](../Model/ExecutionActionRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\ExecutionResponse**](../Model/ExecutionResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **queryExecutions**
> \Swagger\Client\Model\DataResponse queryExecutions($body)

Query executions

The request body can contain all possible filters that can be used in the List executions URL query. On top of these, it�s possible to provide an array of variables and processInstanceVariables to include in the query, with their format described here.  The general paging and sorting query-parameters can be used for this URL.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\ExecutionQueryRequest(); // \Swagger\Client\Model\ExecutionQueryRequest | 

try {
    $result = $apiInstance->queryExecutions($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->queryExecutions: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ExecutionQueryRequest**](../Model/ExecutionQueryRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateExecutionVariable**
> \Swagger\Client\Model\RestVariable updateExecutionVariable($execution_id, $variable_name)

Update a variable on an execution



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ExecutionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$execution_id = "execution_id_example"; // string | The id of the execution to create the new variable for.
$variable_name = "variable_name_example"; // string | The name of the variable to update.

try {
    $result = $apiInstance->updateExecutionVariable($execution_id, $variable_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExecutionsApi->updateExecutionVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execution_id** | **string**| The id of the execution to create the new variable for. |
 **variable_name** | **string**| The name of the variable to update. |

### Return type

[**\Swagger\Client\Model\RestVariable**](../Model/RestVariable.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

