

export const getProducts = async (req, res, next) => {

    try {

        const res = await fetch('http://localhost:5000/product/get');
        const data = await res.json();

        return data.data

    } catch (error) {
        console.log(error);
    }

}