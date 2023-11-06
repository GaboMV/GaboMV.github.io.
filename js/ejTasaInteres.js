
function cargarDatos() {
    document.getElementById('t01').innerHTML = `<table id="t01" style="width: 520px;" >
                                               
                                                <thead>
        <tr>
          <th id="tf-1" value="0">%I</th>
          <th>K</th>
      
  
         
        </tr>
      </thead></table>`;



    var j = 0

    var td = Number(document.getElementById("td").value);
    var k = Number(document.getElementById("k").value);
    var i = (Number(document.getElementById("i").value))/100;


    for (var ca = 1; ca <= td; ca++) {
        j = Number(k * i);
        k = Number(k + j);
        console.log("j:"+j);
        console.log("k:"+k);
        if (ca==td){


            var fila = `
    <tr>
        <td>${j}</td>
        <td>${k}</td>
    
     
        
        
    </tr>`;
            document.getElementById('t01').innerHTML+=fila;


        }

    }




}


