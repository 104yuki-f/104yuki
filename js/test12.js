'use strict';
window.onload=()=>{
	const words=[
		['～を破壊する','destroy','destroy.jpg'],
		['（全体を壊して）〜を台無しにする','ruin','ruin.jpg'],
		['危険','danger','danger.jpg'],
		['近所の人','neighbor','neighbor.jpg'],
		['聴衆、観客','audience','audience.jpg'],
		['群衆','crowd','crowd.jpg'],
		['著者','author','author.jpg'],
		['職員','staff','staff.jpg'],
		['店員','clerk','clerk.jpg'],
		['客','customer','customer.jpg'],
		['乗客','passenger','passenger.jpg'],
		['年配の','elderly','elderly.jpg'],
		['女性の','female','female.jpg'],
		['向かう','head','head.jpg'],
		['〜の後について行く、〜に続く','follow','follow.jpg'],
		['歩き回る、さまよう','wander','wander.jpg'],
		['旅行する、移動する','travel','travel.jpg'],
		['〜を通り過ぎる','pass','pass.jpg'],
		['〜しそうだ、可能性が高い','likely','likely.jpg'],
		['当然の、自然の','natural','natural.jpg'],
		['確かな、特定の','certain','certain.jpg'],
		['おそらく','probably','probably.jpg'],
		['〜に直面する','face','face.jpg'],
		['～を避ける','avoid','avoid.jpg'],
		['～を解決する、解く','solve','solve.jpg'],
		['（個人的な）問題、ごたごた','trouble','trouble.jpg'],
		['（議論となる）問題','issue','issue.jpg'],
		['〜に声援を送る','cheer','cheer.jpg'],
		['～に促す、奨励する、～を励ます','encourage','encourage.jpg'],
		['～を支持する','support','support.jpg'],
		['～を妨げる','prevent','prevent.jpg'],
		['～を否定する','deny','deny.jpg'],
		['～に可能にする','enable','enable.jpg'],
		['成功する','succeed','succeed.jpg'],
		['～を逃す','miss','miss.jpg'],
		['失敗する','fail','fail.jpg'],
		['間違い','mistake','mistake.jpg'],
		['〜を調べる、検査する、照合する','check','check.jpg'],
		['〜を隠す','hide','hide.jpg'],
		['～を描く','draw','draw.jpg'],
		['～に参加する','join','join.jpg'],
		['～を投げる','throw','throw.jpg'],
		['～を操作する','operate','operate.jpg'],
		['（専門的に）～を修理する','repair','repair.jpg'],
		['～を縫う','sew','sew.jpg'],
		['～を上げる','raise','raise.jpg'],
		['（飲食店などで）～を出す','serve','serve.jpg'],
		['〜を注ぐ','pour','pour.jpg'],
		['～をこぼす','spill','spill.jpg'],
		['ふりをする','pretend','pretend.jpg'],
		['ふるまう','behave','behave.jpg'],
		['〜を我慢する、～に耐える','bear','bear.jpg'],
		['～を探検する、を探索する','explore','explore.jpg'],
		['起こる（口語的）','happen','happen.jpg'],
		['現れる、～のように見える','appear','appear.jpg'],
		['～のままでいる','remain','remain.jpg'],
		['生き残る','survive','survive.jpg'],
		['所属している','belong','belong.jpg'],
		['〜を代表する','represent','represent.jpg'],
		['～の基礎を置く、土台','base','base.jpg'],
		['（一部）を含む、～込み','include','include.jpg'],
		['（全体）を含む、～で構成されている','contain','contain.jpg'],
		['自分自身の','own','own.jpg'],
		['〜を共有する','share','share.jpg'],
		['（特定のものを選んで）集める、集まる','collect','collect.jpg'],
		['（広がっているものを）集める','gather','gather.jpg'],
		['歴史','history','history.jpg'],
		['科目','subject','subject.jpg'],
		['教育','education','education.jpg'],
		['知識、知っていること','knowledge','knowledge.jpg'],
		['制服','uniform','uniform.jpg'],
		['学年','grade','grade.jpg'],
		['最上級生','senior','senior.jpg'],
		['卒業する','graduate','graduate.jpg'],
		['を決定する、決心する','decide','decide.jpg'],
		['～を判断する','judge','judge.jpg'],
		['（仕事、行動）をやめる（口語的）','quit','quit.jpg'],
		['引退する、退職する','retire','retire.jpg'],
		['再検討','review','review.jpg'],
		['（自分の好みで）選ぶ','choose','choose.jpg'],
		['〜を想像する','imagine','imagine.jpg'],
		['～を推測する','guess','guess.jpg'],
		['～を予期する','expect','expect.jpg'],
		['～を予測する','predict','predict.jpg'],
		['～を覚えている','remember','remember.jpg'],
		['～に思い出させる','remind','remind.jpg'],
		['～を理解する、悟る','realize','realize.jpg'],
		['〜を（正しく）理解する、～の良さがわかる','appreciate','appreciate.jpg'],
		['～を受け入れる','accept','accept.jpg'],
		['～をよく考える、考慮する','consider','consider.jpg'],
		['～を気にする、心、精神','mind','mind.jpg'],
		['〜かなと思う','wonder','wonder.jpg'],
		['～のように思われる','seem','seem.jpg'],
		['～を比較する','compare','compare.jpg'],
		['集中する','concentrate','concentrate.jpg'],
		['焦点を当てる、力を注ぐ','focus','focus.jpg'],
		['～を許可する','allow','allow.jpg'],
		['（正しいが喜ばしくないこと）を認める','admit','admit.jpg'],
		['地面','ground','ground.jpg'],
		['汚染、公害','pollution','pollution.jpg'],
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
		let msg='';
		if (ans == words[index][1]){
			correct++;
			msg='〇';
		}else{
			msg=`× 正:${words[index][1]}`;
		}
		if(index==words.length-1){
			msg+=`<br>全${words.length}問中${correct}問正解`;
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
		img.src='../images/words/'+words[index][2];
	}
	setItem(index);
}
