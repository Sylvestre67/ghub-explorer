import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const initialQuery = {
	q: '',
	license: '',
	forked: false,
	stars: '',
};

const styles = theme => ({
	root: '',
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 120,
	},
	formRow: {
		display: 'flex',
		flexDirection: 'column',
	},
	button: {
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: 16,
		padding: '6px 48px',
		border: '1px solid',
	},
	buttonItem: {
		textAlign: 'center',
		margin: theme.spacing.unit * 2,
	},
});

export class Form extends React.PureComponent {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.state = initialQuery;
	}

	componentDidMount() {
		const { location, history } = this.props;
		const { search } = location;

		// If no query was passed initially we want to replace this history entry
		// with a valid one
		if (!search.length) {
			history.replace({
				path: location.pathname,
				search: qs.stringify(initialQuery),
			});
		} else {
			this.setState(qs.parse(search));
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const { location, history } = this.props;

		if (location.key !== prevProps.location.key) {
			console.log('updated the query');
		}

		if (prevState !== this.state) {
			history.replace({
				path: location.pathname,
				search: qs.stringify(this.state),
			});
		}
	}

	handleChange(e) {
		this.setState({
			[e.target.id]: e.target.checked ? e.target.checked : e.target.value,
		});
	}

	render() {
		const { classes } = this.props;
		const { q, stars, forked, license } = this.state;

		return (
			<form className={classes.container} noValidate autoComplete="off">
				<Grid container spacing={16}>
					<Grid item xs={12} sm={6} className={classes.formRow}>
						<TextField
							id="q"
							label="Search"
							className={classes.textField}
							value={q}
							variant="outlined"
							onChange={e => this.handleChange(e)}
							margin="normal"
						/>

						<TextField
							id="stars"
							label="Stars"
							className={classes.textField}
							value={stars}
							variant="outlined"
							onChange={e => this.handleChange(e)}
							margin="normal"
						/>
					</Grid>
					<Grid item xs={12} sm={6} className={classes.formRow}>
						<FormControl
							className={classes.formControl}
							variant="outlined">
							<InputLabel htmlFor="license">License</InputLabel>
							<Select
								native
								value={license}
								onChange={e => this.handleChange(e)}
								inputProps={{
									name: 'license',
									id: 'license',
								}}>
								<option value="" />
								<option value={10}>Ten</option>
								<option value={20}>Twenty</option>
								<option value={30}>Thirty</option>
							</Select>
						</FormControl>

						<Checkbox
							id="forked"
							checked={forked}
							onChange={e => this.handleChange(e)}
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={12} className={classes.buttonItem}>
						<Button
							variant="contained"
							color="primary"
							elevation={0}
							className={classes.button}>
							Search
						</Button>
					</Grid>
				</Grid>
			</form>
		);
	}
}

Form.propTypes = {
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Form));
