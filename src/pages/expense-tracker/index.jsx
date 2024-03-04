import { signOut } from "firebase/auth";
import { useState } from "react"
import {useAddTransactions} from "../../hooks/useAddTransactions"
import {useGetTransactions} from "../../hooks/useGetTransactions"
import{useGetUserInfo} from "../../hooks/useGetUserInfo" 
import{useNavigate} from "react-router-dom"
import "./styles.css";
import {auth} from "../../config/firebase-config" 
import { Navigate } from "react-router-dom";
export const ExpenseTracker=()=>{
    const {addTransaction}=useAddTransactions()
    const {transactions,transactionTotals}=useGetTransactions()
    const navigate=useNavigate()
    const [description,setDescription]=useState("");
    const[transactionAmount,setTransactionAmount]=useState(0)
    const[transactionType,setTransactionType]=useState("expense")
   const{name,profilePhoto}=useGetUserInfo()
   const {balance,income,expenses}=transactionTotals
    const onSubmit =async(e)=>{
        e.preventDefault()
        addTransaction({description,transactionAmount,transactionType})

         setDescription("")
         setTransactionAmount(0)
    }
    const userSignOut=async()=>{
        try{
       await signOut(auth)
       localStorage.clear()
       navigate("/")
    }
    catch(e){
        console.error(e)
    }
}
    
    return <div>
        <div className="expense-tracker">

            <div className="container">
                <h1>{name}'s Expense Tracker</h1>
                <div className="balance">
                    <h3>your balance </h3>
                    {balance >=0 ? <h2>${balance}</h2>:<h2>-${balance*-1}</h2>}
                </div>
                <div className="summary">
                    <div className="income">
                       <h4>Income</h4> 
                       <p>${income}</p>
                    </div>
                    <div className="expenses">
                    <h4>Expenses</h4> 
                       <p>${expenses}</p>
                    </div>
                </div>
            </div>
            <form className="add-transaction" onSubmit={onSubmit}>
                <input type="text" placeholder="Description" required onChange={(e)=>setDescription(e.target.value)} value={description}/>
                <input type="number" placeholder="Amount" required  onChange={(e)=>setTransactionAmount(e.target.value)} value={transactionAmount} />
                <input type="radio" id="expense" value="expense" checked={transactionType=="expense"}  onChange={(e)=>setTransactionType(e.target.value)}  />
                <label htmlFor="expense">Expenses</label>
                <input type="radio" id="income" value="income"  checked={transactionType=="income"}  onChange={(e)=>setTransactionType(e.target.value)}/>
                <label htmlFor="income">Income</label>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
        {/* {profilePhoto&& <div className="profile"> <img className="profile-photo" src={profilePhoto} /></div>} */}
        <div className="profile">
            {" "}
            <img className="profile-photo" src={profilePhoto} />
            <button className="sign-out-button" onClick={userSignOut}>
              Sign Out
            </button>
          </div>
        <div className="transactions">
            <h3>Transactions</h3>
     
        <ul>
            {transactions.map((transactions)=>{
                const {description,transactionAmount,transactionType}=transactions
                return( <li><h4>{description}</h4>
                <p>${transactionAmount}.</p>
                <label style={{color:transactionType==="expense"?"red" :"green"}}> {transactionType}</label></li>)
            })}
        </ul>
    </div>
    </div> 
}
