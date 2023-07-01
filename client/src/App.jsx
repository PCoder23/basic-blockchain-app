// 0xd24efb2724563181d727cba08dcc2ed6ed495304;
//
import {
  Welcome,
  Navigation,
  Services,
  Transactions,
  Footer,
} from "./components/index.js";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navigation />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
