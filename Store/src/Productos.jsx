import { useEffect, useState } from 'react'

const Productos = () => {
  const [liSelect, setLiSelect] = useState('Hogar')

  const hacerClick = (categoria) => {
    setLiSelect(categoria)
    console.log(categoria)
    return (
      liSelect === categoria ? 'p-6 border-4 border-secondary bg-primary rounded-full' : ''
    )
  }

  const modClase = (categoria) => {
    return liSelect === categoria
      ? 'p-6 border-4 border-secondary bg-primary rounded-full place-content-center'
      : 'h-12 w-25 place-content-center '
  }

  return (
    <section id='productos' className=' h-300 w-10/12 mx-auto border-t-35  border-t-secondary '>
      <nav>
        <ul id='Categorias' className='rounded-full flex justify-around items-center bg-primary h-12'>
          <li onClick={() => hacerClick('Hogar')} id='Hogar' className={modClase('Hogar')}>Hogar</li>
          <li onClick={() => hacerClick('Tecnologia')} id='Tecnologia' className={modClase('Tecnologia')}>Tecnologia</li>
          <li onClick={() => hacerClick('Moda')} id='Moda' className={modClase('Moda')}>Moda</li>
          <li onClick={() => hacerClick('Juguetes')} id='Juguetes' className={modClase('Juguetes')}>Juguetes</li>
        </ul>
      </nav>

    </section>
  )
}

export default Productos
