# Swagger\Client\ProcessDefinitionsApi

All URIs are relative to *https://activiti.ganymed.me/activiti-rest/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIdentityLink**](ProcessDefinitionsApi.md#createIdentityLink) | **POST** /repository/process-definitions/{processDefinitionId}/identitylinks | Add a candidate starter to a process definition
[**deleteIdentityLink**](ProcessDefinitionsApi.md#deleteIdentityLink) | **DELETE** /repository/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId} | Delete a candidate starter from a process definition
[**executeProcessDefinitionAction**](ProcessDefinitionsApi.md#executeProcessDefinitionAction) | **PUT** /repository/process-definitions/{processDefinitionId} | Execute actions for a process definition (Update category, Suspend or Activate)
[**getBpmnModelResource**](ProcessDefinitionsApi.md#getBpmnModelResource) | **GET** /repository/process-definitions/{processDefinitionId}/model | Get a process definition BPMN model
[**getIdentityLink**](ProcessDefinitionsApi.md#getIdentityLink) | **GET** /repository/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId} | Get a candidate starter from a process definition
[**getIdentityLinks**](ProcessDefinitionsApi.md#getIdentityLinks) | **GET** /repository/process-definitions/{processDefinitionId}/identitylinks | Get all candidate starters for a process-definition
[**getModelResource**](ProcessDefinitionsApi.md#getModelResource) | **GET** /repository/process-definitions/{processDefinitionId}/image | Get a process definition image
[**getProcessDefinition**](ProcessDefinitionsApi.md#getProcessDefinition) | **GET** /repository/process-definitions/{processDefinitionId} | Get a process definition
[**getProcessDefinitionResource**](ProcessDefinitionsApi.md#getProcessDefinitionResource) | **GET** /repository/process-definitions/{processDefinitionId}/resourcedata | Get a process definition resource content
[**getProcessDefinitions**](ProcessDefinitionsApi.md#getProcessDefinitions) | **GET** /repository/process-definitions | List of process definitions


# **createIdentityLink**
> \Swagger\Client\Model\RestIdentityLink createIdentityLink($process_definition_id, $body)

Add a candidate starter to a process definition

## For a User   ```JSON {   \"user\" : \"kermit\" } ```  ## For a Group   ```JSON {   \"groupId\" : \"sales\" } ```

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessDefinitionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_definition_id = "process_definition_id_example"; // string | The id of the process definition.
$body = new \Swagger\Client\Model\RestIdentityLink(); // \Swagger\Client\Model\RestIdentityLink | 

try {
    $result = $apiInstance->createIdentityLink($process_definition_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessDefinitionsApi->createIdentityLink: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_definition_id** | **string**| The id of the process definition. |
 **body** | [**\Swagger\Client\Model\RestIdentityLink**](../Model/RestIdentityLink.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\RestIdentityLink**](../Model/RestIdentityLink.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteIdentityLink**
> deleteIdentityLink($process_definition_id, $family, $identity_id)

Delete a candidate starter from a process definition



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessDefinitionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_definition_id = "process_definition_id_example"; // string | The id of the process definition.
$family = "family_example"; // string | Either users or groups, depending on the type of identity link.
$identity_id = "identity_id_example"; // string | Either the user or group of the identity to remove as candidate starter.

try {
    $apiInstance->deleteIdentityLink($process_definition_id, $family, $identity_id);
} catch (Exception $e) {
    echo 'Exception when calling ProcessDefinitionsApi->deleteIdentityLink: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_definition_id** | **string**| The id of the process definition. |
 **family** | **string**| Either users or groups, depending on the type of identity link. |
 **identity_id** | **string**| Either the user or group of the identity to remove as candidate starter. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **executeProcessDefinitionAction**
> \Swagger\Client\Model\ProcessDefinitionResponse executeProcessDefinitionAction($process_definition_id, $body)

Execute actions for a process definition (Update category, Suspend or Activate)

## Update category for a process definition   ```JSON {   \"category\" : \"updatedcategory\" } ```   ## Suspend a process definition  ```JSON  {   \"action\" : \"suspend\",   \"includeProcessInstances\" : \"false\",   \"date\" : \"2013-04-15T00:42:12Z\" } ```   ## Activate a process definition  ```JSON  {   \"action\" : \"activate\",   \"includeProcessInstances\" : \"true\",   \"date\" : \"2013-04-15T00:42:12Z\" } ```

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessDefinitionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_definition_id = "process_definition_id_example"; // string | 
$body = new \Swagger\Client\Model\ProcessDefinitionActionRequest(); // \Swagger\Client\Model\ProcessDefinitionActionRequest | 

try {
    $result = $apiInstance->executeProcessDefinitionAction($process_definition_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessDefinitionsApi->executeProcessDefinitionAction: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_definition_id** | **string**|  |
 **body** | [**\Swagger\Client\Model\ProcessDefinitionActionRequest**](../Model/ProcessDefinitionActionRequest.md)|  |

### Return type

[**\Swagger\Client\Model\ProcessDefinitionResponse**](../Model/ProcessDefinitionResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getBpmnModelResource**
> \Swagger\Client\Model\BpmnModel getBpmnModelResource($process_definition_id)

Get a process definition BPMN model



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessDefinitionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_definition_id = "process_definition_id_example"; // string | The id of the process definition to get the model for.

try {
    $result = $apiInstance->getBpmnModelResource($process_definition_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessDefinitionsApi->getBpmnModelResource: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_definition_id** | **string**| The id of the process definition to get the model for. |

### Return type

[**\Swagger\Client\Model\BpmnModel**](../Model/BpmnModel.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getIdentityLink**
> \Swagger\Client\Model\RestIdentityLink getIdentityLink($process_definition_id, $family, $identity_id)

Get a candidate starter from a process definition



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessDefinitionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_definition_id = "process_definition_id_example"; // string | The id of the process definition.
$family = "family_example"; // string | Either users or groups, depending on the type of identity link.
$identity_id = "identity_id_example"; // string | Either the user or group of the identity to get as candidate starter.

try {
    $result = $apiInstance->getIdentityLink($process_definition_id, $family, $identity_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessDefinitionsApi->getIdentityLink: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_definition_id** | **string**| The id of the process definition. |
 **family** | **string**| Either users or groups, depending on the type of identity link. |
 **identity_id** | **string**| Either the user or group of the identity to get as candidate starter. |

### Return type

[**\Swagger\Client\Model\RestIdentityLink**](../Model/RestIdentityLink.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getIdentityLinks**
> \Swagger\Client\Model\RestIdentityLink[] getIdentityLinks($process_definition_id)

Get all candidate starters for a process-definition



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessDefinitionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_definition_id = "process_definition_id_example"; // string | The id of the process definition to get the identity links for.

try {
    $result = $apiInstance->getIdentityLinks($process_definition_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessDefinitionsApi->getIdentityLinks: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_definition_id** | **string**| The id of the process definition to get the identity links for. |

### Return type

[**\Swagger\Client\Model\RestIdentityLink[]**](../Model/RestIdentityLink.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getModelResource**
> string[] getModelResource($process_definition_id)

Get a process definition image



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessDefinitionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_definition_id = "process_definition_id_example"; // string | 

try {
    $result = $apiInstance->getModelResource($process_definition_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessDefinitionsApi->getModelResource: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_definition_id** | **string**|  |

### Return type

**string[]**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getProcessDefinition**
> \Swagger\Client\Model\ProcessDefinitionResponse getProcessDefinition($process_definition_id)

Get a process definition



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessDefinitionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_definition_id = "process_definition_id_example"; // string | The id of the process definition to get.

try {
    $result = $apiInstance->getProcessDefinition($process_definition_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessDefinitionsApi->getProcessDefinition: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_definition_id** | **string**| The id of the process definition to get. |

### Return type

[**\Swagger\Client\Model\ProcessDefinitionResponse**](../Model/ProcessDefinitionResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getProcessDefinitionResource**
> string[] getProcessDefinitionResource($process_definition_id)

Get a process definition resource content



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessDefinitionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_definition_id = "process_definition_id_example"; // string | The id of the process definition to get the resource data for.

try {
    $result = $apiInstance->getProcessDefinitionResource($process_definition_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessDefinitionsApi->getProcessDefinitionResource: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_definition_id** | **string**| The id of the process definition to get the resource data for. |

### Return type

**string[]**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getProcessDefinitions**
> \Swagger\Client\Model\DataResponse getProcessDefinitions($version, $name, $name_like, $key, $key_like, $resource_name, $resource_name_like, $category, $category_like, $category_not_equals, $deployment_id, $startable_by_user, $latest, $suspended, $sort)

List of process definitions



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ProcessDefinitionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$version = 56; // int | Only return process definitions with the given version.
$name = "name_example"; // string | Only return process definitions with the given name.
$name_like = "name_like_example"; // string | Only return process definitions with a name like the given name.
$key = "key_example"; // string | Only return process definitions with the given key.
$key_like = "key_like_example"; // string | Only return process definitions with a name like the given key.
$resource_name = "resource_name_example"; // string | Only return process definitions with the given resource name.
$resource_name_like = "resource_name_like_example"; // string | Only return process definitions with a name like the given resource name.
$category = "category_example"; // string | Only return process definitions with the given category.
$category_like = "category_like_example"; // string | Only return process definitions with a category like the given name.
$category_not_equals = "category_not_equals_example"; // string | Only return process definitions which don�t have the given category.
$deployment_id = "deployment_id_example"; // string | Only return process definitions with the given category.
$startable_by_user = "startable_by_user_example"; // string | Only return process definitions which are part of a deployment with the given id.
$latest = true; // bool | Only return the latest process definition versions. Can only be used together with key and keyLike parameters, using any other parameter will result in a 400-response.
$suspended = true; // bool | If true, only returns process definitions which are suspended. If false, only active process definitions (which are not suspended) are returned.
$sort = "sort_example"; // string | Property to sort on, to be used together with the order.

try {
    $result = $apiInstance->getProcessDefinitions($version, $name, $name_like, $key, $key_like, $resource_name, $resource_name_like, $category, $category_like, $category_not_equals, $deployment_id, $startable_by_user, $latest, $suspended, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcessDefinitionsApi->getProcessDefinitions: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **int**| Only return process definitions with the given version. | [optional]
 **name** | **string**| Only return process definitions with the given name. | [optional]
 **name_like** | **string**| Only return process definitions with a name like the given name. | [optional]
 **key** | **string**| Only return process definitions with the given key. | [optional]
 **key_like** | **string**| Only return process definitions with a name like the given key. | [optional]
 **resource_name** | **string**| Only return process definitions with the given resource name. | [optional]
 **resource_name_like** | **string**| Only return process definitions with a name like the given resource name. | [optional]
 **category** | **string**| Only return process definitions with the given category. | [optional]
 **category_like** | **string**| Only return process definitions with a category like the given name. | [optional]
 **category_not_equals** | **string**| Only return process definitions which don�t have the given category. | [optional]
 **deployment_id** | **string**| Only return process definitions with the given category. | [optional]
 **startable_by_user** | **string**| Only return process definitions which are part of a deployment with the given id. | [optional]
 **latest** | **bool**| Only return the latest process definition versions. Can only be used together with key and keyLike parameters, using any other parameter will result in a 400-response. | [optional]
 **suspended** | **bool**| If true, only returns process definitions which are suspended. If false, only active process definitions (which are not suspended) are returned. | [optional]
 **sort** | **string**| Property to sort on, to be used together with the order. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

