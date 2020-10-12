import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    button: {
        padding: "0"
    }
});

class PaginationButton extends Component {
    render() {
        return (
            <>
                <span className="page">
                    {this.props.currentPage!==1?<Button variant="outlined" color="primary" onClick={() => this.props.onClick(this.props.currentPage-1)}>
                        {"<"}
                    </Button>:""}
                    {[...Array(this.props.page)].map((n, index) => {
                        return <Button className={this.props.currentPage === n+1 ? "page-item active" : "page-item"}
                                       onClick={() => this.props.onClick(index+1)}
                                       variant="outlined"
                                       color="primary">
                            {index+1}
                        </Button>
                    })}
                    {this.props.page!==this.props.currentPage?<Button variant="outlined" color="primary" onClick={() => this.props.onClick(this.props.currentPage+1)}>
                        {">"}
                    </Button>:""}
                </span>
           </>
        );
    }
}

export default withStyles(styles)(PaginationButton);