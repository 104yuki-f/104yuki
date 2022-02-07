'use strict';
window.onload=()=>{
	const words=[
		['光景','sight','sight.jpg'],		
		['眺め、景色','view','view.jpg'],
		["風景","landscape","landscape.jpg""],		
		["自然","nature","nature.jpg"],
		["種","seed","seed.jpg"],		
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
		["厳しい","strict","strict.jpg"],
		["醜い","ugly","ugly.jpg"],
		["知的な、賢い","intelligent","intelligent.jpg"],
		["ばかな","silly","silly.jpg"],
		["あがって、落ち着かない","nervous","nervous.jpg"],
		["目を覚まして","awake","awake.jpg"],
		["態度、姿勢","attitude","attitude.jpg"],
		["正確、特徴","character","character.jpg"],
		["特徴","characteristic","characteristic.jpg"],
		["特徴、特集記事","feature","feature.jpg"],
		["詳細","detail","detail.jpg"],
		["利点","advantage","advantage.jpg"],
		["ちょっとした欠点、不具合","fault","fault.jpg"],
		["質","quality","quality.jpg"],
		["正確な、正しい","correct","correct.jpg"],
		["理想的な、申し分のない","ideal","ideal.jpg"],
		["公正な、公平な","fair","fair.jpg"],
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
			msg='正解!';
		}else{
			msg=`不正解!${words[index][0]}の英単語は${words[index][1]}`;
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
