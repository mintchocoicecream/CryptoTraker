import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";
import Chart from "./routes/Chart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Coins />,
  },
  {
    path: "/:coinId",
    element: <Coin />,
    children: [
      {
        path: "price",
        element: <Price />,
      },
      {
        path: "chart",
        element: <Chart />,
      },
    ],
  },
]);
export default router;

/*
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />} />
        <Route path="chart" element={<Chart />} />
        <Route path="price" element={<Price />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
*/