import React from 'react';
import Confirm from "../Confirm";
import "@reach/dialog/styles.css";
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

class DeleteCellRenderer extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete=this.handleDelete.bind(this);
    }

    handleDelete = () => {
        let deletedRow = this.props.node.data;
         //this.props.node.gridApi.updateRowData({ remove: [deletedRow] });  // It will update the row
        this.props.deleteRow(deletedRow.id);
    };

    render() {
        return (
            <Confirm title="Confirm" description="Are you sure you want to delete?">
                 {confirm => (
                    <Button onClick={confirm(this.handleDelete)}>X</Button>
            )}
        </Confirm>
        )}
}

const mapStateToProps = (state) => {
    return {
        gridData: state
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
       deleteRow: (id) => { dispatch({type: 'DELETE_ROW', payload: id}) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCellRenderer);