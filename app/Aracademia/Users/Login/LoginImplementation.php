<?php
/**
 * User: rrafia
 * Date: 7/27/14
 */

namespace Aracademia\Users\Login;

use Cartalyst\Sentry\Facades\Laravel\Sentry as Sentry;
use Cartalyst\Sentry\Throttling\UserBannedException;
use Cartalyst\Sentry\Throttling\UserSuspendedException;
use Cartalyst\Sentry\Users\UserNotActivatedException;
use Cartalyst\Sentry\Users\UserNotFoundException;
use Cartalyst\Sentry\Users\WrongPasswordException;
use Aracademia\Users\UsersMailer as Mailers;


class LoginImplementation implements LoginInterface{


    /**
     * @var \Aracademia\Mailers\MailersInterface
     */
    private $mailers;

    function __construct(Mailers $mailers)
    {
        $this->mailers = $mailers;
    }

    public function login(array $inputs)
    {
        try{

            // Login credentials
            $credentials = array(
                'email'    => $inputs['email'],
                'password' => $inputs['password'],
            );

            // Authenticate the user
            $user = Sentry::authenticate($credentials, false);

            $groups = $user->getGroups();

            \Session::put('id', $user->id);
            \Session::put('email', $user->email);
            \Session::put('fullName', $user->fullName);
            \Session::put('type', $user->type);
            \Session::put('last_login', $user->last_login);
            // \Session::put('groupId', $groups->id);
            // \Session::put('groupName', $groups->name);



            return \Redirect::intended('dashboard');

        }catch (WrongPasswordException $e)
        {
            return \Redirect::back()->with('sentryError',' البريد الإلكتروني أو الكلمة السرية غير صحيحة. يرجى إعادة المحاولة ');
        }
        catch (UserNotFoundException $e)
        {
            return \Redirect::back()->with('sentryError',' البريد الإلكتروني أو الكلمة السرية غير صحيحة. يرجى إعادة المحاولة ');
        }
        catch (UserNotActivatedException $e)
        {
            return \Redirect::back()->with('sentryError',' هذا الحساب غير مفعل. المرجو تفعيل حسابك أو الإتصال بالإدارة ');
        }
        catch (UserSuspendedException $e)
        {
            return \Redirect::back()->with('sentryError',' هذا الحساب موقوف مؤقتا ');
        }
        catch (UserBannedException $e)
        {
            return \Redirect::back()->with('sentryError',' هذا الحساب موقوف ');
        }
    }

    public function passwordReminder($email)
    {
        try
        {
            // Find the user using the user email address
            $user = Sentry::findUserByLogin($email);

            // Get the password reset code
            $resetCode = $user->getResetPasswordCode();

            // Now you can send this code to your user via email for example.
            $this->mailers->passwordReminder($user, $resetCode);

            return \Redirect::back()->with('success','لقد تم إرسال رسالة إلى بريدك الإلكتروني. المرجو إتباع الخطوات في الرسالة لتغيير كلمتك السرية');
        }
        catch (UserNotFoundException $e)
        {
            return \Redirect::back()->with('sentryError',' هذا الحساب غير موجود ');
        }
    }

    public function passwordChanger($id, $resetCode, $password)
    {
        try
        {
            // Find the user using the user id
            $user = Sentry::findUserById($id);

            // Check if the reset password code is valid
            if ($user->checkResetPasswordCode($resetCode))
            {
                // Attempt to reset the user password
                if ($user->attemptResetPassword($resetCode, $password))
                {
                    $user->password = $password;

                    $user->save();

                    return \Redirect::to('/login')->with('success','لقد تم تغيير كلمتك السرية بنجاح. يمكنك الدخول الآن');
                }
                else
                {
                    return \Redirect::back()->with('sentryError','هناك خلل تقني في تغيير كلمتك السرية، المرجو الإتصال بالإدارة');
                }
            }
            else
            {
                return \Redirect::to('/login')->with('sentryError',' الرمز المؤقت لتغيير كلمتك السرية خاطئ. المرجو المحاولة مجددا أو الإتصال بالإدارة ');
            }
        }
        catch (UserNotFoundException $e)
        {
            return \Redirect::back()->with('sentryError',' هذا الحساب غير موجود ');
        }
    }

    public function cancelPasswordChanger($id, $resetCode)
    {
        try
        {
            // Find the user using the user id
            $user = Sentry::findUserById($id);

            // Check if the reset password code is valid
            if ($user->checkResetPasswordCode($resetCode))
            {
                $user->reset_password_code = NULL;

                $user->save();

                return \Redirect::to('/login')->with('success','لقد تم حذف الطلب لتغيير كلمة السر لهذا الحساب. جزاك الله خيرا');
            }
            else
            {
                return \Redirect::to('/login')->with('sentryError','  الرمز المؤقت خاطئ. المرجو الإتصال بالإدارة وشكرا  ');
            }
        }
        catch (UserNotFoundException $e)
        {
            return \Redirect::back()->with('sentryError',' هذا الحساب غير موجود ');
        }
    }
}