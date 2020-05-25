import './style.scss';

let data = [
    {
        "projectId": 1,
        "projectName": "Новомосковский",
        "title": "Корпус 1",
        "street": "Краснолесья",
        "number": "71А",
        "facing": "Чистовая",
        "material": "Монолит",
        "buildingState": "BUILT",
        "developmentStartQuarter": {
            "year": 2015,
            "quarter": 1
        },
        "developmentEndQuarter": {
            "year": 2015,
            "quarter": 1
        },
        "salesStart": {
            "month": "02",
            "year": "2018"
        },
        "salesEnd": {
            "month": "02",
            "year": "2018"
        },
        "id": 10,
        "type": "APARTMENT"
    }
];

let list = document.createElement('div');
list.id = 'List';

function createList(data) {
    let ul = document.createElement('ul');
    let newData = Array.isArray(data) ? data[0] : data;
    for (let key in newData) {
        let li = document.createElement('li');
        li.classList.add(key);
        if (typeof newData[key] === 'object') {
            li.append(createList(newData[key]));
        } else {
            li.innerText = newData[key];
        }
        ul.append(li);
    }
    return ul;
}

list.innerHTML = '<span><b>Тестовое задание №1</b></span>';
list.append(createList(data));
document.body.prepend(list);

function boldExternalLinks() {
    let links = document.querySelectorAll('a');
    links.forEach(link => {
        let strLink = link.getAttribute('href');
        if ((strLink.includes('://')) && (!strLink.includes('https://srt.ru', 0))) {
            link.style.fontWeight = '600';
            link.classList.add('highlight');
        }
    });
}

boldExternalLinks();

function getName() {
    let btn = document.getElementsByClassName('button');
    btn[0].addEventListener('click', () => {
        let formattedText = document.querySelector('input').value;
        let arrText = formattedText.split(' ');
        let newArrText = arrText.map(word => {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        });
        let newText = ' ' + newArrText[0] + ' ' + newArrText[1].substring(0, 1) + '. ' + newArrText[2].substring(0, 1) + '.';
        let text = document.createElement('span');
        text.innerText = newText;
        btn[0].after(text);
    });
}

getName();