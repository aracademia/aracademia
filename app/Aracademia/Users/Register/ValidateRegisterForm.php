<?php namespace Aracademia\Users\Register;

use Aracademia\Validators\FormValidator;

class ValidateRegisterForm extends FormValidator{
    protected $rules = [
        'firstName'=>'required',
        'lastName'=>'required',
        'email'=>'required|email',
        'password'=>'required|confirmed|min:8',
        'password_confirmation'=>'required',
        'recaptcha_response_field' => 'required|recaptcha',
        'terms'=>'required',
    ];
}