<?php
/**
 * User: rrafia
 * Date: 7/27/14
 */

namespace Aracademia\Users\Login;

use Aracademia\Validators\FormValidator;

class ValidatePassChangeForm extends FormValidator {
    protected $rules = [
        'password'     =>  'required|min:8|confirmed',
        'password_confirmation' =>  'required'
    ];
} 