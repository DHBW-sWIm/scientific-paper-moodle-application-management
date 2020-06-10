# Swagger\Client\DeploymentApi

All URIs are relative to *https://activiti.ganymed.me/activiti-rest/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDeployment**](DeploymentApi.md#deleteDeployment) | **DELETE** /repository/deployments/{deploymentId} | Delete a deployment
[**getDeployment**](DeploymentApi.md#getDeployment) | **GET** /repository/deployments/{deploymentId} | Get a deployment
[**getDeploymentResource**](DeploymentApi.md#getDeploymentResource) | **GET** /repository/deployments/{deploymentId}/resources/** | Get a deployment resource
[**getDeploymentResourceData**](DeploymentApi.md#getDeploymentResourceData) | **GET** /repository/deployments/{deploymentId}/resourcedata/{resourceId} | Get a deployment resource content
[**getDeploymentResources**](DeploymentApi.md#getDeploymentResources) | **GET** /repository/deployments/{deploymentId}/resources | List resources in a deployment
[**getDeployments**](DeploymentApi.md#getDeployments) | **GET** /repository/deployments | List of Deployments
[**uploadDeployment**](DeploymentApi.md#uploadDeployment) | **POST** /repository/deployments | Create a new deployment


# **deleteDeployment**
> deleteDeployment($deployment_id, $cascade)

Delete a deployment



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\DeploymentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$deployment_id = "deployment_id_example"; // string | The id of the deployment to delete.
$cascade = true; // bool | 

try {
    $apiInstance->deleteDeployment($deployment_id, $cascade);
} catch (Exception $e) {
    echo 'Exception when calling DeploymentApi->deleteDeployment: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_id** | **string**| The id of the deployment to delete. |
 **cascade** | **bool**|  | [optional]

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDeployment**
> \Swagger\Client\Model\DeploymentResponse getDeployment($deployment_id)

Get a deployment



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\DeploymentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$deployment_id = "deployment_id_example"; // string | The id of the deployment to get.

try {
    $result = $apiInstance->getDeployment($deployment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeploymentApi->getDeployment: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_id** | **string**| The id of the deployment to get. |

### Return type

[**\Swagger\Client\Model\DeploymentResponse**](../Model/DeploymentResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDeploymentResource**
> \Swagger\Client\Model\DeploymentResourceResponse getDeploymentResource($deployment_id)

Get a deployment resource

Replace ** by ResourceId

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\DeploymentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$deployment_id = "deployment_id_example"; // string | The id of the deployment the requested resource is part of.

try {
    $result = $apiInstance->getDeploymentResource($deployment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeploymentApi->getDeploymentResource: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_id** | **string**| The id of the deployment the requested resource is part of. |

### Return type

[**\Swagger\Client\Model\DeploymentResourceResponse**](../Model/DeploymentResourceResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDeploymentResourceData**
> string[] getDeploymentResourceData($deployment_id, $resource_id)

Get a deployment resource content

The response body will contain the binary resource-content for the requested resource. The response content-type will be the same as the type returned in the resources mimeType property. Also, a content-disposition header is set, allowing browsers to download the file instead of displaying it.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\DeploymentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$deployment_id = "deployment_id_example"; // string | The id of the deployment the requested resource is part of.
$resource_id = "resource_id_example"; // string | The id of the resource to get the data for. Make sure you URL-encode the resourceId in case it contains forward slashes. Eg: use diagrams%2Fmy-process.bpmn20.xml instead of diagrams/Fmy-process.bpmn20.xml.

try {
    $result = $apiInstance->getDeploymentResourceData($deployment_id, $resource_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeploymentApi->getDeploymentResourceData: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_id** | **string**| The id of the deployment the requested resource is part of. |
 **resource_id** | **string**| The id of the resource to get the data for. Make sure you URL-encode the resourceId in case it contains forward slashes. Eg: use diagrams%2Fmy-process.bpmn20.xml instead of diagrams/Fmy-process.bpmn20.xml. |

### Return type

**string[]**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDeploymentResources**
> \Swagger\Client\Model\DeploymentResourceResponse[] getDeploymentResources($deployment_id)

List resources in a deployment

The dataUrl property in the resulting JSON for a single resource contains the actual URL to use for retrieving the binary resource.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\DeploymentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$deployment_id = "deployment_id_example"; // string | The id of the deployment to get the resources for.

try {
    $result = $apiInstance->getDeploymentResources($deployment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeploymentApi->getDeploymentResources: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_id** | **string**| The id of the deployment to get the resources for. |

### Return type

[**\Swagger\Client\Model\DeploymentResourceResponse[]**](../Model/DeploymentResourceResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDeployments**
> \Swagger\Client\Model\DataResponse getDeployments($name, $name_like, $category, $category_not_equals, $tenant_id, $tenant_id_like, $without_tenant_id, $sort)

List of Deployments



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\DeploymentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$name = "name_example"; // string | Only return deployments with the given name.
$name_like = "name_like_example"; // string | Only return deployments with a name like the given name.
$category = "category_example"; // string | Only return deployments with the given category.
$category_not_equals = "category_not_equals_example"; // string | Only return deployments which don�t have the given category.
$tenant_id = "tenant_id_example"; // string | Only return deployments with the given tenantId.
$tenant_id_like = "tenant_id_like_example"; // string | Only return deployments with a tenantId like the given value.
$without_tenant_id = "without_tenant_id_example"; // string | If true, only returns deployments without a tenantId set. If false, the withoutTenantId parameter is ignored.
$sort = "sort_example"; // string | Property to sort on, to be used together with the order.

try {
    $result = $apiInstance->getDeployments($name, $name_like, $category, $category_not_equals, $tenant_id, $tenant_id_like, $without_tenant_id, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeploymentApi->getDeployments: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Only return deployments with the given name. | [optional]
 **name_like** | **string**| Only return deployments with a name like the given name. | [optional]
 **category** | **string**| Only return deployments with the given category. | [optional]
 **category_not_equals** | **string**| Only return deployments which don�t have the given category. | [optional]
 **tenant_id** | **string**| Only return deployments with the given tenantId. | [optional]
 **tenant_id_like** | **string**| Only return deployments with a tenantId like the given value. | [optional]
 **without_tenant_id** | **string**| If true, only returns deployments without a tenantId set. If false, the withoutTenantId parameter is ignored. | [optional]
 **sort** | **string**| Property to sort on, to be used together with the order. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **uploadDeployment**
> \Swagger\Client\Model\DeploymentResponse uploadDeployment($tenant_id)

Create a new deployment

The request body should contain data of type multipart/form-data. There should be exactly one file in the request, any additional files will be ignored. If multiple resources need to be deployed in a single deployment, compress the resources in a zip and make sure the file-name ends with .bar or .zip.  An additional parameter (form-field) can be passed in the request body with name tenantId. The value of this field will be used as the id of the tenant this deployment is done in.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\DeploymentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$tenant_id = "tenant_id_example"; // string | 

try {
    $result = $apiInstance->uploadDeployment($tenant_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeploymentApi->uploadDeployment: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **string**|  | [optional]

### Return type

[**\Swagger\Client\Model\DeploymentResponse**](../Model/DeploymentResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

