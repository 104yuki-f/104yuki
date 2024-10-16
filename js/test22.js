'use strict';
window.onload=()=>{
	const words=[
		['(A)を(B)に課す','impose','impose.jpg'],
		['利用する権利','access','access.jpg'],
		['義務','duty','duty.jpg'],
		['義務的な','compulsory','compulsory.jpg'],
		['責任がある','responsible','responsible.jpg'],
		['政策','policy','policy.jpg'],
		['～を（選挙で）選ぶ','elect','elect.jpg'],
		['工業','industry','industry.jpg'],
		['収入','income','income.jpg'],
		['利益，利潤','profit','profit.jpg'],
		['税金','tax','tax.jpg'],
		['費用，経費','expense','expense.jpg'],
		['借金','debt','debt.jpg'],
		['預金','deposit','deposit.jpg'],
		['料金','charge','charge.jpg'],
		['賃金','wage','wage.jpg'],
		['不況，不景気','recession','recession.jpg'],
		['～を消費する','consume','consume.jpg'],
		['～を浪費する','waste','waste.jpg'],
		['（A）を（Bに）投資する','invest','invest.jpg'],
		['～を輸入する','import','import.jpg'],
		['財政的な，金銭的な','financial','financial.jpg'],
		['～を（一時的に）雇う','hire','hire.jpg'],
		['（人）を雇う','employ','employ.jpg'],
		['（～を）辞職する','resign','resign.jpg'],
		['（～の）資格がある','qualify','qualify.jpg'],
		['～を割り当てる','assign','assign.jpg'],
		['職業(o)','occupation','occupation.jpg'],
		['職業(c)','career','career.jpg'],
		['（専門的な）職業','profession','profession.jpg'],
		['失業','unemployment','unemployment.jpg'],
		['書類，資料','document','document.jpg'],
		['（組織の）部門，課','department','.departmentjpg'],
		['支店，支局','branch','branch.jpg'],
		['小売り','retail','retail.jpg'],
		['組織，制度','system','system.jpg'],
		['構造','structure','structure.jpg'],
		['建築（様式）','architecture','architecturejpg'],
		['建設','construction','construction.jpg'],
		['機能','function','function.jpg'],
		['表面','surface','surface.jpg'],
		['側面','aspect','aspect.jpg'],
		['端','edge','edge.jpg'],
		['（～で）構成されている','consist','consist.jpg'],
		['～を構成する，組み立てる','compose','compose.jpg'],
		['～をくっつける，添付する','attach','attach.jpg'],
		['～をつなげる','connect','connect.jpg'],
		['（A）を（Bに）関連づける','relate','relate.jpg'],
		['（A）を（Bと）関連づける，（A）から（Bを）連想する','associate','associate.jpg'],
		['～を貼り付ける','stick','stick.jpg'],
		['～を引き離す','separate','separate.jpg'],
		['泥棒','thief','thief.jpg'],
		['犯罪','crime','crime.jpg'],
		['動機','motive','motive.jpg'],
		['（人）を（～の理由で）罰する','punish','punish.jpg'],
		['（法律など）に違反する','violate','violate.jpg'],
		['合法の','legal','legal.jpg'],
		['敵','enemy','enemy.jpg'],
		['競争する','compete','compete.jpg'],
		['（相手）を打ち負かす','defeat','defeat.jpg'],
		['犠牲者','victim','victim.jpg'],
		['（～に対する）障害','obstacle','obstacle.jpg'],
		['害','harm','harm.jpg'],
		['（プライバシーなど）を侵害する','invade','invade.jpg'],
		['～を危険にさらす','endanger','endanger.jpg'],
		['～を中断する','interrupt','interrupt.jpg'],
		['～を台無しにする','spoil','spoil.jpg'],
		['観客','spectator','spectator.jpg'],
		['（家族も含めて）親戚','relative','relative.jpg'],
		['～に入る','enter','enter.jpg'],
		['～と一緒に行く','accompany','accompany.jpg'],
		['出発','departure','departure.jpg'],
		['目的地','destination','destination.jpg'],
		['交通機関','transportation','transportation.jpg'],
		['～経由で','via','via.jpg'],
		['（～に）至る','lead','lead.jpg'],
		['上がる，昇る','rise','rise.jpg'],
		['～を下げる','lower','lower.jpg'],
		['流れる','flow','flow.jpg'],
		['破裂する，爆発する','burst','burst.jpg'],
		['割れる，砕ける','crack','crack.jpg'],
		['（固体が）溶ける','melt','melt.jpg'],
		['進歩，前進(p)','progress','progress.jpg'],
		['進歩，前進(a)','advance','advance.jpg'],
		['（～を）扱う(d)','deal','deal'],
		['～を扱う(h)','handle','handle.jpg'],
		['（～に）（うまく）対処する','cope','cope.jpg'],
		['～を扱う(t)','treat','treat.jpg'],
		['（～の）手がかり','clue','clue.jpg'],
		['～を制限する','restrict','restrict.jpg'],
		['（数量，範囲）を制限する','limit','limit.jpg'],
		['～を禁じる','forbid','forbid.jpg'],
		['禁止','ban','ban.jpg'],
		['～を断る','refuse','refuse.jpg'],
		['～を拒絶する','reject','reject.jpg'],
		['（A）を説得して～させる','persuade','persuade.jpg'],
		['（A）に（Bを）確信させる，（A）に（～を） 確信させる','convince','convince.jpg'],
		['～を奮起させる，かき立てる','inspire','inspire.jpg'],
		['～のやる気をなくさせる，落胆させる','discourage','discourage.jpg'],
		['～を促進する','promote','promote.jpg'],
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
		img.src='../images/words/'+words[index][2];
	}
	setItem(index);
}
