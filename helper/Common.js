const CODE = {
  SUCCESS: 200,
  VALIDATION: 400,
};

function optionGenerator(data = [], key = "id", value = "name") {
  if (!data?.length) return [];
  return data?.map((d) => {
    return {
      id: d[key],
      value: d[key],
      label: d[value],
    };
  });
}

// Function to download CSV file
const downloadCSV = (data, name = "contact") => {
  const blob = new Blob([data], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${name}.csv`); // name of the file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url); // clean up
};

function swapBaseUrl(url) {
  const localBase = "http://localhost:3000/";
  const ngrokBase = "https://cfb2-103-9-14-232.ngrok-free.app/";

  if (url?.startsWith(localBase)) {
    return url?.replace(localBase, ngrokBase);
  }
  return url;
}

const Common = {
  CODE,
  optionGenerator,
  downloadCSV,
  swapBaseUrl
};

export default Common;
