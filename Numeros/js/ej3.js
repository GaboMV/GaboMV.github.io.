
function cargarDatos(){
    document.getElementById('t01').innerHTML=`<table id="t01" style="width: 520px;" >
                                               
                                                <thead>
        <tr>
          <th id="tf-1" value="0">ganancia</th>
          <th>Victorias</th>
      
  
          <th>derrotas</th>
         
        </tr>
      </thead></table>`;

var gta=0
    var cv=0
    var cd=0
    var nl = Number(document.getElementById("nl").value);
    var cjue = Number(document.getElementById("cjue").value);
    var gap = Number(document.getElementById("gap").value);


    for (var cl=1; cl <= nl; cl++){

        var ahora = new Date();
        var milisegundos = ahora.getMilliseconds()/1000;


        var seed1= (Math.random()).toFixed(4);
        //* (9999 - 1000 + 1)) + 1000);
        //* (99 - 100 + 1)) + 100);
        var seed2= (Math.random()).toFixed(4);


        var seed3= (Math.random()).toFixed(4);


        if((seed1 <= 0.5 && seed2 <= 0.5 && seed3 <= 0.5)||(seed1 > 0.5 && seed2 > 0.5 && seed3 > 0.5)){
            gta=gta+gap-cjue;
            cv=cv+1
            console.log("victoria"+gta)
        }
        else {
            gta=gta-cjue
            cd=cd+1
            console.log("derrota"+gta)
        }


        if (cl==nl){
            var fila = `
    <tr>
        <td>${gta}</td>
        <td>${cv}</td>
        <td>${cd}</td>
    </tr>`;
            document.getElementById('t01').innerHTML+=fila;


        }

        }





}








function generar( a,  quantity, seed,  limit){
    // System.out.println(a + " " + quantity + " " + seed);
    var x = seed;
    var m = Math.pow(2,  (Math.log(quantity)));
    var r;
    a = a*8 + 5;
    // System.out.println("m: " + m+ " a: " + a+ " x: " + x);


        x = (a * x) % m;
        // System.out.println((a * x) % m);
        r = x ;

    return r;
}






