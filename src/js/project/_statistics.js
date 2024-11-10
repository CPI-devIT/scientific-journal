export const statistics = () => {
    const items = document.querySelectorAll('[data-numbers]');
    
    if (items.length) {
        items.forEach((item) => {
            const startValue = item.getAttribute('data-start-value');
            const endValue = item.getAttribute('data-end-value');
            const step = item.getAttribute('data-step');
            const time = item.getAttribute('data-time');

            const iterationTime = Math.round(time / ((endValue - startValue) / step))

            let i = startValue
            const interval = setInterval(() => {
                if (i < endValue) {
                    i++
                } else {
                    clearInterval(interval);
                }

                item.innerHTML = i
            }, iterationTime)
        })
    }
}

statistics();