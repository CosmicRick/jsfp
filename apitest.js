async function getdata() {
  try {
      let data = await fetch("https://pokeapi.co/api/v2/");
      console.log(data)
  } catch {
    console.log("Error");
  }
}
getdata();
