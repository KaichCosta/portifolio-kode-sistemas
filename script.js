const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu-mobile');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

const navLinks = document.querySelectorAll('#nav-menu-mobile a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

async function rotacionarTexto() {
    const span = document.querySelector('.profissao');
    const palavras = [
        "Desenvolvedor Full Stack",
        "Programador Web",
        "Resolvedor de Problemas",
        "Especialista em Landing Pages",
        "Criador de Soluções Digitais"
    ];
    
    let i = 0;

    while (true) {
        let palavraAtual = palavras[i];
        
        for (let char of palavraAtual) {
            span.textContent += char;
            await sleep(100);
        }

        await sleep(2000);

        for (let j = palavraAtual.length; j >= 0; j--) {
            span.textContent = palavraAtual.substring(0, j);
            await sleep(50);
        }

        i = (i + 1) % palavras.length;
        await sleep(500);
    }
}

const corpoTerminal = document.getElementById('corpo-terminal');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function iniciarTerminal() {

    while (true){
        corpoTerminal.innerHTML = '';

        const linhaComando = document.createElement('div');
        linhaComando.innerHTML = `<span class="comando">$</span> <span id="typing"></span><span class="cursor"></span>`;
        corpoTerminal.appendChild(linhaComando);

        const spanTyping = document.getElementById('typing');
        const comandoTexto = "npx kode-sistemas criador-de-paginas";
        
        for (let char of comandoTexto) {
            spanTyping.textContent += char;
            await sleep(100); // Velocidade da digitação
        }

        await sleep(800);
        
        const logs = [
            { texto: "... Analisando nicho do cliente", delay: 1000 },
            { texto: "... Gerando estrutura semântica HTML5", delay: 800 },
            { texto: "... Aplicando estilização responsiva", delay: 800 },
            { texto: "... [✓] Performance: 100/100 | SEO: 100/100", delay: 800 },
            { texto: "... Fazendo deploy para ambiente de produção", delay: 800 },
            { texto: "[✓] Projeto finalizado com sucesso!", classe: "sucesso", delay: 500 },
            { texto: "$ _", classe: "sucesso", delay: 1000 }
        ];

    document.querySelector('.cursor').remove();

    for (const log of logs) {
            const p = document.createElement('p');
            p.style.marginTop = "8px";
            p.textContent = log.texto;
            
            if (log.classe) {
                p.classList.add(log.classe);
            }

            corpoTerminal.appendChild(p);
            await sleep(log.delay);
        }

        await sleep(5000);

    }
}

document.addEventListener('DOMContentLoaded', () => {rotacionarTexto(); iniciarTerminal();});



const botaoEnvio = document.querySelector('#enviar-btn').addEventListener('click', function () {
    const nomeCliente = document.querySelector('#nome').value;
    console.log(nomeCliente) 

    const assuntoCliente = document.querySelector('#assunto').value;
    console.log(assuntoCliente)

    const mensagemCliente = document.querySelector('#mensagem').value;
    console.log(mensagemCliente)

    if (!nomeCliente || !assuntoCliente|| !mensagemCliente) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    const meuContato = "5537998460473"

    const textoFormatado = `Oi! Me chamo *${nomeCliente}* quero falar sobre *${assuntoCliente}*, o detalhe é: "${mensagemCliente}"%0A%0A` +
                            `Aguardo seu retorno para alinharmos os detalhes!`;
    const url = `https://wa.me/${meuContato}?text=${encodeURIComponent(textoFormatado)}`;

    window.open(url, '_blank');
});

