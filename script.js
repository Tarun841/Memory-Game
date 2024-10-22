let i = 0;
let item1, item2, score = 0;
let itembox1, itembox2;

const em = document.getElementsByClassName("color");


em[0].textContent = "😍";
em[1].textContent = "😍";
em[2].textContent = "😊";
em[3].textContent = "😊";
em[4].textContent = "🤣";
em[5].textContent = "🤣";
em[6].textContent = "🐵";
em[7].textContent = "🐵";
em[8].textContent = "😘";
em[9].textContent = "😘";
em[10].textContent = "😒";
em[11].textContent = "😒";
em[12].textContent = "😁";
em[13].textContent = "😁";
em[14].textContent = "😑";
em[15].textContent = "😑";
em[16].textContent = "🤷‍♂";
em[17].textContent = "🤷‍♂";
em[18].textContent = "👨‍💻";
em[19].textContent = "👨‍💻";
em[20].textContent = "❤";
em[21].textContent = "❤";
em[22].textContent = "☠";
em[23].textContent = "☠";

console.log(em.length);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i].textContent, array[j].textContent] = [array[j].textContent, array[i].textContent];
    }
}
shuffleArray(em);

function ChangeColor(element) {
   
    if (element === itembox1) return;

    if (i < 2) {
        element.firstElementChild.classList.add('rotate-animation');
        element.firstElementChild.addEventListener('animationend', () => {
            element.firstElementChild.classList.remove('rotate-animation');
        });
        element.firstElementChild.style.visibility = "visible";
        i++;

        if (i === 1) {
            itembox1 = element;
            item1 = element.firstElementChild.textContent;
        } else if (i === 2) {
            itembox2 = element;
            item2 = element.firstElementChild.textContent;

            
            if (item1 === item2) {
                score++;
                setTimeout(() => {
                    itembox1.style.visibility = "hidden";
                    itembox2.style.visibility = "hidden";
                    itembox1.firstElementChild.style.visibility = "hidden";
                    itembox2.firstElementChild.style.visibility = "hidden";
                    resetChoices();
                }, 500);
            } else {
                setTimeout(() => {
                    itembox1.firstElementChild.style.visibility = "hidden";
                    itembox2.firstElementChild.style.visibility = "hidden";
                    resetChoices();
                }, 1000); 
            }
        }
    }
}

function resetChoices() {
    i = 0;
    item1 = item2 = null;
    itembox1 = itembox2 = null;
}
