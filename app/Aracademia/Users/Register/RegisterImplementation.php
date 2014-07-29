<?php
/**
 * User: rrafia
 * Date: 7/27/14
 */

namespace Aracademia\Users\Register;

use Cartalyst\Sentry\Facades\Laravel\Sentry as Sentry;
use Cartalyst\Sentry\Users\UserExistsException as SentryUserExist;
use Cartalyst\Sentry\Users\UserAlreadyActivatedException as SentryUserIsActive;
use Cartalyst\Sentry\Users\UserNotFoundException as SentryUserNotFound;
use Cartalyst\Sentry\Groups\GroupNotFoundException as SentryGroupNotFound;
use Aracademia\Users\UsersMailer as Mailers;


class RegisterImplementation implements RegisterInterface{


    /**
     * @var \Cartalyst\Sentry\Facades\Laravel\Sentry
     */
    private $mailers;

    function __construct(Mailers $mailers)
    {
        $this->mailers = $mailers;
    }


    public function register(array $data)
    {
        try
        {
            $user = Sentry::createUser(array(
                'first_name'=>$data['firstName'],
                'last_name'=>$data['lastName'],
                'email'=>$data['email'],
                'password'=>$data['password'],
                'type'=>'student',
                'activated'=> false
            ));

            $studentsGroup = Sentry::findGroupById(1);

            $user->addGroup($studentsGroup);

            $activationCode = $user->getActivationCode();

            $this->mailers->welcome($user, $activationCode);

            return \Redirect::to('/login')->with('success',' لقد تم التسجيل بنجاح. المرجو الذهاب إلى بريدك الإلكتروني لتفعيل حسابك جزاك الله خيرا ');

        }
        catch (SentryUserExist $e)
        {
            return \Redirect::back()->withInput()->with('sentryError',' هذا المستخدم موجود. المرجو تسجيل مستخدم جديد ');
        }
        catch (SentryGroupNotFound $e)
        {
            return \Redirect::back()->withInput()->with('sentryError',' لم يتم العثور على المجموعة. المرجو الإتصال بالإداره ');
        }
    }

    public function activate($id, $code)
    {
        try
        {
            $user = Sentry::findUserById($id);

            if($user->attemptActivation($code))
            {
                return \Redirect::to("/login")->with('success',' لقد تم تفعيل حسابك بنجاح. يمكنك الدخول ');
            }
            else
            {
                return \Redirect::to('/login')->with('sentryError',' هناك خلل تقني في تفعيل حسابك المرجو الإتصال بالإدارة ');
            }

        }
        catch (SentryUserNotFound $e)
        {
            return \Redirect::to('/login')->with('sentryError',' المستخدم المراد تفعيله غير موجود ');
        }
        catch (SentryUserIsActive $e)
        {
            return \Redirect::to('/login')->with('sentryError',' تم تفعيل هذا الحساب مسبقا ');
        }
    }

    public function cancelActivation($id, $code)
    {
        try
        {
            $user = Sentry::findUserById($id);

            if($user->activation_code == $code)
            {
                $user->delete();
                return \Redirect::to("/register")->with('success',' تم حذف الحساب بنجاح ');
            }
            else
            {
                return \Redirect::to("/register")->with('sentryError',' هناك خلل تقني في حذف الحساب. المرجو الإتصال بالإدارة ');
            }

        }
        catch (SentryUserNotFound $e)
        {
            return \Redirect::to('/login')->with('sentryError',' المستخدم المراد حذفه غير موجود ');
        }
    }

    public function reactivate($email)
    {
        try
        {
            $user = Sentry::findUserByLogin($email);

            $activationCode = $user->getActivationCode();

            $this->mailers->welcome($user, $activationCode);

            return \Redirect::to('/login')->with('success',' لقد تم إرسال رسالة إلى بريدك الإلكتروني لتفعيل حسابك. جزاك الله خيرا ');
        }
        catch(SentryUserNotFound $e)
        {
            return \Redirect::back()->with('sentryError',' المستخدم المراد تفعيله غير موجود ');
        }
    }
}