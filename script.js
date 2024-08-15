function calculateDifference() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);

    if (isNaN(startDate) || isNaN(endDate)) {
        document.getElementById('differenceResult').innerText = 'Please select valid dates.';
        return;
    }

    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    document.getElementById('differenceResult').innerText = `Difference: ${differenceInDays} day(s)`;
}

function calculateNewDate() {
    const baseDate = new Date(document.getElementById('baseDate').value);
    const days = parseInt(document.getElementById('days').value);

    if (isNaN(baseDate)) {
        document.getElementById('newDateResult').innerText = 'Please select a valid base date.';
        return;
    }

    const newDate = new Date(baseDate);
    newDate.setDate(newDate.getDate() + days);

    document.getElementById('newDateResult').innerText = `New Date: ${newDate.toDateString()}`;
}
