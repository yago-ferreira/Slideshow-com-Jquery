alert("Clique na imagem!");
$(function(){
	$('#i1').click(function(){
		$('#i1').hide();
		$('#i2').show();
	});

	$('#i2').click(function(){
		$('#i1').hide();
		$('#i2').hide();
		$('#i3').show();
	});

});