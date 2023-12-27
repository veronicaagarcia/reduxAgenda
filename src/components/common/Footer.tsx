import { Button } from "@tremor/react";
import { useNavigate } from "react-router-dom";

export function Footer () {
    const navigate = useNavigate()

    const handleGoBack = () => {
		navigate('/')
	}

    return (
        <Button type="button" className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-2xl text-xl border-none" onClick={()=>handleGoBack()}>
		Back to my agenda
		</Button>
    )
}