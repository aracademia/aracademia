<?php
/**
 * User: rrafia
 * Date: 7/27/14
 */

namespace Aracademia\Users\Login;


interface LoginInterface {
    public function login(array $inputs);

    public function passwordReminder($email);

    public function passwordChanger($id, $resetCode, $password);

    public function cancelPasswordChanger($id, $resetCode);
}