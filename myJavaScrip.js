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

<script>
document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("myButton").innerHTML = "Bella";
}
</script>

</body>
</html>
