export function queryfy(query) {
	let string = 'q=org:EVENFinancial';

	Object.keys(query).forEach((key, idx) => {
		if (query[key]) {
			string += `+${key}:${query[key]}`;
		}
	});

	return string;
}
