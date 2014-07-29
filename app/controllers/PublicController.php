<?php

use Aracademia\Mailers\MailersInterface as Mailer;
use Aracademia\Validators\Forms\contactForm;

class PublicController extends BaseController {

    protected $layout = 'layouts.default';
    /**
     * @var
     */
    private $mailer;
    /**
     * @var Aracademia\Validators\Forms\contactForm
     */
    private $contactForm;

    public function __construct(Mailer $mailer, contactForm $contactForm)
    {

        $this->mailer = $mailer;
        $this->contactForm = $contactForm;
    }


	public function index()
    {
        $this->layout->content = View::make('public.home');
    }

    public function contactus()
    {
        $this->layout->content = View::make('public.contactus');
    }

    public function postContactus()
    {
        $this->contactForm->validate(Input::all());

        $user = $this->recipient();

        $formInputs = $this->inputs();

        $this->mailer->sendTo($user,'Aracademia سؤال من ','emails.contactus',$formInputs);

        return Redirect::back()->withSuccess('تم الإرسال بنجاح');
    }

    public function advertise()
    {
        $this->layout->content = View::make('public.advertise');
    }

    public function postAdvertise()
    {
        $this->contactForm->validate(Input::all());

        $user = $this->recipient();

        $formInputs = $this->inputs();

        $this->mailer->sendTo($user,' Aracademia  طلب الإشهار في ','emails.contactus',$formInputs);

        return Redirect::back()->withSuccess('تم الإرسال بنجاح. سوف يتم الإتصال بك في أقرب وقت ممكن');
    }

    public function recipient()
    {
        $userArray = ['email'=>'rrafiatech@gmail.com','fullName'=>'Rachid Rafia'];
        return Helpers::arrayToObject($userArray);

    }

    public function inputs()
    {
        return $formInputs = [
            'fullName'=>Input::get('fullName'),
            'email'=>Input::get('email'),
            'msg'=>Input::get('msg')
        ];
    }

}
