const times = zones =>
  zones.map(zone => ({
    zone: zone.split('/')[1].replace('_', ' '),
    time: moment()
      .tz(zone)
      .format('h:mm:ssA')
  }))

const $times = time =>
  (($time, $value) => {
    $time.classList.add('time')
    $value.textContent = `
      ${time.zone}
      ${time.time}
    `
    $value.classList.add('value')
    return $time.appendChild($value).parentNode
  })(document.createElement('div'), document.createElement('div'))

async function start() {
  const response = await fetch('/timezones')
  const timezones = await response.json()

  setInterval(() => {
    document.querySelector('.times').innerHTML = ''
    document.querySelector('.times').appendChild(
      times(timezones)
        .map($times)
        .reduce(
          (root, element) => root.appendChild(element).parentNode,
          document.createElement('div')
        )
    )
  }, 16)
}

start()
