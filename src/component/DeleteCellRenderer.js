import React from 'react';
import Confirm from "../Confirm"
import "@reach/dialog/styles.css"

class DeleteCellRenderer extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete=this.handleDelete.bind(this);
    }

    handleDelete = () => {
        let deletedRow = this.props.node.data;
        this.props.node.gridApi.updateRowData({ remove: [deletedRow] });  // It will update the row
    };

    render() {
        return (
            <Confirm title="Confirm" description="Are you sure you want to delete?">
                 {confirm => (
                    <span><button onClick={confirm(this.handleDelete)}>X</button></span>
            )}
        </Confirm>
        )}
}

export default DeleteCellRenderer;
