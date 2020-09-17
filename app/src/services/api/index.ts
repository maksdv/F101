export const get = async (setData: Function, setLoading: Function) => {
  setLoading(true);
  try {
    fetch("http://localhost:5000/articles", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => setLoading(false));
  } catch (error) {
    setLoading(false);
    alert(error);
    return error;
  }
};
