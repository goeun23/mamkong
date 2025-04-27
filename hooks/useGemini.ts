import { useMutation } from "@tanstack/react-query";


export function useGenerateFromGemini(){
  return useMutation({
    mutationFn:async(content:string)=> {
      const res = await fetch('/api/gemini', {
        method:"POST", 
        headers: {'Content-Type' : 'application/json'}, 
        body : JSON.stringify({content})
      })

      const data = await res.json();
      
      return data.message
    }
  })
}
  