import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}-PSYCHOLOGIST`;
    },[title])
}
export default useTitle