'use strict';
window.onload=()=>{
	const words=[
		['討論','debate','debate.jfif'],
		['（欠点）を批判する','criticize','criticize.jfif'],
		['（法的に）～を非難する','accuse','accuse.jfif'],
		['（～と）言い張る，（強く頑固に）主張する','insist','insist.jfif'],
		['（～に感情的に）反対する','object','object.jfif'],
		['（～に対して）抗議する','protest','protest.png'],
		['(形容詞)論争を招く、物議をかもす','controversial','controversial.jfif'],
		['(be - to doで)きっと～する，～する［である］に違いない、～行きの','bound','bound.jfif'],
		['きっと～だと思う、賭ける','bet','bet.jfif'],
		['（人）を祝う，～にお祝いを述べる','congratulate','congratulate.jfif'],
		['（A）を（Bのことで）褒める，称える','praise','praise.jfif'],
		['名誉，栄誉','honor','honor.jfif'],
		['おしゃべりする','chat','chat.jfif'],
		['（～に）言及する，参照する','refer','refer.jfif'],
		['～について述べる，言及する','mention','mention.jfif'],
		['～を伝える','convey','convey.jfif'],
		['～を強調する','emphasize','emphasize.jfif'],
		['～を誇張する','exaggerate','exaggerate.jfif'],
		['（～に）返事をする，答える','reply','reply.jfif'],
		['（手紙や問いなどに）返答する','respond','respond.jfif'],
		['ささやく','whisper','whisper.jfif'],
		['（簡単に意見を述べた）発言','remark','remark.jfif'],
		['～を観察する','observe','observe.jfif'],
		['理論','theory','theory.jfif'],
		['分析','analysis','analysis.jfif'],
		['実験','experiment','experiment.jfif'],
		['装置','device','device.jfif'],
		['現象','phenomenon','phenomenon.jfif'],
		['物質','substance','substance.jfif'],
		['化学物質','chemical','chemical.jfif'],
		['燃料','fuel','fuel.jfif'],
		['原子力の，核の','nuclear','nuclear.jfif'],
		['統計（値）','statistic','statistic.jfif'],
		['～を追求する，続ける','pursue','pursue.jfif'],
		['～をやり遂げる','accomplish','accomplish.jfif'],
		['～を克服する','overcome','overcome.jfif'],
		['（義務，願望など）を果たす','fulfill','fulfill.jfif'],
		['（A）を（Bに）ささげる','devote','devote.jfif'],
		['狙う','aim','aim.jfif'],
		['難問、挑戦、課題','challenge','challenge.jfif'],
		['試み、裁判','trial','trial.jfif'],
		['めまいがして','dizzy','dizzy.jfif'],
		['（顔色が）青白い，青ざめた','pale','pale.jfif'],
		['食欲','appetite','appetite.jfif'],
		['とてもお腹が空いている','starve','starve.jfif'],
		['精神的な','mental','mental.jfif'],
		['休憩','rest','rest.jfif'],
		['（長く続く鈍い）痛み','ache','ache.jfif'],
		['（前後も含めた処置全体としての）手術','surgery','surgery.jfif'],
		['（重い、原因としての）病気','disease','disease.jfif'],
		['症状、兆候','symptom','symptom.jfif'],
		['がん','cancer','cancer.jfif'],
		['救急車','ambulance','ambulance.jfif'],
		['（～から）回復する','recover','recover.jfif'],
		['（のどや筋肉が）痛い','sore','sore.jfif'],
		['（手足などが）腫れる','swell','swell.jfif'],
		['咳をする','cough','cough.jfif'],
		['出血する','bleed','bleed.jfif'],
		['（色，光などが）かすかな','faint','faint.jfif'],
		['～を疲れ果てさせる','exhaust','exhaust.jfif'],
		['（病気やケガ）を治療する（ことで健康な状態に戻す）','cure','cure.jfif'],
		['障がいのある、不自由な','disabled','disabled.jfif'],
		['（筋肉などが）凝った，（動かすと）痛い','stiff','stiff.jfif'],
		['筋肉','muscle','muscle.jfif'],
		['舌','tongue','tongue.jfif'],
		['（五感としての）感覚','sense','sense.jfif'],
		['汗','sweat','sweat.jfif'],
		['国籍','nationality','nationality.jfif'],
		['市民','citizen','citizen.jfif'],
		['（一般）市民の','civil','civil.jfif'],
		['人種の','racial','racial.jfif'],
		['国内の','domestic','domestic.jfif'],
		['田舎の','rural','rural.jfif'],
		['郊外','suburb','suburb.jfif'],
		['国境（地帯），境界','border','border.jfif'],
		['重荷，負担','burden','burden.jfif'],
		['（～への望ましい・望ましくない）影響','impact','impact.jfif'],
		['地位','status','status.jfif'],
		['（～に）等しい，平等な','equal','equal.jfif'],
		['関係','relationship','relationship.jfif'],
		['（人，物の）評判','reputation','reputation.jfif'],
		['（世の中の）風潮，傾向','trend','trend.jfif'],
		['（政府あるいは企業による）事業，制度','service','service.jfif'],
		['宗教','religion','religion.jfif'],
		['道徳的な','moral','moral.jfif'],
		['基準，水準','standard','standard.jfif'],
		['繁栄','prosperity','prosperity.jfif'],
		['危機、重大局面','crisis','crisis.jfif'],
		['偏見，先入観','prejudice','prejudice.jfif'],
		['差別','discrimination','discrimination.jfif'],
		['慈善（事業）','charity','charity.jfif'],
		['恩恵','benefit','benefit.jfif'],
		['福祉','welfare','welfare.jfif'],
		['（地域）社会，共同体（の人々）','community','community.jfif'],
		['個人，個体','individual','individual.jfif'],
		['役人，役員、当局者','official','official.jfif'],
		['（外国からの）移民','immigrant','immigrant.jfif'],
		['ボランティア','volunteer','volunteer.jfif'],
		['（～に）貢献する','contribute','contribute.jfif'],
		['～を廃止する','abolish','abolish.jfif'],
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
		img.src='https://104yuki-f.github.io/104yuki-f/images/words/'+words[index][2];
	}
	setItem(index);
}
