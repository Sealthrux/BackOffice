import { useState } from "react";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Dropdown () {
  const [isActive, setIsActive] = useState(false);
  useState(false);
  const [selected, setSelected] = useState("Selecione o cargo desejado:");
  const options = ["Administrador", "Editor", "Funcionário"];

  return (
      <div className="dropdown col-2">
            <div className="dropdown-btn bg-dark-pink text-white p-2 border rounded" onClick={(e) => setIsActive(!isActive)}>
              {selected}
              <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
              <div className="dropdown-content ">
              {options.map ((option) => (
                <div className="bg-light-pink text-white p-2" onClick={(e) =>{ setSelected(option)
                  setIsActive(false)}}
                >{option}</div>
              ))}
            </div>
          )}
      </div>
  );
}
export default Dropdown;