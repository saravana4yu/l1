import React from "react"
import Header from "./Header"
import Indices from "./Indices"
import TopMovers from "./TopMovers"
import OverallReturns from "./OverallReturns"
import Commodities from "./Commodities"
import GlobalIndices from "./GlobalIndices"
import Options from "./Options"

function Content() {
    return(
        <div className="flex flex-col bg-gray-200 h-960 w-1161">
            <Header/>
            <div className="mt-20 flex-1 scrollbar-thumb-custom overflow-y-scroll">
                <p className="text-sm font-semibold text-gray-700 mt-[20px] ml-[32px]">Dashboard</p>
                <Indices />
                <div className="flex flex-row">
                    <TopMovers />
                    <div className="flex flex-col">
                        <OverallReturns />
                        <Commodities />
                    </div>
                </div>
                <Options />
                <GlobalIndices />
            </div>
        </div>
    )
}

export default Content