function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  console.log(name1);
  const name2 = document.getElementById("name2").value.trim();
  console.log(name2);

  if (name1 === "" || name2 === "") {
    alert("Please enter both names !!!");
  } else {
    const lovepercentage = Math.floor(Math.random() * 100) + 1;
    const result = document.getElementById("result");

    result.innerHTML = `${name1} and ${name2}'s Love percentage is ${lovepercentage}%`;

    if (lovepercentage < 30)
      result.innerHTML += `<br>Not a good Match, So don't waste your Time`;
    else if (lovepercentage >= 30 && lovepercentage < 70)
      result.innerHTML += `<br>There is potential, Give it a Try`;
    else if (lovepercentage >= 70)
      result.innerHTML += `<br>Great match, Love is in the Air`;
  }
}
