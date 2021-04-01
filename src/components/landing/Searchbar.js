import React from "react"
import "../landing/searchbar.css"
import {Button, Image, Form, FormControl} from "react-bootstrap"
import glass from "../../assets/icons/glass.svg"

function Searchbar (){
    return(
         <Form className="search-box d-flex justify-content-between align-items-center ">
            <FormControl
                type="text"
                placeholder="Search"
                className="search mr-sm-2 w-95 ml-2 border-0 "
            />
            <Button className="glass-btn w-5 " variant="" type="submit">
                <Image className="glass p-0" src={glass} alt="glass" />
            </Button>
        </Form>
    )
}
export default Searchbar