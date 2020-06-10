<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Internal library of functions for module spam
 *
 * All the spam specific functions, needed to implement the module
 * logic, should go here. Never include this file from your lib.php!
 *
 * @package    mod_spam
 * @copyright  2016 Your Name <your@email.address>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

require_once(__DIR__ . '/lib/autoload.php');

defined('MOODLE_INTERNAL') || die();

$processDefinitionsApiInstance = null;
$processInstancesApiInstance = null;
$tasksApiInstance = null;
$formsApiInstance = null;

function create_api_instances() {
	// Configure HTTP basic authorization: basicAuth
	$config = Swagger\Client\Configuration::getDefaultConfiguration()
		->setUsername('kermit')
		->setPassword('kermit');

	global $engineApiInstance;
	$engineApiInstance = new Swagger\Client\Api\EngineApi(
		// If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
		// This is optional, `GuzzleHttp\Client` will be used as default.
		new GuzzleHttp\Client(),
		$config
	);

	global $processDefinitionsApiInstance;
	$processDefinitionsApiInstance = new Swagger\Client\Api\ProcessDefinitionsApi(
		// If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
		// This is optional, `GuzzleHttp\Client` will be used as default.
		new GuzzleHttp\Client(),
		$config
	);

	global $processInstancesApiInstance;
	$processInstancesApiInstance = new Swagger\Client\Api\ProcessInstancesApi(
		// If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
		// This is optional, `GuzzleHttp\Client` will be used as default.
		new GuzzleHttp\Client(),
		$config
	);

	global $tasksApiInstance;
	$tasksApiInstance = new Swagger\Client\Api\TasksApi(
		// If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
		// This is optional, `GuzzleHttp\Client` will be used as default.
		new GuzzleHttp\Client(),
		$config
	);

	global $formsApiInstance;
	$formsApiInstance = new Swagger\Client\Api\FormsApi(
		// If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
		// This is optional, `GuzzleHttp\Client` will be used as default.
		new GuzzleHttp\Client(),
		$config
	);
}

function spam_do_something_useful(array $things) {
    return new stdClass();
}

function spam_get_process_definition_id($processKey) {
	global $processDefinitionsApiInstance;

	$version = null; // int | Only return process definitions with the given version.
	$name = null; // string | Only return process definitions with the given name.
	$name_like = null; // string | Only return process definitions with a name like the given name.
	$key_like = null; // string | Only return process definitions with a name like the given key.
	$resource_name = null; // string | Only return process definitions with the given resource name.
	$resource_name_like = null; // string | Only return process definitions with a name like the given resource name.
	$category = null; // string | Only return process definitions with the given category.
	$category_like = null; // string | Only return process definitions with a category like the given name.
	$category_not_equals = null; // string | Only return process definitions which don�t have the given category.
	$deployment_id = null; // string | Only return process definitions with the given category.
	$startable_by_user = null; // string | Only return process definitions which are part of a deployment with the given id.
	$latest = "true"; // bool | Only return the latest process definition versions. Can only be used together with key and keyLike parameters, using any other parameter will result in a 400-response.
	$suspended = null; // bool | If true, only returns process definitions which are suspended. If false, only active process definitions (which are not suspended) are returned.
	$sort = "version"; // string | Property to sort on, to be used together with the order.
	try {
		$result = $processDefinitionsApiInstance->getProcessDefinitions($version, $name, $name_like, $processKey, $key_like, $resource_name, $resource_name_like, $category, $category_like, $category_not_equals, $deployment_id, $startable_by_user, $latest, $suspended, $sort);
		$process_definition_id = $result['data'][0]->id;

		return $process_definition_id;
	} catch (Exception $e) {
		echo 'Exception when calling ProcessDefinitionsApi->getProcessDefinitions: ', 	$e->getMessage(), PHP_EOL;
		return null;
	}
}

function spam_start_process($process_definition_id, $business_key) {
	global $processInstancesApiInstance;

	$requestArray = array(
		process_definition_id => $process_definition_id,
		business_key => $business_key
	);
	$body = new \Swagger\Client\Model\ProcessInstanceCreateRequest($requestArray); // \Swagger\Client\Model\ProcessInstanceCreateRequest | 

	// attempt to create instance for process
	try {
		$result = $processInstancesApiInstance->createProcessInstance($body);
		// get instance ID
		$process_instance_id = $result->getId();
		print_r($process_instance_id);
		return $process_instance_id;

	} catch (Exception $e) {
		echo 'Exception when calling ProcessInstancesApi->createProcessInstance: ', $e->getMessage(), PHP_EOL;
		return null;
	}
}

function spam_check_for_input_required($process_instance_id) {
	global $tasksApiInstance;
	try {
		$result = $tasksApiInstance->getTasks(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, $process_instance_id, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
		// print("PRINT TASKS CONNECTED TO PROCESS INSTANCE");
		$task_id = $result['data'][0]->id;
		$task_name = $result['data'][0]->name;
		$taskDefinitionKey = $result['data'][0]->taskDefinitionKey;
		print_r($result['data'][0]);
		return $task_id;

	} catch (Exception $e) {
		// echo 'Exception when calling TasksApi->getTasks: ', $e->getMessage(), PHP_EOL;
		echo "Nope, not yet.";
		return null;
	}
}

function spam_answer_input_required($task_id, $process_definition_id, $value1, $value2) {
	global $formsApiInstance;

	$formArray = array(
		action => "submit",
		task_id => $task_id,
		process_definition_id => $process_definition_id,
		properties => array(
			array(
				id => new_property_1,
				value => $value1
			),
			array(
				id => new_property_2,
				value => $value2
			)
		)
	);

	$body = new \Swagger\Client\Model\SubmitFormRequest($formArray); // \Swagger\Client\Model\SubmitFormRequest | 

	try {
		$result = $formsApiInstance->submitForm($body);
		print_r($result);
		return $result;
	} catch (Exception $e) {
		echo 'Exception when calling FormsApi->submitForm: ', $e->getMessage(), PHP_EOL;
		return null;
	}
}

function spam_get_process_instance_status($process_instance_id) {
	global $processInstancesApiInstance;

	try {
		$result = $processInstancesApiInstance->getProcessInstance($process_instance_id);
		print("PRINT INFO ABOUT PROCESS INSTANCE");
		print_r($result);
		return $result;

	} catch (Exception $e) {
		echo 'Exception when calling ProcessInstancesApi->getProcessInstance: ', $e->getMessage(), PHP_EOL;
		return null;
	}
}