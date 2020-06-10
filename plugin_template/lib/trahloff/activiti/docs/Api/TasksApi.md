# Swagger\Client\TasksApi

All URIs are relative to *https://activiti.ganymed.me/activiti-rest/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAttachment**](TasksApi.md#createAttachment) | **POST** /runtime/tasks/{taskId}/attachments | Create a new attachment on a task, containing a link to an external resource or an attached file
[**createTask**](TasksApi.md#createTask) | **POST** /runtime/tasks | Create Task
[**createTaskComments**](TasksApi.md#createTaskComments) | **POST** /runtime/tasks/{taskId}/comments | Create a new comment on a task
[**createTaskInstanceIdentityLinks**](TasksApi.md#createTaskInstanceIdentityLinks) | **POST** /runtime/tasks/{taskId}/identitylinks | Create an identity link on a task
[**createTaskVariable**](TasksApi.md#createTaskVariable) | **POST** /runtime/tasks/{taskId}/variables | Create new variables on a task
[**deleteAllLocalTaskVariables**](TasksApi.md#deleteAllLocalTaskVariables) | **DELETE** /runtime/tasks/{taskId}/variables | Delete all local variables on a task
[**deleteAttachment**](TasksApi.md#deleteAttachment) | **DELETE** /runtime/tasks/{taskId}/attachments/{attachmentId} | Delete an attachment on a task
[**deleteEvent**](TasksApi.md#deleteEvent) | **DELETE** /runtime/tasks/{taskId}/events/{eventId} | Delete an event on a task
[**deleteTask**](TasksApi.md#deleteTask) | **DELETE** /runtime/tasks/{taskId} | Delete a task
[**deleteTaskComment**](TasksApi.md#deleteTaskComment) | **DELETE** /runtime/tasks/{taskId}/comments/{commentId} | Delete a comment on a task
[**deleteTaskInstanceIdentityLinks**](TasksApi.md#deleteTaskInstanceIdentityLinks) | **DELETE** /runtime/tasks/{taskId}/identitylinks/{family}/{identityId}/{type} | Delete an identity link on a task
[**deleteTaskInstanceVariable**](TasksApi.md#deleteTaskInstanceVariable) | **DELETE** /runtime/tasks/{taskId}/variables/{variableName} | Delete a variable on a task
[**executeTaskAction**](TasksApi.md#executeTaskAction) | **POST** /runtime/tasks/{taskId} | Tasks actions
[**geTaskVariableData**](TasksApi.md#geTaskVariableData) | **GET** /runtime/tasks/{taskId}/variables/{variableName}/data | Get the binary data for a variable
[**getAttachment**](TasksApi.md#getAttachment) | **GET** /runtime/tasks/{taskId}/attachments/{attachmentId} | Get an attachment on a task
[**getAttachmentContent**](TasksApi.md#getAttachmentContent) | **GET** /runtime/tasks/{taskId}/attachments/{attachmentId}/content | Get the content for an attachment
[**getAttachments**](TasksApi.md#getAttachments) | **GET** /runtime/tasks/{taskId}/attachments | Get all attachments on a task
[**getEvent**](TasksApi.md#getEvent) | **GET** /runtime/tasks/{taskId}/events/{eventId} | Get an event on a task
[**getEvents**](TasksApi.md#getEvents) | **GET** /runtime/tasks/{taskId}/events | Get all events for a task
[**getIdentityLinksForFamily**](TasksApi.md#getIdentityLinksForFamily) | **GET** /runtime/tasks/{taskId}/identitylinks/{family} | Get all identitylinks for a task for either groups or users
[**getQueryResult**](TasksApi.md#getQueryResult) | **POST** /query/tasks | Query for tasks
[**getSubTasks**](TasksApi.md#getSubTasks) | **GET** /runtime/tasks/{taskId}/subtasks | Get list of sub tasks for a task
[**getTask**](TasksApi.md#getTask) | **GET** /runtime/tasks/{taskId} | Get a task
[**getTaskComment**](TasksApi.md#getTaskComment) | **GET** /runtime/tasks/{taskId}/comments/{commentId} | Get a comment on a task
[**getTaskInstanceIdentityLinks**](TasksApi.md#getTaskInstanceIdentityLinks) | **GET** /runtime/tasks/{taskId}/identitylinks/{family}/{identityId}/{type} | Get a single identity link on a task
[**getTaskInstanceVariable**](TasksApi.md#getTaskInstanceVariable) | **GET** /runtime/tasks/{taskId}/variables/{variableName} | Get a variable from a task
[**getTasks**](TasksApi.md#getTasks) | **GET** /runtime/tasks | List of tasks
[**listTaskComments**](TasksApi.md#listTaskComments) | **GET** /runtime/tasks/{taskId}/comments | Get all comments on a task
[**listTaskVariables**](TasksApi.md#listTaskVariables) | **GET** /runtime/tasks/{taskId}/variables | Get all variables for a task
[**listTasksInstanceIdentityLinks**](TasksApi.md#listTasksInstanceIdentityLinks) | **GET** /runtime/tasks/{taskId}/identitylinks | Get all identity links for a task
[**updateTask**](TasksApi.md#updateTask) | **PUT** /runtime/tasks/{taskId} | Update a task
[**updateTaskInstanceVariable**](TasksApi.md#updateTaskInstanceVariable) | **PUT** /runtime/tasks/{taskId}/variables/{variableName} | Update an existing variable on a task


# **createAttachment**
> \Swagger\Client\Model\AttachmentResponse createAttachment($task_id)

Create a new attachment on a task, containing a link to an external resource or an attached file

## Create a new attachment on a task, containing a link to an external resource   ```JSON {   \"name\":\"Simple attachment\",   \"description\":\"Simple attachment description\",   \"type\":\"simpleType\",   \"externalUrl\":\"http://activiti.org\" } ```   Only the attachment name is required to create a new attachment.    ## Create a new attachment on a task, with an attached file  The request should be of type multipart/form-data. There should be a single file-part included with the binary value of the variable. On top of that, the following additional form-fields can be present:  - *name*: Required name of the variable.  - *description*: Description of the attachment, optional.  - *type*: Type of attachment, optional. Supports any arbitrary string or a valid HTTP content-type.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to create the attachment for.

try {
    $result = $apiInstance->createAttachment($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->createAttachment: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to create the attachment for. |

### Return type

[**\Swagger\Client\Model\AttachmentResponse**](../Model/AttachmentResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createTask**
> \Swagger\Client\Model\TaskResponse createTask($body)

Create Task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\TaskRequest(); // \Swagger\Client\Model\TaskRequest | 

try {
    $result = $apiInstance->createTask($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->createTask: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\TaskRequest**](../Model/TaskRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\TaskResponse**](../Model/TaskResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createTaskComments**
> \Swagger\Client\Model\CommentResponse createTaskComments($task_id, $body)

Create a new comment on a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to create the comment for.
$body = new \Swagger\Client\Model\CommentRequest(); // \Swagger\Client\Model\CommentRequest | 

try {
    $result = $apiInstance->createTaskComments($task_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->createTaskComments: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to create the comment for. |
 **body** | [**\Swagger\Client\Model\CommentRequest**](../Model/CommentRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\CommentResponse**](../Model/CommentResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createTaskInstanceIdentityLinks**
> \Swagger\Client\Model\RestIdentityLink createTaskInstanceIdentityLinks($task_id, $body)

Create an identity link on a task

## Request body (user)   ```JSON {   \"userId\" : \"kermit\",   \"type\" : \"candidate\", } ```   ## Request body (group)   ```JSON {   \"groupId\" : \"sales\",   \"type\" : \"candidate\", } ```

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task .
$body = new \Swagger\Client\Model\RestIdentityLink(); // \Swagger\Client\Model\RestIdentityLink | 

try {
    $result = $apiInstance->createTaskInstanceIdentityLinks($task_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->createTaskInstanceIdentityLinks: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task . |
 **body** | [**\Swagger\Client\Model\RestIdentityLink**](../Model/RestIdentityLink.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\RestIdentityLink**](../Model/RestIdentityLink.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createTaskVariable**
> object createTaskVariable($task_id)

Create new variables on a task

## Request body for creating simple (non-binary) variables   ```JSON [   {     \"name\" : \"myTaskVariable\",     \"scope\" : \"local\",     \"type\" : \"string\",     \"value\" : \"Hello my friend\"   },   {    } ] ```   The request body should be an array containing one or more JSON-objects representing the variables that should be created.  - *name*: Required name of the variable  scope: Scope of variable that is created. If omitted, local is assumed.  - *type*: Type of variable that is created. If omitted, reverts to raw JSON-value type (string, boolean, integer or double).  - *value*: Variable value.  More information about the variable format can be found in the REST variables section.   ## Request body for Creating a new binary variable  The request should be of type multipart/form-data. There should be a single file-part included with the binary value of the variable. On top of that, the following additional form-fields can be present:  - *name*: Required name of the variable.  scope: Scope of variable that is created. If omitted, local is assumed.  - *type*: Type of variable that is created. If omitted, binary is assumed and the binary data in the request will be stored as an array of bytes.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to create the new variable for.

try {
    $result = $apiInstance->createTaskVariable($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->createTaskVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to create the new variable for. |

### Return type

**object**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteAllLocalTaskVariables**
> deleteAllLocalTaskVariables($task_id)

Delete all local variables on a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task the variable to delete belongs to.

try {
    $apiInstance->deleteAllLocalTaskVariables($task_id);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->deleteAllLocalTaskVariables: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task the variable to delete belongs to. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteAttachment**
> deleteAttachment($task_id, $attachment_id)

Delete an attachment on a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to delete the attachment for.
$attachment_id = "attachment_id_example"; // string | The id of the attachment.

try {
    $apiInstance->deleteAttachment($task_id, $attachment_id);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->deleteAttachment: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to delete the attachment for. |
 **attachment_id** | **string**| The id of the attachment. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteEvent**
> deleteEvent($task_id, $event_id)

Delete an event on a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | 
$event_id = "event_id_example"; // string | 

try {
    $apiInstance->deleteEvent($task_id, $event_id);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->deleteEvent: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**|  |
 **event_id** | **string**|  |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteTask**
> deleteTask($task_id)

Delete a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to delete.

try {
    $apiInstance->deleteTask($task_id);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->deleteTask: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to delete. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteTaskComment**
> deleteTaskComment($task_id, $comment_id)

Delete a comment on a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to delete the comment for.
$comment_id = "comment_id_example"; // string | The id of the comment.

try {
    $apiInstance->deleteTaskComment($task_id, $comment_id);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->deleteTaskComment: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to delete the comment for. |
 **comment_id** | **string**| The id of the comment. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteTaskInstanceIdentityLinks**
> deleteTaskInstanceIdentityLinks($task_id, $family, $identity_id, $type)

Delete an identity link on a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task.
$family = "family_example"; // string | Either groups or users, depending on what kind of identity is targeted.
$identity_id = "identity_id_example"; // string | The id of the identity.
$type = "type_example"; // string | The type of identity link.

try {
    $apiInstance->deleteTaskInstanceIdentityLinks($task_id, $family, $identity_id, $type);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->deleteTaskInstanceIdentityLinks: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task. |
 **family** | **string**| Either groups or users, depending on what kind of identity is targeted. |
 **identity_id** | **string**| The id of the identity. |
 **type** | **string**| The type of identity link. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteTaskInstanceVariable**
> deleteTaskInstanceVariable($task_id, $variable_name)

Delete a variable on a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task the variable to delete belongs to.
$variable_name = "variable_name_example"; // string | The name of the variable to delete.

try {
    $apiInstance->deleteTaskInstanceVariable($task_id, $variable_name);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->deleteTaskInstanceVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task the variable to delete belongs to. |
 **variable_name** | **string**| The name of the variable to delete. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **executeTaskAction**
> executeTaskAction($task_id, $body)

Tasks actions

## Complete a task - Request Body   ```JSON {   \"action\" : \"complete\",   \"variables\" : [] } ```Completes the task. Optional variable array can be passed in using the variables property. More information about the variable format can be found in the REST variables section. Note that the variable-scope that is supplied is ignored and the variables are set on the parent-scope unless a variable exists in a local scope, which is overridden in this case. This is the same behavior as the TaskService.completeTask(taskId, variables) invocation.  Note that also a transientVariables property is accepted as part of this json, that follows the same structure as the variables property.   ## Claim a task - Request Body    ```JSON {   \"action\" : \"claim\",   \"assignee\" : \"userWhoClaims\" } ```   Claims the task by the given assignee. If the assignee is null, the task is assigned to no-one, claimable again.   ## Delegate a task - Request Body    ```JSON {   \"action\" : \"delegate\",   \"assignee\" : \"userToDelegateTo\" } ```   Delegates the task to the given assignee. The assignee is required.   ## Suspend a process instance   ```JSON {   \"action\" : \"resolve\" } ```   Resolves the task delegation. The task is assigned back to the task owner (if any).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | 
$body = new \Swagger\Client\Model\TaskActionRequest(); // \Swagger\Client\Model\TaskActionRequest | 

try {
    $apiInstance->executeTaskAction($task_id, $body);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->executeTaskAction: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**|  |
 **body** | [**\Swagger\Client\Model\TaskActionRequest**](../Model/TaskActionRequest.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **geTaskVariableData**
> string[] geTaskVariableData($task_id, $variable_name)

Get the binary data for a variable

The response body contains the binary value of the variable. When the variable is of type binary, the content-type of the response is set to application/octet-stream, regardless of the content of the variable or the request accept-type header. In case of serializable, application/x-java-serialized-object is used as content-type.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to get a variable data for.
$variable_name = "variable_name_example"; // string | The name of the variable to get data for. Only variables of type binary and serializable can be used. If any other type of variable is used, a 404 is returned.

try {
    $result = $apiInstance->geTaskVariableData($task_id, $variable_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->geTaskVariableData: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to get a variable data for. |
 **variable_name** | **string**| The name of the variable to get data for. Only variables of type binary and serializable can be used. If any other type of variable is used, a 404 is returned. |

### Return type

**string[]**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAttachment**
> \Swagger\Client\Model\AttachmentResponse getAttachment($task_id, $attachment_id)

Get an attachment on a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to get the attachment for.
$attachment_id = "attachment_id_example"; // string | The id of the attachment.

try {
    $result = $apiInstance->getAttachment($task_id, $attachment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getAttachment: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to get the attachment for. |
 **attachment_id** | **string**| The id of the attachment. |

### Return type

[**\Swagger\Client\Model\AttachmentResponse**](../Model/AttachmentResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAttachmentContent**
> string[] getAttachmentContent($task_id, $attachment_id)

Get the content for an attachment

The response body contains the binary content. By default, the content-type of the response is set to application/octet-stream unless the attachment type contains a valid Content-type.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to get a variable data for.
$attachment_id = "attachment_id_example"; // string | The id of the attachment, a 404 is returned when the attachment points to an external URL rather than content attached in Activiti.

try {
    $result = $apiInstance->getAttachmentContent($task_id, $attachment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getAttachmentContent: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to get a variable data for. |
 **attachment_id** | **string**| The id of the attachment, a 404 is returned when the attachment points to an external URL rather than content attached in Activiti. |

### Return type

**string[]**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAttachments**
> \Swagger\Client\Model\AttachmentResponse[] getAttachments($task_id)

Get all attachments on a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to get the attachments for.

try {
    $result = $apiInstance->getAttachments($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getAttachments: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to get the attachments for. |

### Return type

[**\Swagger\Client\Model\AttachmentResponse[]**](../Model/AttachmentResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEvent**
> \Swagger\Client\Model\EventResponse getEvent($task_id, $event_id)

Get an event on a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to get the event for.
$event_id = "event_id_example"; // string | The id of the event.

try {
    $result = $apiInstance->getEvent($task_id, $event_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getEvent: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to get the event for. |
 **event_id** | **string**| The id of the event. |

### Return type

[**\Swagger\Client\Model\EventResponse**](../Model/EventResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEvents**
> \Swagger\Client\Model\EventResponse[] getEvents($task_id)

Get all events for a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to get the events for.

try {
    $result = $apiInstance->getEvents($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getEvents: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to get the events for. |

### Return type

[**\Swagger\Client\Model\EventResponse[]**](../Model/EventResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getIdentityLinksForFamily**
> \Swagger\Client\Model\RestIdentityLink[] getIdentityLinksForFamily($task_id, $family)

Get all identitylinks for a task for either groups or users

## Get all identitylinks for a task URL   ```  GET runtime/tasks/{taskId}/identitylinks/users GET runtime/tasks/{taskId}/identitylinks/groups  ```   Returns only identity links targetting either users or groups. Response body and status-codes are exactly the same as when getting the full list of identity links for a task.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | 
$family = "family_example"; // string | 

try {
    $result = $apiInstance->getIdentityLinksForFamily($task_id, $family);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getIdentityLinksForFamily: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**|  |
 **family** | **string**|  |

### Return type

[**\Swagger\Client\Model\RestIdentityLink[]**](../Model/RestIdentityLink.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getQueryResult**
> \Swagger\Client\Model\DataResponse getQueryResult($body)

Query for tasks

All supported JSON parameter fields allowed are exactly the same as the parameters found for getting a collection of tasks (except for candidateGroupIn which is only available in this POST task query REST service), but passed in as JSON-body arguments rather than URL-parameters to allow for more advanced querying and preventing errors with request-uri�s that are too long. On top of that, the query allows for filtering based on task and process variables. The taskVariables and processInstanceVariables are both JSON-arrays containing objects with the format as described here.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\TaskQueryRequest(); // \Swagger\Client\Model\TaskQueryRequest | 

try {
    $result = $apiInstance->getQueryResult($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getQueryResult: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\TaskQueryRequest**](../Model/TaskQueryRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSubTasks**
> \Swagger\Client\Model\TaskResponse[] getSubTasks($task_id)

Get list of sub tasks for a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | 

try {
    $result = $apiInstance->getSubTasks($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getSubTasks: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**|  |

### Return type

[**\Swagger\Client\Model\TaskResponse[]**](../Model/TaskResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTask**
> \Swagger\Client\Model\TaskResponse getTask($task_id)

Get a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to get.

try {
    $result = $apiInstance->getTask($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getTask: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to get. |

### Return type

[**\Swagger\Client\Model\TaskResponse**](../Model/TaskResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTaskComment**
> \Swagger\Client\Model\CommentResponse getTaskComment($task_id, $comment_id)

Get a comment on a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to get the comment for.
$comment_id = "comment_id_example"; // string | The id of the comment.

try {
    $result = $apiInstance->getTaskComment($task_id, $comment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getTaskComment: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to get the comment for. |
 **comment_id** | **string**| The id of the comment. |

### Return type

[**\Swagger\Client\Model\CommentResponse**](../Model/CommentResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTaskInstanceIdentityLinks**
> \Swagger\Client\Model\RestIdentityLink getTaskInstanceIdentityLinks($task_id, $family, $identity_id, $type)

Get a single identity link on a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task .
$family = "family_example"; // string | Either groups or users, depending on what kind of identity is targeted.
$identity_id = "identity_id_example"; // string | The id of the identity.
$type = "type_example"; // string | The type of identity link.

try {
    $result = $apiInstance->getTaskInstanceIdentityLinks($task_id, $family, $identity_id, $type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getTaskInstanceIdentityLinks: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task . |
 **family** | **string**| Either groups or users, depending on what kind of identity is targeted. |
 **identity_id** | **string**| The id of the identity. |
 **type** | **string**| The type of identity link. |

### Return type

[**\Swagger\Client\Model\RestIdentityLink**](../Model/RestIdentityLink.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTaskInstanceVariable**
> \Swagger\Client\Model\RestVariable getTaskInstanceVariable($task_id, $variable_name, $scope)

Get a variable from a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to get a variable for.
$variable_name = "variable_name_example"; // string | The name of the variable to get.
$scope = "scope_example"; // string | Scope of variable to be returned. When local, only task-local variable value is returned. When global, only variable value from the task�s parent execution-hierarchy are returned. When the parameter is omitted, a local variable will be returned if it exists, otherwise a global variable.

try {
    $result = $apiInstance->getTaskInstanceVariable($task_id, $variable_name, $scope);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getTaskInstanceVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to get a variable for. |
 **variable_name** | **string**| The name of the variable to get. |
 **scope** | **string**| Scope of variable to be returned. When local, only task-local variable value is returned. When global, only variable value from the task�s parent execution-hierarchy are returned. When the parameter is omitted, a local variable will be returned if it exists, otherwise a global variable. | [optional]

### Return type

[**\Swagger\Client\Model\RestVariable**](../Model/RestVariable.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTasks**
> \Swagger\Client\Model\DataResponse getTasks($name, $name_like, $description, $priority, $minimum_priority, $maximum_priority, $assignee, $assignee_like, $owner, $owner_like, $unassigned, $delegation_state, $candidate_user, $candidate_group, $candidate_groups, $involved_user, $task_definition_key, $task_definition_key_like, $process_instance_id, $process_instance_business_key, $process_instance_business_key_like, $process_definition_id, $process_definition_key, $process_definition_key_like, $process_definition_name, $process_definition_name_like, $execution_id, $created_on, $created_before, $created_after, $due_on, $due_before, $due_after, $without_due_date, $exclude_sub_tasks, $active, $include_task_local_variables, $include_process_variables, $tenant_id, $tenant_id_like, $without_tenant_id, $candidate_or_assigned, $category)

List of tasks



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$name = "name_example"; // string | Only return models with the given version.
$name_like = "name_like_example"; // string | Only return tasks with a name like the given name.
$description = "description_example"; // string | Only return tasks with the given description.
$priority = "priority_example"; // string | Only return tasks with the given priority.
$minimum_priority = "minimum_priority_example"; // string | Only return tasks with a priority greater than the given value.
$maximum_priority = "maximum_priority_example"; // string | Only return tasks with a priority lower than the given value.
$assignee = "assignee_example"; // string | Only return tasks assigned to the given user.
$assignee_like = "assignee_like_example"; // string | Only return tasks assigned with an assignee like the given value.
$owner = "owner_example"; // string | Only return tasks owned by the given user.
$owner_like = "owner_like_example"; // string | Only return tasks assigned with an owner like the given value.
$unassigned = "unassigned_example"; // string | Only return tasks that are not assigned to anyone. If false is passed, the value is ignored.
$delegation_state = "delegation_state_example"; // string | Only return tasks that have the given delegation state. Possible values are pending and resolved.
$candidate_user = "candidate_user_example"; // string | Only return tasks that can be claimed by the given user. This includes both tasks where the user is an explicit candidate for and task that are claimable by a group that the user is a member of.
$candidate_group = "candidate_group_example"; // string | Only return tasks that can be claimed by a user in the given group.
$candidate_groups = "candidate_groups_example"; // string | Only return tasks that can be claimed by a user in the given groups. Values split by comma.
$involved_user = "involved_user_example"; // string | Only return tasks in which the given user is involved.
$task_definition_key = "task_definition_key_example"; // string | Only return tasks with the given task definition id.
$task_definition_key_like = "task_definition_key_like_example"; // string | Only return tasks with a given task definition id like the given value.
$process_instance_id = "process_instance_id_example"; // string | Only return tasks which are part of the process instance with the given id.
$process_instance_business_key = "process_instance_business_key_example"; // string | Only return tasks which are part of the process instance with the given business key.
$process_instance_business_key_like = "process_instance_business_key_like_example"; // string | Only return tasks which are part of the process instance which has a business key like the given value.
$process_definition_id = "process_definition_id_example"; // string | Only return tasks which are part of a process instance which has a process definition with the given id.
$process_definition_key = "process_definition_key_example"; // string | Only return tasks which are part of a process instance which has a process definition with the given key.
$process_definition_key_like = "process_definition_key_like_example"; // string | Only return tasks which are part of a process instance which has a process definition with a key like the given value.
$process_definition_name = "process_definition_name_example"; // string | Only return tasks which are part of a process instance which has a process definition with the given name.
$process_definition_name_like = "process_definition_name_like_example"; // string | Only return tasks which are part of a process instance which has a process definition with a name like the given value.
$execution_id = "execution_id_example"; // string | Only return tasks which are part of the execution with the given id.
$created_on = "created_on_example"; // string | Only return tasks which are created on the given date.
$created_before = "created_before_example"; // string | Only return tasks which are created before the given date.
$created_after = "created_after_example"; // string | Only return tasks which are created after the given date.
$due_on = "due_on_example"; // string | Only return tasks which are due on the given date.
$due_before = "due_before_example"; // string | Only return tasks which are due before the given date.
$due_after = "due_after_example"; // string | Only return tasks which are due after the given date.
$without_due_date = true; // bool | Only return tasks which don�t have a due date. The property is ignored if the value is false.
$exclude_sub_tasks = true; // bool | Only return tasks that are not a subtask of another task.
$active = true; // bool | If true, only return tasks that are not suspended (either part of a process that is not suspended or not part of a process at all). If false, only tasks that are part of suspended process instances are returned.
$include_task_local_variables = true; // bool | Indication to include task local variables in the result.
$include_process_variables = true; // bool | Indication to include process variables in the result.
$tenant_id = "tenant_id_example"; // string | Only return tasks with the given tenantId.
$tenant_id_like = "tenant_id_like_example"; // string | Only return tasks with a tenantId like the given value.
$without_tenant_id = true; // bool | If true, only returns tasks without a tenantId set. If false, the withoutTenantId parameter is ignored.
$candidate_or_assigned = "candidate_or_assigned_example"; // string | Select tasks that has been claimed or assigned to user or waiting to claim by user (candidate user or groups).
$category = "category_example"; // string | Select tasks with the given category. Note that this is the task category, not the category of the process definition (namespace within the BPMN Xml).

try {
    $result = $apiInstance->getTasks($name, $name_like, $description, $priority, $minimum_priority, $maximum_priority, $assignee, $assignee_like, $owner, $owner_like, $unassigned, $delegation_state, $candidate_user, $candidate_group, $candidate_groups, $involved_user, $task_definition_key, $task_definition_key_like, $process_instance_id, $process_instance_business_key, $process_instance_business_key_like, $process_definition_id, $process_definition_key, $process_definition_key_like, $process_definition_name, $process_definition_name_like, $execution_id, $created_on, $created_before, $created_after, $due_on, $due_before, $due_after, $without_due_date, $exclude_sub_tasks, $active, $include_task_local_variables, $include_process_variables, $tenant_id, $tenant_id_like, $without_tenant_id, $candidate_or_assigned, $category);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getTasks: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Only return models with the given version. | [optional]
 **name_like** | **string**| Only return tasks with a name like the given name. | [optional]
 **description** | **string**| Only return tasks with the given description. | [optional]
 **priority** | **string**| Only return tasks with the given priority. | [optional]
 **minimum_priority** | **string**| Only return tasks with a priority greater than the given value. | [optional]
 **maximum_priority** | **string**| Only return tasks with a priority lower than the given value. | [optional]
 **assignee** | **string**| Only return tasks assigned to the given user. | [optional]
 **assignee_like** | **string**| Only return tasks assigned with an assignee like the given value. | [optional]
 **owner** | **string**| Only return tasks owned by the given user. | [optional]
 **owner_like** | **string**| Only return tasks assigned with an owner like the given value. | [optional]
 **unassigned** | **string**| Only return tasks that are not assigned to anyone. If false is passed, the value is ignored. | [optional]
 **delegation_state** | **string**| Only return tasks that have the given delegation state. Possible values are pending and resolved. | [optional]
 **candidate_user** | **string**| Only return tasks that can be claimed by the given user. This includes both tasks where the user is an explicit candidate for and task that are claimable by a group that the user is a member of. | [optional]
 **candidate_group** | **string**| Only return tasks that can be claimed by a user in the given group. | [optional]
 **candidate_groups** | **string**| Only return tasks that can be claimed by a user in the given groups. Values split by comma. | [optional]
 **involved_user** | **string**| Only return tasks in which the given user is involved. | [optional]
 **task_definition_key** | **string**| Only return tasks with the given task definition id. | [optional]
 **task_definition_key_like** | **string**| Only return tasks with a given task definition id like the given value. | [optional]
 **process_instance_id** | **string**| Only return tasks which are part of the process instance with the given id. | [optional]
 **process_instance_business_key** | **string**| Only return tasks which are part of the process instance with the given business key. | [optional]
 **process_instance_business_key_like** | **string**| Only return tasks which are part of the process instance which has a business key like the given value. | [optional]
 **process_definition_id** | **string**| Only return tasks which are part of a process instance which has a process definition with the given id. | [optional]
 **process_definition_key** | **string**| Only return tasks which are part of a process instance which has a process definition with the given key. | [optional]
 **process_definition_key_like** | **string**| Only return tasks which are part of a process instance which has a process definition with a key like the given value. | [optional]
 **process_definition_name** | **string**| Only return tasks which are part of a process instance which has a process definition with the given name. | [optional]
 **process_definition_name_like** | **string**| Only return tasks which are part of a process instance which has a process definition with a name like the given value. | [optional]
 **execution_id** | **string**| Only return tasks which are part of the execution with the given id. | [optional]
 **created_on** | **string**| Only return tasks which are created on the given date. | [optional]
 **created_before** | **string**| Only return tasks which are created before the given date. | [optional]
 **created_after** | **string**| Only return tasks which are created after the given date. | [optional]
 **due_on** | **string**| Only return tasks which are due on the given date. | [optional]
 **due_before** | **string**| Only return tasks which are due before the given date. | [optional]
 **due_after** | **string**| Only return tasks which are due after the given date. | [optional]
 **without_due_date** | **bool**| Only return tasks which don�t have a due date. The property is ignored if the value is false. | [optional]
 **exclude_sub_tasks** | **bool**| Only return tasks that are not a subtask of another task. | [optional]
 **active** | **bool**| If true, only return tasks that are not suspended (either part of a process that is not suspended or not part of a process at all). If false, only tasks that are part of suspended process instances are returned. | [optional]
 **include_task_local_variables** | **bool**| Indication to include task local variables in the result. | [optional]
 **include_process_variables** | **bool**| Indication to include process variables in the result. | [optional]
 **tenant_id** | **string**| Only return tasks with the given tenantId. | [optional]
 **tenant_id_like** | **string**| Only return tasks with a tenantId like the given value. | [optional]
 **without_tenant_id** | **bool**| If true, only returns tasks without a tenantId set. If false, the withoutTenantId parameter is ignored. | [optional]
 **candidate_or_assigned** | **string**| Select tasks that has been claimed or assigned to user or waiting to claim by user (candidate user or groups). | [optional]
 **category** | **string**| Select tasks with the given category. Note that this is the task category, not the category of the process definition (namespace within the BPMN Xml). | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listTaskComments**
> \Swagger\Client\Model\CommentResponse[] listTaskComments($task_id)

Get all comments on a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to get the comments for.

try {
    $result = $apiInstance->listTaskComments($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->listTaskComments: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to get the comments for. |

### Return type

[**\Swagger\Client\Model\CommentResponse[]**](../Model/CommentResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listTaskVariables**
> \Swagger\Client\Model\RestVariable[] listTaskVariables($task_id)

Get all variables for a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to get variables for.

try {
    $result = $apiInstance->listTaskVariables($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->listTaskVariables: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to get variables for. |

### Return type

[**\Swagger\Client\Model\RestVariable[]**](../Model/RestVariable.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listTasksInstanceIdentityLinks**
> \Swagger\Client\Model\RestIdentityLink[] listTasksInstanceIdentityLinks($task_id)

Get all identity links for a task



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to get the identity links for.

try {
    $result = $apiInstance->listTasksInstanceIdentityLinks($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->listTasksInstanceIdentityLinks: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to get the identity links for. |

### Return type

[**\Swagger\Client\Model\RestIdentityLink[]**](../Model/RestIdentityLink.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateTask**
> \Swagger\Client\Model\TaskResponse updateTask($task_id, $body)

Update a task

All request values are optional. For example, you can only include the assignee attribute in the request body JSON-object, only updating the assignee of the task, leaving all other fields unaffected. When an attribute is explicitly included and is set to null, the task-value will be updated to null. Example: {\"dueDate\" : null} will clear the duedate of the task).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | 
$body = new \Swagger\Client\Model\TaskRequest(); // \Swagger\Client\Model\TaskRequest | 

try {
    $result = $apiInstance->updateTask($task_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->updateTask: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**|  |
 **body** | [**\Swagger\Client\Model\TaskRequest**](../Model/TaskRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\TaskResponse**](../Model/TaskResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateTaskInstanceVariable**
> \Swagger\Client\Model\RestVariable updateTaskInstanceVariable($task_id, $variable_name)

Update an existing variable on a task

## Request body for updating simple (non-binary) variables   ```JSON {   \"name\" : \"myTaskVariable\",   \"scope\" : \"local\",   \"type\" : \"string\",   \"value\" : \"Hello my friend\" } ```   - *name*: Required name of the variable  - *scope*: Scope of variable that is updated. If omitted, local is assumed.  - *type*: Type of variable that is updated. If omitted, reverts to raw JSON-value type (string, boolean, integer or double).  - *value*: Variable value.   ## Request body for updating simple (non-binary) variables  The request should be of type multipart/form-data. There should be a single file-part included with the binary value of the variable. On top of that, the following additional form-fields can be present:  - *name*: Required name of the variable.  - *scope*: Scope of variable that is updated. If omitted, local is assumed.  - *type*: Type of variable that is updated. If omitted, binary is assumed and the binary data in the request will be stored as an array of bytes.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = "task_id_example"; // string | The id of the task to update the variable for.
$variable_name = "variable_name_example"; // string | The name of the variable to update.

try {
    $result = $apiInstance->updateTaskInstanceVariable($task_id, $variable_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->updateTaskInstanceVariable: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **string**| The id of the task to update the variable for. |
 **variable_name** | **string**| The name of the variable to update. |

### Return type

[**\Swagger\Client\Model\RestVariable**](../Model/RestVariable.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

