'use strict';
window.onload=()=>{
	const words=[
		['賛成する','agree','agree.jpg'],
		['しろくま','polarbear','polarbear.png'],
		['くじら','whale','whale.png'],
		['ペンギン','penguin','penguin.png'],
		['ライオン','lion','lion.png'],
		['カンガルー','kangaroo','kangaroo.png'],
		['ひと','human','human.png'],
		['いぬ','dog','dog.png'],
		['ねこ','cat','cat.png'],
		['あり','ant','ant.png'],
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
