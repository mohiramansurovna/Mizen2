function imagechanger(id1, id2) {
    let box1 = document.getElementById(id1);
    let box2 = document.getElementById(id2);
    let text1 = box1.innerText;
    let text2 = box2.innerText;
    box1.style.backgroundImage = 'url(' + text2 + '.png' + ')';
    box1.innerText = text2;
    box2.innerHTML = text1;
    box2.style.backgroundImage = 'url(' + text1 + '.png' + ')';
}
let choosen = [];
function play(id) {
    switch (choosen.length) {
        case 0:
            choosen.push(id);
            break;
        case 1:
            let id2 = choosen.pop(1);
            let box1 = document.getElementById(id);
            let box2 = document.getElementById(id2);
            imagechanger(id, id2);
            break;
        case 3:
            alert("Choose up to 2");
            break;
    }

}


function change1() {
    play('box1');
}
function change2() {
    play('box2');

}
function change3() {
    play('box3');
}
function change4() {
    play('box4');
}
function change5() {
    play('box5');

}
function change6() {
    play('box6');

}
function change7() {
    play('box7');

}
function change8() {
    play('box8');

}
function change9() {
    play('box9');

}
function start() {
    play('box' + Math.floor(Math.random() * 10));
    play('box' + Math.floor(Math.random() * 10));
    play('box' + Math.floor(Math.random() * 10));
    play('box' + Math.floor(Math.random() * 10));
    play('box' + Math.floor(Math.random() * 10));
    play('box' + Math.floor(Math.random() * 10));
    play('box' + Math.floor(Math.random() * 10));
    play('box' + Math.floor(Math.random() * 10));
    play('box' + Math.floor(Math.random() * 10));
    play('box' + Math.floor(Math.random() * 10));
    play('box' + Math.floor(Math.random() * 10));
    play('box' + Math.floor(Math.random() * 10));
}
checklist = []
function checker(id){
    let box1=document.getElementById(id);
    let name='';
    //let gridArea=box1.style.gridArea;
    const comstyle=window.getComputedStyle(box1);
    const gridArea=comstyle.getPropertyValue("grid-area");
    switch(gridArea[0]){
        case '1':
            switch(gridArea[4]){
                case '1':
                    name='1';
                    break;
                case '2':
                    name='2';
                    break;
                case '3':
                    name='3';
                    break;
            };
            break;
        case '2':
            switch(gridArea[4]){
                case '1':
                    name='4';
                    break;
                case '2':
                    name='5';
                    break;
                case '3':
                    name='6';
                    break;
            };
            break;
        case '3':
             switch(gridArea[4]){
                case '1':
                    name='7';
                    break;
                case '2':
                    name='8';
                    break;
                case '3':
                    name='9';
                    break;
            };
            break;
    };
    if(name===box1.innerHTML){
        checklist.push(1);
    };
}
function check() {
    checker('box1');
    checker('box2');
    checker('box3');
    checker('box4');
    checker('box5');
    checker('box6');
    checker('box7');
    checker('box8');
    checker('box9');
    if (checklist.length === 9) {
        let checktext = document.getElementById('check');
        checktext.innerText = 'Correct';
        checktext.style.color = 'rgb(22, 226, 131)';
        checklist=[];
    }else{
        let checktext = document.getElementById('check');
        checktext.innerText = 'Not yet';
        checktext.style.color = 'rgb(99, 17, 17)';
        checklist=[];
    };

}




























