import React from "react";

function Footer(prop) {
  return (
    <ul>
      {prop.infos.map(info => (
        <li>{info}</li>
      ))}
    </ul>
  );
}

export default Footer;
