import { Component, Fragment } from "react";
import React from "react";
class Dropdown extends Component {



    render() {
        const data = [
            { value: 1, name: 'A' },
            { value: 2, name: 'B' },
            { value: 3, name: 'C' }
        ]
        return (
            <Fragment>
                <div>
                    <select>
                        {data.map((item, idx) => <option key={idx} value={item.value}>{item.name}</option>)}
                    </select>
                </div>
            </Fragment>
        )
    }
}
export default Dropdown