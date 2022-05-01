import router from "next/router"; 

export default function RouterWithParams(url: string, tipo: string) {
    
    router.push({
        pathname: url,
        query: {
           tipo
        } 
    })

  }