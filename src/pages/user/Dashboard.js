import { useSelector, useDispatch } from "react-redux"
import { userSelector, fetchUserBytoken } from "../../redux/app/features/userSlice"
import { useEffect } from "react";
export default function Dashboard() {
  const { user, isFetching, isError } = useSelector(userSelector);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem('token') }));
  }, [])
  return (<h1>hello {user.username}</h1>)
}