/*facebook*/
var added_css = '.UFIRow.UFIComment:after, ._4eek ._42ef:after, .l9j0dhe7.ecm0bbzt.dati1w0a.hv4rvrfc.e5nlhep0.lzcic4wl.btwxx1t3.j83agx80:after {content: "Copy";position: absolute;right: 1em;top: 0;text-transform: uppercase;font-size: .6em;background: #b1cbff;padding: .4em 1em;border-radius: 6em;color: #fff;line-height: 1;transition:all .3s;cursor:pointer}._4eek ._42ef:hover:after, .l9j0dhe7.ecm0bbzt.dati1w0a.hv4rvrfc.e5nlhep0.lzcic4wl.btwxx1t3.j83agx80:hover:after, .UFIRow.UFIComment:hover:after{background: #4267b2}';
var style = document.createElement('style');
if (style.styleSheet) {
	style.styleSheet.cssText = added_css
} else {
	style.appendChild(document.createTextNode(added_css))
}
document.getElementsByTagName('head')[0].appendChild(style);

data_to_send = [];

document.addEventListener('click', function (e) {
	if (e.target.classList.contains("_42ef")) {
		closestElement = e.target.closest("._4eek");
		input_data = closestElement.innerHTML;
		data_to_send = ["comment", window.location.hostname, window.location.href, input_data].join("|");
		navigator.clipboard.writeText(data_to_send);
	};
	if (e.target.classList.contains("l9j0dhe7")) {
		closestElement = e.target.closest(".l9j0dhe7.ecm0bbzt.dati1w0a.hv4rvrfc.e5nlhep0.lzcic4wl.btwxx1t3.j83agx80");
		input_data = closestElement.innerHTML;
		data_to_send = ["live video comment", window.location.hostname, window.location.href, input_data].join("|");
		navigator.clipboard.writeText(data_to_send);
	};
	if (e.target.classList.contains("UFIComment")) {
		closestElement = e.target.closest(".UFIRow.UFIComment");
		input_data = closestElement.innerHTML;
		data_to_send = ["live video comment - single video", window.location.hostname, window.location.href, input_data].join("|");
		navigator.clipboard.writeText(data_to_send);
	};

});
