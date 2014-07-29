<?php



Route::when('*', 'csrf', ['post','put','patch']);

/**
 * public routes
 */

route::get('/', 'PublicController@index');
Route::get('/contactus', 'PublicController@contactus');
Route::post('/contactus', 'PublicController@postContactus');

Route::get('/advertise', 'PublicController@advertise');
Route::post('/advertise', 'PublicController@postAdvertise');

//Authentication routes
Route::group(array('before'=>'loggedIn'), function()
{
    Route::get('/register', 'AuthController@register');
    Route::post('/register', 'AuthController@postRegister');

    Route::get('/activate/{id}/{code}', 'AuthController@activate');
    Route::get('/cancelActivation/{id}/{code}', 'AuthController@cancelActivation');

    Route::get('/login', 'AuthController@login');
    Route::post('/login', 'AuthController@postLogin');
    Route::get('/logout', 'AuthController@logout');

    Route::get('/reminder', 'AuthController@passReminder');
    Route::post('/reminder', 'AuthController@postPassReminder');

    Route::get('/change-password/{id}/{resetCode}', 'AuthController@passChange');
    Route::post('/change-password/{id}/{resetCode}', 'AuthController@postPassChange');

    Route::get('/cancel-change-password/{id}/{resetCode}', 'AuthController@cancelPassChange');

    Route::get('/reactivate', 'AuthController@reSendActivation');
    Route::post('/reactivate', 'AuthController@postReSendActivation');
});


/**
 * dashboard
 */
Route::group(array('before'=>'isLoggedIn'), function()
{
    Route::get('/dashboard', 'DashboardController@index');
});
