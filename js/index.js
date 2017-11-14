
var dd=5*60*1000
function l(name,pwd,time){
	setTimeout(function(){
		document.querySelector('input[type=email]').value=name
		document.querySelector('#identifierNext').click()
		setTimeout(function(){
			document.querySelector('input[type=password]').value=pwd
			document.querySelector('#passwordNext').click()
			setTimeout(function(){
				location.reload()
			},dd)
		},time)
	},time)
}

//登录
function login(name,pwd,time){
	if(document.querySelector('.mUbCce.fKz7Od.YYBxpf.KEavsb')){
		document.querySelector('.mUbCce.fKz7Od.YYBxpf.KEavsb').click()
		setTimeout(function(){
			document.querySelector('#identifierLink').click()
			setTimeout(function(){
				l(name,pwd,time)
			},time)						
		},time)
	}
	else if(document.querySelector('#identifierLink')){
		document.querySelector('#identifierLink').click()
		setTimeout(function(){
				l(name,pwd,time)
		},time)
	}else{
		l(name,pwd,time)
	}
}
function setCookie(_name, _value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = _name + "=" + escape(_value) + ";expires=" + exp.toGMTString()+";domain=google.com";
}
function init(){
	// lushyuliya7@gmail.com  ocytynyj5
	// olesya.lih@gmail.com  ZxRr7MdMr8
	// milbatoeva7@gmail.com ziharisu1
	// samusenkoe4@gmail.com Rtzse6eegu
    $.get('https://apptest.gogogame.com/myapi/index.php?a=init_account',function(data){
    	if(data.code===1){
        	setCookie('info',encodeURI(JSON.stringify(data)))
        	login(data.u,data.p,3000)
    	}
    })

    //login('olesya.lih@gmail.com','ZxRr7MdMr8',3000)
}
$(function(){
	init()
})
