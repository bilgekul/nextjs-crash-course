import { useRouter } from 'next/router';
import React,{useEffect, useState} from 'react'

const UserItem = ({userData}) => {
 /*    const [user, setUser] = useState('');
    const router = useRouter()
    const {id} = router.query;
    useEffect(()=>{
        const getData = async () => {
            try{
               const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
               .then((res)=> res.json()).then((data) => setUser(data))
               
            }
            catch(err){
                console.error(err)
            }
        }
        getData()
    },[id]) */
  return (
    <div>
        <h1>User Item</h1>
        <h2>
            <strong>
                Name:
            </strong>
                {userData?.name}
            <br />
            <strong>
                Username:
            </strong>
               {userData?.username}
            <br />
            <strong>
                Email:
            </strong>
                {userData?.email}
            <br />
            <strong>
               Phone:
            </strong>
               {userData?.phone}
            <br />
            <strong>
                Street:
            </strong>
                {userData?.address.street}
        </h2>
    </div>
  )
}
export const getStaticProps = async(context) =>{
    const res = await fetch(`http://localhost:3000/api/users/${context.params.id}`)
    const userData = await res.json()
    console.log(userData)
    return {
      props : {
        userData
      }
    }
}
export const getStaticPaths = async() =>{
    const res = await fetch(`http://localhost:3000/api/users`)
    const users = await res.json()
    const ids = users.map((user) => user.id);
    const paths = ids.map((id) => ({params:{id: id.toString()}}))
    return{
        paths,
        fallback: false
    }
}
export default UserItem