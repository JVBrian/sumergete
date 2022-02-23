import { Routes, Route } from "react-router-dom";

import Index from "../../pages/Index/Index";

function Pages() {
  return (
    <Routes>
      <Route path="/" exact element={<Index />} />
    </Routes>
  );
}

export default Pages;
