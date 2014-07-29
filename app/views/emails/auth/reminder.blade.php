<?php
$data = array(
    'title'         =>'تغيير الكلمة السرية',
    'headerText'    =>'طلب تغيير الكلمة السرية',
    'fullName'      =>$fullName,
    'clickBelow1'   =>'المرجو الضغط أسفله لتغيير كلمتك السرية',
    'buttonUrl'     =>'http://aracademia.app:8000/change-password/'.$id.'/'.$resetCode,
    'buttonText'    =>'إضغط هنا',
    'clickBelow2'   =>'إن كانت قد وصلتك هذه الرسالة بالخطأ المرجو الضغط أسفله',
    'buttonUrl2'    =>'http://aracademia.app:8000/cancel-change-password/'.$id.'/'.$resetCode,
    'buttonText2'   =>'إلغاء تغيير كلمة السر  '

);
?>

{{HTML::emailTemplate($data)}}
