@section('title')
تسجيل عضو جديد
@stop

@section('content')

    <section class="container wrapper text-right contactDetails">
        <div class="hadith">
            <h2 style="text-align: center;"><img src="/img/icons/learn.png" alt="Learn"/> تسجل وابدإ التعلم الآن </h2>
        </div>
        <div class="col-lg-5">
            <h2 style="text-align: center;"> المرجو قراءة الشروط أسفله قبل التسجيل</h2>
            <ul style="list-style: none">
                <li>عدم إستعمال وتطبيق ما أتعلمه في هذا الموقع في أشياء لا ترضي الله عز وجل</li>
            </ul>
        </div>
        <div class="col-lg-7">
                <div class="panel panel-default">
                    <div class="panel-heading"><span class="glyphicon glyphicon-user"></span> إملئ الخانات أسفله للتسجيل  </div>
                    <div class="panel-body">
                        {{Helpers::displayMessage(Session::get('sentryError'), Session::get('success'))}}
                        {{Form::open(array('url'=>'/register','role'=>'form'))}}
                        <div class="form-group">
                            {{Form::label('firstName',' الاسم الأول ')}}
                            {{Form::text('firstName', null, array('class'=>'form-control','required'=>'required','placeholder'=>' الاسم الأول '))}}
                            {{Helpers::displayError('firstName', $errors)}}
                        </div>
                        <div class="form-group">
                            {{Form::label('lastName',' اسم العائلة ')}}
                            {{Form::text('lastName', null, array('class'=>'form-control','required'=>'required','placeholder'=>' اسم العائلة '))}}
                            {{Helpers::displayError('lastName', $errors)}}
                        </div>
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
                        <div class="form-group">
                            {{Form::label('password_confirmation','  إعادة الكلمة السرية   ')}}
                            {{Form::password('password_confirmation', array('class'=>'form-control','required'=>'required','placeholder'=>' إعادة الكلمة السرية  '))}}
                            {{Helpers::displayError('password_confirmation', $errors)}}
                        </div>
                       {{Form::recaptcha($errors)}}
                        <div class="form-group">
                            {{Form::label('','  لقد قرأت شروط التسجيل و أوافق عليها  ')}}
                            <br>
                            {{Form::checkbox('terms', 'Agree')}} موافق
                            {{Helpers::displayError('terms', $errors)}}
                        </div>
                        {{Form::submit('تسجل',array('class'=>'btn btn-primary ','name'=>'submit'))}}
                        {{Form::close()}}
                    </div>
                </div>
        </div>

    </section>

@stop