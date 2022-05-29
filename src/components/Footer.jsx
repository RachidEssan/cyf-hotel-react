import React from "react";

function Footer(prop) {
  return (
    <div className="container">
      <ul>
        {prop.infos.map(info => (
          <li key={info}>{info}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
