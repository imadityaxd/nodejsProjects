
export default function Cards({username="aditya"}) {
  

  return (
    <>
    <div className="flex gap-2 w-auto">
      <h1 className="border p-2">below text is added through use of props</h1>
      <h1 className="border p-2">{username}</h1>
    </div>
    </>
  )
}
