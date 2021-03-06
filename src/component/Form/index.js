import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import debounce from 'lodash.debounce';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui//core/FormControlLabel';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const licenseType = {
	mit: 'MIT',
	isc: 'ISC',
	'apache-2.0': 'Apache license 2.0',
	gpl: 'GNU General Public License family',
};

const initialQuery = {
	q: '',
	license: '',
	forked: true,
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
	buttonRow: {
		textAlign: 'center',
		margin: theme.spacing.unit * 2,
	},
});

export class Form extends React.PureComponent {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.updateLocation = this.updateLocation.bind(this);

		this.state = initialQuery;
	}

	componentDidMount() {
		const { location } = this.props;
		const { search } = location;

		// If no query was passed initially we want to replace this history entry
		// with a valid one
		if (!search.length) {
			this.updateLocation();
		} else {
			this.setState(qs.parse(search.slice(1)));
		}
	}

	handleChange(e) {
		this.setState({
			[e.target.id]: e.target.checked ? e.target.checked : e.target.value,
		});
	}

	updateLocation() {
		const { location, history } = this.props;

		return history.push({
			path: location.pathname,
			search: qs.stringify(this.state),
		});
	}

	validateStarsFormat() {}

	render() {
		const { classes } = this.props;
		const { q, stars, forked, license } = this.state;
		const { isFetching } = this.context;
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
							onBlur={e => this.validateStarsFormat(e)}
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
								{Object.entries(licenseType).map(lic => {
									const [key, license] = lic;
									return (
										<option key={key} value={key}>
											{license}
										</option>
									);
								})}
							</Select>
						</FormControl>

						<FormControlLabel
							control={
								<Checkbox
									id="forked"
									checked={
										typeof forked === 'boolean'
											? forked
											: forked === 'true'
									}
									onChange={e => this.handleChange(e)}
								/>
							}
							label="Include Forked"
						/>
					</Grid>
				</Grid>
				<Grid container spacing={16}>
					<Grid item xs={12} className={classes.buttonRow}>
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							onClick={this.updateLocation}>
							Search
						</Button>
					</Grid>
				</Grid>
			</form>
		);
	}
}

Form.propTypes = {
	classes: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Form));
