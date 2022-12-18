
let modalQt = 1;
let modalKey = 0;

const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

// Listagem das projetos
projetoJSON.map((item, index)=>{
    let projetoItem = c('.models .projeto-item').cloneNode(true);
    
    projetoItem.setAttribute('data-key', index);
    projetoItem.querySelector('.projeto-item--img img').src = item.img;
    projetoItem.querySelector('.projeto-item--name').innerHTML = item.name;
    projetoItem.querySelector('.projeto-item--desc').innerHTML = item.description;
    projetoItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.projeto-item').getAttribute('data-key');
        modalQt = 1;
        modalKey = key;

        c('.projetoBig img').src = projetoJSON[key].img;
        c('.projetoInfo h1').innerHTML = projetoJSON[key].name;
        c('.projetoInfo--desc').innerHTML = projetoJSON[key].description;
        c('.projetoWindowArea').style.opacity = 0;
        c('.projetoWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.projetoWindowArea').style.opacity = 1;
        }, 200);
    });

    c('.projeto-area').append( projetoItem );
});

// Eventos do MODAL
function closeModal() {
    c('.projetoWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.projetoWindowArea').style.display = 'none';
    }, 500);
}
cs('.projetoInfo--cancelButton, .projetoInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});
cs('.projetoInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', (e)=>{
        c('.projetoInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    });
});
c('.projetoInfo--addButton').addEventListener('click', ()=>{
    let size = parseInt(c('.projetoInfo--size.selected').getAttribute('data-key'));
    let identifier = projetoJSON[modalKey].id
    updateCart();
    closeModal();
});


