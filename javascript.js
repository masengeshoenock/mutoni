<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<!-- <script>
	
	var a;
	var a=parseInt(prompt("enter your number"));
	if(a>0){
		alert("positive");
	}
	else{
	alert("negative");	
	}
</script> -->
<script>
	var a;
	var n;
	
var n=parseInt(prompt("how many student you want to record in database"));
		for(a=1;a<=n;a++){
		var x=prompt("enter names");
		document.write(""+x+"<br>");
	}
</script>  
<!-- <script>
	var a=[];
	var b=4;
	var c;
	for(c=0;c<b; c++){
		a[c]=prompt('enter your namez'+ (c+1));
	}
	document.write(a);
</script>
<script>
	var a=parseInt(prompt("enter your numbers"));
	var b=parseInt(prompt("enter your numbers"));
	var c=parseInt(prompt("enter your numbers"));
		if(a>=b&&b>c){
		
		document.write("the maximum is:"+a+"<br>");
	}
	else if(b>=a&& a>c){
		
		document.write("the maximum is:"+b+"<br>");
	}
	else{
	
		document.write("the maximum is:"+c+"<br>");
	}
</script>
<h2>javascript Arrays</h2>
	<p>Javascript array element are accesed using numeric indexes (starting from 0).</p>
	<p id="demo"></p>
	<script>
		var cars=["Saab","Volvo","BMW"]
		cars[1]="Opel";
		document.getElementById("demo").innerHTML=cars;

		</script>

	<h2>javascript Arrays</h2>
	<p>Javascript array element are accesed using numeric indexes (starting from 0).</p>
	
	<p id="demo"></p>
	<script>
		var person=["john","Doe",46]
		document.getElementById("demo").innerHTML=person;
		person[1]="enock";



		   
	</script>
	<script>
		var NAME=["MASENGESHO","ENOCK","22"];
		cars[1]="toyota";
		document.write(""+NAME);
	</script>
	<script>
		var x;
		for( x=0;x<=11;x++){
			var name=["MASENGESHO ENOCK"];

		// cars[1]="toyota";
		document.write(""+name);
		}

	</script>
	<script>
		var fluits,text, flen,1;
		fluits=["banana","Orage","Apple","Mango"];
	</script>
	<p>click the button to demonstrate the prompt box.</p>
	<button onclick="myFunction()">try</button>
	<p id="demo"></p>
	<script>
		// 
			var n;
			n=parseInt(prompt("enter your names"));
			for(var i=0;i<n;i++){
			var person=prompt("please enter your name""enter name");
			if(person !=null){
				document.write("hello"+person+"!how are you today?"+"<br>");
			}}
		
	</script> -->
</body>
</html>