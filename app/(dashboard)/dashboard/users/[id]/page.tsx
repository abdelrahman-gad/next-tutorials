import React from "react";


function Page( {params} : {params:{id:string}}  ) {


     const {id} = params;

    return (
    <div>
      <h1>User Single Page  {id} </h1>
    </div>
  );
}

export default Page;