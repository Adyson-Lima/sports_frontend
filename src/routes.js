import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sports from './pages/Sports';
import NewUpdate from './pages/NewUpdate';

export default function SportsRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sports/>} />
        <Route path="/newupdate/:sport_id" element={<NewUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}