<?php
/**
 * User: rrafia
 * Date: 7/27/14
 */

namespace Aracademia\Users\Login;

use Aracademia\Validators\FormValidator;

class ValidatePassReminderForm extends FormValidator {
    protected $rules = [
        'email'     =>  'required|email'
    ];
} 