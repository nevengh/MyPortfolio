/* eslint-disable no-constant-condition */
import "./Main.css";
import img01 from "../../assets/img_7.jpg";
import { useState } from "react";
const Main = () => {
  const myProjects = [
    {
      id: 1,
      projectTitle: "rect project",
      category: "react",
      imgpath: img01,
    },
    {
      id: 2,
      projectTitle: "css Project",
      category: "css",
      imgpath: img01,
    },
    {
      id: 3,
      projectTitle: "css Project",
      category: "node",
      imgpath: img01,
    },
    {
      id: 4,
      projectTitle: "css Project",
      category: "js",
      imgpath: img01,
    },
  ];

  const [check, setChecked] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setChecked(buttonCategory);
    const newArr = myProjects.filter((item) => {
      return item.category == buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="left-section  flex">
        <button
          onClick={() => {
            setChecked("all");
          }}
          className={check === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={check === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={check == "js" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={check == "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={check == "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>
      <section className="right-section  flex">
        {arr.map((item) => {
          return (
            <article key={item.id} className="card ">
              <img src={img01} alt="" width={266} />
              <div
                className="box "
                style={{ width: "266px", borderRadius: "5px" }}
              >
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  aliquam magnam at quia itaque animi pariatur eum fugit quam
                  hic est neque dolorum nobis assumenda iste dolorem similique,
                  et adipisci!
                </p>
                <div className="flex icons">
                  <div className="flex" style={{ gap: "11px" }}>
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a href="" className="link flex">
                    more{" "}
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow_forward"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
