
import { SidebarProps } from '../../types/types.def'
import Customer from '../Customer';



const Sidebar = (props: SidebarProps) => {
  return (
    <div  className='overflow-y-scroll' style={{ maxHeight: '550px', overflowY: 'scroll' }}>
      {
        (props.customers).map((curr, i) => {
          return <Customer  currCustomer={props.currCustomer} handleClick={() => props.handleCustomer(curr)} i={curr} key={i} />;
        })
      }
    </div>
  )
}

export default Sidebar