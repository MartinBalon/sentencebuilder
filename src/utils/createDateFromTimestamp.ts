const createDateFromTimestamp = (timestamp: number): string => {
	const date = new Date(timestamp);

	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();

	const hours = date.getHours();
	const minutes = date.getMinutes();

	return `created at: ${hours}:${minutes} ${day}/${month + 1}/${year}`;
};

export default createDateFromTimestamp;
