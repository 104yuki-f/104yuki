'use strict';
window.onload=()=>{
	const words=[
		['新品の','brand-new','.jpg'],
		['急速な','rapid','rapid.jpg'],
		['緊急の','urgent','urgent.jpg'],
		['急激な(変化、方向転換)、鋭い(刃物、感覚)','sharp','sharp.jpg'],
		['落ち着いた','calm','calm.jpg'],
		['浅い(川、容器の深さ、考え、言動)','shallow','shallow.jpg'],
		['むき出しの、裸の(身に着けているものがない)','bare','bare.jpg'],
		['（人が）裸の','naked','naked.jpg'],
		['独立した、無所属','independent','independent.jpg'],
		['張り詰めた，緊張した','tense','tense.jpg'],
		['幅の広い(道、肩幅、知識)','broad','broad.jpg'],
		['狭い（幅など）','narrow','narrow.jpg'],
		['空いている（席や部屋）','vacant','vacant.jpg'],
		['鮮明な（記憶、描写、色）','vivid','vivid.jpg'],
		['相互の(感情、行為)、共通の(友達、趣味)','mutual','mutual.jpg'],
		['ぎこちない','awkward','awkward.jpg'],
		['客観的な','objective','objective.jpg'],
		['手を使う、手動の','manual','manual.jpg'],
		['似ている(外見や、性質）','alike','alike.jpg'],
		['傾向がある','tend','tend.jpg'],
		['～に値する(評価、賞罰)','deserve','deserve.jpg'],
		['破片','fragment','fragment.jpg'],
		['簡単さ、(痛み、心配)を和らげる','ease','ease.jpg'],
		['範囲','range','range.jpg'],
		['規模','scale','scale.jpg'],
		['特有の','unique','unique.jpg'],
		['特定の','particular','particular.jpg'],
		['一般的な','general','general.jpg'],
		['普通の','ordinary','ordinary.jpg'],
		['典型的な','typical','typical.jpg'],
		['割合を占める、説明、口座','account','account.jpg'],
		['計算する','calculate','calculate.jpg'],
		['測る','measure','measure.jpg'],
		['割る、分裂する','split','split.jpg'],
		['体積、容積','volume','volume.jpg'],
		['比率','proportion','proportion.jpg'],
		['ダース(12個)','dozen','dozen.jpg'],
		['量','amount','amount.jpg'],
		['大量、大衆','mass','mass.jpg'],
		['不足','shortage','shortage.jpg'],
		['巨大な','enormous','enormous.jpg'],
		['予備の','spare','spare.jpg'],
		['手配する','arrange','arrange.jpg'],
		['適応する(現状を調整して新しい状況に合わせる)','adapt','adapt.jpg'],
		['～と調和する','match','match.jpg'],
		['合う（サイズ）、健康な','fit','fit.jpg'],
		['緊急事態（命に関わる）','emergency','emergency.jpg'],
		['～の場合、機会','occasion','occasion.jpg'],
		['状況','circumstance','circumstance.jpg'],
		['不快な出来事','incident','incident.jpg'],
		['最新の','current','current.jpg'],
		['一時的な','temporary','temporary.jpg'],
		['永久的な','permanent','permanent.jpg'],
		['(時間、順序で）前の','previous','previous.jpg'],
		['前の、前者の(後者と比較して)','former','former.jpg'],
		['年に一度の','annual','annual.jpg'],
		['現代の','contemporary','contemporary.jpg'],
		['最近、現代の','lately','lately.jpg'],
		['すぐに','immediately','immediately.jpg'],
		['～を供給する','supply','supply.jpg'],
		['～に取って代わる','replace','replace.jpg'],
		['交換する(等価の者から意見まで）','exchange','exchange.jpg'],
		['Bの代わりにAを用いる','substitute','substitute.jpg'],
		['～を提出する（願書、辞表）','submit','submit.jpg'],
		['～の代わりのもの','alternative','alternative.jpg'],
		['～を配達する','deliver','deliver.jpg'],
		['～を囲む','enclose','enclose.jpg'],
		['封筒','envelope','envelope.jpg'],
		['いたずら','trick','trick.jpg'],
		['荷物','load','load.jpg'],
		['中身、内容','content','content.jpg'],
		['日課','routine','routine.jpg'],
		['世帯、家庭','household','household.jpg'],
		['商品','goods','goods.jpg'],
		['高級品、ぜいたく品','luxury','luxury.jpg'],
		['クレジット、功績','credit','credit.jpg'],
		['アンケート','questionnaire','questionnaire.jpg'],
		['予約','reservation','reservation.jpg'],
		['拍手、賞賛','applause','applause.jpg'],
		['大騒ぎ','fuss','fuss.jpg'],
		['報酬','reward','reward.jpg'],
		['別れ','farewell','farewell.jpg'],
		['もてなし、フロント','reception','reception.jpg'],
		['もてなし','hospitality','hospitality.jpg'],
		['(食事の)１盛り、一人前','portion','portion.jpg'],
		['洗濯','laundry','laundry.jpg'],
		['シミ、汚れ','stain','stain.jpg'],
		['～を染める（色）','dye','dye.jpg'],
		['コンセント、店','outlet','outlet.jpg'],
		['昼寝','nap','nap.jpg'],
		['目を覚ます','wake','wake.jpg'],
		['自動販売機','vending machine','vending machine.jpg'],
		['食料雑貨店','grocery','grocery.jpg'],
		['予約','appointment','appointment.jpg'],
		['相談する','consult','consult.jpg'],
		['登録する','register','register.jpg'],
		['～を定期購読する','subscribe','subscribe.jpg'],
		['～を保証する','guarantee','guarantee.jpg'],
		['～を拭く、壊滅させる','wipe','wipe.jpg'],
		['掃く（床、地面）','sweep','sweep.jpg'],
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
