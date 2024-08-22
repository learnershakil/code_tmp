import { useLoaderData } from "react-router-dom"

const Github = () => {
    const data = useLoaderData()
    // const [data,setData] = useState('')
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/learnershakil').then((res)=> res.json()).then(data => {setData(data)})
    // })
  return (
    <div className="bg-gray-700 text-center text-white font-bold p-4 mx-14 rounded-xl my-4">Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Github img url" width={300} height={300} className="rounded-full"/>
    </div>
  )
}

export default Github

export const GithubInfo = async () => {
   const info = await fetch('https://api.github.com/users/learnershakil')
   return info.json()
} 