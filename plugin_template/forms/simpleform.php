<?php
//moodleform is defined in formslib.php
require_once("$CFG->libdir/formslib.php");
 
class simplehtml_form extends moodleform {
    //Add elements to form
    public function definition() {
        global $CFG;
 
        $mform = $this->_form; // Don't forget the underscore! 
 
        $mform->addElement('text', 'email', get_string('email')); // Add elements to your form
        $mform->setType('email', PARAM_NOTAGS);                   //Set type of element
        $mform->setDefault('email', 'Bitte Email eingeben');        //Default value

		$mform->addElement('text', 'name', get_string('name'));
		$mform->setType('name', PARAM_NOTAGS);
        $mform->setDefault('name', 'Bitte Namen eingeben');

        // error_log("TEST FROM INSIDE FORM");
        
        $mform->addElement('hidden', 'id');
        $mform->setType('id', PARAM_INT);

        $mform->addElement('submit', 'btnSubmit', 'Absenden und Prozess starten');

        // error_log("TEST FROM AFTER SUBMIT IN FORM");

    }
    //Custom validation should be added here
    function validation($data, $files) {
        return array();
    }
}