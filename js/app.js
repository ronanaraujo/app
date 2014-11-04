$(function(){
	var numero;

	$(document).on('click','#mostrar-dolar',function(){
		$.ajax({
			type: "GET",
			url: "http://rate-exchange.appspot.com/currency?from=USD&to=BRL",
			success: function(data) {
	            	console.log(window.plugin.notification.local.add({ message: 'A cotação do dólar está a ' + data.rate + ' reais'}));
	        	},
	        dataType: "jsonp",
	        error: function(jqXHR, textStatus, errorThrown) {
	            alert(jqXHR.status);
	        },
		})
	});

	$(document).on('click','#verificar',function(){
		numero = $('#numero').val();
		if (numero < 0 || numero == '') {
			alert('Por favor digite um valor válido');
			return false;
		}
		if ((numero%6) == 0) {
			alert("O número "+numero+" é multiplo de 6");
		}
		else{
			alert("O número "+numero+" não é multiplo de 6");
		}
		return false;
	});
});
