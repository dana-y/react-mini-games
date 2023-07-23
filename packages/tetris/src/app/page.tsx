import Image from "next/image";
import TetrisBox from "../TetrisBox/TetrisBox";
export default function Home() {
  return (
    <main>
      <h1>Tetris</h1>

      {/* game */}
      <TetrisBox />
    </main>
  );
}
