<?php 
$I = new FunctionalTester($scenario);

$I->am('a guest');
$I->wantTo('contact Aracademia office');

$I->amOnPage('/contactus');
$I->fillField("fullName","Rachid");
$I->fillField("email","rafia");
$I->fillField("msg","My Message");
$I->fillField("recaptcha_response_field",'Value');

$I->click('submit');
$I->seeInCurrentUrl('/contactus');
$I->see('Email sent');
