$(function () {
	
	var cnt = 1;
	var url = window.location.pathname;

	$('#btn-d').click(function(){
		alert(url);
		if(cnt == 3){
			cnt = 1;
		}else{
			cnt++;
		}
		switch(cnt){
		case 1:
			$('#dsp-img').attr('src','imgs/bs1.jpg');
			break;
		case 2:
			$('#dsp-img').attr('src','imgs/bs2.jpg');
			break;
		case 3:
			$('#dsp-img').attr('src','imgs/bs3.jpg');
			break;
	}
	});

	$('#btn-e').click(function(){
		if(cnt == 1){
			cnt = 3;
		}else{
			cnt--;
		}
		switch(cnt){
		case 1:
			$('#dsp-img').attr('src','imgs/bs1.jpg');
			break;
		case 2:
			$('#dsp-img').attr('src','imgs/bs2.jpg');
			break;
		case 3:
			$('#dsp-img').attr('src','imgs/bs3.jpg');
			break;
	}
	});

	

})