function relogio() {
  function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
  }

  document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('start')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }
    if (el.classList.contains('pause')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
    if (el.classList.contains('reset')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      relogio.innerHTML = '00:00:00'
      segundos = 0;
    }
  });
};

relogio();

