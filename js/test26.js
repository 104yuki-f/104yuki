'use strict';
window.onload=()=>{
	const words=[
		['乗り換え(電車など)、移動する(転校,転勤)','transfer','transfer.jpg'],
		['離婚する','divorce','divorce.jpg'],
		['（悪い）運命','fate','fate.jpg'],
		['（託された）運命','destiny','destiny.jpg'],
		['風味（舌＋鼻）','flavor','flavor.jpg'],
		['香り、香水','perfume','perfume.jpg'],
		['材料（調理）、要因、成分','ingredient','ingredient.jpg'],
		['柔らかい（肉など）、優しい','tender','tender.jpg'],
		['苦い','bitter','bitter.jpg'],
		['通路（飛行機、列車、劇場）','aisle','aisle.jpg'],
		['足跡、線路','track','track.jpg'],
		['地区、地方','district','district.jpg'],
		['施設','facility','facility.jpg'],
		['地下','basement','basement.jpg'],
		['高さ','height','height.jpg'],
		['遠い','distant','distant.jpg'],
		['遠く離れた','remote','remote.jpg'],
		['位置する','locate','locate.jpg'],
		['(時間,場所,地位)を占める、で忙しい','occupy','occupy.jpg'],
		['～を取り囲む','surround','surround.jpg'],
		['クラシックの、古典的な','classical','classical.jpg'],
		['文明','civilization','civilization.jpg'],
		['遺産','heritage','heritage.jpg'],
		['原稿、台本','script','script.jpg'],
		['話','tale','tale.jpg'],
		['文学','literature','literature.jpg'],
		['悲劇','tragedy','tragedy.jpg'],
		['詩','poetry','poetry.jpg'],
		['伝記','biography','biography.jpg'],
		['用語','term','term.jpg'],
		['ことわざ','proverb','proverb.jpg'],
		['流ちょうな','fluent','fluent.jpg'],
		['翻訳する','translate','translate.jpg'],
		['定義する','define','define.jpg'],
		['解釈する、通訳する','interpret','interpret.jpg'],
		['引用する','quote','quote.jpg'],
		['文字どおりに','literally','literally.jpg'],
		['～を指し示す（データなど）','indicate','indicate.jpg'],
		['～を明らかにする、暴露する','reveal','reveal.jpg'],
		['～を発表する','announce','announce.jpg'],
		['放送する','broadcast','broadcast.jpg'],
		['証明する','prove','prove.jpg'],
		['宣伝する','advertise','advertise.jpg'],
		['～を求める','seek','seek.jpg'],
		['～を楽しませる(e)','entertain','entertain.jpg'],
		['～を楽しませる(a)','amuse','amuse.jpg'],
		['(物や人の気持ちを)引きつける、魅了する','attract','attract.jpg'],
		['～を魅了する','fascinate','fascinate.jpg'],
		['～に没頭する','absorb','absorb.jpg'],
		['好きで','fond','fond.jpg'],
		['～をおびえさせる','scare','scare.jpg'],
		['～をぎょっとさせる、おびえさせる','alarm','alarm.jpg'],
		['～を驚かせる','amaze','amaze.jpg'],
		['いらいらさせる','irritate','irritate.jpg'],
		['～を当惑させる、難問、パズル','puzzle','puzzle.jpg'],
		['混乱させる','confuse','confuse.jpg'],
		['～をうんざりさせる','bore','bore.jpg'],
		['～を欲求不満にさせる','frustrate','frustrate.jpg'],
		['～を失望させる、～でがっかりする','disappoint','disappoint.jpg'],
		['に恥ずかしい思いをさせる','embarrass','embarrass.jpg'],
		['恥ずかしい','ashamed','ashamed.jpg'],
		['不安な','uneasy','uneasy.jpg'],
		['ためらう','hesitate','hesitate.jpg'],
		['～するのは気が進まない','reluctant','reluctant.jpg'],
		['震える（恐怖や怒り）','tremble','tremble.jpg'],
		['自慢する','boast','boast.jpg'],
		['嫉妬した','jealous','jealous.jpg'],
		['～を羨ましく思う','envy','envy.jpg'],
		['大声で叫ぶ','yell','yell.jpg'],
		['尊敬する','respect','respect.jpg'],
		['絶望','despair','despair.jpg'],
		['強い感情','emotion','emotion.jpg'],
		['同情、共感','sympathy','sympathy.jpg'],
		['残念なこと(自分の失敗や過ちに対して恥ずかしい気持ち)','shame','shame.jpg'],
		['強い願望、野望','ambition','ambition.jpg'],
		['自信','confidence','confidence.jpg'],
		['勇気','courage','courage.jpg'],
		['無視する','ignore','ignore.jpg'],
		['～のおかげである','owe','owe.jpg'],
		['恐怖','fear','fear.jpg'],
		['方法','method','method.jpg'],
		['(情報手段)手段、メディア','medium','medium.jpg'],
		['手段','means','means.jpg'],
		['程度、範囲','extent','extent.jpg'],
		['極端に','extremely','extremely.jpg'],
		['全体の','total','total.jpg'],
		['大部分は','largely','largely.jpg'],
		['適度な','moderate','moderate.jpg'],
		['いくぶん','somewhat','somewhat.jpg'],
		['かすかな','subtle','subtle.jpg'],
		['ひょっとすると','possibly','possibly.jpg'],
		['最終的に','eventually','eventually.jpg'],
		['必ずしも','necessarily','necessarily.jpg'],
		['率直に','frankly','frankly.jpg'],
		['皮肉なことに','ironically','ironically.jpg'],
		['その上','moreover','moreover.jpg'],
		['さもなければ','otherwise','otherwise.jpg'],
		['無関係に','regardless','regardless.jpg'],
		['～の価値がある','worth','worth.jpg'],
		['〜によると(調査、論文)(2語)','according to','according to.jpg'],
	];
	const ja =document.getElementById('ja');
	const entry=document.getElementById('entry');
	const img=document.getElementById('img');
	const btn=document.getElementById('btn');
	const result=document.getElementById('result');
	let index=0;
	let correct=0;
	btn.addEventListener('click',()=>{
		let ans=entry.value.toLowerCase();
		let msg=`${words[index][1]}`;
		if (ans == words[index][1]){
			correct++;
			msg='正解!';
		}else{
			msg=`不正解!正しくは${words[index][1]}`;
		}
		if(index==words.length-1){
			msg+=`<br>全${words.length}問中,${correct}問正解`;
			index=-1;
		}
		result.innerHTML=msg;
		result.classList.remove('fade');
		setTimeout(function(){
			result.classList.add('fade');
		},1500);
		setItem(++index);
		entry.focus();
	});
	function setItem(index){
		entry.value='';
		ja.textContent=words[index][0];
		img.src='https://104yuki-f.github.io/104yuki-f/images/words/'+words[index][2];
	}
	setItem(index);
}
