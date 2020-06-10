# Swagger\Client\UsersApi

All URIs are relative to *https://activiti.ganymed.me/activiti-rest/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /identity/users | Create a user
[**createUserInfo**](UsersApi.md#createUserInfo) | **POST** /identity/users/{userId}/info | Create a new user�s info entry
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /identity/users/{userId} | Delete a user
[**deleteUserInfo**](UsersApi.md#deleteUserInfo) | **DELETE** /identity/users/{userId}/info/{key} | Delete a user�s info
[**getUser**](UsersApi.md#getUser) | **GET** /identity/users/{userId} | Get a single user
[**getUserInfo**](UsersApi.md#getUserInfo) | **GET** /identity/users/{userId}/info/{key} | Get a user�s info
[**getUserPicture**](UsersApi.md#getUserPicture) | **GET** /identity/users/{userId}/picture | Get a user�s picture
[**getUsers**](UsersApi.md#getUsers) | **GET** /identity/users | Get a list of users
[**listUsersInfo**](UsersApi.md#listUsersInfo) | **GET** /identity/users/{userId}/info | List a user�s info
[**updateUser**](UsersApi.md#updateUser) | **PUT** /identity/users/{userId} | Update a user
[**updateUserInfo**](UsersApi.md#updateUserInfo) | **PUT** /identity/users/{userId}/info/{key} | Update a user�s info
[**updateUserPicture**](UsersApi.md#updateUserPicture) | **PUT** /identity/users/{userId}/picture | Updating a user�s picture


# **createUser**
> \Swagger\Client\Model\UserResponse createUser($body)

Create a user



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\UserRequest(); // \Swagger\Client\Model\UserRequest | 

try {
    $result = $apiInstance->createUser($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->createUser: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\UserRequest**](../Model/UserRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\UserResponse**](../Model/UserResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createUserInfo**
> \Swagger\Client\Model\UserInfoResponse createUserInfo($user_id, $body)

Create a new user�s info entry



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = "user_id_example"; // string | The id of the user to create the info for.
$body = new \Swagger\Client\Model\UserInfoRequest(); // \Swagger\Client\Model\UserInfoRequest | 

try {
    $result = $apiInstance->createUserInfo($user_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->createUserInfo: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**| The id of the user to create the info for. |
 **body** | [**\Swagger\Client\Model\UserInfoRequest**](../Model/UserInfoRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\UserInfoResponse**](../Model/UserInfoResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteUser**
> deleteUser($user_id)

Delete a user



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = "user_id_example"; // string | The id of the user to delete.

try {
    $apiInstance->deleteUser($user_id);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->deleteUser: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**| The id of the user to delete. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteUserInfo**
> deleteUserInfo($user_id, $key)

Delete a user�s info



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = "user_id_example"; // string | The id of the user to delete the info for.
$key = "key_example"; // string | The key of the user info to delete.

try {
    $apiInstance->deleteUserInfo($user_id, $key);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->deleteUserInfo: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**| The id of the user to delete the info for. |
 **key** | **string**| The key of the user info to delete. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getUser**
> \Swagger\Client\Model\UserResponse getUser($user_id)

Get a single user



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = "user_id_example"; // string | The id of the user to get.

try {
    $result = $apiInstance->getUser($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->getUser: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**| The id of the user to get. |

### Return type

[**\Swagger\Client\Model\UserResponse**](../Model/UserResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getUserInfo**
> \Swagger\Client\Model\UserInfoResponse getUserInfo($user_id, $key)

Get a user�s info



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = "user_id_example"; // string | The id of the user to get the info for.
$key = "key_example"; // string | The key of the user info to get.

try {
    $result = $apiInstance->getUserInfo($user_id, $key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->getUserInfo: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**| The id of the user to get the info for. |
 **key** | **string**| The key of the user info to get. |

### Return type

[**\Swagger\Client\Model\UserInfoResponse**](../Model/UserInfoResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getUserPicture**
> string[] getUserPicture($user_id)

Get a user�s picture

The response body contains the raw picture data, representing the user�s picture. The Content-type of the response corresponds to the mimeType that was set when creating the picture.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = "user_id_example"; // string | The id of the user to get the picture for.

try {
    $result = $apiInstance->getUserPicture($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->getUserPicture: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**| The id of the user to get the picture for. |

### Return type

**string[]**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getUsers**
> \Swagger\Client\Model\DataResponse getUsers($id, $first_name, $last_name, $email, $first_name_like, $last_name_like, $email_like, $member_of_group, $potential_starter, $sort)

Get a list of users



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = "id_example"; // string | Only return group with the given id
$first_name = "first_name_example"; // string | Only return users with the given firstname
$last_name = "last_name_example"; // string | Only return users with the given lastname
$email = "email_example"; // string | Only return users with the given email
$first_name_like = "first_name_like_example"; // string | Only return userswith a firstname like the given value. Use % as wildcard-character.
$last_name_like = "last_name_like_example"; // string | Only return users with a lastname like the given value. Use % as wildcard-character.
$email_like = "email_like_example"; // string | Only return users with an email like the given value. Use % as wildcard-character.
$member_of_group = "member_of_group_example"; // string | Only return users which are a member of the given group.
$potential_starter = "potential_starter_example"; // string | Only return users  which members are potential starters for a process-definition with the given id.
$sort = "sort_example"; // string | Field  to sort on, to be used together with the order.

try {
    $result = $apiInstance->getUsers($id, $first_name, $last_name, $email, $first_name_like, $last_name_like, $email_like, $member_of_group, $potential_starter, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->getUsers: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Only return group with the given id | [optional]
 **first_name** | **string**| Only return users with the given firstname | [optional]
 **last_name** | **string**| Only return users with the given lastname | [optional]
 **email** | **string**| Only return users with the given email | [optional]
 **first_name_like** | **string**| Only return userswith a firstname like the given value. Use % as wildcard-character. | [optional]
 **last_name_like** | **string**| Only return users with a lastname like the given value. Use % as wildcard-character. | [optional]
 **email_like** | **string**| Only return users with an email like the given value. Use % as wildcard-character. | [optional]
 **member_of_group** | **string**| Only return users which are a member of the given group. | [optional]
 **potential_starter** | **string**| Only return users  which members are potential starters for a process-definition with the given id. | [optional]
 **sort** | **string**| Field  to sort on, to be used together with the order. | [optional]

### Return type

[**\Swagger\Client\Model\DataResponse**](../Model/DataResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listUsersInfo**
> \Swagger\Client\Model\UserInfoResponse[] listUsersInfo($user_id)

List a user�s info



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = "user_id_example"; // string | The id of the user to get the info for.

try {
    $result = $apiInstance->listUsersInfo($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->listUsersInfo: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**| The id of the user to get the info for. |

### Return type

[**\Swagger\Client\Model\UserInfoResponse[]**](../Model/UserInfoResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateUser**
> \Swagger\Client\Model\UserResponse updateUser($user_id, $body)

Update a user

All request values are optional. For example, you can only include the firstName attribute in the request body JSON-object, only updating the firstName of the user, leaving all other fields unaffected. When an attribute is explicitly included and is set to null, the user-value will be updated to null. Example: {\"firstName\" : null} will clear the firstName of the user).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = "user_id_example"; // string | 
$body = new \Swagger\Client\Model\UserRequest(); // \Swagger\Client\Model\UserRequest | 

try {
    $result = $apiInstance->updateUser($user_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->updateUser: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **body** | [**\Swagger\Client\Model\UserRequest**](../Model/UserRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\UserResponse**](../Model/UserResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateUserInfo**
> \Swagger\Client\Model\UserInfoResponse updateUserInfo($user_id, $key, $body)

Update a user�s info



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = "user_id_example"; // string | The id of the user to update the info for.
$key = "key_example"; // string | The key of the user info to update.
$body = new \Swagger\Client\Model\UserInfoRequest(); // \Swagger\Client\Model\UserInfoRequest | 

try {
    $result = $apiInstance->updateUserInfo($user_id, $key, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->updateUserInfo: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**| The id of the user to update the info for. |
 **key** | **string**| The key of the user info to update. |
 **body** | [**\Swagger\Client\Model\UserInfoRequest**](../Model/UserInfoRequest.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\UserInfoResponse**](../Model/UserInfoResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateUserPicture**
> updateUserPicture($user_id)

Updating a user�s picture

The request should be of type multipart/form-data. There should be a single file-part included with the binary value of the picture. On top of that, the following additional form-fields can be present:  mimeType: Optional mime-type for the uploaded picture. If omitted, the default of image/jpeg is used as a mime-type for the picture.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Swagger\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = "user_id_example"; // string | The id of the user to get the picture for.

try {
    $apiInstance->updateUserPicture($user_id);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->updateUserPicture: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**| The id of the user to get the picture for. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

