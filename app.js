var catGifs = [
    "cat-food.gif",
    "cat-handshake.gif",
    "cat-headbutt.gif",
    "cat-jumping.gif",
    "cat-upside-down.gif",
    "dancing-cat.gif",
    "getting_jiggy_with_it.gif",
    "hes-not-happy.gif",
    "cat-turtle.gif",
    "cat-money.gif",
    "cheese-delivery.gif",
    "unicat-jump.gif",
    "threat-secured.gif",
    "melon-cat.gif",
    "wiggly-cat.gif",
    "gupi-gupitaro.gif",
    "jinx-hello.gif",
    "potato-muncher.gif",
    "neko.gif",
    "cats-show.gif",
    "chad-cat.gif",
    "wiggler.gif",
    "cat-beatdown.gif",
    "trainhead.gif"
  ];

  function gifs() {
    var random = Math.floor(Math.random() * catGifs.length);

    selectedGifs = catGifs[random]

    document.getElementsByClassName("cat")[0].src = 'cats/' + selectedGifs;
  }

  window.onload = gifs;