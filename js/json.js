fetch('./data/shoplist.json')
.then((res)=> res.json())
.then((res)=> {
    let div = "";
    for(let i = 0; i < res.shoplist.length; i++){
      div += `<div class="col-lg-3 my-5">
      <div class="card">
          <a href="#">
            <img src="${res.shoplist[i].img}" class="img-fluid" alt="001" />
          </a>
          <div class="card-body">
             <ul class="pd-list">
                <li>
                    <span class="gray"></span>
                    <span class="blue"></span>
                    <span class="black"></span>
                    <span class="white"></span>
                </li>
                <li class="pd-title">
                    <h1>${res.shoplist[i].title}</h1>
                </li>
                <li>
                    <del>140,000원</del>
                    <br>
                    <strong>133,000원</strong>
                </li>
                <li>
                    <p>블링블링 화사한 봄🌸을 담은 트위드 셋업~ 생기 컬러감으로 미모 업그레이드 ♡</p>
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
});