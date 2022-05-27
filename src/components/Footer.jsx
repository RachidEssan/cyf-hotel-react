import React from "react";

function Footer(prop) {
  return (
    <div className="container">
      <ul>
        {prop.infos.map(info => (
          <li>{info}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
