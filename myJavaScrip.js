<!DOCTYPE html>
<html>
<body>
<head>
 <style>
  #demo {
  background-color: #f44336;
  }
 </style>
</head>
<h1>The onclick Event</h1>



<p id="demo"></p>

<script>
document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Bella";
}
</script>

</body>
</html>
