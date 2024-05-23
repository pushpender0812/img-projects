import { useGetAccountsQuery } from "./api/adminSlice"

function Admin() {

    const {data,error,isLoading} = useGetAccountsQuery()
  
//  const points =  useSelector(state => state.bonus.points)
//  const amount =  useSelector(state => state.account.amount)
//   const dispatch = useDispatch()
  

  return (
    <div className='card'>
        <div className='container'>
            <b>Admin Component</b>


            {
                data && data.map(account => <p>{account.id} :{account.amount}</p>)
            }
            {/* <button onClick={() => dispatch(increment())}>Increment +</button> */}
            
        </div>
      
    </div>
  )
}

export default Admin

  

