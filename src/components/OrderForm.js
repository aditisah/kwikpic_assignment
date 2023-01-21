import { useState } from "react"
import './OrderForm.css';

const OrderForm = ()=>{
    const [item, setItem] = useState('')
    const [SKU, setSKU] = useState('')
    const [HSN, setHSN] = useState('')
    const [Qty, setQty] = useState('')
    const [Rate, setRate] = useState('')
    const [Discount, setDicount] = useState('')
    const [CGSTP, setCGSTPercentage] = useState('')
    const [CGSTAmount, setCGSTAmount] = useState('')
    const [SGSTP, setSGSTPercentage] = useState('')
    const [SGSTAmt, setSGSTAmount] = useState('')
    const [Amount, setAmount] = useState('')
    const [Error, setError] = useState('')
    
    const submitHandler = async (event)=>{
        event.preventDefault();

        
        try{
            let isError = false;
            const response = await fetch('http://localhost:3001/order',{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify({
                    'itemName' :item,
                    'SKU' :SKU,
                    'HSN/SAC':HSN,
                    'Qty':Qty,
                    'Rate':Rate,
                    'Discount':Discount,
                    'CGST':{
                        'percentage':CGSTP,
                        'Amt': CGSTAmount
                    },
                    'SGST':{
                        'percentage':SGSTP,
                        'Amt': SGSTAmt
                    },
                    'Amount': Amount
                })
            })
            const res=await response.json()
            console.log(res)
            if(res.status===false){
                isError = true
                setError(res.message)
            }
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className="container">
        <div className="err"><p>{Error}</p></div>
        <div className="form">
        <form onSubmit={submitHandler}>
          <label>Item Name:</label>
        <input type='text' onChange={e=>setItem(e.target.value)}/>
            <label>SKU</label>
        <input type='text' onChange={e=>setSKU(e.target.value)}/>
            <label>HSN/SAC</label>
        <input type='text' onChange={e=>setHSN(e.target.value)}/>
            <label>Qty</label>
        <input type='text' onChange={e=>setQty(e.target.value)}/>
            <label>Rate</label>
        <input type='text' onChange={e=>setRate(e.target.value)}/>
            <label>Discount</label>
        <input type='text' onChange={e=>setDicount(e.target.value)}/>
            <label>CGST percentages</label>
        <input type='text' onChange={e=>setCGSTPercentage(e.target.value)}/>
            <label>CGST Amt</label>
        <input type='text' onChange={e=>setCGSTAmount(e.target.value)}/>
            
            <label>SGST Percentages:</label>
        <input type='text' onChange={e=>setSGSTPercentage(e.target.value)}/>
            <label>SGST Amt</label>
        <input type='text' onChange={e=>setSGSTAmount(e.target.value)}/>
            <label>Amount</label>
        <input type='text' onChange={e=>setAmount(e.target.value)}/>
        <button>Submit</button>
          </form>
        </div>
          
        </div>
    )
}
export default OrderForm;