import { Navbar, Sidebar } from "./components"

function Container() {
  return (
    <main>
      <Navbar />
      <main className="flex w-screen h-[calc(100vh-60px)]">
        <Sidebar />
        <div className="w-[calc(100vw-200px)]"></div>
      </main>
    </main>
  )
}

export default Container