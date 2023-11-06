


function sugarProblem () {


    document.getElementById('t01').innerHTML=`<table id="t01" style="width: 520px;" >
                                               
                                                <thead>
        <tr>
          <th id="tf-1" value="0">Ganancia neta</th>
          <th>demanda insatisfecha</th>
      
  
          <th>capacidad</th>
         
        </tr>
      </thead></table>`;


    var simulations = Number(document.getElementById("simu").value);
    var nmd = Number(document.getElementById("nmd").value);
    var cbod = Number(document.getElementById("cbod").value);
    var creord = Number(document.getElementById("creord").value);

    var cuInv = Number(document.getElementById("cuinv").value);
    var cua = Number(document.getElementById("cua").value);

    var pvu = Number(document.getElementById("pvu").value);

    console.log(nmd, cbod, creord, cuInv, cua, pvu)
    let results = [];
    for (let i = 0; i < simulations; i++) {
        let ctinv = 0, ib = 0, cd = 0, ctreord = 0, gneta = 0, dins = 0, tent = 0;
        let iazu = cbod, cta = cua * cbod, pazu = 0;
        let rdazu, rtent, dazu;
        while (cd < nmd) {
            cd++;
            if (tent > 0) {
                tent--;
                if (tent === 0) {
                    iazu += pazu;
                }
            }
            if (!(cd % 7 === 0)) {
                rdazu = Math.random();

                if (rdazu == 1){
                    rdazu = 0.9999
                }
                dazu = Math.round(-100 * Math.log(1 - rdazu));
                if (dazu > iazu) {
                    dins += dazu - iazu;
                    ib += iazu * pvu;
                    iazu = 0;
                }
                else {
                    iazu -= dazu;
                    ib += dazu * pvu;
                    ctinv += cuInv * iazu;
                }
            }
            else {
                pazu = cbod - iazu;
                cta += pazu * cua;
                ctreord += creord;
                rtent = Math.random();
                tent = Math.round(1 + 2 * rtent);
            }
        }
        let ct = ctinv + cta + ctreord;
        gneta = ib - ct;
        results.push({ gneta, dins, ct });
        var fila = `
    <tr>
        <td>${gneta}</td>
       <td>${dins}</td>
    <td>${ct}</td>
     
        
        
    </tr>`;
    }


    document.getElementById('t01').innerHTML+=fila;
}
