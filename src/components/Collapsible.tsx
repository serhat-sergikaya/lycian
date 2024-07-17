import { useState } from "react";

const Collapsible = () => {
  const [flag, setFlag] = useState(false);

  console.log(flag);
  return (
    <div
      onClick={() => setFlag(!flag)}
      className={"collapsible" + (flag ? " collapsible--expanded" : "")}
    >
      <header className="collapsible__header">
        <h2 className="collapsible__heading">Products</h2>
        <div className="icon">
          <img
            className="icon collapsible__chevron"
            src="src\assets\chevron.svg"
            alt=""
          />
        </div>
      </header>
      <div className="collapsible__content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur earum
        molestiae optio similique alias quod sint animi nobis debitis doloremque
        praesentium temporibus vero, nesciunt voluptas ad tempore sunt voluptate
        dolores.
      </div>
    </div>
  );
};

export default Collapsible;
