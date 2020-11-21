var t = document.getElementById("t");
var b = document.getElementById("b");
var r = document.getElementById("r");

b.addEventListener('click', () => {
	var s = t.value.trim();
	var n = eval(s.replace(/(\w+)(?=\((.+)?\))/g, 'Math.$1'))
	if(n >= 0) r.innerHTML = s;
	else {
		var x = s.match(/[\+\-\*\/]/g);
		var y = s.split(/[\+\-\*\/]/), z = [];
		if(s[0] != '-') z.push('-');
		for(let i = 0; i < x.length; ++i) {
			z.push(y[i]);
			z.push(x[i] == '+' ? '-' : x[i] == '-' ? '+' : x[i]);
		}
		z.push(y[y.length-1]);
		r.innerHTML = z.join(' ');
	}
})
