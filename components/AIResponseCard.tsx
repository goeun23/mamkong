import { useSelector } from "react-redux";

export default function AIResponseCard():JSX.Element | null{
    const response = useSelector((state:RootState)=> state.ai.response)

    if(!response) return null 

    return (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md border">
            <h2 className="text-lg font-semibold mb-2 text-blue-600">마음콩의 응답</h2>
            <p className="text-gray-800 leading-relaxed whitespace-pre-line">{response}</p>
        </div>
    )
}