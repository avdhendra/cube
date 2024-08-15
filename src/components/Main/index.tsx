
import { MainProps } from '../../types/types.def'



const Main = ({currCustomer,images}: MainProps) => {
  return (
    <div className='mx-10 '>
    <h1 className='text-center text-2xl mt-4 font-bold'>Customer {currCustomer?.name}</h1>
<div className='flex flex-col justify-center items-center text-xl'>
    <span className='text-red-500'>{currCustomer?.title}</span>
    <span className='text-red-500'>{currCustomer?.address}</span>
</div>
    <div className='grid grid-cols-3 gap-4 transition-all mt-4 duration-1000 ease-in-out'>
    {images?.map((item, index) => (
      <div key={index}>
        <img src={item.img} alt={`Image ${index}`} className='rounded-lg shadow-md w-7/12 m-auto h-[120px] p-4 hover:scale-105 transition-transform duration-1000 ease-in-out' />
      </div>
    ))}
  </div>

  </div>
  )
}
export default Main