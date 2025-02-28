const Header = () => {
  return (
    <header className='bg-[url(./portada.png)] w-12/12 h-130 mx-auto bg-fixed bg-no-repeat bg-cover bg-center '>
      <div className='bg-black/50 w-full h-full flex justify-around items-center flex-col'>
        <h1 className='font-bold text-primary text-3xl sm:text-5xl shadow font-serif'>
          Piggies' Store
        </h1>
        <p className='w-60 text-secondary shadow sm:w-120'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          magnam neque illo optio consequatur ad vel iste officiis possimus
          quasi eius atque at doloribus necessitatibus assumenda beatae eaque
          minima repudiandae.
        </p>
        <a
          href='#productos'
          className='text-red-400 bg-red-200 rounded-full p-2 animate-bounce '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6'
          >
            <path
              fillRule='evenodd'
              d='M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z'
              clipRule='evenodd'
            />
            <path
              fillRule='evenodd'
              d='M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z'
              clipRule='evenodd'
            />
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Header
