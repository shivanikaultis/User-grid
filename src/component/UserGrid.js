import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import UserForm from './UserForm';
import DeleteCellRenderer from "./DeleteCellRenderer";
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

class UserGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //gridData: [],
            columnDefs: [{
                headerName: "Id", field: "id"
            },{
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
            { headerName: "Delete", cellRendererFramework: DeleteCellRenderer
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

    // componentDidMount(){
    //     this.setState({
    //         gridData: dataSource
    //     })
    // }


    onformSubmit(obj) {
        // const gridData = this.state.gridData;
        // gridData.push(obj);
        // this.setState({
        //     isAddClick: false,
        //     gridData: gridData
        // })
        this.setState({
            isAddClick: false
        })
        this.props.addRow(obj);
    }

    render() {
        console.log(this.props);
        //const { gridData } = this.props;
        return (
            <div
                className="ag-theme-alpine"
                style={{
                    height: '500px',
                    width: 'auto',
                    margin: '30px'
                }}
            >
                {
                    (this.state.isAddClick === false) ?
                        <React.Fragment>
                            <AgGridReact
                                columnDefs={this.state.columnDefs}
                                rowData={this.props.gridData}>
                            </AgGridReact>
                            <Button style={{
                                marginTop: '20px'
                            }} 
                            onClick={this.onInputChangeValue}>
                                Add Row
                            </Button>

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

const mapStateToProps = (state) => {
    return {
        gridData: state
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
       addRow: (obj) => { dispatch({type: 'ADD_ROW', payload: obj}) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserGrid);
