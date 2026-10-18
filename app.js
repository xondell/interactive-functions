/* Интерактивная версия урока для 9 класса. Работает автономно. */
'use strict';
const slides = [
 {chapter:'ВВЕДЕНИЕ',time:2,title:'Один аргумент.<br><em>Мир функций.</em>',desc:'<p>У каждой функции свой характер. Прямая, гипербола, корень и модуль — четыре графика, которые мы уже можем понимать.</p><p><b>Главная идея:</b> каждому допустимому значению <i>x</i> соответствует ровно одно значение <i>y</i>.</p>',formula:'y = f(x)',kind:'overview',hint:'Каждая функция на собственной системе координат',notes:'Покажите четыре графика на отдельных координатных плоскостях. Обратите внимание на различие их форм. Спросите класс: какое семейство проходит через начало координат? Цель — заинтересовать, а не объяснить все свойства заранее.'},
 {chapter:'ПОНЯТИЕ ФУНКЦИИ',time:3,title:'Каждому x —<br><em>ровно один y.</em>',desc:'<p>Функция — это правило, по которому находим значение <i>y</i> по значению <i>x</i>.</p><p>Меняй <b>x</b>: точка будет перемещаться по одной прямой. Это пара <b>(x; y)</b>.</p>',formula:'y = x + 1',kind:'mapping',controls:[{id:'x',label:'x',min:-4,max:4,step:1,value:2}],notes:'Задайте x=2 — получим y=3, точку (2;3). Попросите учащихся назвать y при x=-1 и x=0. Обратите внимание: одному x не могут одновременно соответствовать два разных значения y.'},
 {chapter:'СВОЙСТВА ФУНКЦИИ',time:2,title:'У графика есть<br><em>свой паспорт.</em>',desc:'<p>По графику можно прочитать: <b>область определения</b>, <b>множество значений</b>, <b>нули</b> и где функция <b>возрастает</b> или <b>убывает</b>.</p><p>Выдели нужный признак кнопкой.</p>',formula:'y = −x + 2',kind:'properties',buttons:[['zero','Нуль'],['sign','Знаки'],['slope','Убывание']],notes:'Нуль — x=2, поскольку y=0. При x<2 значения положительны, при x>2 отрицательны. На всём множестве действительных чисел эта функция убывает.'},
 {chapter:'ПРЯМАЯ ПРОПОРЦИОНАЛЬНОСТЬ',time:3,title:'Из начала координат —<br><em>по прямой.</em>',desc:'<p>Если <b>y = kx</b>, величины прямо пропорциональны. График всегда проходит через точку <b>(0; 0)</b>.</p><p>Изменяй <b>k</b> и наблюдай: меняется наклон, но начало координат остаётся на графике.</p>',formula:'y = kx',kind:'direct',controls:[{id:'k',label:'k',min:-3,max:3,step:0.5,value:1.5}],notes:'Сравните y=2x и y=-2x. Отрицательное k даёт убывающую прямую, положительное — возрастающую. При k=0 получается y=0 (ось x), но обычно прямую пропорциональность изучают при ненулевом k.'},
 {chapter:'ЛИНЕЙНАЯ ФУНКЦИЯ',time:3,title:'Наклон задаёт k.<br><em>Сдвиг — b.</em>',desc:'<p>График <b>y = kx + b</b> — прямая. Коэффициент <b>k</b> определяет наклон, а <b>b</b> показывает точку пересечения с осью <i>y</i>.</p><p>Попробуй поменять каждый параметр отдельно.</p>',formula:'y = kx + b',kind:'linear',controls:[{id:'k',label:'k',min:-3,max:3,step:0.5,value:1},{id:'b',label:'b',min:-3,max:3,step:0.5,value:2}],notes:'При изменении b прямая перемещается вверх-вниз без изменения наклона. При изменении k поворачивается относительно пересечения с осью y. Для k=0 график параллелен оси x.'},
 {chapter:'ЧТЕНИЕ ГРАФИКА',time:3,title:'Один нуль.<br><em>Понятный наклон.</em>',desc:'<p>Чтобы найти <b>нуль</b> функции, ищи пересечение графика с осью <i>x</i>.</p><p>Чтобы определить, возрастает она или убывает, посмотри на наклон <b>слева направо</b>.</p>',formula:'y = kx + 2',kind:'read-linear',controls:[{id:'k',label:'k',min:-3,max:3,step:0.5,value:-1}],notes:'Объясните, что нуль находится из kx+2=0. При k=-1 имеем x=2. При k=0 функция постоянная y=2 и нулей не имеет. Важно проговорить, что область определения линейной функции — все действительные числа.'},
 {chapter:'ПЕРЕСЕЧЕНИЕ ГРАФИКОВ',time:3,title:'Решение — это<br><em>общая точка.</em>',desc:'<p>Решим графически <b>2x − 1 = c</b>. Для этого построим <b>y = 2x − 1</b> и горизонтальную прямую <b>y = c</b>.</p><p>Точка их пересечения даёт значение <b>x</b>.</p>',formula:'2x − 1 = c',kind:'intersection',controls:[{id:'c',label:'c',min:-3,max:5,step:1,value:3}],notes:'При c=3 получаем x=2. Меняя c, покажите, что точка пересечения сдвигается. Обсудите связь графического и алгебраического способов решения.'},
 {chapter:'ОБРАТНАЯ ПРОПОРЦИОНАЛЬНОСТЬ',time:4,title:'Произведение постоянно.<br><em>Две ветви.</em>',desc:'<p>Для <b>y = k/x</b>, где <b>k ≠ 0</b>, произведение <b>xy = k</b> постоянно.</p><p>График называется <b>гиперболой</b>. Он состоит из двух отдельных ветвей и не пересекает оси.</p>',formula:'y = k / x',kind:'inverse',controls:[{id:'k',label:'k',min:-6,max:6,step:1,value:4}],notes:'Обратите внимание на запрет x=0: делить на нуль нельзя. При k>0 ветви в I и III четвертях, при k<0 — во II и IV. Просите учащихся проверять произведение координат любой точки, например (2;2) при k=4.'},
 {chapter:'ГИПЕРБОЛА',time:3,title:'Знак k меняет<br><em>расположение ветвей.</em>',desc:'<p>При положительном <b>k</b> точки гиперболы находятся в I и III четвертях. При отрицательном — во II и IV.</p><p>Выбери знак и сравни, что меняется.</p>',formula:'y = k / x',kind:'inverse-sign',buttons:[['pos','k > 0'],['neg','k < 0']],notes:'Покажите гиперболы y=4/x и y=-4/x. Напомните, что x не равен нулю; то же относится к y. Оси — линии, к которым ветви приближаются, но которых не касаются.'},
 {chapter:'КВАДРАТНЫЙ КОРЕНЬ',time:3,title:'Корень начинается<br><em>с нуля.</em>',desc:'<p>У функции <b>y = √x</b> под корнем не может быть отрицательного числа.</p><p>Поэтому <b>x ≥ 0</b> и <b>y ≥ 0</b>. Поменяй значение <i>x</i> и найди точку графика.</p>',formula:'y = √x',kind:'sqrt',controls:[{id:'x',label:'x',min:0,max:9,step:1,value:4}],notes:'Спросите: чему равен корень из 0, 1, 4, 9? Область определения [0;+∞), множество значений [0;+∞). График идёт вправо и вверх, начинаясь в (0;0).'},
 {chapter:'ЧТЕНИЕ ГРАФИКА КОРНЯ',time:3,title:'Возрастаем —<br><em>но не по прямой.</em>',desc:'<p>Когда <b>x</b> растёт, <b>√x</b> тоже растёт, но всё медленнее.</p><p>Сравни график <b>y = √x</b> и прямую <b>y = x</b>. Где они встречаются?</p>',formula:'y = √x   и   y = x',kind:'sqrt-compare',buttons:[['both','Оба графика'],['root','Только корень'],['line','Только прямая']],notes:'Обе кривые проходят через (0;0) и (1;1). Для 0<x<1 корень больше x, а при x>1 — меньше. Это визуальное сравнение знакомых функций, без нового материала по преобразованию графиков.'},
 {chapter:'МОДУЛЬ',time:3,title:'Модуль не бывает<br><em>отрицательным.</em>',desc:'<p>Модуль <b>|x|</b> — расстояние от числа <i>x</i> до нуля на числовой прямой.</p><p>График <b>y = |x|</b> выглядит как буква V и симметричен относительно оси <i>y</i>.</p>',formula:'y = |x|',kind:'abs',controls:[{id:'x',label:'x',min:-5,max:5,step:1,value:-3}],notes:'Для x=-3 получаем |x|=3, для x=3 тоже 3. Покажите симметрию. Область определения — все действительные числа, множество значений y≥0. Функция убывает при x≤0 и возрастает при x≥0.'},
 {chapter:'СРАВНЕНИЕ',time:3,title:'Четыре формы.<br><em>Одна система координат.</em>',desc:'<p>Определи знакомое семейство по форме графика.</p><p>Можно по очереди включать прямую, гиперболу, корень и модуль.</p>',formula:'y = x,   y = 4/x,   y = √x,   y = |x|',kind:'family',buttons:[['all','Все'],['line','Прямая'],['inverse','Гипербола'],['sqrt','Корень'],['abs','Модуль']],notes:'Попросите учеников проговорить для каждого графика область определения и форму. Не используйте термины и формулы квадратичной функции: она не включена в подготовку 9 класса.'},
 {chapter:'ПРАКТИКА',time:4,title:'Узнаёшь график?<br><em>Проверь себя.</em>',desc:'<p>Какая формула соответствует графику справа?</p><p>Сначала выбери ответ. Затем проверь объяснение.</p>',formula:'Найди формулу',kind:'quiz',notes:'Правильный ответ — y=4/x: видны две ветви в I и III четвертях. Объясните, почему y=x и y=|x| не подходят: они проходят через начало координат; корень существует лишь при x≥0.'},
 {chapter:'ИТОГ УРОКА',time:3,title:'Ты читаешь графики.<br><em>Математика оживает.</em>',desc:'<p>Теперь ты умеешь узнавать <b>прямую пропорциональность</b>, <b>линейную функцию</b>, <b>обратную пропорциональность</b>, <b>корень</b> и <b>модуль</b>.</p><p>Выбирай функцию — и проверь, узнаешь ли её график без формулы.</p>',formula:'Какую функцию видишь?',kind:'final',buttons:[['line','Линейная'],['inverse','Обратная'],['sqrt','Корень'],['abs','Модуль']],notes:'Закрепите пять основных типов, включая частный случай линейной функции — прямую пропорциональность. Финальный опрос: какой график нельзя строить при x<0? Какой никогда не пересекает ось x? Какой симметричен относительно оси y?'}
];
const $=id=>document.getElementById(id);
const state={i:0,values:{},mode:{},panel:true,quiz:null};
function val(key,defaultValue){return Object.prototype.hasOwnProperty.call(state.values,key)?state.values[key]:defaultValue}
function fmt(n){return Number.isInteger(n)?String(n):Number(n).toFixed(1).replace(/\.0$/,'')}
function current(){return slides[state.i]}
function reset(){const s=current();state.values={};for(const c of s.controls||[])state.values[c.id]=c.value;state.mode={};state.quiz=null;if(s.buttons)state.mode.active=s.buttons[0][0]}
function ratio(){let width=$('app').clientWidth||1440,height=$('app').clientHeight||900;return {W:width,H:height,L:state.panel?Math.max(420,width*0.365):70,R:Math.max(600,width-45),T:96,B:height-92}}
function planeConfig(){const {W,H,L,R,T,B}=ratio();const root=current().kind==='sqrt';return{W,H,L,R,T,B,xmin:root?-1:-5.5,xmax:root?10:5.5,ymin:root?-1:-4.5,ymax:root?4.5:4.5}}
function xx(x,p){return p.L+(x-p.xmin)/(p.xmax-p.xmin)*(p.R-p.L)}
function yy(y,p){return p.B-(y-p.ymin)/(p.ymax-p.ymin)*(p.B-p.T)}
function safe(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
function pathFrom(fn,p,opt={}){const n=610, lo=opt.min??p.xmin,hi=opt.max??p.xmax;let d='',open=false,prevY=null;for(let i=0;i<=n;i++){const x=lo+(hi-lo)*i/n;const y=fn(x);if(!Number.isFinite(y)||Math.abs(y)>p.ymax+1.5||Math.abs(y-p.ymin)>30||(prevY!==null&&Math.abs(y-prevY)>5.5)){open=false;prevY=null;continue}d+=(open?'L':'M')+xx(x,p).toFixed(1)+' '+yy(y,p).toFixed(1)+' ';open=true;prevY=y}return d}
function layerLine(fn,color,p,opts={}){const parts=opts.split?[[p.xmin,-.035],[.035,p.xmax]]:[[opts.min??p.xmin,opts.max??p.xmax]];return parts.map(([min,max])=>`<path d="${pathFrom(fn,p,{min,max})}" fill="none" stroke="${color}" stroke-width="${opts.width||5}" stroke-linecap="round" opacity="${opts.opacity??1}"/>`).join('')}
function point(x,y,color,p,label,showGuide=false){if(!Number.isFinite(x)||!Number.isFinite(y)||x<p.xmin||x>p.xmax||y<p.ymin||y>p.ymax)return '';let s='';if(showGuide){s+=`<line class="marked-line" x1="${xx(x,p)}" y1="${yy(y,p)}" x2="${xx(x,p)}" y2="${yy(0,p)}"/><line class="marked-line" x1="${xx(x,p)}" y1="${yy(y,p)}" x2="${xx(0,p)}" y2="${yy(y,p)}"/>`}s+=`<circle cx="${xx(x,p)}" cy="${yy(y,p)}" r="10" fill="${color}" stroke="#fff" stroke-width="4"/>`;if(label)s+=`<text class="point-label" x="${xx(x,p)+13}" y="${yy(y,p)-17}">${safe(label)}</text>`;return s}
function curveLabel(x,y,label,color,p){return `<text class="plot-label" x="${xx(x,p)}" y="${yy(y,p)}" fill="${color}">${safe(label)}</text>`}
function drawGrid(p){const {W,H,L,R,T,B}=p;let s=`<defs><clipPath id="graphArea"><rect x="${L}" y="${T}" width="${R-L}" height="${B-T}"/></clipPath></defs>`;for(let x=Math.ceil(p.xmin);x<=p.xmax;x++){s+=`<line class="grid-line" x1="${xx(x,p)}" x2="${xx(x,p)}" y1="${T}" y2="${B}"/>`;if(x!==0)s+=`<text class="tick-label" x="${xx(x,p)}" y="${yy(0,p)+19}" text-anchor="middle">${x}</text>`}for(let y=Math.ceil(p.ymin);y<=p.ymax;y++){s+=`<line class="grid-line" x1="${L}" x2="${R}" y1="${yy(y,p)}" y2="${yy(y,p)}"/>`;if(y!==0)s+=`<text class="tick-label" x="${xx(0,p)-12}" y="${yy(y,p)+5}" text-anchor="end">${y}</text>`}s+=`<line class="axis" x1="${L}" y1="${yy(0,p)}" x2="${R}" y2="${yy(0,p)}"/><line class="axis" x1="${xx(0,p)}" y1="${B}" x2="${xx(0,p)}" y2="${T}"/><path d="M ${R-9} ${yy(0,p)-5} L ${R} ${yy(0,p)} L ${R-9} ${yy(0,p)+5} M ${xx(0,p)-5} ${T+9} L ${xx(0,p)} ${T} L ${xx(0,p)+5} ${T+9}" fill="none" stroke="#67788d" stroke-width="2"/><text class="axis-label" x="${R-2}" y="${yy(0,p)-14}">x</text><text class="axis-label" x="${xx(0,p)+14}" y="${T+14}">y</text><text class="tick-label" x="${xx(0,p)-14}" y="${yy(0,p)+19}">0</text>`;return s}
const C={blue:'#205bd5',orange:'#b84220',teal:'#087f75',purple:'#8a4dcc',gold:'#c17f2d'};

/**
 * Первый слайд: четыре полностью независимые системы координат.
 * Координаты и размер рассчитываются от доступной области, без
 * фоновых карточек или выходящих за пределы графиков линий.
 */
function renderOverviewAsFourPlots(){
  const {W,H,L}=ratio();
  const left=state.panel?Math.max(516,L+8):Math.max(84,W*.10);
  const right=W-55, top=114, bottom=H-115;
  const gapX=Math.max(24,Math.min(43,(right-left)*.052));
  const gapY=38;
  const availableWidth=Math.max(480,right-left);
  const cw=(availableWidth-gapX)/2;
  const rh=(bottom-top-gapY)/2;
  const specs=[
    {title:'Прямая пропорциональность',f:'y = x',color:C.blue,
     xmin:-4.5,xmax:4.5,ymin:-4.5,ymax:4.5,fn:x=>x},
    {title:'Обратная пропорциональность',f:'y = 4/x',color:C.orange,
     xmin:-4.5,xmax:4.5,ymin:-4.5,ymax:4.5,fn:x=>4/x,split:true},
    {title:'Квадратный корень',f:'y = √x',color:C.teal,
     xmin:-1,xmax:9.5,ymin:-.85,ymax:4.5,fn:x=>x<0?NaN:Math.sqrt(x)},
    {title:'Модуль',f:'y = |x|',color:C.purple,
     xmin:-4.5,xmax:4.5,ymin:-.8,ymax:4.5,fn:x=>Math.abs(x)}
  ];
  let result='<rect width="'+W+'" height="'+H+'" fill="transparent"/>';
  specs.forEach((s,i)=>{
    const row=Math.floor(i/2), col=i%2;
    const colX=left+col*(cw+gapX), rowY=top+row*(rh+gapY);
    const textX=colX+8;
    const p={L:colX+10,R:colX+cw-12,T:rowY+65,B:rowY+rh-6,
      xmin:s.xmin,xmax:s.xmax,ymin:s.ymin,ymax:s.ymax};
    const px=x=>p.L+(x-p.xmin)/(p.xmax-p.xmin)*(p.R-p.L);
    const py=y=>p.B-(y-p.ymin)/(p.ymax-p.ymin)*(p.B-p.T);
    const clip='separate-function-'+i;
    // Заголовки находятся НАД графиком, не пересекаются с его осями.
    const headingSize=cw<340?16:18;
    result+=`<text x="${textX}" y="${rowY+17}" fill="#172638" font-family="Arial,Helvetica,sans-serif" font-size="${headingSize}" font-weight="750">${s.title}</text>`;
    result+=`<text x="${textX}" y="${rowY+44}" fill="${s.color}" font-family="Georgia,serif" font-size="23" font-weight="700">${s.f}</text>`;
    result+=`<defs><clipPath id="${clip}"><rect x="${p.L}" y="${p.T}" width="${p.R-p.L}" height="${p.B-p.T}"/></clipPath></defs>`;
    // Деликатная координатная сетка без фоновых прямоугольников.
    for(let x=Math.ceil(p.xmin);x<=p.xmax;x++){
      const x1=px(x);
      result+=`<line x1="${x1}" y1="${p.T}" x2="${x1}" y2="${p.B}" stroke="#9aaec0" stroke-width="1" opacity=".17"/>`;
      if(x!==0 && x%2===0)
        result+=`<text x="${x1}" y="${Math.min(p.B-4,py(0)+16)}" font-size="12" fill="#758498" text-anchor="middle">${x}</text>`;
    }
    for(let y=Math.ceil(p.ymin);y<=p.ymax;y++){
      const y1=py(y);
      result+=`<line x1="${p.L}" y1="${y1}" x2="${p.R}" y2="${y1}" stroke="#9aaec0" stroke-width="1" opacity=".17"/>`;
      if(y!==0 && y%2===0)
        result+=`<text x="${Math.max(p.L+14,px(0)-9)}" y="${y1+4}" font-size="12" fill="#758498" text-anchor="end">${y}</text>`;
    }
    // Оси нарисованы внутри каждой плоскости отдельно.
    const xaxis=py(0),yaxis=px(0);
    result+=`<line x1="${p.L}" y1="${xaxis}" x2="${p.R}" y2="${xaxis}" stroke="#718398" stroke-width="2"/>`;
    result+=`<line x1="${yaxis}" y1="${p.T}" x2="${yaxis}" y2="${p.B}" stroke="#718398" stroke-width="2"/>`;
    result+=`<path d="M ${p.R-8} ${xaxis-4} L ${p.R} ${xaxis} L ${p.R-8} ${xaxis+4} M ${yaxis-4} ${p.T+8} L ${yaxis} ${p.T} L ${yaxis+4} ${p.T+8}" fill="none" stroke="#718398" stroke-width="1.8"/>`;
    result+=`<text x="${p.R-5}" y="${xaxis-10}" fill="#506178" font-size="15" font-weight="700">x</text>`;
    result+=`<text x="${yaxis+10}" y="${p.T+15}" fill="#506178" font-size="15" font-weight="700">y</text>`;
    result+=`<text x="${yaxis-9}" y="${xaxis+15}" text-anchor="end" font-size="12" fill="#758498">0</text>`;
    // Разрыв при x=0 у гиперболы не должен соединять две ветви.
    const segments=s.split?[[p.xmin,-.03],[.03,p.xmax]]:[[p.xmin,p.xmax]];
    let paths='';
    segments.forEach(([lo,hi])=>{
      let d='',open=false,oldY=null;
      for(let t=0;t<=650;t++){
        const x=lo+(hi-lo)*t/650,y=s.fn(x);
        if(!Number.isFinite(y)||y<p.ymin-1||y>p.ymax+1||(oldY!==null&&Math.abs(y-oldY)>3.5)){
          open=false;oldY=null;continue;
        }
        d+=(open?'L':'M')+px(x).toFixed(2)+','+py(y).toFixed(2)+' ';
        open=true;oldY=y;
      }
      paths+=`<path d="${d}" fill="none" stroke="${s.color}" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"/>`;
    });
    result+=`<g clip-path="url(#${clip})">${paths}</g>`;
  });
  return result;
}

function graphRender(){let p=planeConfig(),g='',base=drawGrid(p),overlay='',extra='';const k=current().kind;
 if(k==='overview')return renderOverviewAsFourPlots();
 if(k==='family'||k==='final'){let select=state.mode.active||'all';if(k==='final'&&select==='line')select='line';const show=(n)=>select==='all'||select===n; if(show('line')){g+=layerLine(x=>x,C.blue,p,{width:5.2,opacity:select==='all'?.95:1});g+=curveLabel(3.1,3.55,'y = x',C.blue,p)}if(show('inverse')){g+=layerLine(x=>4/x,C.orange,p,{split:true,width:5.3});g+=curveLabel(2.8,1.95,'y = 4/x',C.orange,p)}if(show('sqrt')){g+=layerLine(x=>x<0?NaN:Math.sqrt(x),C.teal,p,{min:0,width:6});g+=curveLabel(4,2.5,'y = √x',C.teal,p)}if(show('abs')){g+=layerLine(x=>Math.abs(x),C.purple,p,{width:4.5,opacity:select==='all'?.6:1});g+=curveLabel(-3.3,3.85,'y = |x|',C.purple,p)}}
 if(k==='mapping'){const x=val('x',2),y=x+1;g+=layerLine(v=>v+1,C.blue,p);overlay+=point(x,y,C.orange,p,`(${fmt(x)}; ${fmt(y)})`,true)}
 if(k==='properties'){g+=layerLine(x=>-x+2,C.blue,p);const m=state.mode.active||'zero';if(m==='zero')overlay+=point(2,0,C.orange,p,'нуль: x = 2',true);else if(m==='sign'){extra+=`<rect x="${xx(p.xmin,p)}" y="${p.T}" width="${xx(2,p)-xx(p.xmin,p)}" height="${p.B-p.T}" fill="${C.teal}" opacity=".045"/><rect x="${xx(2,p)}" y="${p.T}" width="${xx(p.xmax,p)-xx(2,p)}" height="${p.B-p.T}" fill="${C.orange}" opacity=".05"/>`;overlay+=curveLabel(-2,3.7,'y > 0',C.teal,p)+curveLabel(3,-3.2,'y < 0',C.orange,p)}else overlay+=curveLabel(-2,3.7,'убывает ↘',C.orange,p)}
 if(k==='direct'){const a=val('k',1.5);g+=layerLine(x=>a*x,C.blue,p);overlay+=point(0,0,C.orange,p,'(0; 0)');overlay+=curveLabel(a>=0?1.5:1,Math.min(4,a*1.5+0.45),`k = ${fmt(a)}`,C.blue,p)}
 if(k==='linear'){const a=val('k',1),b=val('b',2);g+=layerLine(x=>a*x+b,C.blue,p);overlay+=point(0,b,C.orange,p,`b = ${fmt(b)}`);overlay+=curveLabel(2,Math.min(4,a*2+b+.6),`k = ${fmt(a)}`,C.blue,p)}
 if(k==='read-linear'){const a=val('k',-1),fn=x=>a*x+2;g+=layerLine(fn,C.blue,p);overlay+=point(0,2,C.orange,p,'b = 2');if(a!==0)overlay+=point(-2/a,0,C.teal,p,`x₀ = ${fmt(-2/a)}`,true)}
 if(k==='intersection'){const c=val('c',3),x=(c+1)/2;g+=layerLine(x=>2*x-1,C.blue,p);g+=layerLine(()=>c,C.orange,p,{width:3.8});overlay+=point(x,c,C.teal,p,`x = ${fmt(x)}`,true);overlay+=curveLabel(2.6,Math.min(c+.3,4.1),`y = ${fmt(c)}`,C.orange,p)}
 if(k==='inverse'||k==='inverse-sign'){let a=k==='inverse'?(val('k',4)||1):(state.mode.active==='neg'?-4:4);g+=layerLine(x=>a/x,C.orange,p,{split:true,width:5.7});overlay+=point(a>0?2:-2,a/(a>0?2:-2),C.blue,p,`x·y = ${fmt(a)}`,true);overlay+=curveLabel(a>0?3.5:-3.9,a>0?1.55:1.6,`k = ${fmt(a)}`,C.orange,p)}
 if(k==='sqrt'){let x=val('x',4);g+=layerLine(x=>x<0?NaN:Math.sqrt(x),C.teal,p,{min:0,width:6});overlay+=point(x,Math.sqrt(x),C.orange,p,`(${fmt(x)}; ${fmt(Math.sqrt(x))})`,true);overlay+=point(0,0,C.blue,p)}
 if(k==='sqrt-compare'){const m=state.mode.active||'both';if(m!=='line')g+=layerLine(x=>x>=0?Math.sqrt(x):NaN,C.teal,p,{min:0,width:6});if(m!=='root')g+=layerLine(x=>x,C.blue,p,{width:4.5});if(m==='both'){overlay+=point(0,0,C.orange,p,'(0; 0)');overlay+=point(1,1,C.orange,p,'(1; 1)')}if(m!=='line')overlay+=curveLabel(3.3,2.5,'y = √x',C.teal,p);if(m!=='root')overlay+=curveLabel(2.5,3.1,'y = x',C.blue,p)}
 if(k==='abs'){let x=val('x',-3);g+=layerLine(x=>Math.abs(x),C.purple,p,{width:6});overlay+=point(x,Math.abs(x),C.orange,p,`(${fmt(x)}; ${fmt(Math.abs(x))})`,true);overlay+=point(0,0,C.blue,p);overlay+=point(-x,Math.abs(x),C.teal,p,'симметрия',true)}
 if(k==='quiz'){g+=layerLine(x=>4/x,C.orange,p,{split:true,width:6});overlay+=curveLabel(3,2.05,'?',C.orange,p)}
 return `<rect width="${p.W}" height="${p.H}" fill="transparent"/>${base}<g clip-path="url(#graphArea)">${extra}${g}${overlay}</g>`
}
function controlMarkup(c){let a=val(c.id,c.value);return `<label class="sliderrow"><span>${c.label}</span><input type="range" min="${c.min}" max="${c.max}" step="${c.step}" value="${a}" data-param="${c.id}" aria-label="Коэффициент ${c.label}"><output id="output-${c.id}">${fmt(a)}</output></label>`}
function quizMarkup(){return `<div class="buttons">${[['a','y = x'],['b','y = 4 / x'],['c','y = √x'],['d','y = |x|']].map(([id,text])=>`<button class="qbtn" data-quiz="${id}">${text}</button>`).join('')}</div>`}
function controlsMarkup(s){if(s.kind==='quiz')return quizMarkup();if(s.controls)return s.controls.map(controlMarkup).join('');if(s.buttons)return `<div class="buttons">${s.buttons.map(([id,label])=>`<button data-mode="${id}" class="${(state.mode.active||s.buttons[0][0])===id?'active':''}">${label}</button>`).join('')}</div>`;return ''}
function insightText(){const s=current(),k=s.kind,v=state.values,m=state.mode.active;switch(k){case'overview':return '<strong>Наблюдение:</strong> форма графика подсказывает, какая функция перед нами.';case'mapping':return `<strong>Ответ:</strong> x = ${fmt(v.x)}, y = ${fmt(v.x+1)}.`;case'properties':return m==='sign'?'Слева от x = 2 график выше оси x; справа — ниже.':m==='slope'?'При увеличении x значение y уменьшается.':'<strong>Нуль:</strong> x = 2. Здесь график пересекает ось x.';case'direct':return v.k>0?'<strong>k > 0:</strong> прямая возрастает.':v.k<0?'<strong>k < 0:</strong> прямая убывает.':'<strong>k = 0:</strong> это постоянная нулевая функция.';case'linear':return `<strong>Проверь:</strong> при x = 0 имеем y = ${fmt(v.b)}.`;case'read-linear':return v.k===0?'Прямая горизонтальна: y = 2; нулей нет.':`<strong>Нуль:</strong> x = ${fmt(-2/v.k)}. Функция ${v.k>0?'возрастает':'убывает'}.`;case'intersection':return `<strong>Решение:</strong> x = ${fmt((v.c+1)/2)}.`;case'inverse':return `<strong>Важно:</strong> x ≠ 0. Произведение x·y = ${fmt(v.k||1)}.`;case'inverse-sign':return m==='neg'?'Ветви находятся во II и IV четвертях.':'Ветви находятся в I и III четвертях.';case'sqrt':return `<strong>Ответ:</strong> √${fmt(v.x)} = ${fmt(Math.sqrt(v.x))}.`;case'sqrt-compare':return 'Оба графика проходят через точки (0; 0) и (1; 1).';case'abs':return `<strong>Ответ:</strong> |${fmt(v.x)}| = ${fmt(Math.abs(v.x))}.`;case'family':return 'У каждого семейства — характерный силуэт.';case'quiz':return state.quiz===null?'Выбери одну из четырёх формул.':state.quiz==='b'?'<strong>Верно!</strong> Две ветви в I и III четвертях — обратная пропорциональность.':'<strong>Попробуй ещё.</strong> На рисунке две отдельные ветви, которые не проходят через начало координат.';case'final':return ({line:'Прямая: y = x.',inverse:'Гипербола: y = 4/x.',sqrt:'Корень: y = √x.',abs:'Модуль: y = |x|.'})[m]||'Узнай форму по графику.'}}
function render(){const s=current();$('kicker').textContent=`${String(state.i+1).padStart(2,'0')} / ${s.chapter}`;$('headline').innerHTML=s.title;$('description').innerHTML=s.desc;$('formula').innerHTML=s.formula;$('controls').innerHTML=controlsMarkup(s);$('insight').innerHTML=insightText();$('sectionTag').textContent=s.chapter;$('timeTag').textContent=`${String(s.time).padStart(2,'0')} МИН`;$('graphHint').textContent=s.hint||'Меняй параметры — график обновится';$('graphHint').style.display=s.kind==='overview'?'none':'';$('counter').textContent=`${String(state.i+1).padStart(2,'0')} / 15`;$('graph').setAttribute('viewBox',`0 0 ${ratio().W} ${ratio().H}`);$('graph').innerHTML=graphRender();$('prev').disabled=state.i===0;$('next').disabled=state.i===slides.length-1;$('progress').innerHTML=slides.map((t,j)=>`<button class="${j===state.i?'current':j<state.i?'passed':''}" title="Слайд ${j+1}" data-slide="${j}"></button>`).join('');document.title=`${state.i+1}/15 · Функции · 9 класс`}
function redraw(){for(const [k,v] of Object.entries(state.values)){const el=$('output-'+k);if(el)el.textContent=fmt(v)}$('graph').innerHTML=graphRender();$('insight').innerHTML=insightText()}
function go(i){if(i<0||i>=slides.length)return;state.i=i;reset();render();history.replaceState(null,'','#slide-'+String(i+1).padStart(2,'0'))}
function openNotes(){const s=current();$('notesNum').textContent=String(state.i+1).padStart(2,'0')+'/15';$('notesTitle').textContent=s.title.replace(/<[^>]*>/g,' ');$('notesText').innerHTML=`<p>${s.notes}</p>`;$('notesDlg').showModal()}
function openMenu(){$('slideMenu').innerHTML=slides.map((s,i)=>`<button data-slide="${i}"><small>${String(i+1).padStart(2,'0')} / ${s.chapter}</small>${s.title.replace(/<[^>]*>/g,' ')}</button>`).join('');$('menuDlg').showModal()}
function togglePanel(){state.panel=!state.panel;$('panel').classList.toggle('hidden',!state.panel);$('expand').classList.toggle('hidden',state.panel);redraw()}
function toggleFull(){if(document.fullscreenElement)document.exitFullscreen();else document.documentElement.requestFullscreen?.()}
$('prev').onclick=()=>go(state.i-1);$('next').onclick=()=>go(state.i+1);$('collapse').onclick=togglePanel;$('expand').onclick=togglePanel;$('notesBtn').onclick=openNotes;$('fsBtn').onclick=toggleFull;$('menuBtn').onclick=openMenu;$('closeNotes').onclick=()=>$('notesDlg').close();$('closeMenu').onclick=()=>$('menuDlg').close();
document.addEventListener('input',e=>{const key=e.target.dataset.param;if(!key)return;let v=+e.target.value;if(current().kind==='inverse'&&key==='k'&&v===0){v=1;e.target.value=1}state.values[key]=v;redraw()});document.addEventListener('click',e=>{let mode=e.target.closest('[data-mode]');if(mode){state.mode.active=mode.dataset.mode;render();return}let q=e.target.closest('[data-quiz]');if(q){state.quiz=q.dataset.quiz;document.querySelectorAll('.qbtn').forEach(b=>b.classList.toggle('active',b.dataset.quiz===state.quiz));$('insight').innerHTML=insightText();return}let dot=e.target.closest('[data-slide]');if(dot){const d=Number(dot.dataset.slide);$('menuDlg').open&&$('menuDlg').close();go(d)}});
window.addEventListener('keydown',e=>{if(e.target.matches('input,textarea'))return;if($('notesDlg').open||$('menuDlg').open)return;if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();go(state.i+1)}else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(state.i-1)}else if(e.key==='Home'){go(0)}else if(e.key==='End'){go(slides.length-1)}else if(e.key.toLowerCase()==='n'){openNotes()}else if(e.key.toLowerCase()==='t'){togglePanel()}else if(e.key.toLowerCase()==='f'){toggleFull()}});
window.addEventListener('resize',render);
const initial=location.hash.match(/slide-(\d+)/i);if(initial)state.i=Math.min(14,Math.max(0,+initial[1]-1));reset();render();
