document.addEventListener('DOMContentLoaded', () => {
    const scaleButtons = document.querySelectorAll('.js-scale-btn');
    const amounts = document.querySelectorAll('.js-portion-amount');

    if (!scaleButtons.length || !amounts.length) return;

    scaleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Visual state
            scaleButtons.forEach(b => b.classList.remove('active', 'font-bold'));
            btn.classList.add('active', 'font-bold');

            const scale = parseFloat(btn.dataset.scale);

            amounts.forEach(el => {
                const base = parseFloat(el.dataset.baseAmount);
                if (isNaN(base)) return;
                
                const newValue = base * scale;
                el.textContent = formatAmount(newValue);
            });
        });
    });

    /**
     * Convert decimal to fraction or string representation
     * @param {number} value 
     * @returns {string}
     */
    function formatAmount(value) {
        if (value === 0) return "0";
        
        // Handle common fractions for cooking
        const tolerance = 0.01;
        
        // Check for whole numbers
        if (Math.abs(value - Math.round(value)) < tolerance) {
            return Math.round(value).toString();
        }

        const whole = Math.floor(value);
        const fractional = value - whole;

        let fractionStr = "";

        if (Math.abs(fractional - 0.25) < tolerance) fractionStr = "1/4";
        else if (Math.abs(fractional - 0.33) < tolerance) fractionStr = "1/3";
        else if (Math.abs(fractional - 0.5) < tolerance) fractionStr = "1/2";
        else if (Math.abs(fractional - 0.66) < tolerance) fractionStr = "2/3";
        else if (Math.abs(fractional - 0.75) < tolerance) fractionStr = "3/4";
        else {
            // Fallback to decimal if not a standard cooking fraction
            // Avoid long decimals like 0.30000000004
            return parseFloat(value.toFixed(2)).toString();
        }

        return whole > 0 ? `${whole} ${fractionStr}` : fractionStr;
    }
});
