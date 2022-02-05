$(function() {

    $('#mainimg').vegas({
        slides: [
            { src: './images/logo.jpg' },	//1枚目の写真指定
            { src: './images/logo2.jpg' },	//2枚目の写真指定
            { src: './images/logo3.jpg' },	//3枚目の写真指定
        ],
			//写真上にドットを重ねる。不要ならこの１行を削除して下さい。
		transition: 'fade',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		delay: 20000,				//次の画像を表示するまでの時間
		animationDuration: 20000,	//アニメーション間の引き継ぎタイミング。
    });
});
