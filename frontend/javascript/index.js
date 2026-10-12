const postFetch = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Hiba: ', response.status);
        }
        return await response.json();
    } catch (error) {
        throw new Error('Hiba: ', error);
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await postFetch('/api/data', {
            name: 'Nagy Marcell',
            age: 14,
            gender: 'Kombájn'
        });
        console.log('Sikeres válasz: ', response);
    } catch (error) {
        console.error('Hiba: ', error);
    }
});
