function hours() {
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let horario = document.querySelector('#alarme #horario .hora');

    hora = hora < 10 ? '0' + hora : hora;
    minuto = minuto < 10 ? '0' + minuto : minuto;

    horario.innerHTML = `${hora}:${minuto}`;
}

function day() {
    let data = new Date();
    let diaNumber = data.getDate();
    let diaString = data.getDay();
    let exibirDia = document.querySelector('#alarme #horario .dia');
    let semana = [
        "Domingo", 
        "Segunda-Feira", 
        "Terça-Feira", 
        "Quarta-Feira", 
        "Quinta-Feira", 
        "Sexta-Feira", 
        "Sábado"
    ]
    let diaDasemana = semana[diaString]; 

    exibirDia.innerHTML = `Dia ${diaNumber}, ${diaDasemana}`;

}


function updateAll() {
    hours();
    day();
}

updateAll();
setInterval(updateAll, 1000);




document.querySelector('.buttonAdd').addEventListener('click', () => {
    document.querySelector('.inserirAlarme').style.display = 'block';
    document.querySelector('.buttonAdd').style.display = 'none';
}) 




function alarme() {
    let addHora = document.getElementById('addHora');
    let input = document.querySelector('.inserirAlarme .definirHora .escolhaAHora input').value;
    let divPai = document.createElement('div');
    let horaDoAlarme = document.createElement('h1');
    let img = document.createElement('img');
    let button = document.createElement('button');
    let song = new Audio ('assets/song/salamisound-7465267-alarm-clock-ringing-pitch-up.mp3');

    img.src = 'assets/images/remover.png';
    img.style.width = '30px';
    img.style.height = '30px';
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        divPai.remove();
        horaDoAlarme = false;
    })

    horaDoAlarme.innerHTML = input;
    horaDoAlarme.style.marginRight = '50px';

    button.innerHTML = "Desativar alarmer";
    button.style.color = '#000';
    button.style.cursor = 'pointer';
    button.style.padding = '5px 10px'
    button.style.marginTop = '15px';
    button.style.display = 'none';
    button.addEventListener('click', () => {
        horaDoAlarme = false;
        button.remove();
    });

    divPai.style.marginTop = '15px';
    divPai.style.display = 'flex';
    divPai.style.alignItems = 'center';
    divPai.append(horaDoAlarme);
    divPai.append(img);

    addHora.append(divPai);
    addHora.append(button);

    document.querySelector('.inserirAlarme').style.display = 'none';
    document.querySelector('.buttonAdd').style.display = 'block';
    
    
    function alarmeOn() {
        let horarioAtual = document.querySelector('#alarme #horario .hora').innerHTML;
    
        if(horarioAtual === horaDoAlarme.innerHTML) {
            song.play();
            divPai.remove();
            button.style.display = 'block';
        }
    }
    
    alarmeOn();
    setInterval(alarmeOn, 1800);
}
