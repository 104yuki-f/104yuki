'use strict';
window.onload=()=>{
	const words=[
		['～を提案する','propose','propose.jpg'],
		['〜を要求する','demand','demand.jpg'],
		['願望','desire','desire.jpg'],
		['を退ける','dismiss','dismiss.jpg'],
		['を祝福する','bless','bless.jpg'],
		['栄光','glory','glory.jpg'],
		['ほめ言葉','compliment','compliment.jpg'],
		['宴会','feast','feast.jpg'],
		['を宣言する','declare','declare.jpg'],
		['を(はっきり)示す','demonstrate','demonstrate.jpg'],
		['を強調する','highlight','highlight.jpg'],
		['を意味する','imply','imply.jpg'],
		['～を暗唱する','recite','recite.jpg']
		['光線','ray','ray.jpg'],
		['放射線','radiation','radiation.jpg'],
		['研究所','laboratory','laboratory.jpg'],
		['酸素','oxgen','oxgen.jpg'],
		['分子','molecule','molecule.jpg'],
		['化合物','compound','compound.jpg'],
		['組織','tissue','tissue.jpg'],
		['細胞','cell','cell.jpg'],
		['遺伝子','gene','gene.jpg'],
		['固体の','solid','solid.jpg'],
		['衛星','satellite','satellite.jpg'],
		['軌道','orbit','orbit.jpg'],
		['を打ち上げる','launch','launch.jpg'],
		['試み','attempt','attempt.jpg'],
		['能力','capacity','capacity.jpg'],
		['力がある','capable','capable.jpg'],
		['を達成する','attain','attain.jpg'],
		['必死の','desperate','desperate.jpg'],
		['苦闘する、もがく','struggle','struggle.jpg'],
		['ささげる','dedicate','dedicate.jpg'],
		['苦痛','pain','pain.jpg'],
		['負担','strain','strain.jpg'],
		['治療法','remedy','remedy.jpg'],
		['疲労','fatigue','fatigue.jpg'],
		['肥満','obesity','obesity.jpg'],
		['看護','nursing','nursing.jpg'],
		['末期の','terminal','terminal.jpg'],
		['妊娠した','pregnant','pregnant.jpg'],
		['を治す','heal','heal.jpg'],
		['足首','ankle','ankle.jpg'],
		['親指','thumb','thumb.jpg'],
		['おでこ','forehead','forehead.jpg'],
		['あご','chin','chin.jpg'],
		['胸','chest','chest.jpg'],
		['女性の胸','breast','breast.jpg'],
		['肺','lung','lung.jpg'],
		['臓器','organ','organ.jpg'],
		['視力','vision','vision.jpg'],
		['骸骨','skeleton','skeleton.jpg'],
		['感覚','sensation','sensation.jpg'],
		['規定','code','code.jpg'],
		['議題','agenda','agenda.jpg'],
		['性','gender','gender.jpg'],
		['自由','liberty','liberty.jpg'],
		['人類(h)','humanity','humanity.jpg'],
		['人類(m)','mankind','mankind.jpg'],
		['権威','authority','authority.jpg'],
		['正義','Justice','Justice.jpg'],
		['保険','insurance','insurance.jpg'],
		['苦難','hardship','hardship.jpg'],
		['貧困','poverty','poverty.jpg'],
		['大混乱','chaos','chaos.jpg'],
		['孤立','isolation','isolation.jpg'],
		['交流','interaction','interaction.jpg'],
		['地域','region','region.jpg'],
		['証拠','proof','proof.jpg'],
		['原理','principle','principle.jpg'],
		['起源','origin','origin.jpg'],
		['環境','setting','setting.jpg'],
		['記念碑','monument','monument.jpg'],
		['任務','mission','mission.jpg'],
		['計画','project','project.jpg'],
		['革命','revolution','revolution.jpg'],
		['年金','pension','pension.jpg'],
		['を創立する','found','found.jpg'],
		['契約','contract','contract.jpg'],
		['交渉する','negotiate','negotiate.jpg'],
		['協力する','cooperate','cooperate.jpg'],
		['を回復する','restore','restore.jpg'],
		['保守的な','conservative','conservative.jpg'],
		['情勢','affair','affair.jpg'],
		['機関','agency','agency.jpg'],
		['議会','council','council.jpg'],
		['王国','kingdom','kingdom.jpg'],
		['共和国','republic','republic.jpg'],
		['帝国','empire','empire.jpg'],
		['安全','security','security.jpg'],
		['援助','aid','aid.jpg'],
		['改革','reform','reform.jpg'],
		['市長','mayor','mayor.jpg'],
		['大臣','minister','minister.jpg'],
		['世論調査','poll','poll.jpg'],
		['財産(f)','fortune','fortune.jpg'],
		['財産(p)','property','property.jpg'],
		['資金','fund','fund.jpg'],
		['株','stock','stock.jpg'],
		['倒産した','bankrupt','bankrupt.jpg'],
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
			msg=`不正解!${words[index][0]}正解は${words[index][1]}`;
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
