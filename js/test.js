const food = ["사과","바나나", "오렌지", "수박","참외" ];

for(let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

food.forEach(function(e, i){
    console.log(e, i);
})