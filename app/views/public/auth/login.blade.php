@section('title')
الدخول
@stop

@section('content')
    <section class="container wrapper text-right contactDetails">
        <hr class="vertical-space1">
        <div class="col-lg-5 center-block authBox">
            <div class="text-center">
                <img src="/img/members/loginUsers.png" alt="Login Users"/>
            </div>
            <hr/>
            {{Helpers::displayMessage(Session::get('sentryError'), Session::get('success'))}}
            {{Form::open(array('url'=>'/login','role'=>'form'))}}

            <div class="form-group">
                {{Form::label('email',' البريد الإلكتروني ')}}
                {{Form::email('email', null, array('class'=>'form-control','required'=>'required','placeholder'=>' البريد الإلكتروني '))}}
                {{Helpers::displayError('email', $errors)}}
            </div>
            <div class="form-group">
                {{Form::label('password',' الكلمة السرية ')}}
                {{Form::password('password', array('class'=>'form-control','required'=>'required','placeholder'=>'  الكلمة السرية '))}}
                {{Helpers::displayError('password', $errors)}}
            </div>
            {{Form::submit('أدخل',array('class'=>'btn btn-primary btn-block','name'=>'submit'))}}
            {{Form::close()}}
            <hr/>
            <div class="text-right">
                <ul style="list-style: none;">
                    <li><a href="/register"> طالب جديد ؟ قم بالتسجيل </a></li>
                    <li><a href="/reminder"> نسيت الكلمة السرية ؟ </a></li>
                    <li><a href="/reactivate"> لم تصلك الرسالة لتفعيل حسابك ؟  </a></li>
                </ul>
            </div>
        </div>
        <hr class="vertical-space1">
    </section>


@stop