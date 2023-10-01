import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [changed, setChanged] = useState(null);
  const [isChecked, setIsChecked] = useState(16); // useState(0)으로 하면 초기 화면에서 "-16"이 나와요. 왜 때문에 그럴까요..?🤔💦

  return (
    <>
      <article>
        <section className={"changed"}>
          <h1>방금 변경된 아이템</h1>
          <div>{changed}</div>
        </section>
        <section className={"check"}>
          <h1>체크된 아이템 개수</h1>
          <div>{isChecked}</div>
        </section>
        {/* 아이템 리스트 */}
        <section className={"list"}>
          <h1>아이템 리스트</h1>
          <ol>
            {["A", "B", "C", "D", "E", "F", "G", "H"].map((item) => {
              return (
                <Item
                  key={item}
                  item={item}
                  setChanged={setChanged}
                  setIsChecked={setIsChecked}
                />
              );
            })}
          </ol>
        </section>
      </article>
      <style jsx>{`
        article {
          height: 100vh;
          width: 100vw;
          max-width: 30rem;
          margin: 0 auto;
          padding: 1.5rem;
          background: #ffc0cb21;
        }

        article h1 {
          padding: 0 0.5rem;
        }
        section.changed {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        section.check {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        section.changed > div {
          color: purple;
          font-weight: 800;
        }
        section.check > div {
          color: purple;
          font-weight: 800;
        }
        section.list {
          display: flex;
          flex-direction: column;
        }
        section.list ol {
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-radius: 0.5rem;
          background-color: white;
          box-shadow: 0px 2px 10px 0px rgb(182 158 198 / 15%);
          height: 2rem;
        }
        li > span {
          font-size: 1.5rem;
          font-weight: 500;
        }
        li > div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
        li > div > div:first-child {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 0.5rem;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 5px;
          background: #efeded;
          font-weight: 700;
        }
        li > div > div.button-list {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        li > div > div.button-list button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.7rem;
          height: 1.7rem;
          cursor: pointer;
          border-radius: 5px;
          border: none;
          background: #f6ecff;
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default App;
