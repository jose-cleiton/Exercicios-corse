import React from "react";

import { FaEyeSlash, FaEye } from "react-icons/fa";

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      olhoSenha: "password"
    };
  } // fim constructor

  render() {
    console.log(this.state);

    return (
      <div className="password--input">
        <label>Password</label>
        <input type={this.state.olhoSenha} />
        <FaEye className="eye" />
      </div>
    );
  } //fim do render
} //fim da classe

export default Forms;
