

		var Xdestino = null;
		var Ydestino = null;
		var ac = new usig.AutoCompleter('donde', {
       		rootUrl: '',
       		skin: 'usig4',
       		onReady: function() {
       			$('#donde').val('').focus();
       		},
       		afterSelection: function(option) {
           		if (option instanceof usig.Direccion || option instanceof usig.inventario.Objeto) {
           			//$('#donde').val('');
           		  	$('#borrar').show();
           		  	var miGeoCoder = new usig.GeoCoder;
           		  	
           		  	miGeoCoder.geoCodificarDireccion(option, function(punto){ 
						$.getJSON("http://ws.usig.buenosaires.gob.ar/rest/convertir_coordenadas?x="+punto.getX()+"&y="+punto.getY()+"&output=lonlat", function(data){
							Xdestino=data.resultado.x;
							Ydestino=data.resultado.y;
								$('#x').html(data.resultado.x);
           		  				$('#y').html(data.resultado.y);
						});
						
					}, function(){ alert("fuck");});
           		  	
           		}
       		}
       	});
       	
       	
       	//OBTENGO LAS COORDENADAS DEL LUGAR DONDE ESTOY
       	var watchID = null;
       	var options = { frequency: 3000 };
        watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
         
        function onSuccess(position) {
	        $('#coordenadas').html('Latitud: ' + position.coords.latitude + '<br />' + 'Longitud: ' + position.coords.longitude     + '<br />' + '<hr />');
	        if(Math.sqrt(Math.pow(Xdestino-position.coords.latitude,2)+Math.pow(Ydestino-position.coords.longitude,2))<0.0576974 /*200 metros */){
	        	$("#llegaste").html('Arribaaaa!!!!');
	        	
	        }else{
		     	$("#llegaste").html('');
        	}
    	}
		
		 function clearWatch() {
       		 if (watchID != null) {
          		  navigator.geolocation.clearWatch(watchID);
           			 watchID = null;
        	}
  		 }
	
	    // La función 'callback' onError recibe un objeto `PositionError`.
	    //
	    function onError(error) {
	      alert('código: '  + error.code    + '\n' +
	            'mensaje: ' + error.message + '\n');
	    }

   

     
