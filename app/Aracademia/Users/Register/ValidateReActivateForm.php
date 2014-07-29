<?php
/**
 * User: rrafia
 * Date: 7/27/14
 */

namespace Aracademia\Users\Register;


use Aracademia\Validators\FormValidator;

class ValidateReActivateForm extends FormValidator {
    protected $rules = [
        'email'     =>  'required|email'
    ];
} 