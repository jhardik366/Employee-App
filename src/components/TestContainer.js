import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";
import { Menu, Dropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Display from "./Display";
import axios from "axios";

function TestContainer({ userData, fetchUsers }) {
    const [isClicked, setClickStatus] = useState(false);
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    function onClick({ key }) {
        setClickStatus(true);
        axios
            .get("https://localhost:5001/api/employee/" + key)
            .then((response) => {
                // response.data is the users
                setEmployeeData(response.data);
            })
            .catch((error) => {
                // error.message is the error message
                setEmployeeData(error.message);
            });
    }

    const menu = (
        <Menu onClick={onClick}>
            {userData.users.map((user) => (
                <Menu.Item key={user.empId}>{user.empId}</Menu.Item>
            ))}
        </Menu>
    );

    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <div>
                <Space wrap>
                    <Dropdown overlay={menu}>
                        <Button>
                            Select an employee
                            <DownOutlined />
                        </Button>
                    </Dropdown>
                </Space>
                {isClicked && <Display employeeData={employeeData} />}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
