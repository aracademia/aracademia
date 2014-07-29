<?php
/**
 * User: rrafia
 * Date: 7/19/14
 */

namespace Aracademia\Mailers;


interface MailersInterface {
    public function sendTo($user, $subject, $view, $data = []);
} 