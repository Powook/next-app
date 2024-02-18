import Image from "next/image";
import Layout from "../Layout/Layout";
import { Block } from "../shared/components/Block/Block";
import { NeonButton } from "../shared/components/Buttons/NeonButton/NeonButton";
import styles from "./Home.module.scss";
import logo from "../../../public/1641305416_30-abrakadabra-fun-p-ukrasheniya-dlya-prevyu-51.png";

function Home() {
  return (
    <Layout>
      <Block customClass={styles.mainBlock} display="flex" height={450}>
        <div className={styles.logo}>
          <Image alt="logo" src={logo} width={415} height={415} />
        </div>
        <div className={styles.mainBlock__info}>
          <h1>Whereas recognition of the inherent dignity</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            pariatur animi et, reprehenderit voluptates rem fuga vitae aliquid
            ducimus, doloremque, exercitationem laboriosam dolore earum illum!
            Facilis quasi voluptas minima modi.
          </p>

          <div className={styles.mainBlock__blocks}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              quas minima velit ab nobis qui expedita quam praesentium magnam
              delectus sint, numquam, officiis quae maxime libero asperiores
              enim quasi deserunt!
            </div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae voluptates cum iusto repellat fugiat officiis nihil
              eligendi magnam ex aliquam? Corrupti ab optio veritatis, sunt sit
              saepe rem sint a?
            </div>
          </div>
          <NeonButton center text="someText" onClick={() => {}} />
        </div>
      </Block>
      <div className="add" style={{display:'flex', gap: 24, marginBottom: 24}}>
        <Block height={350}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ducimus quis impedit ex qui? Nemo nulla mollitia quam! Qui beatae eius similique modi tempore voluptatum provident debitis ducimus, magni id?
          </div>
        </Block>
        <Block height={350}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ducimus quis impedit ex qui? Nemo nulla mollitia quam! Qui beatae eius similique modi tempore voluptatum provident debitis ducimus, magni id?
          </div>
        </Block>
      </div>
    </Layout>
  );
}

export default Home;
