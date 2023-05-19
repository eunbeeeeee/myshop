fetch('./data/shoplist.json')
.then((res)=>res.json())
.then((res)=> {
    const rs = res.shoplist; 
    let div = "";

    for(let i = 0; i < rs.length; i++){
      div += `<div class="col-lg-3 my-5">
        <div class="card">
            <a href="main.html">
              <img src="${rs[i].img}" class="img-fluid" alt="${rs[i].img}" />
            </a>
            <div class="card-body">
               <ul class="pd-list">
                  <li>`;

      var color = '';   
      for(let c=0; c < rs[i].color.length; c++){
        color +=  `<span class="${rs[i].color[c]}"></span>`;
      }             
      div += color;            
      div += `</li>
                  <li class="pd-title">
                      <h1>${rs[i].title}</h1>
                  </li>
                  <li>
                      <del>${rs[i].delprice}</del>
                      <br>
                      <strong>${rs[i].saleprice}</strong>
                  </li>
                  <li>
                      <p>${rs[i].content}</p>
                  </li>
                  <li class="last">
                     <span>베스트셀러</span>
                     <span>핫딜할인5%</span>
                  </li>
               </ul> 
            </div>
        </div>
     </div>`;
    }

    document.getElementById("row").innerHTML = div;
})
.catch((err)=> console.log(err));