async function validateImageSize(value) {
	console.log(value);
	if (!value) return;
	const resp = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/media/${value}`);
	const data = await resp.json();
	const { width, height } = data;
	if (width > 1920 || height > 1200) {
		return 'A kép mérete túl nagy';
	} else if (width < 350 || height < 350) {
		return 'A kép mérete túl kicsi';
	}
}

export default validateImageSize;
