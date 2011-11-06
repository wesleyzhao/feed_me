var oLink = document.createElement('link');
oLink.href = 'http://dl.dropbox.com/u/19699329/megusta.css';
oLink.rel = 'stylesheet';
oLink.type = 'text/css';
document.body.appendChild(oLink);
oLink = null;

var megusta_message = "<img src='http://i.imgur.com/rQSfz.png'> Me gusta";
/*
$("#content").mouseover(function(){
    convertLikes();
});
*/
$("body").mouseover(function(){
    convertLikes();
});
convertLikes();



function convertLikes(){
    var likes = document.getElementsByClassName('default_message');
    //var butt = like_buttons[0];
    for (var i = 0; i<likes.length; i++){
	like = likes[i];
	//like_message = like.getElementsByClassName('default_message')[0];
	like_message = like.innerHTML;
	if (like_message == 'Like'){
	    like.innerHTML = megusta_message;
	}
	else if (like_message == 'Unlike'){
	    like.innerHTML = "<img src='http://i.imgur.com/7Q9Q6.png'> Don't want!";
	}
    }
}

