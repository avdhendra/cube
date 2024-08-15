
export interface Customer{
    name:string,
    title:string,
    address:string
}
export interface Images{
    img:string
}



export interface SidebarProps {
    currCustomer:Customer| null;
    customers:Customer[];
    handleCustomer:(curr:Customer)=>void;

}

export interface CustomerProps{
    currCustomer:Customer |null;
    handleClick:(curr:Customer)=>void;
    i:Customer;
}

export interface MainProps{
    currCustomer:Customer|null;
    images: Images[];
   
}