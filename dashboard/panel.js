var username = nodecg.bundleConfig.username;
var chatSrc = "http://www.twitch.tv/"+ username +"/chat";
console.log(chatSrc);
$('.twitch-chat #chat').html("<iframe frameborder='0' scrolling='no' id='chat_embed' src="+ chatSrc +" height='600' width='100%' scrolling='yes'></iframe>");
