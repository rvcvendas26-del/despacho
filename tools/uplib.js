window.W=ms=>new Promise(r=>setTimeout(r,ms));
window.setv=(el,v)=>{const P=el.tagName=='TEXTAREA'?HTMLTextAreaElement:HTMLInputElement;Object.getOwnPropertyDescriptor(P.prototype,'value').set.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));el.dispatchEvent(new Event('blur',{bubbles:true}));};
window.row=t=>[...document.querySelectorAll('.ant-form-item,.ant-row')].filter(r=>r.innerText.trim().startsWith(t)).pop();
window.attrRow=(name)=>[...document.querySelectorAll('.ant-form-item,.ant-row')].filter(r=>{const l=r.querySelector('label');return l&&l.innerText.trim().replace(/\*$/,'').trim()==name}).pop();
window.imgBtns=()=>[...document.querySelectorAll('button')].filter(e=>/^\s*Adicionar Imagens\s*$/.test(e.innerText||''));
window.addImgs=async(i,urls)=>{const b=imgBtns()[i];b.scrollIntoView({block:'center'});['mouseenter','mouseover','mousemove'].forEach(t=>b.dispatchEvent(new MouseEvent(t,{bubbles:true})));await W(900);
const it=[...document.querySelectorAll('li,div,span,a')].filter(e=>e.innerText&&e.innerText.trim()=='A Partir de Web (Link)'&&e.getBoundingClientRect().width>0&&e.childElementCount==0);if(!it.length)return 'nomenu';it[it.length-1].click();await W(900);
const ta=[...document.querySelectorAll('.ant-modal textarea')].find(t=>t.getBoundingClientRect().width>0);if(!ta)return 'nota';setv(ta,urls.join('\n'));await W(300);
[...document.querySelectorAll('.ant-modal button')].find(b=>b.innerText.trim()=='Adicionar'&&b.getBoundingClientRect().width>0).click();await W(6000);return 'ok'};
window.clearGroup=async(i)=>{for(let n=0;n<15;n++){const row=document.querySelectorAll('.variant_row')[i];const e=row&&row.querySelector('.edit_btn .action_btn');if(!e)return n;e.scrollIntoView({block:'center'});['mouseenter','mouseover','click'].forEach(t=>e.dispatchEvent(new MouseEvent(t,{bubbles:true})));await W(600);
const x=[...document.querySelectorAll('.ant-dropdown li,.ant-dropdown-menu-item')].filter(x=>x.getBoundingClientRect().width>0&&x.innerText.trim()=='Excluir').pop();if(!x)return 'nox'+n;x.click();await W(600);}return 'max'};
window.groupName=i=>{const r=document.querySelectorAll('.variant_row')[i];return r?r.innerText.trim().split('\n').pop().trim():null};
window.mkDesc=(tipo,pers,tam,extra)=>`TOALHA DE ${tipo.toUpperCase()} BORDADA E PERSONALIZADA

Toalha de ${tipo} em veludo, macia e com acabamento sofisticado, com bordado personalizado feito na nossa própria máquina de bordar. Ótima para presente de casamento, chá de casa nova, aniversário, Dia das Mães ou para deixar o seu banheiro mais bonito.

COMO PERSONALIZAR
1. Escolha a cor da toalha e finalize a compra.
2. Envie pelo chat ${pers}.
3. Bordamos e enviamos em até 2 dias úteis.
Se não recebermos a personalização em 1 dia útil, a toalha é enviada sem bordado.

DETALHES
- Tamanho: ${tam}
- Material: veludo (felpa cortada), com barrado liso e acabamento canelado.
- O bordado fica no centro do barrado, como nas fotos.
${extra}- As cores podem variar levemente de acordo com a tela.

CONTEÚDO
1 toalha de ${tipo} bordada na cor escolhida.`;
window.LINHA_STD='- Cor da linha do bordado conforme a cor da toalha (igual às fotos): branca com linha cinza; off white com linha bege; rosa com linha rosa escuro; azul com linha azul bebê; preta com linha branca.\n';
window.LINHA_CASAL='- Cor da linha do bordado conforme a cor da toalha (igual às fotos): branca com linha cinza; rosa com linha rosa escuro; azul com linha azul bebê; preta com linha branca.\n- Na toalha OFF WHITE, o monograma e a ondinha são bordados em linha MARROM CARAMELO e o nome em linha MARROM ESCURO (não é dourado).\n';
window.LINHA_LAV='- Cor da linha do bordado conforme a cor da toalha (igual às fotos): branca com linha cinza; rosa com linha rosa escuro; azul com linha azul marinho; preta com linha branca.\n- Na toalha OFF WHITE, o monograma e a ondinha são bordados em linha MARROM CARAMELO e o nome em linha MARROM ESCURO (não é dourado).\n';
window.setDesc=async(txt)=>{const th=[...document.querySelectorAll('th')].find(t=>/^Descrição/.test(t.innerText.trim()));const a=[...th.querySelectorAll('a,span,button,div')].filter(e=>e.childElementCount==0&&/Editar em Massa/.test(e.innerText)).pop();a.scrollIntoView({block:'center'});a.click();await W(1200);
const ta=[...document.querySelectorAll('.ant-modal textarea')].find(t=>t.getBoundingClientRect().width>0);if(!ta)return 'nodesc';setv(ta,txt);await W(300);[...document.querySelectorAll('.ant-modal button')].find(b=>b.innerText.trim()=='Confirmar'&&b.getBoundingClientRect().width>0).click();await W(1000);return 'ok'};
window.setPrice=async(p)=>{const rows=[...document.querySelectorAll('tr')].filter(r=>/Plano 1/.test(r.innerText)&&r.querySelector('.ant-input-number-input'));for(const r of rows){const i=r.querySelector('.ant-input-number-input');i.focus();setv(i,p);await W(150);i.blur();await W(150)}return rows.map(r=>r.querySelector('.ant-input-number-input').value).join(',')};
window.CC={'Rosa':'ROSA','Azul-escuro':'AZUL','Preto':'PRETO','Branco':'BRANCO','Off White':'OFF'};
window.PAT_A={Rosa:['05','01','07','02','08','09'],'Azul-escuro':['06','01','07','02','08','09'],Preto:['04','01','07','02','08','09'],Branco:['01','02','07','08','09'],'Off White':['03','01','07','02','08','09']};
window.PAT_B={Rosa:['03','01','06','07','08','09'],'Azul-escuro':['04','01','06','07','08','09'],Preto:['05','01','06','07','08','09'],Branco:['01','07','06','08','09'],'Off White':['02','01','06','07','08','09']};
window.PAT_L={Rosa:['03','01','06','07','08','09','10'],'Azul-claro':['04','01','06','07','08','09','10'],Preto:['05','01','06','07','08','09','10'],Branco:['01','08','06','07','09','10'],'Off White':['02','01','06','07','08','09','10']};
window.doImgs=async(slug,pat)=>{const B='https://rvcvendas26-del.github.io/despacho/ref/anuncios/'+slug+'/';const log=[];
for(let i=0;i<5;i++){let g=groupName(i);if(!g){await W(1500);g=groupName(i)}if(!g){log.push('nogroup'+i);continue}
const c=await clearGroup(i);const r=await addImgs(i,pat[g].map(n=>B+n+'.jpg'));log.push(g+':'+c+'/'+r)}
window.__imglog=log.join(' ');return __imglog};
window.imgState=()=>[...document.querySelectorAll('.variant_row')].map(r=>r.innerText.trim().split('\n').pop()+':'+r.querySelectorAll('img').length+':'+[...r.querySelectorAll('img')].slice(0,1).map(i=>i.src.split('/').slice(-2).join('/'))).join(' | ');
window.finish=async(title,desc,modelo,comp,larg)=>{const out=[];setv(row('Nome da Família').querySelector('input'),title);out.push(await setDesc(desc));
const ma=[...document.querySelectorAll('div,span,a')].find(e=>e.childElementCount<=1&&/^Mais Atributos/.test((e.innerText||'').trim()));if(ma){ma.click();await W(1200)}
const m=attrRow('Modelo');if(m){setv(m.querySelector('input'),modelo)}if(comp){setv(attrRow('Comprimento').querySelector('input'),comp);setv(attrRow('Largura').querySelector('input'),larg)}await W(500);
out.push(row('Nome da Família').querySelector('input').value,attrRow('Modelo')&&attrRow('Modelo').querySelector('input').value,attrRow('Comprimento')&&attrRow('Comprimento').querySelector('input').value);return out.join(' | ')};
window.clickBtn=async(t)=>{[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==t).click();await W(5000);return [...document.querySelectorAll('.ant-message,.ant-modal-wrap,.has-error')].filter(e=>e.getBoundingClientRect().width>0).map(e=>e.innerText.trim().slice(0,500)).join(' || ')};
'lib ok'
