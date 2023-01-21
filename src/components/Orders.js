import './Orders.css'

const Orders = ()=>{
    //const [orderInvoicePDF,setPDF]=useState('')
    const submitHandler=async (e)=>{
        e.preventDefault()
        const response=await fetch('http://localhost:3001/orders',{
            method: 'GET'
        
        })
        response.blob().then(blob => {
	let url = window.URL.createObjectURL(blob);
	let a = document.createElement('a');
	a.href = url;
	a.download = 'order_invoice.pdf';
	a.click();
});
    }
    return(
         <div>
             <button onClick={submitHandler}>Download Order Invoice</button>
         </div>
        
    )
}

export default Orders;