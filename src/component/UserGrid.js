import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import UserForm from './UserForm';
import DeleteCellRenderer from "./DeleteCellRenderer";
import {dataSource} from '../dataSource.js';
import { Button } from 'reactstrap';

class UserGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridData: [],
            columnDefs: [{
                headerName: "Name", field: "name"
            }, {
                headerName: "Age", field: "age"
            }, {
                headerName: "Address", field: "address"
            }, {
                headerName: "Pincode", field: "pincode"
            }, {
                headerName: "Country", field: "country"
            },
            {cellRendererFramework: DeleteCellRenderer
            },
            ],
            isAddClick: false,

        }
        this.onInputChangeValue = this.onInputChangeValue.bind(this);
        this.onformSubmit = this.onformSubmit.bind(this);
    }

    onInputChangeValue() {
        this.setState({
            isAddClick: true
        })
    }

    componentDidMount(){
        this.setState({
            gridData: dataSource
        })
    }


    onformSubmit(obj) {
        const gridData = this.state.gridData;
        gridData.push(obj);
        this.setState({
            isAddClick: false,
            gridData: gridData
        })
    }

    render() {
        return (
            <div
                className="ag-theme-alpine"
                style={{
                    height: '250px',
                    width: 'auto'
                }}
            >
                {
                    (this.state.isAddClick === false) ?
                        <React.Fragment>
                            <AgGridReact
                                columnDefs={this.state.columnDefs}
                                rowData={this.state.gridData}>
                            </AgGridReact>
                            <Button onClick={this.onInputChangeValue}>Add Row</Button>

                        </React.Fragment>
                        : ''
                }

                {(this.state.isAddClick === true) ?
                    <div>
                        <UserForm onformSubmit={this.onformSubmit} />
                    </div> : ''}
            </div>
        );
    }
}

export default UserGrid;
