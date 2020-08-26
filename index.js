document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

    const movesUl = document.querySelector("#moves-container")
    console.log(movesUl);

    document.addEventListener("keydown", e => {
      if(e.key === "ArrowRight"){
        move("right")
        const rightLi = document.createElement("li")
        rightLi.innerText = "right"
        movesUl.append(rightLi)
      }

      else if (e.key === "ArrowLeft"){
        move("left")
        const leftLi = document.createElement("li")
        leftLi.innerText = "left"
        movesUl.append(leftLi)
      }

      else if (e.key === "ArrowDown"){
        move("down")
        const downLi = document.createElement("li")
        downLi.innerText = "down"
        movesUl.append(downLi)
        }

      else if (e.key === "ArrowUp"){
        move("up")
        const upLi = document.createElement("li")
        upLi.innerText = "up"
        movesUl.append(upLi)
      }


      document.addEventListener("click", e => {
      const moveBtn = document.querySelector("#move-button")
      if(e.target === moveBtn){
        let firstLi = document.querySelector("li")
        move(`${firstLi.innerText}`)
        firstLi.remove()
      }
      })

    })



})
