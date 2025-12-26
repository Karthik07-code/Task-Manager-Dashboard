import Sidebar from "./layouts/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <div className="app-layout">
        <Sidebar />
        <div className="app-content">
          <AppRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
