# Swagger\Client\JobsApi

All URIs are relative to *https://activiti.ganymed.me/activiti-rest/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDeadLetterJob**](JobsApi.md#deleteDeadLetterJob) | **DELETE** /management/deadletter-jobs/{jobId} | Delete a deadletter job
[**deleteJob**](JobsApi.md#deleteJob) | **DELETE** /management/jobs/{jobId} | Delete a job
[**deleteTimerJob**](JobsApi.md#deleteTimerJob) | **DELETE** /management/timer-jobs/{jobId} | Delete a timer job
[**executeJobAction**](JobsApi.md#executeJobAction) | **POST** /management/jobs/{jobId} | Execute a single job
[**getDeadLetterJobStacktrace**](JobsApi.md#getDeadLetterJobStacktrace) | **GET** /management/deadletter-jobs/{jobId}/exception-stacktrace | Get the exception stacktrace for a deadletter job
[**getDeadletterJob**](JobsApi.md#getDeadletterJob) | **GET** /management/deadletter-jobs/{jobId} | Get a single deadletter job
[**getJob**](JobsApi.md#getJob) | **GET** /management/jobs/{jobId} | Get a single job
[**getJobStacktrace**](JobsApi.md#getJobStacktrace) | **GET** /management/jobs/{jobId}/exception-stacktrace | Get the exception stacktrace for a job
[**getSuspendedJob**](JobsApi.md#getSuspendedJob) | **GET** /management/suspended-jobs/{jobId} | Get a single suspended job
[**getSuspendedJobStacktrace**](JobsApi.md#getSuspendedJobStacktrace) | **GET** /management/suspended-jobs/{jobId}/exception-stacktrace | Get the exception stacktrace for a suspended job
[**getTimerJob**](JobsApi.md#getTimerJob) | **GET** /management/timer-jobs/{jobId} | Get a single timer job
[**getTimerJobStacktrace**](JobsApi.md#getTimerJobStacktrace) | **GET** /management/timer-jobs/{jobId}/exception-stacktrace | Get the exception stacktrace for a timer job
[**listDeadLetterJobs**](JobsApi.md#listDeadLetterJobs) | **GET** /management/deadletter-jobs | Get a list of deadletter jobs
[**listJobs**](JobsApi.md#listJobs) | **GET** /management/jobs | Get a list of jobs
[**listSuspendedJobs**](JobsApi.md#listSuspendedJobs) | **GET** /management/suspended-jobs | Get a list of suspended jobs
[**listTimerJobs**](JobsApi.md#listTimerJobs) | **GET** /management/timer-jobs | Get a list of timer jobs


# **deleteDeadLetterJob**
> deleteDeadLetterJob($job_id)

Delete a deadletter job



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$job_id = "job_id_example"; // string | 

try {
    $apiInstance->deleteDeadLetterJob($job_id);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->deleteDeadLetterJob: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **string**|  |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteJob**
> deleteJob($job_id)

Delete a job



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$job_id = "job_id_example"; // string | The id of the job to delete.

try {
    $apiInstance->deleteJob($job_id);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->deleteJob: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **string**| The id of the job to delete. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteTimerJob**
> deleteTimerJob($job_id)

Delete a timer job



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$job_id = "job_id_example"; // string | 

try {
    $apiInstance->deleteTimerJob($job_id);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->deleteTimerJob: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **string**|  |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **executeJobAction**
> executeJobAction($job_id, $action_request)

Execute a single job



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$job_id = "job_id_example"; // string | 
$action_request = new \Swagger\Client\Model\RestActionRequest(); // \Swagger\Client\Model\RestActionRequest | Action to perform. Only execute is supported.

try {
    $apiInstance->executeJobAction($job_id, $action_request);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->executeJobAction: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **string**|  |
 **action_request** | [**\Swagger\Client\Model\RestActionRequest**](../Model/RestActionRequest.md)| Action to perform. Only execute is supported. | [optional]

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDeadLetterJobStacktrace**
> string getDeadLetterJobStacktrace($job_id)

Get the exception stacktrace for a deadletter job



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$job_id = "job_id_example"; // string | 

try {
    $result = $apiInstance->getDeadLetterJobStacktrace($job_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->getDeadLetterJobStacktrace: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **string**|  |

### Return type

**string**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDeadletterJob**
> \Swagger\Client\Model\JobResponse getDeadletterJob($job_id)

Get a single deadletter job



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$job_id = "job_id_example"; // string | 

try {
    $result = $apiInstance->getDeadletterJob($job_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->getDeadletterJob: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **string**|  |

### Return type

[**\Swagger\Client\Model\JobResponse**](../Model/JobResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getJob**
> \Swagger\Client\Model\JobResponse getJob($job_id)

Get a single job



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$job_id = "job_id_example"; // string | The id of the job to get.

try {
    $result = $apiInstance->getJob($job_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->getJob: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **string**| The id of the job to get. |

### Return type

[**\Swagger\Client\Model\JobResponse**](../Model/JobResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getJobStacktrace**
> string getJobStacktrace($job_id)

Get the exception stacktrace for a job



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$job_id = "job_id_example"; // string | Id of the job to get the stacktrace for.

try {
    $result = $apiInstance->getJobStacktrace($job_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->getJobStacktrace: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **string**| Id of the job to get the stacktrace for. |

### Return type

**string**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSuspendedJob**
> \Swagger\Client\Model\JobResponse getSuspendedJob($job_id)

Get a single suspended job



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$job_id = "job_id_example"; // string | 

try {
    $result = $apiInstance->getSuspendedJob($job_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->getSuspendedJob: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **string**|  |

### Return type

[**\Swagger\Client\Model\JobResponse**](../Model/JobResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSuspendedJobStacktrace**
> string getSuspendedJobStacktrace($job_id)

Get the exception stacktrace for a suspended job



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$job_id = "job_id_example"; // string | 

try {
    $result = $apiInstance->getSuspendedJobStacktrace($job_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->getSuspendedJobStacktrace: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **string**|  |

### Return type

**string**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTimerJob**
> \Swagger\Client\Model\JobResponse getTimerJob($job_id)

Get a single timer job



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$job_id = "job_id_example"; // string | 

try {
    $result = $apiInstance->getTimerJob($job_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->getTimerJob: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **string**|  |

### Return type

[**\Swagger\Client\Model\JobResponse**](../Model/JobResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTimerJobStacktrace**
> string getTimerJobStacktrace($job_id)

Get the exception stacktrace for a timer job



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$job_id = "job_id_example"; // string | 

try {
    $result = $apiInstance->getTimerJobStacktrace($job_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->getTimerJobStacktrace: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **string**|  |

### Return type

**string**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listDeadLetterJobs**
> \Swagger\Client\Model\DataResponse listDeadLetterJobs($id, $process_instance_id, $execution_id, $process_definition_id, $timers_only, $messages_only, $with_exception, $due_before, $due_after, $exception_message, $tenant_id, $tenant_id_like, $without_tenant_id, $locked, $unlocked, $sort)

Get a list of deadletter jobs



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = "id_example"; // string | Only return job with the given id
$process_instance_id = "process_instance_id_example"; // string | Only return jobs part of a process with the given id
$execution_id = "execution_id_example"; // string | Only return jobs part of an execution with the given id
$process_definition_id = "process_definition_id_example"; // string | Only return jobs with the given process definition id
$timers_only = true; // bool | If true, only return jobs which are timers. If false, this parameter is ignored. Cannot be used together with 'messagesOnly'.
$messages_only = true; // bool | If true, only return jobs which are messages. If false, this parameter is ignored. Cannot be used together with 'timersOnly'
$with_exception = true; // bool | If true, only return jobs for which an exception occurred while executing it. If false, this parameter is ignored.
$due_before = "due_before_example"; // string | Only return jobs which are due to be executed before the given date. Jobs without duedate are never returned using this parameter.
$due_after = "due_after_example"; // string | Only return jobs which are due to be executed after the given date. Jobs without duedate are never returned using this parameter.
$exception_message = "exception_message_example"; // string | Only return jobs with the given exception message
$tenant_id = "tenant_id_example"; // string | Only return jobs with the given tenantId.
$tenant_id_like = "tenant_id_like_example"; // string | Only return jobs with a tenantId like the given value.
$without_tenant_id = true; // bool | If true, only returns jobs without a tenantId set. If false, the withoutTenantId parameter is ignored.
$locked = true; // bool | If true, only return jobs which are locked.  If false, this parameter is ignored.
$unlocked = true; // bool | If true, only return jobs which are unlocked. If false, this parameter is ignored.
$sort = "sort_example"; // string | Property to sort on, to be used together with the order.

try {
    $result = $apiInstance->listDeadLetterJobs($id, $process_instance_id, $execution_id, $process_definition_id, $timers_only, $messages_only, $with_exception, $due_before, $due_after, $exception_message, $tenant_id, $tenant_id_like, $without_tenant_id, $locked, $unlocked, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->listDeadLetterJobs: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Only return job with the given id | [optional]
 **process_instance_id** | **string**| Only return jobs part of a process with the given id | [optional]
 **execution_id** | **string**| Only return jobs part of an execution with the given id | [optional]
 **process_definition_id** | **string**| Only return jobs with the given process definition id | [optional]
 **timers_only** | **bool**| If true, only return jobs which are timers. If false, this parameter is ignored. Cannot be used together with &#39;messagesOnly&#39;. | [optional]
 **messages_only** | **bool**| If true, only return jobs which are messages. If false, this parameter is ignored. Cannot be used together with &#39;timersOnly&#39; | [optional]
 **with_exception** | **bool**| If true, only return jobs for which an exception occurred while executing it. If false, this parameter is ignored. | [optional]
 **due_before** | **string**| Only return jobs which are due to be executed before the given date. Jobs without duedate are never returned using this parameter. | [optional]
 **due_after** | **string**| Only return jobs which are due to be executed after the given date. Jobs without duedate are never returned using this parameter. | [optional]
 **exception_message** | **string**| Only return jobs with the given exception message | [optional]
 **tenant_id** | **string**| Only return jobs with the given tenantId. | [optional]
 **tenant_id_like** | **string**| Only return jobs with a tenantId like the given value. | [optional]
 **without_tenant_id** | **bool**| If true, only returns jobs without a tenantId set. If false, the withoutTenantId parameter is ignored. | [optional]
 **locked** | **bool**| If true, only return jobs which are locked.  If false, this parameter is ignored. | [optional]
 **unlocked** | **bool**| If true, only return jobs which are unlocked. If false, this parameter is ignored. | [optional]
 **sort** | **string**| Property to sort on, to be used together with the order. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listJobs**
> \Swagger\Client\Model\DataResponse listJobs($id, $process_instance_id, $execution_id, $process_definition_id, $timers_only, $messages_only, $with_exception, $due_before, $due_after, $exception_message, $tenant_id, $tenant_id_like, $without_tenant_id, $locked, $unlocked, $sort)

Get a list of jobs



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = "id_example"; // string | Only return job with the given id
$process_instance_id = "process_instance_id_example"; // string | Only return jobs part of a process with the given id
$execution_id = "execution_id_example"; // string | Only return jobs part of an execution with the given id
$process_definition_id = "process_definition_id_example"; // string | Only return jobs with the given process definition id
$timers_only = true; // bool | If true, only return jobs which are timers. If false, this parameter is ignored. Cannot be used together with 'messagesOnly'.
$messages_only = true; // bool | If true, only return jobs which are messages. If false, this parameter is ignored. Cannot be used together with 'timersOnly'
$with_exception = true; // bool | If true, only return jobs for which an exception occurred while executing it. If false, this parameter is ignored.
$due_before = "due_before_example"; // string | Only return jobs which are due to be executed before the given date. Jobs without duedate are never returned using this parameter.
$due_after = "due_after_example"; // string | Only return jobs which are due to be executed after the given date. Jobs without duedate are never returned using this parameter.
$exception_message = "exception_message_example"; // string | Only return jobs with the given exception message
$tenant_id = "tenant_id_example"; // string | Only return jobs with the given tenantId.
$tenant_id_like = "tenant_id_like_example"; // string | Only return jobs with a tenantId like the given value.
$without_tenant_id = true; // bool | If true, only returns jobs without a tenantId set. If false, the withoutTenantId parameter is ignored.
$locked = true; // bool | If true, only return jobs which are locked.  If false, this parameter is ignored.
$unlocked = true; // bool | If true, only return jobs which are unlocked. If false, this parameter is ignored.
$sort = "sort_example"; // string | Property to sort on, to be used together with the order.

try {
    $result = $apiInstance->listJobs($id, $process_instance_id, $execution_id, $process_definition_id, $timers_only, $messages_only, $with_exception, $due_before, $due_after, $exception_message, $tenant_id, $tenant_id_like, $without_tenant_id, $locked, $unlocked, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->listJobs: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Only return job with the given id | [optional]
 **process_instance_id** | **string**| Only return jobs part of a process with the given id | [optional]
 **execution_id** | **string**| Only return jobs part of an execution with the given id | [optional]
 **process_definition_id** | **string**| Only return jobs with the given process definition id | [optional]
 **timers_only** | **bool**| If true, only return jobs which are timers. If false, this parameter is ignored. Cannot be used together with &#39;messagesOnly&#39;. | [optional]
 **messages_only** | **bool**| If true, only return jobs which are messages. If false, this parameter is ignored. Cannot be used together with &#39;timersOnly&#39; | [optional]
 **with_exception** | **bool**| If true, only return jobs for which an exception occurred while executing it. If false, this parameter is ignored. | [optional]
 **due_before** | **string**| Only return jobs which are due to be executed before the given date. Jobs without duedate are never returned using this parameter. | [optional]
 **due_after** | **string**| Only return jobs which are due to be executed after the given date. Jobs without duedate are never returned using this parameter. | [optional]
 **exception_message** | **string**| Only return jobs with the given exception message | [optional]
 **tenant_id** | **string**| Only return jobs with the given tenantId. | [optional]
 **tenant_id_like** | **string**| Only return jobs with a tenantId like the given value. | [optional]
 **without_tenant_id** | **bool**| If true, only returns jobs without a tenantId set. If false, the withoutTenantId parameter is ignored. | [optional]
 **locked** | **bool**| If true, only return jobs which are locked.  If false, this parameter is ignored. | [optional]
 **unlocked** | **bool**| If true, only return jobs which are unlocked. If false, this parameter is ignored. | [optional]
 **sort** | **string**| Property to sort on, to be used together with the order. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listSuspendedJobs**
> \Swagger\Client\Model\DataResponse listSuspendedJobs($id, $process_instance_id, $execution_id, $process_definition_id, $timers_only, $messages_only, $with_exception, $due_before, $due_after, $exception_message, $tenant_id, $tenant_id_like, $without_tenant_id, $locked, $unlocked, $sort)

Get a list of suspended jobs



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = "id_example"; // string | Only return job with the given id
$process_instance_id = "process_instance_id_example"; // string | Only return jobs part of a process with the given id
$execution_id = "execution_id_example"; // string | Only return jobs part of an execution with the given id
$process_definition_id = "process_definition_id_example"; // string | Only return jobs with the given process definition id
$timers_only = true; // bool | If true, only return jobs which are timers. If false, this parameter is ignored. Cannot be used together with 'messagesOnly'.
$messages_only = true; // bool | If true, only return jobs which are messages. If false, this parameter is ignored. Cannot be used together with 'timersOnly'
$with_exception = true; // bool | If true, only return jobs for which an exception occurred while executing it. If false, this parameter is ignored.
$due_before = "due_before_example"; // string | Only return jobs which are due to be executed before the given date. Jobs without duedate are never returned using this parameter.
$due_after = "due_after_example"; // string | Only return jobs which are due to be executed after the given date. Jobs without duedate are never returned using this parameter.
$exception_message = "exception_message_example"; // string | Only return jobs with the given exception message
$tenant_id = "tenant_id_example"; // string | Only return jobs with the given tenantId.
$tenant_id_like = "tenant_id_like_example"; // string | Only return jobs with a tenantId like the given value.
$without_tenant_id = true; // bool | If true, only returns jobs without a tenantId set. If false, the withoutTenantId parameter is ignored.
$locked = true; // bool | If true, only return jobs which are locked.  If false, this parameter is ignored.
$unlocked = true; // bool | If true, only return jobs which are unlocked. If false, this parameter is ignored.
$sort = "sort_example"; // string | Property to sort on, to be used together with the order.

try {
    $result = $apiInstance->listSuspendedJobs($id, $process_instance_id, $execution_id, $process_definition_id, $timers_only, $messages_only, $with_exception, $due_before, $due_after, $exception_message, $tenant_id, $tenant_id_like, $without_tenant_id, $locked, $unlocked, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->listSuspendedJobs: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Only return job with the given id | [optional]
 **process_instance_id** | **string**| Only return jobs part of a process with the given id | [optional]
 **execution_id** | **string**| Only return jobs part of an execution with the given id | [optional]
 **process_definition_id** | **string**| Only return jobs with the given process definition id | [optional]
 **timers_only** | **bool**| If true, only return jobs which are timers. If false, this parameter is ignored. Cannot be used together with &#39;messagesOnly&#39;. | [optional]
 **messages_only** | **bool**| If true, only return jobs which are messages. If false, this parameter is ignored. Cannot be used together with &#39;timersOnly&#39; | [optional]
 **with_exception** | **bool**| If true, only return jobs for which an exception occurred while executing it. If false, this parameter is ignored. | [optional]
 **due_before** | **string**| Only return jobs which are due to be executed before the given date. Jobs without duedate are never returned using this parameter. | [optional]
 **due_after** | **string**| Only return jobs which are due to be executed after the given date. Jobs without duedate are never returned using this parameter. | [optional]
 **exception_message** | **string**| Only return jobs with the given exception message | [optional]
 **tenant_id** | **string**| Only return jobs with the given tenantId. | [optional]
 **tenant_id_like** | **string**| Only return jobs with a tenantId like the given value. | [optional]
 **without_tenant_id** | **bool**| If true, only returns jobs without a tenantId set. If false, the withoutTenantId parameter is ignored. | [optional]
 **locked** | **bool**| If true, only return jobs which are locked.  If false, this parameter is ignored. | [optional]
 **unlocked** | **bool**| If true, only return jobs which are unlocked. If false, this parameter is ignored. | [optional]
 **sort** | **string**| Property to sort on, to be used together with the order. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listTimerJobs**
> \Swagger\Client\Model\DataResponse listTimerJobs($id, $process_instance_id, $execution_id, $process_definition_id, $timers_only, $messages_only, $with_exception, $due_before, $due_after, $exception_message, $tenant_id, $tenant_id_like, $without_tenant_id, $locked, $unlocked, $sort)

Get a list of timer jobs



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = "id_example"; // string | Only return job with the given id
$process_instance_id = "process_instance_id_example"; // string | Only return jobs part of a process with the given id
$execution_id = "execution_id_example"; // string | Only return jobs part of an execution with the given id
$process_definition_id = "process_definition_id_example"; // string | Only return jobs with the given process definition id
$timers_only = true; // bool | If true, only return jobs which are timers. If false, this parameter is ignored. Cannot be used together with 'messagesOnly'.
$messages_only = true; // bool | If true, only return jobs which are messages. If false, this parameter is ignored. Cannot be used together with 'timersOnly'
$with_exception = true; // bool | If true, only return jobs for which an exception occurred while executing it. If false, this parameter is ignored.
$due_before = "due_before_example"; // string | Only return jobs which are due to be executed before the given date. Jobs without duedate are never returned using this parameter.
$due_after = "due_after_example"; // string | Only return jobs which are due to be executed after the given date. Jobs without duedate are never returned using this parameter.
$exception_message = "exception_message_example"; // string | Only return jobs with the given exception message
$tenant_id = "tenant_id_example"; // string | Only return jobs with the given tenantId.
$tenant_id_like = "tenant_id_like_example"; // string | Only return jobs with a tenantId like the given value.
$without_tenant_id = true; // bool | If true, only returns jobs without a tenantId set. If false, the withoutTenantId parameter is ignored.
$locked = true; // bool | If true, only return jobs which are locked.  If false, this parameter is ignored.
$unlocked = true; // bool | If true, only return jobs which are unlocked. If false, this parameter is ignored.
$sort = "sort_example"; // string | Property to sort on, to be used together with the order.

try {
    $result = $apiInstance->listTimerJobs($id, $process_instance_id, $execution_id, $process_definition_id, $timers_only, $messages_only, $with_exception, $due_before, $due_after, $exception_message, $tenant_id, $tenant_id_like, $without_tenant_id, $locked, $unlocked, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->listTimerJobs: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Only return job with the given id | [optional]
 **process_instance_id** | **string**| Only return jobs part of a process with the given id | [optional]
 **execution_id** | **string**| Only return jobs part of an execution with the given id | [optional]
 **process_definition_id** | **string**| Only return jobs with the given process definition id | [optional]
 **timers_only** | **bool**| If true, only return jobs which are timers. If false, this parameter is ignored. Cannot be used together with &#39;messagesOnly&#39;. | [optional]
 **messages_only** | **bool**| If true, only return jobs which are messages. If false, this parameter is ignored. Cannot be used together with &#39;timersOnly&#39; | [optional]
 **with_exception** | **bool**| If true, only return jobs for which an exception occurred while executing it. If false, this parameter is ignored. | [optional]
 **due_before** | **string**| Only return jobs which are due to be executed before the given date. Jobs without duedate are never returned using this parameter. | [optional]
 **due_after** | **string**| Only return jobs which are due to be executed after the given date. Jobs without duedate are never returned using this parameter. | [optional]
 **exception_message** | **string**| Only return jobs with the given exception message | [optional]
 **tenant_id** | **string**| Only return jobs with the given tenantId. | [optional]
 **tenant_id_like** | **string**| Only return jobs with a tenantId like the given value. | [optional]
 **without_tenant_id** | **bool**| If true, only returns jobs without a tenantId set. If false, the withoutTenantId parameter is ignored. | [optional]
 **locked** | **bool**| If true, only return jobs which are locked.  If false, this parameter is ignored. | [optional]
 **unlocked** | **bool**| If true, only return jobs which are unlocked. If false, this parameter is ignored. | [optional]
 **sort** | **string**| Property to sort on, to be used together with the order. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

