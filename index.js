window.onload = () => {
  var content = document.querySelector("#content")
  var final = document.querySelector("#final")
  var optionsInput = document.querySelectorAll('input[name="option"]')

  var title

  handleContent = () => {
    var optionElement = Array.from(optionsInput).filter((a) => a.checked)
    var option = optionElement[0].getAttribute("value")

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
        break
    }
    var footer =
      "Nhờ mọi người giành chút thời gian chia sẻ bài viết để bé có thể sớm về nhà. Mình cảm ơn và xin chân thành hậu tạ cho ai giúp tìm được bé ạ."
    if (title == "CHÓ LẠC TÌM CHỦ" || title == "MÈO LẠC TÌM CHỦ") {
      footer = "Nhờ mọi người giành chút thời gian chia sẻ bài viết để bé sớm tìm được chủ ạ. Mình xin cảm ơn."
    }
    final.value = `${title}
    
${content.value}

${footer}`
  }

  content.onkeyup = handleContent
  content.onpaste = handleContent
}
