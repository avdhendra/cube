
import { CustomerProps } from '../../types/types.def'



const Customer = ({currCustomer,handleClick,i}: CustomerProps) => {
  return (
    <div
      className={`h-[180px] pt-7 ${currCustomer === i ? 'bg-gray-100' : ''} p-5 cursor-pointer ` }
      onClick={()=>handleClick(i)}
    >
      <p className={`text-xl ${currCustomer === i ? 'text-purple-500' : ''}`}>
        Customer {i?.name}
      </p>
      <div className={`flex flex-col text-[14px] mt-4 ${currCustomer === i ? 'text-blue-500' : ''}`}>
        <span className='text-lg'>{i.title}</span>
        <span className='text-lg'>{i.address}</span>
      </div>
    </div>
  )
}

export default Customer
