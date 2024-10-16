$(document).ready(function() {
    $('.botao-menu button').click(function() {
        $('.menu').slideToggle();
    });
    
    $('.botao-cadastro button').click(function() {
        $('.form-contato').slideToggle();
    });
    
    // Deixando selecionado o tamanho 
    document.querySelectorAll('.size-circle').forEach(function(element) {
        element.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
    });
    
    // Captura todos os botões "Adicionar ao carrinho"
    const buttons = document.querySelectorAll('.adicionar-carrinho');
    const quantidadeElemento = document.getElementById('quantidade');
    let quantidade = 0;
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sizesSelected = button.closest('.produto').querySelectorAll('.size-circle.selected');
            if (sizesSelected.length === 0) {
                alert('Escolha o tamanho antes de adicionar ao carrinho.');
                return;
            }
            
            quantidade++;
            quantidadeElemento.textContent = quantidade;
            $('.botoes-carrinho').slideDown(); 
        });
    });

    // Adiciona evento de clique ao botão "limpar"
    document.getElementById('limpar').addEventListener('click', () => {
        quantidade = 0;
        quantidadeElemento.textContent = quantidade; 
        $('.botoes-carrinho').slideUp(); 
    });

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true 
            },
            tel: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o nome',
            email: {
                required: 'Por favor, insira um e-mail',
                email: 'Por favor, insira um e-mail válido'
            },
            tel: 'Por favor, insira o telefone'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos não preenchidos`);
            }
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Uso
    $('#submit-button').click(function() {
        const email = $('#email').val();
        if (validateEmail(email)) {
            alert('E-mail válido!');
        } else {
            alert('E-mail inválido!');
        }
    });
});