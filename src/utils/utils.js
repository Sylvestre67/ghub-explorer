const org = process.env.REACT_APP_GITHUB_ORG;

export function queryfy(query) {
	const { q } = query;
	let string = `q=${q}+org:${org}`;

	delete query.q;

	Object.keys(query).forEach((key, idx) => {
		if (query[key]) {
			string += `+${key}:${query[key]}`;
		}
	});

	return string;
}
