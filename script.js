/*
1. Выбрать поле для игры
2. Разместить в поле карточки (теги li)
3. Сделать клик по карточкам
4. Сделать переворачивание карточек
    4.1 Размещаем картинки для каждой карточки
    4.2 Возможность показать картинку каждой карточки
5. Проверяем 2 картинки карточек на совпадение 
    5.1 Если совпадают, то удаляем с поля
    5.2 Если нет, то переворачиваем открытые карточки
        и так до удаления всех карточек
6.  Если удалены все карточки, то вывести окно перезапуска игры  
7. При клике на кнопку перезагрузить - обновляем страничку
*/

let cardsField = document.getElementById("cards");
let restartWindow = document.getElementById("reset");
let restartBtn = document.getElementById("reset-btn");
let countCards = 16;

const images = [
    1,2,3,4,
    5,6,7,8,
    1,2,3,4,
    5,6,7,8
];

let selected = [];

let pause = false;

let deletedCards = 0;

for(let i = 0; i < 16; i++) {
    let li = document.createElement("li");
        li.id = i;
    cardsField.appendChild(li);
}

console.dir(cardsField);

cardsField.onclick = (event) => {
    if (pause == false) {
        let element = event.target;

        if(element.tagName == "LI" && element.className != "active") {
            let img = images[element.id];
            selected.push(element);
            element.className = "active";
            element.style.backgroundImage = "url(images/" + img + ".png)";
            if (selected.length == 2) {
                pause = true;
                if(images[selected[0].id] == images[selected[1].id]) {
                    selected[0].style.visibility = "hidden";
                    selected[1].style.visibility = "hidden";
                    deletedCards = deletedCards + 2;
                }
                setTimeout(refreshCards, 600);
            }
        } 
    }
}

let refreshCards = () => {
    for(let i = 0; i < countCards; i++) {
        cardsField.children[i].className = "";
        cardsField.children[i]
        .style.backgroundImage = 'url("images/back.png")';
    }
    if(deletedCards == countCards) {
        restartWindow.style.display = "block";
    }
    selected  = [];
    pause = false;
};

restartBtn.onclick = (event) => {
    location.reload();
}


