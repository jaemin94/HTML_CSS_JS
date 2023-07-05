console.log("main.js 연결 확인");

      const boxE1 = document.querySelector('.box');
        // boxE1.addEventListener('click',function(){this.style.backgroundColor="red";});
        boxE1.addEventListener('click',()=>{ 
        boxE1.style.backgroundColor="orange";});
   