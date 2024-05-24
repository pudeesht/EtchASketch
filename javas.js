function getRandomColor() {
    const letters = '011223344556667778889999AABBBCBCCCDDDEEEFF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
function makegrid(num)
{
    
    document.body.innerHTML=`
    <div class="buttonbox">
        <div class="draw">DRAW</div>
        <div class="erase">ERASE</div>
        <div class="clearbtn">CLEAR</div>
        <div class="resizebtn">CHANGE SIZE</div>
        <div class="randombtn">RANDOM</div>
    </div>


    <div class="container"></div>`
    
    const container = document.querySelector(".container")




    const number=num;
    if ( num <16 || num >70)
        number=16;
    for (let i =0;i<number;i++)
        {
    
            const row=document.createElement("div");
            row.classList.add("row");
    
            for (let j=0;j<num;j++)
                {
                    const box= document.createElement("div");
                    box.classList.add("box");
                    row.appendChild(box);
                }
            container.appendChild(row);
    
        }


    run();

}

function mousemovedraw(event) {
    event.target.style.backgroundColor = "red";
  }

  function mousemoverandom(event) {
    event.target.style.backgroundColor = getRandomColor();
  }

function run()
{

    
    const draw=document.querySelector(".draw")
    const randombtn=document.querySelector(".randombtn")
    
    draw.onclick=function(){
    const box = document.querySelectorAll(".box");
    const box_array= Array.from(box);
    box_array.forEach((element) => {
        element.removeEventListener("`mousemove`", mousemoverandom);
      });

    box_array.forEach((element)=>element.addEventListener("mousemove", function (){element.style.backgroundColor="red";}));

    }

    randombtn.onclick=function()
    {
    const box = document.querySelectorAll(".box");
    const box_array= Array.from(box);
    
    box_array.forEach((element) => {
        element.removeEventListener("`mousemove`", mousemovedraw);
      });


    box_array.forEach((element)=>element.addEventListener("mousemove", function (){element.style.backgroundColor=getRandomColor()
    }));

    }


    const erase=document.querySelector(".erase")
    erase.onclick=function(){
    const box = document.querySelectorAll(".box");
    const box_array= Array.from(box);

    box_array.forEach((element)=>element.addEventListener("mousemove", function (){element.style.backgroundColor="white"}));

    }


    const clear = document.querySelector(".clearbtn");

    clear.addEventListener("click",function()
    {
        const box_ = document.querySelectorAll(".box");
        const box_arrayy= Array.from(box_);
        box_arrayy.forEach((element)=>element.style.backgroundColor="white");
    });
    
    
    const resizebtn=document.querySelector(".resizebtn");
    resizebtn.addEventListener("click",function()
    {
        const num=prompt("Tell the new grid size (between 20 and 70) -:");
        makegrid(num);
    });
    
    
}



makegrid(25);






/*

const draw=document.querySelector(".draw")
draw.onclick=function(){
    const box = document.querySelectorAll(".box");
    const box_array= Array.from(box);

    box_array.forEach((element)=>element.addEventListener("mouseover", function (){element.classList.add("red");}));

}



const randombtn=document.querySelector(".randombtn")
randombtn.onclick=function()
{
    const box = document.querySelectorAll(".box");
    const box_array= Array.from(box);

    box_array.forEach((element)=>element.addEventListener("mouseover", function (){element.classList.remove("red");
        element.classList.add("randomcolor")
    }));

    const randombox=document.querySelector(".randomcolor")
    if (randombox===null)
            continue;
    else
        randombox.style.backgroundColor=getRandomColor();

}



*/


