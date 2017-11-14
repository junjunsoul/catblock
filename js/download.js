
function  getCookie(_name) {
    var arr = document.cookie.match(new RegExp("(^| )" + _name + "=([^;]*)(;|$)"));
    if (arr != null) {
        return (arr[2]);
    } else {
        return "";
    }
}
function logout(time){
    setTimeout(function(){
        document.querySelector('#gb_71').click()//注销
    },time)
}
//下载
function download(time){
	if(document.getElementById("gb_70")){
		location.href="https://accounts.google.com/signin"
	}else{
        var info=decodeURIComponent(decodeURIComponent(getCookie('info')))
        if(info){
            info=JSON.parse(info)
            document.getElementById("gbqfq").value=info.keyword
        	document.getElementById("gbqfb").click()//点击查询
            if(info.isDownLoad){//是否下载
                setTimeout(function(){
                    if(!$('a[title="'+info.dName+'"]')[0]){//判断应用是否存在
                        console.log('无:'+info.dName+'应用')
                        logout(info.interval)
                        return
                    }
                	$('a[title='+info.dName+']')[0].click()
                	setTimeout(function(){
                		document.querySelector('.apps.is_not_aquired_or_preordered button').click()//进入下载页面
                		setTimeout(function(){
                			document.querySelector('#purchase-ok-button').click()//点击安装
                            logout(info.interval)
                		},time)
                	},time)
                },time)
            }else{
                logout(info.interval)
            }
        }
    }
}
$(function(){
    setTimeout(function(){
       download(3000) 
   },3000)	   
})