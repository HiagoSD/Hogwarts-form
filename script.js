const perguntasDeHogwarts = [
  // Grifinória
  {
    casa: 'Grifinória',
    pergunta: '1 - Qual é a sua reação diante de um perigo iminente?'
  },
  {
    casa: 'Grifinória',
    pergunta: '2 - Como você age quando alguém está em apuros?'
  },

  // Sonserina
  {
    casa: 'Sonserina',
    pergunta: '3 - Como você lida com uma oportunidade de ganhar poder?'
  },
  {
    casa: 'Sonserina',
    pergunta: '4 - Se você tivesse a chance de alcançar um grande poder, mas tivesse que sacrificar algo importante para obtê-lo, o que você faria?'
  },

  // Corvinal
  {
    casa: 'Corvinal',
    pergunta: '5 - Quando confrontado com um enigma complexo, qual é sua abordagem?'
  },
  {
    casa: 'Corvinal',
    pergunta: '6 - Como você prefere adquirir conhecimento?'
  },

  // Lufa-Lufa
  {
    casa: 'Lufa-Lufa',
    pergunta: '7 - Quando você se depara com um desafio, como você responde?'
  },
  {
    casa: 'Lufa-Lufa',
    pergunta: '8 - O que é mais importante para você em um time?'
  }
];


const gryff1 = perguntasDeHogwarts[0].pergunta

const gryff2 = perguntasDeHogwarts[1].pergunta

const sly1 = perguntasDeHogwarts[2].pergunta

const sly2 = perguntasDeHogwarts[3].pergunta

const raven1 = perguntasDeHogwarts[4].pergunta

const raven2 = perguntasDeHogwarts[5].pergunta

const huffle1 = perguntasDeHogwarts[6].pergunta

const huffle2 = perguntasDeHogwarts[7].pergunta

document.getElementById('perg1').innerText = gryff1

document.getElementById('perg2').innerText = gryff2

document.getElementById('perg3').innerText = sly1

document.getElementById('perg4').innerText = sly2

document.getElementById('perg5').innerText = raven1

document.getElementById('perg6').innerText = raven2

document.getElementById('perg7').innerText = huffle1

document.getElementById('perg8').innerText = huffle2

const saveAnswers = () => {
  const respostas = {
    gryff1: document.querySelector('input[name="gryff1"]:checked').value,
    gryff2: document.querySelector('input[name="gryff2"]:checked').value,
    sly1: document.querySelector('input[name="sly1"]:checked').value,
    sly2: document.querySelector('input[name="sly2"]:checked').value,
    raven1: document.querySelector('input[name="raven1"]:checked').value,
    raven2: document.querySelector('input[name="raven2"]:checked').value,
    huffle1: document.querySelector('input[name="huffle1"]:checked').value,
    huffle2: document.querySelector('input[name="huffle2"]:checked').value
  };

  Object.keys(respostas).forEach(key => {
    localStorage.setItem(key, respostas[key])
  });
}

const houseChosen = () => {
  let gryffindor = 0
  let slytherin = 0
  let ravenclaw = 0
  let hufflepuff = 0

  let respostas = {
    gryff1: localStorage.getItem('gryff1'),
    gryff2: localStorage.getItem('gryff2'),
    sly1: localStorage.getItem('sly1'),
    sly2: localStorage.getItem('sly2'),
    raven1: localStorage.getItem('raven1'),
    raven2: localStorage.getItem('raven2'),
    huffle1: localStorage.getItem('huffle1'),
    huffle2: localStorage.getItem('huffle2')
  }

  if (respostas.gryff1 === "Enfrentar o perigo de frente.") {
    gryffindor += 3;
    hufflepuff++;
  }
  if (respostas.gryff1 === "Procuro uma maneira estratégica de lidar com a situação.") {
    slytherin++;
    ravenclaw++;
  }
  if (respostas.gryff2 === "Analiso a situação antes de intervir, mas estou disposto a ajudar.") {
    slytherin++;
    ravenclaw++;
  }
  if (respostas.gryff2 === "Entro em ação para ajudar, sem hesitar.") {
    gryffindor += 3;
    hufflepuff++;
  }
  if (respostas.sly1 === "Uso de maneira estratégica para crescer.") {
    ravenclaw++;
    gryffindor++;
    hufflepuff++;
  }
  if (respostas.sly1 === "Aproveito sem hesitar para alcançar o sucesso.") {
    slytherin += 3;
  }
  if (respostas.sly2 === "Encontraria uma maneira de conseguir o poder sem perder o que é importante.") {
    ravenclaw++;
    gryffindor++;
    hufflepuff++;
  }
  if (respostas.sly2 === "Faria o que fosse necessário para conquistar o poder.") {
    slytherin += 3;
  }
  if (respostas.raven1 === "Confio na minha intuição para encontrar a resposta.") {
    gryffindor++;
    hufflepuff++;
  }
  if (respostas.raven1 === "Uso lógica e raciocínio para resolvê-lo.") {
    slytherin++;
    ravenclaw += 3;
  }
  if (respostas.raven2 === "Explorando ideias criativamente.") {
    slytherin++;
    gryffindor++;
    hufflepuff++;
  }
  if (respostas.raven2 === "Através de pesquisa metódica e profunda.") {
    ravenclaw += 3;
  }
  if (respostas.huffle1 === "Procuro apoio do grupo para que possamos superar juntos.") {
    slytherin++;
    hufflepuff += 3;
  }
  if (respostas.huffle1 === "Trabalho duro e perseverante até completar a tarefa, mesmo que leve tempo.") {
    gryffindor++;
    ravenclaw++;
  }
  if (respostas.huffle2 === "A lealdade e a capacidade de trabalhar juntos em harmonia.") {
    hufflepuff += 3;
    gryffindor++;
  }
  if (respostas.huffle2 === "Que todos estejam dispostos a se esforçar e contribuir igualmente.") {
    ravenclaw++;
    slytherin++;
  }

  let casa = ''
  if (gryffindor > slytherin && gryffindor > ravenclaw && gryffindor > hufflepuff) {
    casa = 'gryffindor'
  }
  else if (slytherin > gryffindor && slytherin > ravenclaw && slytherin > hufflepuff) {
    casa = 'slytherin'
  }
  else if (ravenclaw > gryffindor && ravenclaw > slytherin && ravenclaw > hufflepuff) {
    casa = 'ravenclaw'
  }
  else if (hufflepuff > gryffindor && hufflepuff > slytherin && hufflepuff > ravenclaw) {
    casa = 'hufflepuff'
  } else {
    casa = 'nenhuma'
  }
  return casa
}

const nameInput = document.querySelector('#name');
const savedName = document.querySelector('#chosen-button');
const showNames = document.querySelectorAll('.showName');

savedName.addEventListener('click', () => {
  const fullName = nameInput.value;
  const firstName = fullName.split(' ')[0];

  localStorage.setItem('primeiroNome', firstName);
  showFirstName();
})

const showFirstName = () => {
  const saveName = localStorage.getItem('primeiroNome');
  if (saveName) {
    showNames.forEach(showNames => {
      showNames.innerText = `Parabéns ${saveName} você foi escolhido pela casa:`
    })
  }
}

const chosenButton = document.querySelector("#chosen-button")

chosenButton.addEventListener('click', () => {
  const form = document.querySelector('.form');
  const hog = document.querySelector('.hogwarts');
  const gryff = document.querySelector('.gryffindor');
  const sly = document.querySelector('.slytherin');
  const raven = document.querySelector('.ravenclaw');
  const huffle = document.querySelector('.hufflepuff');
  const nenhum = document.querySelector('.excluido');


  saveAnswers();
  showFirstName();
  const casaEscolhida = houseChosen();

    if (casaEscolhida === 'gryffindor') {
      gryff.style.display = 'flex';
      document.body.style.backgroundImage = "url('images/wallpapergryff.jpeg')"
    }
    else if (casaEscolhida === 'slytherin') {
      sly.style.display = 'flex';
      document.body.style.backgroundImage = "url('images/wallpapersly.jpeg')"
    }
    else if (casaEscolhida === 'ravenclaw') {
      raven.style.display = 'flex';
      document.body.style.backgroundImage = "url('images/wallpaperraven.jpeg')"
    }
    else if (casaEscolhida === 'hufflepuff') {
      huffle.style.display = 'flex';
      document.body.style.backgroundImage = "url('images/wallpaperhuffle.jpeg')"
    }
    else if (casaEscolhida === 'nenhuma') {
      nenhum.style.display = 'flex';
      document.body.style.backgroundImage = "url('images/wallpapernone.jpeg')"
    }

    form.style.display = 'none';
    hog.style.display = 'none';
  }
)