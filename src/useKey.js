import { useEffect } from "react";

export function useKey(key, action){
    useEffect(() => {
        function escapeButton (e){
          if(e.code.toLowerCase() === key.toLowerCase()) {
            action()
          }
        }
        document.addEventListener('keydown', escapeButton);
    
        return function(){
          document.removeEventListener('keydown', escapeButton)
        }
      }, [action, key])
}