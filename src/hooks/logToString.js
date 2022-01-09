const logToString = (code) => {
  let response = "";

  console.log = function (message) {
    if (typeof message == "object") {
      response +=
        (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) +
        "<br /><br />";
    } else {
      response +=
        `${
          typeof message === "number"
            ? `<div class="number">${message}</div>`
            : `'${message}'`
        }` + "<br /><br />";
    }
  };
  try {
    eval(code);
  } catch (error) {
    response = `<div class="error">${error}</div>`;
  }

  return response;
};

export default logToString;
