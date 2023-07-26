import React from 'react'
import { Grid,Column } from "@carbon/react"
const CodeReuse = () => {

    const users = [
        {
            id: 1,
            name: "Jerin Tom",
            email: "jerintom@gmail.com"
        },
        {
            id: 2,
            name: "Nevin Manoj",
            email: "nevinm@gmail.com"
        },
        {
            id: 3,
            name: "Amalraj Joseph",
            email: "amalrajjoseph@gmail.com"
        },
        {
            id: 4,
            name: "Karthika K",
            email: "karthika.k@gmail.com"
        },
        {
            id: 5,
            name: "Nimmya A",
            email: "nimmyaa@gmail.com"
        },
        {
            id: 6,
            name: "Thasnim Abdulla",
            email: "thasnim@gmail.com"
        },
        {
            id: 7,
            name: "Abhinav K",
            email: "abhinavk.com"
        }
    ]

    return (
        <Grid className='main-container'>
            <Column lg={16} md={8} sm={4}>
                <h2 style={{ textDecoration: "underline", marginBottom: "70px" }}>2. Code Reusability</h2>
            </Column>
        </Grid>
    )
}

export default CodeReuse
