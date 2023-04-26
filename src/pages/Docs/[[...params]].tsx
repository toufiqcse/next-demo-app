import { useRouter } from "next/router";
import React from "react";

const Document = () => {
  const router = useRouter();
  const params: any = router.query.params || [];
  console.log(params);

  if (params.length == 2) {
    return (
      <h2>
        this pag for {params[0]} and {params[1]}
      </h2>
    );
  }
  if (params.length == 1) {
    return <h2>this pag for {params[0]} </h2>;
  }

  else{
    return <div>Document here landing page</div>;
  }
};

export default Document;
