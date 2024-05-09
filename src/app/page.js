import Image from "next/image";
import myImage from "@/../public/callumcornergojo.jpg";
import Animation from "./components/Animation";

export default function Home() {
  return (
    <div>
      <h1>Hi!</h1>
      <Image
        src={myImage}
        alt="callumscorner"
        placeholder="blur"
        width={400}
        height={400}
      />
      <Animation />
    </div>
  );
}
