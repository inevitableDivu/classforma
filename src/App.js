import Category from "./components/Category";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { useAnnotate } from "./context/AnnotateContext";

function App() {

  const { visible } = useAnnotate()
  return (
    <>
      <Navbar visible={visible} />
      <div className="flex justify-between">
        <div className="flex">
          <SideBar />
        </div>
        <Category />
      </div>
    </>
  );
}

export default App;
