@section('title')
التذكير بالكلمة السرية
@stop

@section('content')
    <section class="container wrapper text-right contactDetails">
        <hr class="vertical-space1">
        <div class="col-lg-5 center-block authBox">
            <div class="text-center">
                <img src="/img/reminder.png" alt="Password Reminder"/>
            </div>
            <hr/>
            {{Helpers::displayMessage(Session::get('sentryError'), Session::get('success'))}}
            {{Form::open(array('url'=>'/reminder','role'=>'form'))}}

            <div class="form-group">
                {{Form::label('email',' البريد الإلكتروني ')}}
                {{Form::email('email', null, array('class'=>'form-control','required'=>'required','placeholder'=>' البريد الإلكتروني '))}}
                {{Helpers::displayError('email', $errors)}}
            </div>

            {{Form::submit(' أرسل ',array('class'=>'btn btn-primary btn-block','name'=>'submit'))}}
            {{Form::close()}}
            <hr/>
            <div class="alert alert-warning text-center">
                التذكير بالكلمة السرية
            </div>
        </div>
        <hr class="vertical-space1">
    </section>


@stop