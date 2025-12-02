const Faq = ({ques, ans}) => {
  return (
    <details className='my-5'>
      <summary className='font-bold my-2 text-lg cursor-pointer' >{ques}</summary>
      <p className='text-black pl-5 text-justify'>{ans}</p>
    </details>
  )
}

export default Faq