class CurrencyConverter {
    private exchangeRates: { [key: string]: number };

    constructor() {
        // Hardcoded exchange rates for demonstration
        this.exchangeRates = {
            USD: 1,
            EUR: 0.84,
            GBP: 0.72,
            JPY: 110.16,
        };
    }

    convert(amount: number, fromCurrency: string, toCurrency: string): number {
        const fromRate = this.exchangeRates[fromCurrency];
        const toRate = this.exchangeRates[toCurrency];

        if (fromRate && toRate) {
            return (amount / fromRate) * toRate;
        } else {
            throw new Error('Invalid currency code');
        }
    }
}

// Example usage
const converter = new CurrencyConverter();
const amountInUSD = 100;
const convertedAmount = converter.convert(amountInUSD, 'USD', 'EUR');
console.log(`$${amountInUSD} USD is equal to €${convertedAmount.toFixed(2)} EUR`);
