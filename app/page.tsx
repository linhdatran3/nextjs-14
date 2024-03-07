import Image from "next/image";
import styles from "./page.module.css";
import {Header, Footer} from "./components";

export default function Home() {
  return (
    <>
      <Header/>
      <div>Home page</div>
      <Footer/>
    </>
  );
}
