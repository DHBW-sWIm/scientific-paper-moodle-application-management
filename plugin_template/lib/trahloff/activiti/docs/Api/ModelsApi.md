# Swagger\Client\ModelsApi

All URIs are relative to *https://activiti.ganymed.me/activiti-rest/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createModel**](ModelsApi.md#createModel) | **POST** /repository/models | Create a model
[**deleteModel**](ModelsApi.md#deleteModel) | **DELETE** /repository/models/{modelId} | Delete a model
[**getModel**](ModelsApi.md#getModel) | **GET** /repository/models/{modelId} | Get a model
[**getModels**](ModelsApi.md#getModels) | **GET** /repository/models | Get a list of models
[**updateModel**](ModelsApi.md#updateModel) | **PUT** /repository/models/{modelId} | Update a model


# **createModel**
> \Swagger\Client\Model\ModelResponse createModel($body)

Create a model

All request values are optional. For example, you can only include the name attribute in the request body JSON-object, only setting the name of the model, leaving all other fields null.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ModelsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\ModelRequest(); // \Swagger\Client\Model\ModelRequest | 

try {
    $result = $apiInstance->createModel($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ModelsApi->createModel: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ModelRequest**](../Model/ModelRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\ModelResponse**](../Model/ModelResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteModel**
> deleteModel($model_id)

Delete a model



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ModelsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$model_id = "model_id_example"; // string | The id of the model to delete.

try {
    $apiInstance->deleteModel($model_id);
} catch (Exception $e) {
    echo 'Exception when calling ModelsApi->deleteModel: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **string**| The id of the model to delete. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getModel**
> \Swagger\Client\Model\ModelResponse getModel($model_id)

Get a model



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ModelsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$model_id = "model_id_example"; // string | The id of the model to get.

try {
    $result = $apiInstance->getModel($model_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ModelsApi->getModel: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **string**| The id of the model to get. |

### Return type

[**\Swagger\Client\Model\ModelResponse**](../Model/ModelResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getModels**
> \Swagger\Client\Model\DataResponse getModels($id, $category, $category_like, $category_not_equals, $name, $name_like, $key, $deployment_id, $version, $latest_version, $deployed, $tenant_id, $tenant_id_like, $without_tenant_id, $sort)

Get a list of models



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ModelsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = "id_example"; // string | Only return models with the given version.
$category = "category_example"; // string | Only return models with the given category.
$category_like = "category_like_example"; // string | Only return models with a category like the given name.
$category_not_equals = "category_not_equals_example"; // string | Only return models which don�t have the given category.
$name = "name_example"; // string | Only return models with the given name.
$name_like = "name_like_example"; // string | Only return models with a name like the given name.
$key = "key_example"; // string | Only return models with the given key.
$deployment_id = "deployment_id_example"; // string | Only return models with the given category.
$version = 56; // int | Only return models with the given version.
$latest_version = true; // bool | If true, only return models which are the latest version. Best used in combination with key. If false is passed in as value, this is ignored and all versions are returned.
$deployed = true; // bool | If true, only deployed models are returned. If false, only undeployed models are returned (deploymentId is null).
$tenant_id = "tenant_id_example"; // string | Only return models with the given tenantId.
$tenant_id_like = "tenant_id_like_example"; // string | Only return models with a tenantId like the given value.
$without_tenant_id = true; // bool | If true, only returns models without a tenantId set. If false, the withoutTenantId parameter is ignored.
$sort = "sort_example"; // string | Property to sort on, to be used together with the order.

try {
    $result = $apiInstance->getModels($id, $category, $category_like, $category_not_equals, $name, $name_like, $key, $deployment_id, $version, $latest_version, $deployed, $tenant_id, $tenant_id_like, $without_tenant_id, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ModelsApi->getModels: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Only return models with the given version. | [optional]
 **category** | **string**| Only return models with the given category. | [optional]
 **category_like** | **string**| Only return models with a category like the given name. | [optional]
 **category_not_equals** | **string**| Only return models which don�t have the given category. | [optional]
 **name** | **string**| Only return models with the given name. | [optional]
 **name_like** | **string**| Only return models with a name like the given name. | [optional]
 **key** | **string**| Only return models with the given key. | [optional]
 **deployment_id** | **string**| Only return models with the given category. | [optional]
 **version** | **int**| Only return models with the given version. | [optional]
 **latest_version** | **bool**| If true, only return models which are the latest version. Best used in combination with key. If false is passed in as value, this is ignored and all versions are returned. | [optional]
 **deployed** | **bool**| If true, only deployed models are returned. If false, only undeployed models are returned (deploymentId is null). | [optional]
 **tenant_id** | **string**| Only return models with the given tenantId. | [optional]
 **tenant_id_like** | **string**| Only return models with a tenantId like the given value. | [optional]
 **without_tenant_id** | **bool**| If true, only returns models without a tenantId set. If false, the withoutTenantId parameter is ignored. | [optional]
 **sort** | **string**| Property to sort on, to be used together with the order. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateModel**
> \Swagger\Client\Model\ModelResponse updateModel($model_id, $body)

Update a model

All request values are optional. For example, you can only include the name attribute in the request body JSON-object, only updating the name of the model, leaving all other fields unaffected. When an attribute is explicitly included and is set to null, the model-value will be updated to null. Example: ```JSON  {\"metaInfo\" : null}``` will clear the metaInfo of the model).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\ModelsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$model_id = "model_id_example"; // string | 
$body = new \Swagger\Client\Model\ModelRequest(); // \Swagger\Client\Model\ModelRequest | 

try {
    $result = $apiInstance->updateModel($model_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ModelsApi->updateModel: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **string**|  |
 **body** | [**\Swagger\Client\Model\ModelRequest**](../Model/ModelRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\ModelResponse**](../Model/ModelResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

