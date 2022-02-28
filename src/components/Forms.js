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
    this.state.olhoSenha === "password"
      ? this.setState({ olhoSenha: "text" })
      : this.setState({ olhoSenha: "password" });
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
