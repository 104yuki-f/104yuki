'use strict';
window.onload=()=>{
	const words=[
		['拡大する','expand','expand.jpg'],
		['～を延長する','extend','extend.jpg'],
		['～を広げる(b)','broaden','broaden.jpg'],
		['～を広げる(s)','spread','spread.jpg'],
		['（荷物など）を縛る','tie','tie.jpg'],
		['～を結びつける','bind','bind.jpg'],
		['～を固定する','fasten','fasten.jpg'],
		['～を固定する','fix','fix.jpg'],
		['（機械など）を設置する','install','install.jpg'],
		['～を我慢する','resist','resist.jpg'],
		['～に従う','obey','obey.jpg'],
		['従事する','engage','engage.jpg'],
		['～にぶつかる(2語)','bump into','bump into.jpg'],
		['激突する','crash','crash.jpg'],
		['身をかがめる','bend','bend.jpg'],
		['（人）を抱きしめる','hug','hug.jpg'],
		['～をじっと見つめる(2語)','stare at','stare at.jpg'],
		['～を見つめる(2語)','gaze at','gaze at.jpg'],
		['ちらりと見る','glance','glance.jpg'],
		['～がちらりと見える','glimpse','glimpse.jpg'],
		['（手足や体）を伸ばす','stretch','stretch.jpg'],
		['つまずく','stumble','stumble.jpg'],
		['～を押す','press','press.jpg'],
		['～を引きずる','drag','drag.jpg'],
		['～に寄りかかる(2語)','lean against','lean against.jpg'],
		['～をひっかく','scratch','scratch.jpg'],
		['おじぎする','bow','bow.jpg'],
		['うなずく','nod','nod.jpg'],
		['ため息をつく','sigh','sigh.jpg'],
		['あくびをする','yawn','yawn.jpg'],
		['～を埋める','bury','bury.jpg'],
		['～を遂行する','perform','perform.jpg'],
		['～を採用する','adopt','adopt.jpg'],
		['～から逃れる(2語)','escape from','escape from.jpg'],
		['～をまき散らす','scatter','scatter.jpg'],
		['～を折る','fold','fold.jpg'],
		['～を掛ける','hang','hang.jpg'],
		['～を解放する','release','release.jpg'],
		['～を打つ(s)','strike','strike.jpg'],
		['～を打つ(b)','beat','beat.jpg'],
		['～を守る','protect','protect.jpg'],
		['～を（ねじ）曲げる','twist','twist.jpg'],
		['（液体など）を混ぜる','stir','stir.jpg'],
		['～を振る','shake','shake.jpg'],
		['焼ける','burn','burn.jpg'],
		['～をさぼる','skip','skip.jpg'],
		['～をさらす','expose','exposejpg'],
		['～を（ちょっと）つける','dip','dip.jpg'],
		['～を磨く','polish','polish.jpg'],
		['ごまかす','cheat','cheat.jpg'],
		['～に出席する','attend','attend.jpg'],
		['～に参加する(2語)','participate in','participate in.jpg'],
		['～をまねる','imitate','imitate.jpg'],
		['存在する','exist','exist.jpg'],
		['生じる(a)','arise','arise.jpg'],
		['生じる(c)','occur','occur.jpg'],
		['（電気、利益など）を生み出す','generate','generate.jpg'],
		['（事件など）に巻き込まれる(3語)','be involved in','be involved in.jpg'],
		['～を必要とする','require','require.jpg'],
		['対応する人','counterpart','counterpart.jpg'],
		['～を維持する','maintain','maintain.jpg'],
		['（時間的に）続く','last','last.jpg'],
		['持続する','persist','persist.jpg'],
		['～を増す','gain','gain.jpg'],
		['（資格、許可、情報など）を得る','obtain','obtain.jpg'],
		['～を習得する','acquire','acquire.jpg'],
		['～を調査する','examine','examine.jpg'],
		['A(物)を求めてB(場所)を捜す(A,Bを使って4語)','search A for B','search A for B.jpg'],
		['同窓会','reunion','reunion.jpg'],
		['奨学金','scholarship','scholarship.jpg'],
		['論理','logic','logic.jpg'],
		['指示','instruction','instruction.jpg'],
		['～を決める','determine','determine.jpg'],
		['～と結論を下す','conclude','concludejpg'],
		['～を区別する','distinguish','distinguish.jpg'],
		['～を分類する','classify','classify.jpg'],
		['～を推定する','estimate','estimate.jpg'],
		['～を選ぶ','select','select.jpg'],
		['（考えなど）をまとめる','organize','organize.jpg'],
		['（知り合いなど）が誰だかわかる','recognize','recognize.jpg'],
		['～することになっている(4語)','be supposed to do','be supposed to do.jpg'],
		['～と思い込む','assume','assume.jpg'],
		['（否定文で）気にする','care','care.jpg'],
		['～を疑う','doubt','doubt.jpg'],
		['～に気が付いている','notice','notice.jpg'],
		['気づいている','aware','aware.jpg'],
		['意識している','conscious','conscious.jpg'],
		['～に関心を持っている(3語)','be concerned with','be concerned with.jpg'],
		['AをBとみなす(A,Bを使って4語)','regard A as B','regard A as B.jpg'],
		['～に専念する(3語)','commit oneself to','commit oneself to.jpg'],
		['～を暗記する','memorize','memorize.jpg'],
		['～を認める(2語)','approve of','approve of.jpg'],
		['（人、過ち）を許す','forgive','forgive.jpg'],
		['～を認める','grant','grant.jpg'],
		['～を思い出す','recall','recall.jpg'],
		['～を捨てる','abandon','abandon.jpg'],
		['（不用品）を処分する(3語)','get rid of','get rid of.jpg'],
		['（不要な人、物、事）を排除する','eliminate','eliminate.jpg'],
		['～を取り除く','relieve','relieve.jpg'],
		['～を取り除く','remove','remove.jpg'],
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
			msg=`不正解!正解は${words[index][1]}`;
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
