window.onload = () => {
  let final = document.querySelector("#final")
  let content = document.querySelector("#content")
  let optionsInput = document.querySelectorAll('input[name="option"]')

  let title

  let handleContent = () => {
    let optionElement = Array.from(optionsInput).filter((a) => a.checked)
    let option = optionElement.length ? optionElement[0].getAttribute("value") : ""
    switch (option) {
      case "dog":
        title = "TÌM CHÓ LẠC"
        break
      case "cat":
        title = "TÌM MÈO LẠC"
        break
      case "dogFindOwner":
        title = "CHÓ LẠC TÌM CHỦ"
        break
      case "catFindOwner":
        title = "MÈO LẠC TÌM CHỦ"
        break
      default:
        title = ""
        break
    }
    let footer =
      "Nhờ mọi người giành chút thời gian chia sẻ bài viết để bé có thể sớm về nhà. Mình cảm ơn và xin chân thành hậu tạ cho ai giúp tìm được bé ạ."
    if (title == "CHÓ LẠC TÌM CHỦ" || title == "MÈO LẠC TÌM CHỦ") {
      footer = "Nhờ mọi người giành chút thời gian chia sẻ bài viết để bé sớm tìm được chủ ạ. Mình xin cảm ơn."
    }
    final.value = `${title}
    
${content.value.replaceAll(" :", ":")}
    
${footer}`
  }

  content.onkeyup = handleContent
  content.onpaste = handleContent
  content.onchange = handleContent
}
