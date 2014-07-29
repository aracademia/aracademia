<?php

namespace Aracademia\Users;

use Aracademia\Mailers\MailersInterface as Mailers;

class UsersMailer{


    /**
     * @var \Aracademia\Mailers\MailerImplementation
     */
    protected $mailers;

    function __construct(Mailers $mailers)
    {
        $this->mailers = $mailers;
    }

    public function welcome($user, $activationCode)
    {
        $view = 'emails.auth.activation';
        $subject = 'المرجو تفعيل حسابك';
        $data = ['activationLink'=>$activationCode,'id'=>$user->id, 'fullName'=>$user->first_name];

        $this->mailers->sendTo($user, $subject, $view, $data);
    }

    public function passwordReminder($user, $resetCode)
    {
        $view = 'emails.auth.reminder';
        $subject = 'تغيير الكلمة السرية';
        $data = ['resetCode'=>$resetCode,'id'=>$user->id, 'fullName'=>$user->first_name];

        $this->mailers->sendTo($user, $subject, $view, $data);
    }
} 