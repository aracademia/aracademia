<?php

use Aracademia\Users\Login\LoginInterface;
use Aracademia\Users\Login\ValidateLoginForm;
use Aracademia\Users\Login\ValidatePassChangeForm;
use Aracademia\Users\Login\ValidatePassReminderForm;
use Aracademia\Users\Register\RegisterInterface;
use Aracademia\Users\Register\ValidateReActivateForm;
use Aracademia\Users\Register\ValidateRegisterForm;

class AuthController extends \BaseController {

    protected $layout = 'layouts.default';
    /**
     * Login validation
     * @var
     */
    private $validateLoginForm;
    /**
     * @var Aracademia\Users\Login\LoginInterface
     */
    private $login;
    /**
     * @var Aracademia\Users\Login\ValidatePassReminderForm
     */
    private $validatePassReminderForm;
    /**
     * @var Aracademia\Users\Login\ValidatePassChangeForm
     */
    private $validatePassChangeForm;
    /**
     * @var Aracademia\Users\Register\ValidateRegisterForm
     */
    private $validateRegisterForm;
    /**
     * @var Aracademia\Users\Register\RegisterInterface
     */
    private $register;
    /**
     * @var Aracademia\Users\Register\ValidateReActivateForm
     */
    private $validateReActivateForm;

    function __construct(ValidateLoginForm $validateLoginForm, ValidateRegisterForm $validateRegisterForm, ValidatePassReminderForm $validatePassReminderForm, ValidateReActivateForm $validateReActivateForm, ValidatePassChangeForm $validatePassChangeForm, LoginInterface $login, RegisterInterface $register)
    {

        $this->validateLoginForm = $validateLoginForm;
        $this->login = $login;
        $this->validatePassReminderForm = $validatePassReminderForm;
        $this->validatePassChangeForm = $validatePassChangeForm;
        $this->validateRegisterForm = $validateRegisterForm;
        $this->register = $register;
        $this->validateReActivateForm = $validateReActivateForm;
    }

    public function register()
    {
        $this->layout->content = View::make('public.auth.register');
    }

    public function postRegister()
    {
        $this->validateRegisterForm->validate(Input::all());

        return $this->register->register(Input::all());
    }

    public function activate($id, $code)
    {
        return $this->register->activate($id, $code);
    }

    public function cancelActivation($id, $code)
    {
        return $this->register->cancelActivation($id, $code);
    }

    public function reSendActivation()
    {
        $this->layout->content = View::make('public.auth.reactivate');
    }

    public function postReSendActivation()
    {
        $this->validateReActivateForm->validate(Input::all());

        return $this->register->reactivate(Input::get('email'));
    }

    public function login()
    {
        $this->layout->content = View::make('public.auth.login');
	}

    public function postLogin()
    {
        $this->validateLoginForm->validate(Input::all());

        return $this->login->login(Input::all());
    }

    public function logout()
    {
        Sentry::logout();
        return Redirect::to("/");
    }

    public function passReminder()
    {
        $this->layout->content = View::make('public.auth.passReminder');
    }

    public function postPassReminder()
    {
        $this->validatePassReminderForm->validate(Input::all());
        //dd(Input::get('email'));
        return $this->login->passwordReminder(Input::get('email'));
    }

    public function passChange($id, $resetCode)
    {
        $this->layout->content = View::make('public.auth.passChange', compact('id','resetCode'));
    }

    public function postPassChange($id, $resetCode)
    {
        $this->validatePassChangeForm->validate(Input::all());

        return $this->login->passwordChanger($id, $resetCode, Input::get('password'));
    }

    public function cancelPassChange($id, $resetCode)
    {
        return $this->login->cancelPasswordChanger($id, $resetCode);
    }



}