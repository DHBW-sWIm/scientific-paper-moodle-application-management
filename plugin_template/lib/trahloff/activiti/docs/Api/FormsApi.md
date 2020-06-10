# Swagger\Client\FormsApi

All URIs are relative to *https://activiti.ganymed.me/activiti-rest/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFormData**](FormsApi.md#getFormData) | **GET** /form/form-data | Get form data
[**submitForm**](FormsApi.md#submitForm) | **POST** /form/form-data | Submit task form data


# **getFormData**
> \Swagger\Client\Model\FormDataResponse getFormData($task_id, $process_definition_id)

Get form data



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\FormsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The task id corresponding to the form data that needs to retrieved.
$process_definition_id = "process_definition_id_example"; // string | The process definition id corresponding to the start event form data that needs to be retrieved.

try {
    $result = $apiInstance->getFormData($task_id, $process_definition_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FormsApi->getFormData: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The task id corresponding to the form data that needs to retrieved. | [optional]
 **process_definition_id** | **string**| The process definition id corresponding to the start event form data that needs to be retrieved. | [optional]

### Return type

[**\Swagger\Client\Model\FormDataResponse**](../Model/FormDataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **submitForm**
> \Swagger\Client\Model\ProcessInstanceResponse submitForm($body)

Submit task form data



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\FormsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\SubmitFormRequest(); // \Swagger\Client\Model\SubmitFormRequest | 

try {
    $result = $apiInstance->submitForm($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FormsApi->submitForm: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\SubmitFormRequest**](../Model/SubmitFormRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\ProcessInstanceResponse**](../Model/ProcessInstanceResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

