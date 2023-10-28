function clicked() {
  alert("Worked");
}

export default function Home() {
  return (
    <div>
      <button onClick={clicked}>Login</button>
    </div>
  );
}
