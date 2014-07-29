@section('title')
تغيير الكلمة السرية
@stop

@section('content')
    <section class="container wrapper text-right contactDetails">
        <hr class="vertical-space1">
        <div class="col-lg-5 center-block authBox">
            <div class="text-center">
                <img src="/img/reminder.png" alt="Change Password"/>
            </div>
            <hr/>
            {{Helpers::displayMessage(Session::get('sentryError'), Session::get('success'))}}
            {{Form::open(array('url'=>'/change-password/'.$id.'/'.$resetCode,'role'=>'form'))}}

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

            {{Form::submit(' تغيير ',array('class'=>'btn btn-primary btn-block','name'=>'submit'))}}
            {{Form::close()}}
            <hr/>
            <div class="alert alert-warning text-center">
                إدخال كلمة سرية جديدة لحسابك
            </div>
        </div>
        <hr class="vertical-space1">
    </section>


@stop