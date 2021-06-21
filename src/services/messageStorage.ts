type ObjMsg = JSON

export const storeMessage = ({objMsg}: JSON) => {
    if (typeof window !== "undefined") {//antes de colocar, testa se window existe, pra não ter o perigo de carregar no server-seide
      window.localStorage.setItem("authToken", objMsg);
    }
  };