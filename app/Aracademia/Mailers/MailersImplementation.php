<?php
/**
 * User: rrafia
 * Date: 7/19/14
 */

namespace Aracademia\Mailers;


class MailersImplementation implements MailersInterface {
    public function sendTo($user, $subject, $view, $data = [])
    {
        \Mail::queue($view, $data, function($message) use($user, $subject)
        {
            $message->to($user->email, $user->fullName)
                ->subject($subject);
        });
    }
} 