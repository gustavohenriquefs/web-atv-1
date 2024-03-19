export function Hero({ name }) {
  return <>
    <h1>{name}</h1>
    <img src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg" alt="Imagem do herói" />
  </>
}

export function Enemy({ name }) {
  return <>
    <h1>{name}</h1>
    <img src="https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg" alt="Imagem do vilão" />
  </>
}

export function Arena() {
  return <div>
    <Hero name="Superman" />
    <Enemy name="Thanos" />
  </div>
}

export function World(props) {
  return <div>
    { props.children }
  </div>
}