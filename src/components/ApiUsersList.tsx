import { useEffect, useRef, useState } from "react";
import { Button, TextInput} from "@tremor/react";
import { Footer } from "./common/Footer";
import { type Result } from "../types.d";
import { ApiList } from "./ApiList";

export function ApiUsersList () {
    const [usersList, setUsersList] = useState<Result[]>([])
    const [showColor, setShowColor] = useState(false)
    const [sortByCountry, setSortByCountry] = useState(false)
    const originalUsersList = useRef([])
    const [filterCountry, setFilterCountry] = useState('')
    const [loading, setLoading] = useState(false)

    const toggleColor = () =>{
        setShowColor(!showColor)
    }

    const toggleSortByCountry = () => {
        setSortByCountry(prevState => !prevState)
    }

    const filterUsersByCountry = filterCountry
    ? usersList.filter(user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
    })
    :
    usersList
    const sortedUsers = sortByCountry
     ? [...filterUsersByCountry].sort((a, b) => {
        return a.location.country.localeCompare(b.location.country)
        })
    : filterUsersByCountry 

    const userDelete = (email:string) => {
       const userDelete= usersList.filter(user => user.email !== email)
       setUsersList(userDelete)
    }

    const handleReset = () => {
        setUsersList(originalUsersList.current)
    }

    useEffect(()=>{
        setLoading(true)
        fetch('https://randomuser.me/api?results=15')
        .then(async res => await res.json())
        .then(res => {
            setUsersList(res.results)
            originalUsersList.current = res.results
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            setLoading(false)
        })
    },[])

    return (
        <div className="w-4/6 h-full min-h-screen">
            <header>
                <h1 className="mt-8 text-cyan-400 font-bold text-center text-2xl">API USERS LIST</h1>
                <div className="flex justify-center mt-8">
                    <Button type="button" className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-2xl text-xl border-none" onClick={toggleColor}>Change Color</Button>
                    <Button type="button" className="ml-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-2xl text-xl border-none" onClick={toggleSortByCountry}>
                       {sortByCountry ? "Don't sort by country" : "Sort by country"}
                    </Button>
                    <Button type="button" className="ml-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-2xl text-xl border-none" onClick={handleReset}>Reset
                    </Button>
                    <TextInput placeholder="Search by country" onChange={(e)=>{setFilterCountry(e.target.value)}} className="ml-4 bg-cyan-600 text-white text-white rounded-2xl text-xl border-none"/>
                </div>
            </header>
            <main>
                {
                    loading ? <h2 className="text-center text-cyan-600 mt-16">L O A D I N G . . .</h2> :
                    <ApiList userDelete={userDelete} showColor={showColor} usersList={sortedUsers}/>
                }
            </main>
           <Footer />
        </div>
    )
}