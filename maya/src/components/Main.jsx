import Card from "./Card"


const Main = ({data}) => {
    
  return (
    <main className="rounded-3 container mt-5">
        <Card data={data}/>
    </main>
  )
}

export default Main