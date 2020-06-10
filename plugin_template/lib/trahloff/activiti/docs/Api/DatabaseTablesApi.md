# Swagger\Client\DatabaseTablesApi

All URIs are relative to *https://activiti.ganymed.me/activiti-rest/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTable**](DatabaseTablesApi.md#getTable) | **GET** /management/tables/{tableName} | Get a single table
[**getTableData**](DatabaseTablesApi.md#getTableData) | **GET** /management/tables/{tableName}/data | Get row data for a single table
[**getTableMetaData**](DatabaseTablesApi.md#getTableMetaData) | **GET** /management/tables/{tableName}/columns | Get column info for a single table
[**getTables**](DatabaseTablesApi.md#getTables) | **GET** /management/tables | List of tables


# **getTable**
> \Swagger\Client\Model\TableResponse getTable($table_name)

Get a single table



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\DatabaseTablesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$table_name = "table_name_example"; // string | The name of the table to get.

try {
    $result = $apiInstance->getTable($table_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DatabaseTablesApi->getTable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **table_name** | **string**| The name of the table to get. |

### Return type

[**\Swagger\Client\Model\TableResponse**](../Model/TableResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTableData**
> \Swagger\Client\Model\DataResponse getTableData($table_name, $start, $size, $order_ascending_column, $order_descending_column)

Get row data for a single table



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\DatabaseTablesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$table_name = "table_name_example"; // string | The name of the table to get.
$start = 56; // int | Index of the first row to fetch. Defaults to 0.
$size = 56; // int | Number of rows to fetch, starting from start. Defaults to 10.
$order_ascending_column = "order_ascending_column_example"; // string | Name of the column to sort the resulting rows on, ascending.
$order_descending_column = "order_descending_column_example"; // string | Name of the column to sort the resulting rows on, descending.

try {
    $result = $apiInstance->getTableData($table_name, $start, $size, $order_ascending_column, $order_descending_column);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DatabaseTablesApi->getTableData: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **table_name** | **string**| The name of the table to get. |
 **start** | **int**| Index of the first row to fetch. Defaults to 0. | [optional]
 **size** | **int**| Number of rows to fetch, starting from start. Defaults to 10. | [optional]
 **order_ascending_column** | **string**| Name of the column to sort the resulting rows on, ascending. | [optional]
 **order_descending_column** | **string**| Name of the column to sort the resulting rows on, descending. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTableMetaData**
> \Swagger\Client\Model\TableMetaData getTableMetaData($table_name)

Get column info for a single table



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\DatabaseTablesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$table_name = "table_name_example"; // string | The name of the table to get.

try {
    $result = $apiInstance->getTableMetaData($table_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DatabaseTablesApi->getTableMetaData: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **table_name** | **string**| The name of the table to get. |

### Return type

[**\Swagger\Client\Model\TableMetaData**](../Model/TableMetaData.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTables**
> \Swagger\Client\Model\TableResponse[] getTables()

List of tables



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\DatabaseTablesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getTables();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DatabaseTablesApi->getTables: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\TableResponse[]**](../Model/TableResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

