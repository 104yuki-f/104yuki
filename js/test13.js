'use strict';
window.onload=()=>{
	const words=[
		['（視界に入る）光景','sight','sight.jpg'],		
		['（ある場所からの）眺め、景色','view','view.jpg'],
		["（場所全体の）風景","landscape","landscape.jpg"],		
		["自然","nature","nature.jpg"],
		["種（たね）","seed","seed.jpg"],		
		["植物","plant","plant.jpg"],
		["花が咲く","bloom","bloom.jpg"],
		["収穫","harvest","harvest.jpg"],	
		["昆虫","insect","insect.jpg"],
		["地震","earthquake","earthquake.jpg"],
		["温度、気温","temperature","temperature.jpg"],
		["度","degree","degree.jpg"],
		["洪水","flood","flood.jpg"],
		["凍る、凍りつく","freeze","freeze.jpg"],
		["～を反射する","reflect","reflect.jpg"],
		["礼儀正しい","polite","polite.jpg"],
		["無礼な、不作法な","rude","rude.jpg"],
		["孤独な","lonely","lonely.jpg"],
		["怠惰な、いい加減な","lazy","lazy.jpg"],
		["（規則が）厳しい","strict","strict.jpg"],
		["醜い","ugly","ugly.jpg"],
		["知的な、賢い（かたい）","intelligent","intelligent.jpg"],
		["（親しみを込めて）ばかな","silly","silly.jpg"],
		["あがって、落ち着かない","nervous","nervous.jpg"],
		["目を覚まして","awake","awake.jpg"],
		["態度、姿勢","attitude","attitude.jpg"],
		["性格、特徴","character","character.jpg"],
		["（特有の）特徴","characteristic","characteristic.jpg"],
		["（際立った）特徴、特集記事","feature","feature.jpg"],
		["詳細","detail","detail.jpg"],
		["利点、長所","advantage","advantage.jpg"],
		["過ち、ちょっとした欠点、不具合","fault","fault.jpg"],
		["質","quality","quality.jpg"],
		["（欠点、誤りがなく）正確な、正しい","correct","correct.jpg"],
		["理想的な、申し分のない","ideal","ideal.jpg"],
		["公正な、公平な","fair","fair.jpg"],
		["（きっちり）適切な、適合した","appropriate","appropriate.jpg"],
		["有名な","famous","famous.jpg"],
		["初歩的な、初等の、基本の","elementary","elementary.jpg"],
		["主要な","major","major.jpg"],
		["(動詞)重要である","matter","matter.jpg"],
		["明るい","bright","bright.jpg"],
		["輝いている","brilliant","brilliant.jpg"],
		["生き生きとした、活気のある","lively","lively.jpg"],
		["快適な","comfortable","comfortable.jpg"],
		["人にとって楽しい、快適な","pleasant","pleasant.jpg"],
		["都合がよい","convenient","convenient.jpg"],
		["（判断、推論が）誤った","false","false.jpg"],
		["（世間一般的に）ひどい","terrible","terrible.jpg"],
		["（表面的に）怖い、ひどい、不快な","awful","awful.jpg"],
		["薄い","thin","thin.jpg"],
		["引き締まった","tight","tight.jpg"],
		["ゆるい","loose","loose.jpg"],
		["生の、加工されていない","raw","raw.jpg"],
		["空の、中身のない","empty","empty.jpg"],
		["滑らかな","smooth","smooth.jpg"],
		["直接的な","direct","direct.jpg"],
		["知られた","familiar","familiar.jpg"],
		["似た","similar","similar.jpg"],
		["(動詞)異なる","differ","differ.jpg"],
		["さまざまだ、変わる","vary","vary.jpg"],
		["（同類の中で）特定の","specific","specific.jpg"],
		["普及した、、共通の、普通の","common","common.jpg"],
		["珍しい、普通ではない","unusual","unusual.jpg"],
		["～を加える","add","add.jpg"],
		["増える","increase","increase.jpg"],
		["（意図して）～を減らす","reduce","reduce.jpg"],
		["～を分割する、～を減算する","divide","divide.jpg"],
		["～を数える","count","count.jpg"],
		["～の重さがある","weigh","weigh.jpg"],
		["４分の１","quarter","quarter.jpg"],
		["（a - ofで）多くの～","lot","lot.jpg"],
		["積み重ね、山","pile","pile.jpg"],
		["割合、速さ","rate","rate.jpg"],
		["数字、図、姿","figure","figure.jpg"],
		["不足","lack","lack.jpg"],
		["余分な、追加の、臨時の","extra","extra.jpg"],
		["用意が出来ている","ready","ready.jpg"],
		["～の準備をする","prepare","prepare.jpg"],
		["慣れる、調整する","adjust","adjust.jpg"],
		["当てはまる、適用する、申し込む","apply","apply.jpg"],
		["～に適している、（スタイル・色などが）～に似合っている","suit","suit.jpg"],
		["（個別の事実のしての）場合","case","case.jpg"],
		["（物語内などでの）場面","scene","scene.jpg"],
		["（受動的な）機会","chance","chance.jpg"],
		["（能動的な）よい機会、好機","opportunity","opportunity.jpg"],
		["経験","experience","experience.jpg"],
		["時間","time","time.jpg"],
		["春","spring","spring.jpg"],
		["分","minute","minute.jpg"],
		["（長短関係なく）時代、期間","period","period.jpg"],
		["世代","generation","generation.jpg"],
		["記念日","anniversary","anniversary.jpg"],
		["（副詞）最近、近頃（のある一点）","recently","recently.jpg"],
		["（be - toで）以前は～だった、よく～したものだ","used","used.jpg"],
		["早い、初期の","early","early.jpg"],
		["第１の","first","first.jpg"],
		["最新の","latest","latest.jpg"],
		["現代の","modern","modern.jpg"],
		["後半の、(the-)後者","latter","latter"],
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
