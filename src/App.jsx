const App = () => {
  return (
    <div className="bg-red-100 p-9 w-[80%] text-5xl" >
    <div>App</div>
    <div>App</div>
    <div>App</div>
    <h1>{import.meta.env.VITE_My_Name}</h1>
    </div>
  )
}

export default App
//react has more powerful because of reconciliation it means if we have 500 pages and we updating anything in the one page then only one page is refresh or rerender
//reconciliation has to terms it calls rerenderation and updation