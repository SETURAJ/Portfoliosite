import React from "react";
import { Link, router } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <router
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
    </router>
  );
};

export default ButtonMailto;