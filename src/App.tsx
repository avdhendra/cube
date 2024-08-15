import { useEffect, useState } from "react"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import { Customer, Images } from "./types/types.def"


function App() {

  const [customers, setCustomers] = useState<Customer[]>([])
  const [currCustomer, setCurrCustomer] = useState<Customer | null>(null)
  const [images, setImages] = useState<Images[]>([])

  const handleSetCustomer = (curr: Customer) => {
    setCurrCustomer(curr)
  }




  const getCustomers = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_USER_API)
      const data = await response.json()
      //  console.log("customer",data.users)
      const updatedUser = data.users.map((item: any) => ({
        name: item.username,
        title: item.role,
        address: item.address.address
      }
      ))


      setCustomers(updatedUser)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  const getImages = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_IMAGE_API)
      const data = await response.json()

      const updatedProduct = data.map((item: any) => ({
        img: item.image
      })).slice(0,9)
      setImages(updatedProduct)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    const getData = async () => {
      await getCustomers()
      await getImages()
    }
    getData()


  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      const shuffledImages = [...images].sort(() => Math.random() - 0.5);
      setImages(shuffledImages);
    }, 10000); 

    return () => clearInterval(interval); 
  }, [images]);
  useEffect(()=>{
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
  },[currCustomer])

  return (
    <div>
      <h1 className="text-center text-3xl mt-8">Customer Details Portal</h1>
      <div className='w-11/12 max-w-[1440px] mt-10 flex justify-center m-auto border border-black-500 rounded'>
        <div className='w-3/12'>
          <Sidebar customers={customers} currCustomer={currCustomer} handleCustomer={handleSetCustomer} />
        </div>
        <div className='w-9/12'>
         {currCustomer && <Main currCustomer={currCustomer} images={images} />}
        </div>
      </div>
    </div>
  )
}

export default App
