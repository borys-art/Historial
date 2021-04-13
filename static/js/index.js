//https://www.eclipse.org/paho/clients/js/

function Historial_1() {
	//alert("led on");
	console.log("Historial 1");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("Historial 1");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);
  
}
function Historial_2(){	
	//alert("led off");
	console.log("Historial 2");
	message = new Paho.MQTT.Message("historial2");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  

  var options = {
   useSSL: false,
    userName: "luisrod-234@hotmail.com",
    password: "Embebidos2021",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("luisrod-234@hotmail.com/test");
    client.subscribe("luisrod-234@hotmail.com/test2");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "luisrod-234@hotmail.com/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  y=message.payloadString;
	  if(y=="El sensor 1 se encuentra encendido"){
	  document.getElementById("historial").innerHTML=y;	  
	  } else if(y=="hola, el LED1 se encuentra apagado"){
	  document.getElementById("led1").innerHTML="OFF";
	  document.getElementById("historial").innerHTML="";
	  document.getElementById("pw").value="";  
	  } else if(y=="hola, el LED2 se encuentra encendido"){
	  document.getElementById("led2").innerHTML="ON";
	  document.getElementById("historial").innerHTML="";
	  document.getElementById("pw").value="";	  
	  }else if(y=="hola, el LED2 se encuentra apagado"){
	  document.getElementById("led2").innerHTML="OFF";
	  document.getElementById("historial").innerHTML="";
	  document.getElementById("pw").value="";	  
	  }else{
	  document.getElementById("historial").innerHTML=y;
	  document.getElementById("pw").value="";	  
	  }
	  
  }
  
