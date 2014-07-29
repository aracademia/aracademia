<?php
/**
 * User: rrafia
 * Date: 7/19/14
 */

namespace Aracademia\Validators\Forms;

use Aracademia\Validators\FormValidator;

class contactForm extends FormValidator{
    protected $rules = [
        'fullName'=>'required',
        'email'=>'required|email',
        'msg'=>'required',
        'recaptcha_response_field'=>'required|recaptcha'
    ];
} 