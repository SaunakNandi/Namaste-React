import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from '../mocks/resCardMock.json'
import React from "react"
import '@testing-library/jest-dom'
it("Should render RestaurantCard component with props later",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name=screen.getByText(/Maharani/i)
    expect(name).toBeInTheDocument()
})