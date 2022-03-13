window.onload = () => {
  var content = document.querySelector('#content');
  var final = document.querySelector('#final');
  var dog = document.querySelector('#dog');
  var cat = document.querySelector('#cat');

  var title = 'TÌM CHÓ LẠC';
  content.onkeyup = () => {
    if (cat.checked == true) {
      title = 'TÌM MÈO LẠC';
    }
    final.value = `${title}
    
${content.value}

Nhờ mọi người giành chút thời gian chia sẻ bài viết để bé có thể sớm về nhà. Mình cảm ơn và xin chân thành hậu tạ cho ai giúp tìm được bé ạ.`;
  };
};
