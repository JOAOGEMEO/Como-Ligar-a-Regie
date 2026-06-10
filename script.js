const passos=[
'MDU Sala de Máquinas',
'MDU Régie',
'Mesas, PC VTs e Mesa de Som',
'Monitores',
'Cabos das Câmaras',
'CCU',
'Câmaras',
'Flycase de Áudio',
'Verificar Áudio e Intercoms',
'Teste Geral'
];

const el=document.getElementById('steps');

passos.forEach((p,i)=>{
 const c=document.createElement('label');
 c.innerHTML=`<input type="checkbox" class="ck" data-id="${i}"> ${p}`;
 el.appendChild(c);
});

function update(){
 const cks=[...document.querySelectorAll('.ck')];
 let done=cks.filter(x=>x.checked).length;
 document.getElementById('bar').style.width=(done/cks.length*100)+'%';
 localStorage.setItem('regieon',JSON.stringify(cks.map(x=>x.checked)));
}

const saved=JSON.parse(localStorage.getItem('regieon')||'[]');
document.querySelectorAll('.ck').forEach((c,i)=>{
 c.checked=!!saved[i];
 c.addEventListener('change',update);
});
update();
