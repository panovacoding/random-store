const getBrands = async (): Promise<string[]> => {
  try {
    const res = await fetch(`https://dummyjson.com/products?limit=0&select=brand`);

    if (res.ok) {
      const resParsed = await res.json();
      return [
        ...new Set(
          [...resParsed.products].filter((el) => el.brand).map((el) => el.brand)
        ),
      ].sort();
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}

export default getBrands;
