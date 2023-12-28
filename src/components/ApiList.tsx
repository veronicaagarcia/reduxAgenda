import { type Result } from "../types"
import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react";

interface Props {
    usersList: Result[],
    showColor: boolean,
    userDelete: (email : string) => void
}

export function ApiList ({usersList, showColor, userDelete}: Props) {

    return (
        <Card className="mt-8 rounded-2xl mb-8">
            <Title className="text-center">
                Total users :
                <Badge className="ml-8 text-white bg-cyan-500 rounded-full">{usersList.length}</Badge>
            </Title>
            <Table className="mt-8">
                <TableHead>
                    <TableRow className="underline decoration-sky-500">
                        <TableHeaderCell>Photo</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>LastName</TableHeaderCell>
                        <TableHeaderCell>Country</TableHeaderCell>
                        <TableHeaderCell>Actions</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usersList.map((item, index) => {
                        const backgroundColor = index % 2 === 0 ? '#058399' : '#06b6d4'
                        const color = showColor ? backgroundColor : 'transparent'
                        return (
                            <TableRow key={item.email} style={{backgroundColor: color}}>
                                <TableCell>
                                    <img className="w-12 h-12 rounded-2xl mr-2" src={item.picture.thumbnail}
                                    />
                                </TableCell>
                                <TableCell>{item.name.first}</TableCell>
                                <TableCell>{item.name.last}</TableCell>
                                <TableCell>{item.location.country}</TableCell>
                                <TableCell>
                                <button  onClick={()=>{userDelete(item.email)}} type="button" className="hover:text-rose-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                    <title>Delete</title>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                    </svg>
                                </button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Card> 
    )
}