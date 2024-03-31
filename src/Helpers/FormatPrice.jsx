const FormatPrice = ({ price }) => {
    return Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(price);
};

export default FormatPrice;
