# Swagger\Client\ProcessInstancesApi

All URIs are relative to *https://activiti.ganymed.me/activiti-rest/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrUpdateProcessVariable**](ProcessInstancesApi.md#createOrUpdateProcessVariable) | **PUT** /runtime/process-instances/{processInstanceId}/variables | Update a single or binary variable or multiple variables on a process instance
[**createProcessInstance**](ProcessInstancesApi.md#createProcessInstance) | **POST** /runtime/process-instances | Start a process instance
[**createProcessInstanceIdentityLinks**](ProcessInstancesApi.md#createProcessInstanceIdentityLinks) | **POST** /runtime/process-instances/{processInstanceId}/identitylinks | Add an involved user to a process instance
[**createProcessInstanceVariable**](ProcessInstancesApi.md#createProcessInstanceVariable) | **POST** /runtime/process-instances/{processInstanceId}/variables | Create variables or new binary variable on a process instance
[**deleteLocalProcessVariable**](ProcessInstancesApi.md#deleteLocalProcessVariable) | **DELETE** /runtime/process-instances/{processInstanceId}/variables | Delete all variables
[**deleteProcessInstance**](ProcessInstancesApi.md#deleteProcessInstance) | **DELETE** /runtime/process-instances/{processInstanceId} | Delete a process instance
[**deleteProcessInstanceIdentityLinks**](ProcessInstancesApi.md#deleteProcessInstanceIdentityLinks) | **DELETE** /runtime/process-instances/{processInstanceId}/identitylinks/users/{identityId}/{type} | Remove an involved user to from process instance
[**deleteProcessInstanceVariable**](ProcessInstancesApi.md#deleteProcessInstanceVariable) | **DELETE** /runtime/process-instances/{processInstanceId}/variables/{variableName} | Delete a variable
[**getProcessInstance**](ProcessInstancesApi.md#getProcessInstance) | **GET** /runtime/process-instances/{processInstanceId} | Get a process instance
[**getProcessInstanceDiagram**](ProcessInstancesApi.md#getProcessInstanceDiagram) | **GET** /runtime/process-instances/{processInstanceId}/diagram | Get diagram for a process instance
[**getProcessInstanceIdentityLinks**](ProcessInstancesApi.md#getProcessInstanceIdentityLinks) | **GET** /runtime/process-instances/{processInstanceId}/identitylinks/users/{identityId}/{type} | Get a specific involved people from process instance
[**getProcessInstanceVariable**](ProcessInstancesApi.md#getProcessInstanceVariable) | **GET** /runtime/process-instances/{processInstanceId}/variables/{variableName} | Get a variable for a process instance
[**getProcessInstanceVariableData**](ProcessInstancesApi.md#getProcessInstanceVariableData) | **GET** /runtime/process-instances/{processInstanceId}/variables/{variableName}/data | Get the binary data for a variable
[**getProcessInstances**](ProcessInstancesApi.md#getProcessInstances) | **GET** /runtime/process-instances | List of process instances
[**getVariables**](ProcessInstancesApi.md#getVariables) | **GET** /runtime/process-instances/{processInstanceId}/variables | List of variables for a process instance
[**listProcessInstanceIdentityLinks**](ProcessInstancesApi.md#listProcessInstanceIdentityLinks) | **GET** /runtime/process-instances/{processInstanceId}/identitylinks | Get involved people for process instance
[**performProcessInstanceAction**](ProcessInstancesApi.md#performProcessInstanceAction) | **PUT** /runtime/process-instances/{processInstanceId} | Activate or suspend a process instance
[**queryProcessInstances**](ProcessInstancesApi.md#queryProcessInstances) | **POST** /query/process-instances | Query process instances
[**updateProcessInstanceVariable**](ProcessInstancesApi.md#updateProcessInstanceVariable) | **PUT** /runtime/process-instances/{processInstanceId}/variables/{variableName} | Update a single variable on a process instance


# **createOrUpdateProcessVariable**
> object createOrUpdateProcessVariable($process_instance_id)

Update a single or binary variable or multiple variables on a process instance

## Update multiples variables   ```JSON [    {       \"name\":\"intProcVar\"       \"type\":\"integer\"       \"value\":123    },     ... ] ```    Any number of variables can be passed into the request body array. More information about the variable format can be found in the REST variables section. Note that scope is ignored, only local variables can be set in a process instance.   ## Update a single variable  ```JSON  {     \"name\":\"intProcVar\"     \"type\":\"integer\"     \"value\":123  } ```   ##  Update an existing binary variable     The request should be of type multipart/form-data. There should be a single file-part included with the binary value of the variable. On top of that, the following additional form-fields can be present:  name: Required name of the variable.  type: Type of variable that is created. If omitted, binary is assumed and the binary data in the request will be stored as an array of bytes.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance to create the new variable for.

try {
    $result = $apiInstance->createOrUpdateProcessVariable($process_instance_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->createOrUpdateProcessVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance to create the new variable for. |

### Return type

**object**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createProcessInstance**
> \Swagger\Client\Model\ProcessInstanceResponse createProcessInstance($body)

Start a process instance

## Request body (start by process definition id)  ```JSON  {    \"processDefinitionId\":\"oneTaskProcess:1:158\",    \"businessKey\":\"myBusinessKey\",    \"variables\": [       {         \"name\":\"myVar\",         \"value\":\"This is a variable\",       }    ] }```  ## Request body (start by process definition key)  ```JSON  {    \"processDefinitionKey\":\"oneTaskProcess\",    \"businessKey\":\"myBusinessKey\",    \"tenantId\": \"tenant1\",    \"variables\": [       {         \"name\":\"myVar\",         \"value\":\"This is a variable\",       }    ] }```  ## Request body (start by message)  ```JSON {    \"message\":\"newOrderMessage\",    \"businessKey\":\"myBusinessKey\",    \"tenantId\": \"tenant1\",    \"variables\": [       {         \"name\":\"myVar\",         \"value\":\"This is a variable\",       }    ] }```  Note that also a *transientVariables* property is accepted as part of this json, that follows the same structure as the *variables* property.  Only one of *processDefinitionId*, *processDefinitionKey* or *message* can be used in the request body. Parameters *businessKey*, *variables* and *tenantId* are optional. If tenantId is omitted, the default tenant will be used. More information about the variable format can be found in the REST variables section. Note that the variable-scope that is supplied is ignored, process-variables are always local.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\ProcessInstanceCreateRequest(); // \Swagger\Client\Model\ProcessInstanceCreateRequest | 

try {
    $result = $apiInstance->createProcessInstance($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->createProcessInstance: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ProcessInstanceCreateRequest**](../Model/ProcessInstanceCreateRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\ProcessInstanceResponse**](../Model/ProcessInstanceResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createProcessInstanceIdentityLinks**
> \Swagger\Client\Model\RestIdentityLink createProcessInstanceIdentityLinks($process_instance_id, $body)

Add an involved user to a process instance

Note that the groupId in Response Body will always be null, as it�s only possible to involve users with a process-instance.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance to the links for.
$body = new \Swagger\Client\Model\RestIdentityLink(); // \Swagger\Client\Model\RestIdentityLink | 

try {
    $result = $apiInstance->createProcessInstanceIdentityLinks($process_instance_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->createProcessInstanceIdentityLinks: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance to the links for. |
 **body** | [**\Swagger\Client\Model\RestIdentityLink**](../Model/RestIdentityLink.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\RestIdentityLink**](../Model/RestIdentityLink.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createProcessInstanceVariable**
> object createProcessInstanceVariable($process_instance_id)

Create variables or new binary variable on a process instance

## Update multiples variables   ```JSON [    {       \"name\":\"intProcVar\"       \"type\":\"integer\"       \"value\":123    },     ... ] ```    Any number of variables can be passed into the request body array. More information about the variable format can be found in the REST variables section. Note that scope is ignored, only local variables can be set in a process instance.   The request should be of type multipart/form-data. There should be a single file-part included with the binary value of the variable. On top of that, the following additional form-fields can be present:  name: Required name of the variable.  type: Type of variable that is created. If omitted, binary is assumed and the binary data in the request will be stored as an array of bytes.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance to create the new variable for

try {
    $result = $apiInstance->createProcessInstanceVariable($process_instance_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->createProcessInstanceVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance to create the new variable for |

### Return type

**object**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteLocalProcessVariable**
> deleteLocalProcessVariable($process_instance_id)

Delete all variables



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | 

try {
    $apiInstance->deleteLocalProcessVariable($process_instance_id);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->deleteLocalProcessVariable: ', $e->getMessage(), PHP_EOL;
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

# **deleteProcessInstance**
> deleteProcessInstance($process_instance_id, $delete_reason)

Delete a process instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance to delete.
$delete_reason = "delete_reason_example"; // string | 

try {
    $apiInstance->deleteProcessInstance($process_instance_id, $delete_reason);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->deleteProcessInstance: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance to delete. |
 **delete_reason** | **string**|  | [optional]

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteProcessInstanceIdentityLinks**
> deleteProcessInstanceIdentityLinks($process_instance_id, $identity_id, $type)

Remove an involved user to from process instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance.
$identity_id = "identity_id_example"; // string | The id of the user to delete link for.
$type = "type_example"; // string | Type of link to delete.

try {
    $apiInstance->deleteProcessInstanceIdentityLinks($process_instance_id, $identity_id, $type);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->deleteProcessInstanceIdentityLinks: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance. |
 **identity_id** | **string**| The id of the user to delete link for. |
 **type** | **string**| Type of link to delete. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteProcessInstanceVariable**
> deleteProcessInstanceVariable($process_instance_id, $variable_name, $scope)

Delete a variable



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | 
$variable_name = "variable_name_example"; // string | 
$scope = "scope_example"; // string | 

try {
    $apiInstance->deleteProcessInstanceVariable($process_instance_id, $variable_name, $scope);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->deleteProcessInstanceVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**|  |
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

# **getProcessInstance**
> \Swagger\Client\Model\ProcessInstanceResponse getProcessInstance($process_instance_id)

Get a process instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance to get.

try {
    $result = $apiInstance->getProcessInstance($process_instance_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->getProcessInstance: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance to get. |

### Return type

[**\Swagger\Client\Model\ProcessInstanceResponse**](../Model/ProcessInstanceResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getProcessInstanceDiagram**
> string[] getProcessInstanceDiagram($process_instance_id)

Get diagram for a process instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance to get the diagram for.

try {
    $result = $apiInstance->getProcessInstanceDiagram($process_instance_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->getProcessInstanceDiagram: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance to get the diagram for. |

### Return type

**string[]**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getProcessInstanceIdentityLinks**
> \Swagger\Client\Model\RestIdentityLink getProcessInstanceIdentityLinks($process_instance_id, $identity_id, $type)

Get a specific involved people from process instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance to get.
$identity_id = "identity_id_example"; // string | 
$type = "type_example"; // string | 

try {
    $result = $apiInstance->getProcessInstanceIdentityLinks($process_instance_id, $identity_id, $type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->getProcessInstanceIdentityLinks: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance to get. |
 **identity_id** | **string**|  |
 **type** | **string**|  |

### Return type

[**\Swagger\Client\Model\RestIdentityLink**](../Model/RestIdentityLink.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getProcessInstanceVariable**
> \Swagger\Client\Model\RestVariable getProcessInstanceVariable($process_instance_id, $variable_name, $scope)

Get a variable for a process instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance to the variables for.
$variable_name = "variable_name_example"; // string | Name of the variable to get.
$scope = "scope_example"; // string | 

try {
    $result = $apiInstance->getProcessInstanceVariable($process_instance_id, $variable_name, $scope);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->getProcessInstanceVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance to the variables for. |
 **variable_name** | **string**| Name of the variable to get. |
 **scope** | **string**|  | [optional]

### Return type

[**\Swagger\Client\Model\RestVariable**](../Model/RestVariable.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getProcessInstanceVariableData**
> string[] getProcessInstanceVariableData($process_instance_id, $variable_name, $scope)

Get the binary data for a variable



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | 
$variable_name = "variable_name_example"; // string | 
$scope = "scope_example"; // string | 

try {
    $result = $apiInstance->getProcessInstanceVariableData($process_instance_id, $variable_name, $scope);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->getProcessInstanceVariableData: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**|  |
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

# **getProcessInstances**
> \Swagger\Client\Model\DataResponse getProcessInstances($id, $process_definition_key, $process_definition_id, $business_key, $involved_user, $suspended, $super_process_instance_id, $sub_process_instance_id, $exclude_subprocesses, $include_process_variables, $tenant_id, $tenant_id_like, $without_tenant_id, $sort)

List of process instances



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = "id_example"; // string | Only return models with the given version.
$process_definition_key = "process_definition_key_example"; // string | Only return process instances with the given process definition key.
$process_definition_id = "process_definition_id_example"; // string | Only return process instances with the given process definition id.
$business_key = "business_key_example"; // string | Only return process instances with the given businessKey.
$involved_user = "involved_user_example"; // string | Only return process instances in which the given user is involved.
$suspended = true; // bool | If true, only return process instance which are suspended. If false, only return process instances which are not suspended (active).
$super_process_instance_id = "super_process_instance_id_example"; // string | Only return process instances which have the given super process-instance id (for processes that have a call-activities).
$sub_process_instance_id = "sub_process_instance_id_example"; // string | Only return process instances which have the given sub process-instance id (for processes started as a call-activity).
$exclude_subprocesses = true; // bool | Return only process instances which aren�t sub processes.
$include_process_variables = true; // bool | Indication to include process variables in the result.
$tenant_id = "tenant_id_example"; // string | Only return process instances with the given tenantId.
$tenant_id_like = "tenant_id_like_example"; // string | Only return process instances with a tenantId like the given value.
$without_tenant_id = true; // bool | If true, only returns process instances without a tenantId set. If false, the withoutTenantId parameter is ignored.
$sort = "sort_example"; // string | Property to sort on, to be used together with the order.

try {
    $result = $apiInstance->getProcessInstances($id, $process_definition_key, $process_definition_id, $business_key, $involved_user, $suspended, $super_process_instance_id, $sub_process_instance_id, $exclude_subprocesses, $include_process_variables, $tenant_id, $tenant_id_like, $without_tenant_id, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->getProcessInstances: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Only return models with the given version. | [optional]
 **process_definition_key** | **string**| Only return process instances with the given process definition key. | [optional]
 **process_definition_id** | **string**| Only return process instances with the given process definition id. | [optional]
 **business_key** | **string**| Only return process instances with the given businessKey. | [optional]
 **involved_user** | **string**| Only return process instances in which the given user is involved. | [optional]
 **suspended** | **bool**| If true, only return process instance which are suspended. If false, only return process instances which are not suspended (active). | [optional]
 **super_process_instance_id** | **string**| Only return process instances which have the given super process-instance id (for processes that have a call-activities). | [optional]
 **sub_process_instance_id** | **string**| Only return process instances which have the given sub process-instance id (for processes started as a call-activity). | [optional]
 **exclude_subprocesses** | **bool**| Return only process instances which aren�t sub processes. | [optional]
 **include_process_variables** | **bool**| Indication to include process variables in the result. | [optional]
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

# **getVariables**
> \Swagger\Client\Model\RestVariable[] getVariables($process_instance_id, $scope)

List of variables for a process instance

In case the variable is a binary variable or serializable, the valueUrl points to an URL to fetch the raw value. If it�s a plain variable, the value is present in the response. Note that only local scoped variables are returned, as there is no global scope for process-instance variables.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance to the variables for.
$scope = "scope_example"; // string | 

try {
    $result = $apiInstance->getVariables($process_instance_id, $scope);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->getVariables: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance to the variables for. |
 **scope** | **string**|  | [optional]

### Return type

[**\Swagger\Client\Model\RestVariable[]**](../Model/RestVariable.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listProcessInstanceIdentityLinks**
> \Swagger\Client\Model\RestIdentityLink[] listProcessInstanceIdentityLinks($process_instance_id)

Get involved people for process instance

Note that the groupId in Response Body will always be null, as it�s only possible to involve users with a process-instance.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance to the links for.

try {
    $result = $apiInstance->listProcessInstanceIdentityLinks($process_instance_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->listProcessInstanceIdentityLinks: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance to the links for. |

### Return type

[**\Swagger\Client\Model\RestIdentityLink[]**](../Model/RestIdentityLink.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **performProcessInstanceAction**
> \Swagger\Client\Model\ProcessInstanceResponse performProcessInstanceAction($process_instance_id, $body)

Activate or suspend a process instance

## Activate a process instance   ```JSON {   \"action\" : \"suspend\" } ```   ## Suspend a process instance   ```JSON {   \"action\" : \"activate\" } ```

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance to activate/suspend.
$body = new \Swagger\Client\Model\ProcessInstanceActionRequest(); // \Swagger\Client\Model\ProcessInstanceActionRequest | 

try {
    $result = $apiInstance->performProcessInstanceAction($process_instance_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->performProcessInstanceAction: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance to activate/suspend. |
 **body** | [**\Swagger\Client\Model\ProcessInstanceActionRequest**](../Model/ProcessInstanceActionRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\ProcessInstanceResponse**](../Model/ProcessInstanceResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **queryProcessInstances**
> \Swagger\Client\Model\DataResponse queryProcessInstances($body)

Query process instances

The request body can contain all possible filters that can be used in the List process instances URL query. On top of these, it�s possible to provide an array of variables to include in the query, with their format described here.  The general paging and sorting query-parameters can be used for this URL.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\ProcessInstanceQueryRequest(); // \Swagger\Client\Model\ProcessInstanceQueryRequest | 

try {
    $result = $apiInstance->queryProcessInstances($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->queryProcessInstances: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ProcessInstanceQueryRequest**](../Model/ProcessInstanceQueryRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateProcessInstanceVariable**
> \Swagger\Client\Model\RestVariable updateProcessInstanceVariable($process_instance_id, $variable_name)

Update a single variable on a process instance



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_instance_id = "process_instance_id_example"; // string | The id of the process instance to the variables for.
$variable_name = "variable_name_example"; // string | Name of the variable to get.

try {
    $result = $apiInstance->updateProcessInstanceVariable($process_instance_id, $variable_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessInstancesApi->updateProcessInstanceVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_instance_id** | **string**| The id of the process instance to the variables for. |
 **variable_name** | **string**| Name of the variable to get. |

### Return type

[**\Swagger\Client\Model\RestVariable**](../Model/RestVariable.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

