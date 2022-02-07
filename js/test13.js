'use strict';
window.onload=()=>{
	const words=[
		["光景","sight","sight.jpg],		
		['眺め、景色','view','view.jpg'],
		["風景","landscape","landscape.jpg""],		
		["自然","nature","nature.jpg"],
		["種","seed","seed.jpg"],		
		["植物","plant","plant.jpg"],
		["花が咲く","bloom","bloom.jpg"],
		["収穫","harvest","harvest.jpg"],	
		["昆虫","",""],
		["地震","",""],
		["温度、気温","",""],
		["度","",""],
		["洪水","",""],
		["凍る、凍りつく","",""],
		["～を反射する","",""],
		["礼儀正しい","",""],
		["無礼な、不作法な","",""],
		["孤独な","",""],
		["怠惰な、いい加減な","",""],
		["厳しい","",""],
		["醜い","",""],
		["知的な、賢い","",""],
		["ばかな","",""],
		["あがって、落ち着かない","",""],
		["目を覚まして","",""],
		["態度、姿勢","",""],
		["正確、特徴","",""],
		["特徴","",""],
		["特徴、特集記事","",""],
		["詳細","",""],
		["利点","",""],
		["ちょっとした欠点、不具合","",""],
		["質","",""],
		["正確な、正しい","",""],
		["理想的な、申し分のない","",""],
		["公正な、公平な","",""],
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
