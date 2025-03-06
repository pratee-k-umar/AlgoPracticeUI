import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="border">
        <nav className="flex">
          <p>Home</p>
          <p>Services</p>
          <p>About</p>
          <p>Contact</p>
          <p>Profile</p>
        </nav>
      </div>
    </div>
  );
}
