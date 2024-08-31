const changeInnerHtml = document.getElementById("btn");
const receivedData = document.getElementById("btn1");

receivedData.addEventListener("click", (e) => {
  e.preventDefault();
  const name = input.value;
  const message = ` Hello ${name}`;

  alert(message);
  document.getElementById("greeting").style.color = "blue";
});
