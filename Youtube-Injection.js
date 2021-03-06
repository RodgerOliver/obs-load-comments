/*youtube*/
var added_css = 'ytd-comment-renderer#comment{position:relative;}ytd-comment-renderer#comment:after{content: "Copy";position: absolute;right: 3em;top: -1em;text-transform: uppercase;font-size: .8em;background: #b1cbff;padding: .4em 1em;border-radius: 6em;color: #fff;line-height: 1;transition:all .3s;cursor:pointer}ytd-comment-renderer#comment:hover:after{background: #4267b2}';
var style = document.createElement('style');
if (style.styleSheet) {
	style.styleSheet.cssText = added_css
} else {
	style.appendChild(document.createTextNode(added_css))
}
document.getElementsByTagName('head')[0].appendChild(style);

data_to_send = [];

document.addEventListener('click', function (e) {
	if (e.target.id = "comment") {
		closestElement = e.target.closest("#comment");
		input_data = closestElement.innerHTML;
		data_to_send = ["comment", window.location.hostname, window.location.href, input_data].join("|");
		navigator.clipboard.writeText(data_to_send);
	}
});
