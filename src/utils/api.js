export function createRequest(config) {
	const { headers, method, url } = config;
	let { params } = config;

	if (!method || !url) {
		throw new Error(
			'Please provide a method and a url in order to create a request'
		);
	}

	return new Promise(function(resolve, reject) {
		const xhr = new XMLHttpRequest();

		xhr.open(method, `${url}?${params}`);

		xhr.onload = function() {
			if (this.status >= 200 && this.status < 300) {
				resolve(xhr.response);
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText,
				});
			}
		};

		xhr.onerror = function() {
			reject({
				status: this.status,
				statusText: xhr.statusText,
			});
		};
		if (headers) {
			Object.keys(headers).forEach(function(key) {
				xhr.setRequestHeader(key, headers[key]);
			});
		}

		xhr.send();
	});
}
