$(function(){
    //表单级校验
    $('#btn').click(function () {
        var $user = $('#user');
        var $phoneNumber = $('#phoneNumber');
        var $pwd = $('#pwd');
        if(!testUser($user)){
        }
        if(!testNumber($phoneNumber)){
        }
        if(!testPwd($pwd)){
        }
    })
    function testUser(field) {
        var $data = $('#user'),
        $msg = $('#user-message');
        console.log($data.val());
        if(/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test($data.val()) && !/^[0-9]+$/.test($data.val()) ){
            $msg.html('');
        }
        else{
            $msg.html('仅支持中英文数字和下划线，且不支持纯数字！');
            $data.select();
            return false;
        }
    }
    function testNumber(field){
        var $data = $('#phoneNumber'),
        $msg = $('#phoneNumber-message');
        if(/^1[3|4|5|7|8][0-9]{9}$/.test($data.val()) ){
            $msg.html('');
        }
        else{
            $msg.html('手机号格式不正确');
            $data.select();
            return false;
        }
    }
    function testPwd(field){
        var $data = $('#pwd'),
        $msg = $('#pwd-message');
        if(/^[0-9]+$/.test($data.val()) || $data.val()===""){
            $msg.html('密码过于简单');
            $data.select();
            return false;
        }
        else{
            $msg.html('');
        }
    }
    //字段级校验
    //用户名
    $('#user').focusout(function(){
        var $data = $('#user'),
        $msg = $('#user-message');
        if(/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test($data.val()) && !/^[0-9]+$/.test($data.val()) ){
            $msg.html('');
        }
        else{
            $msg.html('仅支持中英文数字和下划线，且不支持纯数字！');
            $data.select();
            return false;
        }
    })
    //手机号
    $('#phoneNumber').focusout(function(){
        var $data = $('#phoneNumber'),
        $msg = $('#phoneNumber-message');
        if(/^1[3|4|5|7|8][0-9]{9}$/.test($data.val()) ){
            $msg.html('');
        }
        else{
            $msg.html('手机号格式不正确');
            $data.select();
            return false;
        }
    })
    //密码
    $('#pwd').focusout(function(){
        var $data = $('#pwd'),
        $msg = $('#pwd-message');
        if(/^[0-9]+$/.test($data.val())){
            $msg.html('密码过于简单');
            $data.select();
            return false;
        }
        else{
            $msg.html('');
        }
    })
    //验证码部分
    var $btn = $('#getBtn');
    var timer; 
    var num=6;
    $btn.click(function(){
        $btn.attr("disabled",'disabled');
        $btn.css("background","#eee")
        timer = setInterval(function(){
            num--;
            if(num===1){
                $('#ver-message').html('请求超时，请稍后再试。');
            }
            if(num===0){
                clearInterval(timer);
                $btn.val('获取验证码');
                $btn.removeAttr('disabled');
                $btn.css("background","#fff")
                num=6;
                $('#ver-message').html('');
            }
            else{
                $btn.val('('+num+'s)');
            }
        },1000);
    });
})
