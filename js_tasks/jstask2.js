function alpha() {
  let x = document.querySelector("#inp").value;
  console.log(x);
  let y = x.split("").sort().join("");
  console.log(y);
  document.querySelector("#sorted").innerHTML = y;
}
