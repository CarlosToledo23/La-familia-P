function startclasificacion(){
    navigator.mediaDevices.getUserMedia({audio:true});
    clasificador = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/eiEQ08jR4/model.json", modelready);
}
function modelready(){
    clasificador.classify(gotResults);
}
function gotResults(error, results){
     if (error) {
        console.error(error);
    } else { 
        console.log(results);
        rojo = Math.floor(Math.random()*255)+1; 
        verde = Math.floor(Math.random()*255)+1;
        azul = Math.floor(Math.random()*255)+1;
        document.getElementById("resultadoetiqueta").innerHTML = "Escucho: "+ results[0].label;
        document.getElementById("resultadoconfia").innerHTML = "Presición: "+ (results[0].confidence *100).toFixed(2)+ "%";
        document.getElementById("resultadoetiqueta").style.color = "rgb("+ rojo + "," + verde +  ","+ azul +")";
        document.getElementById("resultadoconfia").style.color = "rgb("+ rojo  + "," + verde + "," + azul + ")";
        pedrin = document.getElementById("a1");
        pedro = document.getElementById("a2");
        pancho =  document.getElementById("a3");
        pancrasio = document.getElementById("a4");
        if (results[0].label == "Aplausos"){
            pedrin.src = "aliens-01.gif";
            pedro.src = "aliens-02.png";
            pancho.src = "aliens-03.png";
            pancrasio.src = "aliens-04.png";
        }else if (results[0].label == "Wui"){
            pancho.src="aliens-03.gif";
            pedrin.src="aliens-01.png";
            pedro.src="aliens-02.png";
            pancrasio.src = "aliens-04.png";
        }else if (results[0].label == "Chasquido"){
            pancrasio.src= "aliens-04.gif";
            pedrin.src= "aliens-01.png";
            pancho.src= " aliens-03.png";
            pedro.src= "aliens-02.png";
        } else {
            pedro.src="aliens-02.gif";
            pancrasio.src="aliens-04.png";
            pancho.src="aliens-03.png";
            pedrin.src="aliens-01.png";
        }
    }
}