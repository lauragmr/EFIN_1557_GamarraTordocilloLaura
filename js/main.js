for (var i = 1; i <= 4; i++) {
  document.getElementById(`button-${i}`).addEventListener("click", (event) => {
    let id = event.target.id.split("-")[1];
    console.log(id);
    for (var j = 1; j <= 4; j++) {
      if (j == parseInt(id)) {
        document.getElementById(`image-${id}`).classList.add("fade");
        document.getElementById(`button-${id}`).classList.remove("button-nofocus");
        document.getElementById(`button-${id}`).classList.add("button-focus");
        document.getElementById(`image-${id}`).classList.remove('slider--remove')
        document.getElementById(`image-${id}`).classList.add('slider--add')
        // document.getElementById(`image-${id}`).classList.add("fade");
      }else{
        document.getElementById(`image-${j}`).classList.remove("fade");
        document.getElementById(`button-${j}`).classList.add("button-nofocus");
        document.getElementById(`button-${j}`).classList.remove("button-focus");
        document.getElementById(`image-${j}`).classList.remove('slider--add')
        document.getElementById(`image-${j}`).classList.add('slider--remove')


      }
    }
  });
}
