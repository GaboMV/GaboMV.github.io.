
function cargarDatos(){
    document.getElementById('t01').innerHTML=`<table id="t01" style="width: 520px;" >
                                               
                                                <thead>
        <tr>
          <th id="tf-1" value="0">x1</th>
          <th>x2</th>
      
  
          <th>Z</th>
         
        </tr>
      </thead></table>`;


   var x1=0;
    var x2=0;
    var z=1000;
var zc=0;


    var nmi = document.getElementById("id-m").value;
    var ahora = new Date();
    var milisegundos = ahora.getMilliseconds()/1000;
    console.log(milisegundos)
    for (var ci=1; ci <= nmi; ci++){




        var seed= (Math.random()*milisegundos).toFixed(4);;
        console.log(seed)//* (9999 - 1000 + 1)) + 1000);
         //* (99 - 100 + 1)) + 100);
        a = Math.round(Math.random() * 20);
        // System.out.println("seed: "+seed);
        let randArray = generar(a, 1024, seed,2);
        var rx1c=(randArray[0]).toFixed(4);;
        var rx2c = (randArray[1]).toFixed(4);;

        console.log("*******************");
        console.log("seed:"+seed);
        console.log("rx1:"+rx1c);
        console.log("rx2:"+rx2c);
        var x1c=Math.round(1000*rx1c);
        var x2c = Math.round(5+(100-5)*rx2c);

        console.log("x1c:"+x1c);
        console.log("x2c:"+x2c);
        if ((6*x1c+3*x2c>=200)&&(3*x1c+5*x2c>=180)){
            zc=2.5*x1c+2*x2c;
            if (zc<z){
                z=zc;
                x1=x1c;
                x2=x2c;
                console.log("*x1:"+x1);
                console.log("*x2:"+x2);
                console.log("*z:"+z);



            }
        }
        if (ci==nmi){
            console.log("x1:"+x1);
            console.log("x2:"+x2);
            console.log("z:"+z);
            var fila = `
    <tr>
        <td>${x1}</td>
        <td>${x2}</td>
    
     
        <td>${z}</td>
        
    </tr>`;
            document.getElementById('t01').innerHTML+=fila;


        }
        console.log(ci+"x1:"+x1);
        console.log(ci+"x2:"+x2);
        console.log(ci+"z:"+z);

    }






}








function generar( a,  quantity, seed,  limit){
    // System.out.println(a + " " + quantity + " " + seed);
    var x = seed;
    var m = Math.pow(2,  (Math.log(quantity) / Math.log(2) )+ 2);
    var r;
    a = a*8 + 5;
    // System.out.println("m: " + m+ " a: " + a+ " x: " + x);
   let randArray = [];
    for (var i = 0; i < limit; i++) {
        x = (a * x) % m;
        // System.out.println((a * x) % m);
        r = x / (m - 1);
        randArray.push(r);
    }
    return randArray;
}






