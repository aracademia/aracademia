<?php
/**
 * User: rrafia
 * Date: 7/19/14
 */

namespace Aracademia\Validators;

use Illuminate\Validation\Factory as Validator;

abstract class FormValidator {

    /**
     * @var \Illuminate\Validation\Factory
     */
    protected $validator;
    protected $validation;

    public function __construct(Validator $validator)
    {
        $this->validator = $validator;
    }

    public function validate(array $formData)
    {
        $this->validation = $this->validator->make($formData, $this->getValidationRules());
        if($this->validation->fails())
        {
            throw new FormValidationException('Validation failed', $this->getValidationErrors());
        }
    }

    protected  function getValidationRules()
    {
        return $this->rules;
    }

    protected function getValidationErrors()
    {
        return $this->validation->errors();
    }

} 