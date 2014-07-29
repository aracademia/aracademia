<?php
$data = array(
    'title'         =>'تفعيل حسابك',
    'headerText'    =>'خطوة أخرى واحدة فقط',
    'fullName'      =>$fullName,
    'clickBelow1'   =>'المرجو الضغط أسفله لتفعيل حسابك',
    'buttonUrl'     =>'http://aracademia.app:8000/activate/'.$id.'/'.$activationLink,
    'buttonText'    =>'فعل حسابك',
    'clickBelow2'   =>'إن كانت قد وصلتك هذه الرسالة بالخطأ وتريد أن تلغي التسجيل المرجو الضغط أسفله',
    'buttonUrl2'    =>'http://aracademia.app:8000/cancelActivation/'.$id.'/'.$activationLink,
    'buttonText2'   =>'إلغاء التسجيل'

);
?>

{{HTML::emailTemplate($data)}}