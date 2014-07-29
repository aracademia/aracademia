<?php
/**
 * User: rrafia
 * Date: 7/27/14
 */

namespace Aracademia\Users\Register;


interface RegisterInterface {
    public function register(array $data);

    public function activate($id, $code);

    public function cancelActivation($id, $code);

    public function reactivate($email);
} 