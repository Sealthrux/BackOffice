import React, {useState, useEffect} from "react";
import axios from "axios";
import {Table} from "antd";

const DataTable = () =>{
    const[gridData, setGridData] = useState([]);
    const[loading, setLoading] = useState(false);

    useEffect(()=>{
        loadData();
    }, [])

    const loadData = async () => {
        setLoading(true);
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/comments"
        );
        setGridData(response.data);
        setLoading(false);
    };

    console.log("gridData", gridData);

    const modifiedData = gridData.map(({body, ...item}) => ({
        ...item,
        key: item.id,
        comment:body,

    }))

    const columns = [
        {
        title:"ID",
        dataIndex:"id",
    },
    {
        title:"Atvidade",
        dataIndex:"name",
        align:"center",
        editable: true
    },
    {
        title:"Utilizador",
        dataIndex:"email",
        align:"center",
        editable: true
    },
    {
        title:"Estado",
        dataIndex:"name",
        align:"center",
        editable: true
    },
];

    console.log("modifiedData", modifiedData);

    return(
        <div>
            <Table
            columns={columns}
            dataSource={modifiedData}
            bordered
            loading={loading}
            />
        </div>
    )
}

export default DataTable;

