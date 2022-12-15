import React from "react";

function Loader({locked}: {locked: boolean}) {
  return (
    locked
    ?
      <div id="Loader">

      </div>
    :
      <></>
  );
}

export default Loader;
