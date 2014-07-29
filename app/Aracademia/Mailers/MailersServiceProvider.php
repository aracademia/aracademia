<?php
/**
 * User: rrafia
 * Date: 7/19/14
 */

namespace Aracademia\Mailers;

use Illuminate\Support\ServiceProvider;


class MailersServiceProvider extends ServiceProvider {
    public function register()
    {
        $this->app->bind(
            'Aracademia\Mailers\MailersInterface',
            'Aracademia\Mailers\MailersImplementation'
        );
    }
} 