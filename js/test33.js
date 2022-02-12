'use strict';
window.onload=()=>{
	const words=[
		['洞察','insight','insight.jpg'],
		['考え方、見通し','outlook','outlook.jpg'],
		['用心','caution','caution.jpg'],
		['意志','will','will.jpg'],
		['選択肢','option','option.jpg'],
		['悪夢','nightmare','nightmare.jpg'],
		['鋭い','keen','keen.jpg'],
		['を大切にする','cherish','cherish.jpg'],
		['するつもりだ','intend','intend.jpg'],
		['ではないかと思う','suspect','suspect.jpg'],
		['を理解する','comprehend','comprehend.jpg'],
		['を誤解する','misunderstand','misunderstand.jpg'],
		['を許可する','permit','permit.jpg'],
		['を認める','acknowledge','acknowledge.jpg'],
		['を刈り込む','trim','trim.jpg'],
		['を省く','omit','omit.jpg'],
		['を耕す','cultivate','cultivate.jpg'],
		['日陰','shade','shade.jpg'],
		['そよ風','breeze','breeze.jpg'],
		['砂漠','desert','desert.jpg'],
		['霧','fog','fog.jpg'],
		['湿気','moisture','moisture.jpg'],
		['湿った','damp','damp.jpg'],
		['小道','path','path.jpg'],
		['山道','trail','trail.jpg'],
		['小川','stream','stream.jpg'],
		['潮','tide','tide.jpg'],
		['生息地','habitat','habitat.jpg'],
		['層','layer','layer.jpg'],
		['火山','volcano','volcano.jpg'],
		['鉱山','mine','mine.jpg'],
		['香り','scent','scent.jpg'],
		['小麦','wheat','wheat.jpg'],
		['ツバメ','swallow','swallow.jpg'],
		['巣','web','web.jpg'],
		['ウシ','cattle','cattle.jpg'],
		['子ネコ','kitten','kitten.jpg'],
		['生物','organism','organism.jpg'],
		['野生生物','wildlife','wildlife.jpg'],
		['野獣','beast','beast.jpg'],
		['類人猿','ape','ape.jpg'],
		['哺乳動物','mammal','mammal.jpg'],
		['群れ','flock','flock.jpg'],
		['繁殖する(b)','breed','breed.jpg'],
		['繁殖する(r)','reproduce','reproduce.jpg'],
		['孵化する','hatch','hatch.jpg'],
		['勤勉な','diligent','diligent.jpg'],
		['高潔な','noble','noble.jpg'],
		['傲慢な','arrogant','arrogant.jpg'],
		['臆病な','timid','timid.jpg'],
		['控えめな','humble','humble.jpg'],
		['〜する傾向がある','inclined','inclined.jpg'],
		['主要な','principal','principal.jpg'],
		['最重要な','prime','prime.jpg'],
		['不可欠な','indispensable','indispensable.jpg'],
		['重大な','grave','grave.jpg'],
		['明確な','definite','definite.jpg'],
		['明らかな','evident','evident.jpg'],
		['目立った','prominent','prominent.jpg'],
		['際立った','marked','marked.jpg'],
		['優美さ','grace','grace.jpg'],
		['魅力','charm','charm.jpg'],
		['理性的な','rational','rational.jpg'],
		['壮大な','magnificent','magnificent.jpg'],
		['より優れている','superior','superior.jpg'],
		['忠実な','loyal','loyal.jpg'],
		['とてもひどい','horrible','horrible.jpg'],
		['悲惨な','miserable','miserable.jpg'],
		['退屈な','dull','dull.jpg'],
		['不快な','nasty','nasty.jpg'],
		['正気でない','insane','insane.jpg'],
		['ばかげた','ridiculous','ridiculous.jpg'],
		['悪名高い','notorious','notorious.jpg'],
		['悪い','evil','evil.jpg'],
		['乱雑','mess','mess.jpg'],
		['広大な','vast','vast.jpg'],
		['巨大な','huge','huge.jpg'],
		['とても小さな','tiny','tiny.jpg'],
		['球体','sphere','sphere.jpg'],
		['細長い一片','strip','strip.jpg'],
		['内部の','internal','internal.jpg'],
		['流動的な','mobile','mobile.jpg'],
		['険しい','steep','steep.jpg'],
		['強烈な','intense','intense.jpg'],
		['抽象的な','abstract','abstract.jpg'],
		['避けられない','inevitable','inevitable.jpg'],
		['中立の','neutral','neutral.jpg'],
		['手短な','brief','brief.jpg'],
		['潜在的な','potential','potential.jpg'],
		['たくましい','tough','tough.jpg'],
		['中古の','secondhand','secondhand.jpg'],
		['に似ている','resemble','resemble.jpg'],
		['それどころか','contrary','contrary.jpg'],
		['範疇','category','category.jpg'],
		['範囲','scope','scope.jpg'],
		['それぞれの','respective','respective.jpg'],
		['定められた','given','givenjpg'],
		['固有の','peculiar','peculiar.jpg'],
		['十分な(p)','plenty','plenty.jpg'],
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
