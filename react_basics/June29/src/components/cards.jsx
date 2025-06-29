
export default function Cards({username="aditya"}) {
  

  return (
    <>
    <div className="gap-2 w-auto">
      <h1 className="text-red-500  ">this is me, just learning how to add props</h1>
      <br />
      <h1 className="border p-2 m-2">below text is added through use of props</h1>
      
      <h1 className="border p-2 m-2">{username}</h1>
    </div>
    </>
  )
}
