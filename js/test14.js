'use strict';
window.onload=()=>{
	const words=[
		['（時間）を費やす','spend','spend.jpg'],
		['～を遅らせる','delay','delay.jpg'],
		['（無料で）～を借りる','borrow','borrow.jpg'],
		['（無料で）～を貸す','lend','lend.jpg'],
		['（有料で）～を借りる、～を貸す','rent','rent.jpg'],
		['～を供給する，与える','provide','provide.jpg'],
		['棚（の一段）','shelf','shelf.jpg'],
		['（細長い）板','board','board.jpg'],
		['（家庭）ごみ','garbage','garbage.jpg'],
		['品物、項目','item','item.jpg'],
		['車輪','wheel','wheel.jpg'],
		['メモ','note','note.jpg'],
		['プレゼント','present','present.jpg'],
		['（漠然とした）もの','stuff','stuff.jpg'],
		['ひも','string','string.jpg'],
		['余暇','leisure','leisure.jpg'],
		['（日常の）食事','diet','diet.jpg'],
		['家具','furniture','furniture.jpg'],
		['冷蔵庫','refrigerator','refrigerator.jpg'],
		['交通（量）','traffic','traffic.jpg'],
		['渋滞','jam','jam.jpg'],
		['～を売る','sell','sell.jpg'],
		['（Bの代金としてA）を支払う','pay','pay.jpg'],
		['～を身につけている','wear','wear.jpg'],
		['服','clothes','clothes.jpg'],
		['～と結婚する','marry','marry.jpg'],
		['～に挨拶する，出迎える','greet','greet.jpg'],
		['～を注文する','order','order.jpg'],
		['部屋','room','room.jpg'],
		['（高さとして）階','story','story.jpg'],
		['用地、敷地','site','site.jpg'],
		['（土地全体として）庭','yard','yard.jpg'],
		['底','bottom','bottom.jpg'],
		['(縦の)列','line','line.jpg'],
		['(横の)列','row','row.jpg'],
		['背景','background','background.jpg'],
		['方向，方角','direction','direction.jpg'],
		['芸術','art','art.jpg'],
		['文化','culture','culture.jpg'],
		['（米国の）漫画','cartoon','cartoon.jpg'],
		['小説','novel','novel.jpg'],
		['楽器','instrument','instrument.jpg'],
		['曲、調和','tune','tune.jpg'],
		['(1つ1つの)文','sentence','sentence.jpg'],
		['記事','article','article.jpg'],
		['（文章などの）一節','passage','passage.jpg'],
		['語彙','vocabulary','vocabulary.jpg'],
		['うわさ','rumor','rumor.jpg'],
		['～をつづる','spell','spell.jpg'],
		['（単語など）を発音する','pronounce','pronounce.jpg'],
		['兆候，印、看板','sign','sign.jpg'],
		['～を意味する','mean','mean.jpg'],
		['～を出版する','publish','publish.jpg'],
		['（人が見やすいように）～を展示する','display','display.jpg'],
		['～を信頼する、～を信じる','trust','trust.jpg'],
		['（～）次第である、～に依存する','depend','depend.jpg'],
		['（～に）頼る、（～を）あてにする','rely','rely.jpg'],
		['祈る','pray','pray.jpg'],
		['～を嘆願する','beg','beg.jpg'],
		['（BよりA）を好む','prefer','prefer.jpg'],
		['しくしく泣く','weep','weep.jpg'],
		['～を嫌う、～を憎む','hate','hate.jpg'],
		['心配をする','worry','worry.jpg'],
		['（～を）心配して、（～が）不安な','anxious','anxious.jpg'],
		['～を満足させる','satisfy','satisfy.jpg'],
		['～をいらだたせる（弱め）','annoy','annoy.jpg'],
		['～に面倒をかける、～を悩ませる','bother','bother.jpg'],
		['（うるさくして）～に迷惑をかける、～を乱す','disturb','disturb.jpg'],
		['～をおびえさせる、ぎょっとさせる','frighten','frighten.jpg'],
		['～を動揺させる、気を悪くさせる','upset','upset.jpg'],
		['～を後悔する','regret','regret.jpg'],
		['親切な行為','favor','favor.jpg'],
		['関心','interest','interest.jpg'],
		['残念なこと、哀れみ','pity','pity.jpg'],
		['（～）が原因で、締め切り','due','due.jpg'],
		['理由','reason','reason.jpg'],
		['結果','result','result.jpg'],
		['効果，影響，結果','effect','effect.jpg'],
		['影響（力）','influence','influence.jpg'],
		['～を引き起こす','cause','cause.jpg'],
		['～に影響を与える，作用する','affect','affect.jpg'],
		['方法、道','way','way.jpg'],
		['方法、作法','manner','manner.jpg'],
		['目的','purpose','purpose.jpg'],
		['（for the - of）～のために','sake','sake.jpg'],
		['ちょうど、正しい、右の','right','right.jpg'],
		['完全な、完成させる','complete','complete.jpg'],
		['ほとんど～でない','hardly','hardly.jpg'],
		['ほとんど～である','nearly','nearly.jpg'],
		['ある程度，部分的に','partly','partly.jpg'],
		['実は','actually','actually.jpg'],
		['（強調として）実際に，本当に','indeed','indeed.jpg'],
		['さえも','even','even.jpg'],
		['正確に、そのとおりである','exactly','exactly.jpg'],
		['徐々に','gradually','gradually.jpg'],
		['それゆえに','therefore','therefore.jpg'],
		['代わりに','instead','instead.jpg'],
		['～まで（ずっと）','until','until.jpg'],
		['～に加えて','besides','besides.jpg'],
		['～を除いて','except','.jpg'],
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
			msg+=`<br>全${words.l-ength}問中${correct}問正解`;
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
