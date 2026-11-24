window.W=ms=>new Promise(r=>setTimeout(r,ms));
window.setv=(el,v)=>{const P=el.tagName=='TEXTAREA'?HTMLTextAreaElement:HTMLInputElement;Object.getOwnPropertyDescriptor(P.prototype,'value').set.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));el.dispatchEvent(new Event('blur',{bubbles:true}));};
window.row=t=>[...document.querySelectorAll('.ant-form-item,.ant-row')].filter(r=>r.innerText.trim().startsWith(t)).pop();
window.attrRow=(name)=>[...document.querySelectorAll('.ant-form-item,.ant-row')].filter(r=>{const l=r.querySelector('label');return l&&l.innerText.trim().replace(/\*$/,'').trim()==name}).pop();
window.imgBtns=()=>[...document.querySelectorAll('button')].filter(e=>/^\s*Adicionar Imagens\s*$/.test(e.innerText||''));
window.addImgs=async(i,urls)=>{const b=imgBtns()[i];b.scrollIntoView({block:'center'});['mouseenter','mouseover','mousemove'].forEach(t=>b.dispatchEvent(new MouseEvent(t,{bubbles:true})));await W(900);
const it=[...document.querySelectorAll('li,div,span,a')].filter(e=>e.innerText&&e.innerText.trim()=='A Partir de Web (Link)'&&e.getBoundingClientRect().width>0&&e.childElementCount==0);if(!it.length)return 'nomenu';it[it.length-1].click();await W(900);
const ta=[...document.querySelectorAll('.ant-modal textarea')].find(t=>t.getBoundingClientRect().width>0);if(!ta)return 'nota';setv(ta,urls.join('\n'));await W(300);
[...document.querySelectorAll('.ant-modal button')].find(b=>b.innerText.trim()=='Adicionar'&&b.getBoundingClientRect().width>0).click();await W(6000);return 'ok'};
window.clearGroup=async(i)=>{let n=0;for(let k=0;k<30;k++){document.body.click();await W(300);const row=document.querySelectorAll('.variant_row')[i];const e=row&&row.querySelector('.edit_btn .action_btn');if(!e)return n;e.scrollIntoView({block:'center'});await W(200);['mouseenter','mouseover','click'].forEach(t=>e.dispatchEvent(new MouseEvent(t,{bubbles:true})));await W(900);
const x=[...document.querySelectorAll('.ant-dropdown li,.ant-dropdown-menu-item')].filter(x=>x.getBoundingClientRect().width>0&&x.innerText.trim()=='Excluir').pop();if(!x)continue;x.click();n++;await W(700);}return 'max'+n};
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
window.E={"TOA-5080-BRANCO":"7894936349783","TOA-5080-OFF":"7897784779252","TOA-5080-ROSA":"7897469441054","TOA-5080-AZUL":"7897185580419","TOA-5080-PRETO":"7898235692090","TOA-70140-BRANCO":"7890150760663","TOA-70140-OFF":"7892398388210","TOA-70140-ROSA":"7890104955329","TOA-70140-AZUL":"7894641986419","TOA-70140-PRETO":"7898560902567"};
window.pick=async(selEl,re)=>{const s=selEl.querySelector('.ant-select-selection')||selEl;s.scrollIntoView({block:'center'});['mousedown','mouseup','click'].forEach(e=>s.dispatchEvent(new MouseEvent(e,{bubbles:true})));await W(1200);const lis=[...document.querySelectorAll('.ant-select-dropdown li')].filter(l=>l.getBoundingClientRect().width>0);const li=lis.find(l=>re.test(l.innerText));if(!li){document.body.click();return 'opts:'+lis.map(l=>l.innerText.trim()).join('|')}li.click();await W(800);return true};
window.changeCat=async(title,catRe)=>{setv(row('Nome da Família').querySelector('input'),title);await W(400);const ci=row('Categoria').querySelector('.ant-select-selection')||row('Categoria').querySelector('input');ci.scrollIntoView({block:'center'});['mousedown','mouseup','click'].forEach(e=>ci.dispatchEvent(new MouseEvent(e,{bubbles:true})));await W(1200);
const bt=[...document.querySelectorAll('div,span,a')].find(e=>e.childElementCount==0&&e.innerText&&e.innerText.trim()=='Buscar'&&e.getBoundingClientRect().width>0);if(bt){bt.click();await W(800)}
const o=[...document.querySelectorAll('a,span,div,button')].find(e=>e.childElementCount==0&&e.innerText&&e.innerText.trim()=='Obter Categoria'&&e.getBoundingClientRect().width>0);if(o){o.click();await W(3000)}
const c=[...document.querySelectorAll('li,div')].filter(e=>e.childElementCount==0&&catRe.test((e.innerText||'').trim())&&e.getBoundingClientRect().width>0)[0];if(!c)return 'nocat';c.click();await W(3000);
const m=[...document.querySelectorAll('.ant-modal-wrap')].find(e=>e.getBoundingClientRect().width>0);if(m){const s=m.querySelector('.ant-select-selection')||m.querySelector('.ant-select');['mousedown','mouseup','click'].forEach(e=>s.dispatchEvent(new MouseEvent(e,{bubbles:true})));await W(1200);const cc=[...document.querySelectorAll('.ant-select-dropdown li')].find(l=>l.getBoundingClientRect().width>0&&l.innerText.trim()=='Cor');if(cc)cc.click();await W(800);[...m.querySelectorAll('button')].find(b=>b.innerText.trim()=='Confirmar').click();await W(4000)}
return row('Categoria').innerText.replace(/\n/g,' ')+' / '+document.body.innerText.match(/Lista de Variantes \(\d+\)/)};
window.fillVars=async(pref,qty,g,L,Wd,H,cc)=>{cc=cc||CC;const rows=[...document.querySelectorAll('tr')].filter(r=>r.querySelector('.tag_input_wrap')&&r.cells[0]&&cc[r.cells[0].innerText.trim()]);const out=[];
for(const r of rows){const c=r.cells[0].innerText.trim();const sku=pref+'-'+cc[c];const ins=[...r.querySelectorAll('input')].filter(i=>i.type!='checkbox');
setv(ins[0],sku);await W(150);
if(E[sku]){for(const t of [...r.querySelectorAll('.ant-tag')]){if(t.innerText.trim()!=E[sku]){const x=t.querySelector('.anticon-close');['mousedown','mouseup','click'].forEach(e=>x.dispatchEvent(new MouseEvent(e,{bubbles:true})));await W(300)}}
if(![...r.querySelectorAll('.ant-tag')].some(t=>t.innerText.trim()==E[sku])){const ei=r.querySelector('.row_input_entry');ei.style.display='';setv(ei,E[sku]);await W(300)}}
const ins2=[...r.querySelectorAll('input')].filter(i=>i.type!='checkbox'&&!i.classList.contains('row_input_entry'));setv(ins2[1],String(qty));setv(ins2[2],String(g));setv(ins2[3],String(L));setv(ins2[4],String(Wd));setv(ins2[5],String(H));await W(200);
out.push(c+':'+ins2.map(i=>i.value).join(',')+' ean='+[...r.querySelectorAll('.ant-tag')].map(t=>t.innerText).join('/'))}return out.join('\n')};
window.fillAttrs=async(vals,picks,radios)=>{const ma=[...document.querySelectorAll('div,span,a')].find(e=>e.childElementCount<=1&&/^Mais Atributos/.test((e.innerText||'').trim()));if(ma){ma.click();await W(1500)}const o=[];
for(const [n,v] of vals){const r=attrRow(n);if(!r){o.push(n+':none');continue}setv(r.querySelector('input'),v);await W(150)}
for(const [n,re] of picks){const r=attrRow(n);if(!r){o.push(n+':none');continue}o.push(n+':'+await pick(r.querySelector('.ant-select'),re))}
for(const [n,v] of radios){const r=attrRow(n);if(!r){o.push(n+':none');continue}const l=[...r.querySelectorAll('label')].find(l=>l.innerText.trim()==v);if(l)l.click()}
const t=document.body.innerText;const a=t.indexOf('Atributos Recomendados');return o.join(' | ')+' || '+t.slice(a,t.indexOf('Informação do Anúncio',a)).replace(/\n+/g,' / ')};
window.compPos=()=>{const i=attrRow('Composição').querySelector('input');i.scrollIntoView({block:'center'});const b=i.getBoundingClientRect();return [Math.round((b.x+20)*800/innerWidth),Math.round((b.y+b.height/2)*800/innerWidth)]};
window.compPick=async()=>{await W(800);const li=[...document.querySelectorAll('.ant-select-dropdown li')].filter(l=>l.getBoundingClientRect().width>0).find(l=>l.innerText.trim()=='Algodão');if(li)li.click();await W(500);document.body.click();return attrRow('Composição').innerText.replace(/\n/g,' ')};
window.TAM_B='70 x 140 cm (toalha de banho tradicional, não é toalha banhão: enrolada no corpo vai até um pouco acima do joelho)';
window.setPre=async(d)=>{const th=[...document.querySelectorAll('th')].find(t=>/Pré-venda/.test(t.innerText));if(!th)return 'nocol';const idx=[...th.parentElement.cells].indexOf(th);const rows=[...document.querySelectorAll('tr')].filter(r=>/Plano 1/.test(r.innerText)&&r.querySelector('.ant-input-number-input'));const out=[];
for(const r of rows){const c=r.cells[idx];const l=c.querySelector('label.ant-checkbox-wrapper');if(l&&!l.classList.contains('ant-checkbox-wrapper-checked')){l.click();await W(500)}const i=[...c.querySelectorAll('input')].find(i=>i.type!='checkbox');if(i){i.focus();setv(i,String(d));await W(200);i.blur()}await W(200);out.push(r.cells[0].innerText.trim()+'='+[...c.querySelectorAll('input')].filter(i=>i.type!='checkbox').map(i=>i.value).join(','))}return out.join(' ')};

window.vis=e=>e&&e.getBoundingClientRect().width>0;
window.shVarSet=async(want)=>{const labs=()=>[...document.querySelectorAll('.variant_val_List label.ant-checkbox-wrapper')];
for(const w of want){const l=labs().find(l=>l.innerText.trim()==w);if(l&&!l.classList.contains('ant-checkbox-wrapper-checked')){l.click();await W(600)}}
for(const l of labs()){if(l.classList.contains('ant-checkbox-wrapper-checked')&&!want.includes(l.innerText.trim())){l.click();await W(800);const ok=[...document.querySelectorAll('.ant-modal-wrap button,.ant-popover button')].filter(vis).find(b=>/Confirmar|OK|Sim/.test(b.innerText));if(ok){ok.click();await W(600)}}}
return labs().filter(l=>l.classList.contains('ant-checkbox-wrapper-checked')).map(l=>l.innerText.trim()).join(',')};
window.linkModal=async(urls)=>{const it=[...document.querySelectorAll('.ant-dropdown li,.ant-dropdown-menu-item,li,div,span')].filter(e=>e.childElementCount==0&&vis(e)&&(e.innerText||'').trim()=='A Partir de Web (Link)').pop();if(!it)return 'nomenu';it.click();await W(900);
const ta=[...document.querySelectorAll('.ant-modal textarea')].find(vis);if(!ta)return 'nota';setv(ta,urls.join('\n'));await W(300);const b=[...document.querySelectorAll('.ant-modal button')].filter(vis).find(b=>/^(Adicionar|Confirmar)$/.test(b.innerText.trim()));b.click();await W(5000);return 'ok'};
window.shVarImg=async(name,url)=>{document.body.click();await W(300);const li=()=>[...document.querySelectorAll('.images_box li')].find(l=>(l.querySelector('p')||{}).title==name);let L=li();if(!L)return 'noli';
if(L.querySelector('img')){const e=L.querySelector('.edit_btn .action_btn');L.scrollIntoView({block:'center'});['mouseenter','mouseover','click'].forEach(t=>e.dispatchEvent(new MouseEvent(t,{bubbles:true})));await W(900);const x=[...document.querySelectorAll('.ant-dropdown-menu-item')].filter(x=>vis(x)&&x.innerText.trim()=='Excluir').pop();if(x){x.click();await W(900)}document.body.click();await W(300)}
L=li();const it=L.querySelector('.page_edit_img_item');it.scrollIntoView({block:'center'});['mouseenter','mouseover','mousemove','click'].forEach(t=>it.dispatchEvent(new MouseEvent(t,{bubbles:true})));await W(1200);return await linkModal([url])};
window.shMain=()=>[...document.querySelectorAll('.ant-form-item')].find(f=>/^Imagens do Anúncio/.test(f.innerText.trim()));
window.shMainImgs=async(urls)=>{for(let k=0;k<20;k++){document.body.click();await W(300);const e=shMain().querySelector('.edit_btn .action_btn');if(!e)break;e.scrollIntoView({block:'center'});['mouseenter','mouseover','click'].forEach(t=>e.dispatchEvent(new MouseEvent(t,{bubbles:true})));await W(900);const x=[...document.querySelectorAll('.ant-dropdown-menu-item')].filter(x=>vis(x)&&x.innerText.trim()=='Excluir').pop();if(x){x.click();await W(700)}}
const b=[...shMain().querySelectorAll('button')].find(b=>/Adicionar Imagens/.test(b.innerText));b.scrollIntoView({block:'center'});['mouseenter','mouseover','mousemove'].forEach(t=>b.dispatchEvent(new MouseEvent(t,{bubbles:true})));await W(1000);const r=await linkModal(urls);return r+' '+shMain().querySelectorAll('img').length};
window.shRows=async(pref,cc,price,disc,qty,gt)=>{const rows=[...document.querySelectorAll('tr')].filter(r=>r.cells&&r.cells[0]&&cc[r.cells[0].innerText.trim()]&&r.querySelector('textarea.sku_input'));const out=[];
for(const r of rows){const c=r.cells[0].innerText.trim();const sku=pref+'-'+cc[c];setv(r.cells[1].querySelector('textarea'),sku);await W(100);
const pi=r.cells[2].querySelector('input');pi.focus();setv(pi,price);pi.blur();await W(200);const di=r.cells[4].querySelector('input.ant-input-number-input');di.focus();setv(di,disc);di.blur();await W(200);
setv(r.cells[5].querySelector('input'),String(qty));await W(100);const g=gt[sku]||gt['*'];const gi=r.cells[7].querySelector('input');if(g&&gi){setv(gi,g)}await W(150);
out.push(c+':'+r.cells[1].querySelector('textarea').value+','+[2,4,5,7].map(k=>[...r.cells[k].querySelectorAll('input')].map(i=>i.value).join('/')).join(','))}return out.join('\n')};
window.shTax=async()=>{const f=n=>[...document.querySelectorAll('.ant-form-item')].find(x=>x.querySelector('label')&&x.querySelector('label').innerText.trim().startsWith(n));
setv(f('NCM').querySelector('input'),'63029100');setv(f('CEST').querySelector('input'),'2806100');setv(f('CFOP (Mesmo').querySelector('input'),'5102');setv(f('CFOP (Estado').querySelector('input'),'6102');
const a=await pick(f('CSOSN').querySelector('.ant-select'),/^102/);const b=await pick(f('Origem').querySelector('.ant-select'),/^0 -/);return a+' '+b+' '+['NCM','CEST','CFOP (Mesmo','CFOP (Estado','CSOSN','Origem'].map(n=>f(n).innerText.replace(/\s+/g,' ')+'['+[...f(n).querySelectorAll('input')].map(i=>i.value).join(',')+']').join(' | ')};
window.shPkg=async(kg,L,Wd,H)=>{const f=n=>[...document.querySelectorAll('.ant-form-item')].find(x=>x.querySelector('label')&&x.querySelector('label').innerText.trim().startsWith(n));const p=f('Peso do Pacote').querySelector('input');p.focus();setv(p,kg);p.blur();const t=[...f('Tamanho da Embalagem').querySelectorAll('input')];[L,Wd,H].forEach((v,i)=>{t[i].focus();setv(t[i],String(v));t[i].blur()});await W(300);return p.value+' '+t.map(i=>i.value).join('x')};
window.shBasic=async(title,desc,skuMain)=>{const f=n=>[...document.querySelectorAll('.ant-form-item')].find(x=>x.querySelector('label')&&x.querySelector('label').innerText.trim().startsWith(n));setv(f('Nome do Anúncio').querySelector('input'),title);setv(f('Descrição').querySelector('textarea'),desc);setv(f('SKU Principal').querySelector('input'),skuMain);await W(300);return f('Nome do Anúncio').querySelector('input').value.length+' '+f('Descrição').querySelector('textarea').value.length};

window.fi=n=>[...document.querySelectorAll('.ant-form-item')].find(x=>x.querySelector('label')&&x.querySelector('label').innerText.trim().startsWith(n));
window.shPromo=async()=>{const f=fi('Promoção de Desconto');const s=f.querySelector('.ant-select-selection');s.scrollIntoView({block:'center'});['mousedown','mouseup','click'].forEach(e=>s.dispatchEvent(new MouseEvent(e,{bubbles:true})));await W(1500);const li=[...document.querySelectorAll('.ant-select-dropdown li')].filter(vis).find(l=>/Black Krates/.test(l.innerText));if(li){li.click();await W(1500)}return f.innerText.replace(/\s+/g,' ')};
window.shLimit=async(n)=>{const e=[...document.querySelectorAll('*')].filter(x=>x.childElementCount==0&&/qtd\/cliente/.test(x.innerText||''));if(!e.length)return 'nolimit';const i=e[0].closest('.ant-form-item').querySelector('input');i.focus();setv(i,String(n));i.blur();await W(300);return i.value};
window.shTaxOpen=async()=>{const card=fi('NCM').closest('.ant-card');if(getComputedStyle(card.querySelector('.ant-card-body')).display=='none'){card.querySelector('.ant-card-extra i').click();await W(1000)}const c=fi('CEST').querySelector('.ant-select-selection');c.scrollIntoView({block:'center'});await W(400);const b=c.getBoundingClientRect();return [Math.round((b.x+40)*800/innerWidth),Math.round((b.y+b.height/2)*800/innerWidth)]};
window.shCestPick=async()=>{await W(800);const li=[...document.querySelectorAll('.ant-select-dropdown li')].filter(vis).find(l=>l.innerText.trim()=='2806100');if(li){li.click();await W(500)}const u=fi('Unidade');let r='';if(u&&u.querySelector('.ant-select'))r=await pick(u.querySelector('.ant-select'),/^UN|Unidade/);return fi('CEST').innerText.replace(/\s+/g,' ')+' '+r};
window.shMarca=async(m)=>{const f=attrRow('Marca');if(!f)return 'nomarca';const c=f.querySelector('.icon_clear');if(c)c.click();await W(300);setv(f.querySelector('input'),m);return f.querySelector('input').value};
window.shState=()=>{const rows=[...document.querySelectorAll('tr')].filter(r=>r.querySelector('textarea.sku_input'));return 'rows:'+rows.map(r=>r.cells[0].innerText.trim()+'='+r.cells[1].querySelector('textarea').value+','+[2,4,5,7].map(k=>[...r.cells[k].querySelectorAll('input')].map(i=>i.value).join('/')).join(',')).join(' ; ')+' || main:'+[...shMain().querySelectorAll('img')].map(i=>i.src.split('/').slice(-2).join('/')).join(',')+' || var:'+[...document.querySelectorAll('.images_box li')].map(l=>(l.querySelector('p')||{}).title+'='+((l.querySelector('img')||{}).src||'').split('/').slice(-2).join('/')).join(',')};
window.shAll=async(c)=>{const o=[];window.__shlog='running';try{
o.push('vars:'+await shVarSet(c.vars));o.push(await shPromo());o.push('rows:'+(await shRows(c.pref,c.cc,c.price,c.disc,c.qty,E)).length);o.push('lim:'+await shLimit(10));
o.push('basic:'+await shBasic(c.title,c.desc,c.skuMain));o.push('pkg:'+await shPkg(c.kg,c.L,c.Wd,c.H));o.push('tax:'+(await shTax()).slice(0,20));o.push('marca:'+await shMarca(c.marca));
o.push('main:'+await shMainImgs(c.main.map(n=>SB+c.slug+'/'+n+'.jpg')));for(const [nm,f] of Object.entries(c.vimg))o.push(nm+':'+await shVarImg(nm,SB+c.slug+'/'+f+'.jpg'));
}catch(e){o.push('ERR '+e)}window.__shlog=o.join(' | ');return __shlog};
window.SB='https://rvcvendas26-del.github.io/despacho/ref/anuncios/';
window.SCC={'Branco':'BRANCO','Off white':'OFF','Rosa':'ROSA','Azul Escuro':'AZUL','Preto':'PRETO'};
'lib ok'
