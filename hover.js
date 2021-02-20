const box1 = document.getElementById("one");
const box2 = document.querySelectorAll(".card");
let c = document.getElementsByClassName('card')

var arr = [...c]
    arr.map((x)=>{
       

   x.addEventListener("mousemove", (e) => {
            boxMove(e, x, 3);
            boxMove(e, x, 2);
        });

        function boxMove(e, box, speed) {
            let x = (window.innerWidth - e.pageX * speed) / 100;
            let y = (window.innerHeight - e.pageY * speed) / 100;

            box.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
    })