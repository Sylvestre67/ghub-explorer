import React from 'react';

export const ResultsContext = React.createContext({
	isFetching: true,
	results: { items: [] },
});
