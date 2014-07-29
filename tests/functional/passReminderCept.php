<?php 
$I = new FunctionalTester($scenario);

$I->am('a member');
$I->wantTo('to reset my password');

$I->amOnPage('/reminder');
$I->fillField('email','rrafiatech@gmail.com');
$I->click('submit');
$I->seeInDatabase('users', ['email'=>'rrafiatech@gmail.com']);
$I->amOnPage('/reminder');