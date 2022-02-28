import React from "react";

import { FaEyeSlash, FaEye } from "react-icons/fa";

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      olhoSenha: "password"
    };
  } // fim constructor

  lidarOlhoSenha = () => {
    console.log("Deu certo ");
  };

  render() {
    return (
      <div className="password--input">
        <label>Password</label>
        <input type={this.state.olhoSenha} />
        <FaEye onClick={this.lidarOlhoSenha} className="eye" />
      </div>
    );
  } //fim do render
} //fim da classe

export default Forms;
