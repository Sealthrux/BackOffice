import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Popconfirm, Button, Space, Form, Input } from "antd";
import { isEmpty } from "lodash";

const DataTable = () => {
    const [gridData, setGridData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingKey, setEditingKey] = useState("");
    const [editRow, setEdit] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
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

    const handleDelete = (value) => {
        const dataSource = [...modifiedData];
        const filteredData = dataSource.filter(item => item.id != value.id);
        setGridData(filteredData);
    }

    console.log("gridData", gridData);

    const modifiedData = gridData.map(({ body, ...item }) => ({
        ...item,
        key: item.id,
        comment: isEmpty(body) ? item.comment : body,

    }));

    const edit = (record) => {
        
    };

    const save = () => { };

    const EditableCell = ({
        editing,
        dataIndex,
        title,
        record,
        children,
        ...restProps
    }) => {
        const input = <Input />
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input ${title}'
                            }
                        ]}
                    >
                    </Form.Item>
                ) : (children
                )}
            </td>
        );
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Atvidade",
            dataIndex: "name",
            align: "center",
            editable: true
        },
        {
            title: "Utilizador",
            dataIndex: "email",
            align: "center",
            editable: true
        },
        {
            title: "Estado",
            dataIndex: "name",
            align: "center",
            editable: true
        },
        {
            title: "Actions",
            dataIndex: "actions",
            align: "center",
            render: (_, record) => {
                const editable = isEditing(record);
                return modifiedData.length >= 1 ? (
                    <Space>
                        <Popconfirm
                            title="De certeza que quer apagar?"
                            onConfirm={() => handleDelete(record)}
                        >
                            <Button type="primary" danger>
                                Apagar
                            </Button>
                        </Popconfirm>
                        {editRow ? (
                            <span>
                                <Space size="middle">
                                    <Button
                                        onClick={(e) => save(record.key)}
                                        type="primary"
                                        style={{ marginRight: 8 }}
                                    >
                                        Salvar
                                    </Button>
                                    <Popconfirm
                                        title="De certeza que quer cancelar?"
                                        onConfirm={() => edit(record)}
                                    >
                                        <Button>Cancel</Button>
                                    </Popconfirm>
                                </Space>
                            </span>
                        ) : (
                            <Button onClick={() => edit(record)} type="primary">
                                Editar
                            </Button>
                        )}
                    </Space>
                ) : null;
            },
        },
    ];

    const isEditing = (record) => {
        return record.key === editingKey;
    }

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            })
        }
    })

    console.log("modifiedData", modifiedData);

    return (
        <div>
            <Form form={form} component={false}>
                <Table
                    columns={mergedColumns}
                    dataSource={modifiedData}
                    bordered
                    loading={loading}
                />
            </Form>
        </div>
    )
}

export default DataTable;

