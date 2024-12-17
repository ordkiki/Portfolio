function Competence(props) {
  return (
    <div className='my-20 lg:w-[15vw] w-[90vw] block lg:flex justify-between items-center'>
        <h3 className='text-center w-[90vw] font-semibold text-5xl lg:w-[10vw]'>{props.number}</h3>
        <p className='text-center w-[90vw] lg:w-[10vw] my-2'>
          {props.titre} {props.titreSuite}
        </p>
    </div>
  )
}

export default Competence