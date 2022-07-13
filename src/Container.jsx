import { Navbar, Sidebar, Content } from "./components";

function Container() {
  return (
    <main>
      <Navbar />
      <main className="flex w-screen h-[calc(100vh-58px)] overflow-hidden">
        <Sidebar />
        <Content />
      </main>
    </main>
  );
}

export default Container;
