var lang = navigator.language.split('-')[0];

$(document).ready(() => {
    var langIndex = 0;
    if(lang == "pt") {
        langIndex = 1;
    }

    document.getElementById("navAboutMe").innerText = strings["_aboutMe"][langIndex];
    document.getElementById("navPortfolio").innerText = strings["_portfolio"][langIndex];
    document.getElementById("introTitle").innerText = strings["_introTitle"][langIndex];
    document.getElementById("introText").innerText = strings["_intro"][langIndex];
    document.getElementById("contact").innerText = strings["_contact"][langIndex];
    document.getElementById("portfolioTitle").innerHTML = strings["_portfolio"][langIndex];
})

const strings = {
    _aboutMe: [
        "About me",
        "Sobre mim"
    ],
    _portfolio: [
        "Portfolio",
        "Portfólio"
    ],
    _introTitle: [
        "Hello!",
        "Olá!"
    ],
    _intro: [
        "My name is Lia Kassardjian, welcome to my portfolio! I'm an iOS Developer and (almost) a Computer Scientist. I love learning new things and I'm passionate about technology.",
        "Meu nome é Lia Kassardjian, bem-vindo ao meu portfólio! Eu sou Desenvolvedora iOS e (quase) uma Cientista da Computação. Eu amo aprender coisas novas e sou apaixonada por tecnologia."
    ],
    _contact: [
        "Contact me",
        "Fale comigo"
    ],
    _roles: [
        "Roles",
        "Responsabilidades"
    ],
    _technologies: [
        "Applied technologies",
        "Tecnologias aplicadas"
    ]
}