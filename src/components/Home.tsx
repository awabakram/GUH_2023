import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('./done')}>Login</button>
      <p>hello</p>
    </div>
  );
}
