<?php namespace Aracademia\Users;

use Illuminate\Support\ServiceProvider;

class UsersServiceProvider extends ServiceProvider {

    public function register()
    {
        $this->app->bind(
            'Aracademia\Users\Register\RegisterInterface',
            'Aracademia\Users\Register\RegisterImplementation'
        );
        $this->app->bind(
            'Aracademia\Users\Login\LoginInterface',
            'Aracademia\Users\Login\LoginImplementation'
        );
    }

}