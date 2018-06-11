import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};
class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={this.props.product.image_url}
                        title={this.props.product.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.product.name}
                        </Typography>
                        <Typography component="p">
                            {this.props.product.package}
                        </Typography>
                        <Typography component="h3">
                            {'$' + this.props.product.price_in_cents / 100}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

ProductComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductComponent);