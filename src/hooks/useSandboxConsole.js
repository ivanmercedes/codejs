import { useContext, useEffect } from "react";
import appContext from "../context/app/appContext";

const srcdoc = (code) => `<!doctype html>
<html>
<body>

<style>
body{
  color:white;
    overflow-x: hidden;
}

.response{
    padding: 1rem;
    font-size: 1.3rem;
    width: 100%;
    font-family: Consolas,"Courier New",monospace;
}
</style>
<div class="response"></div>
<script type="module">
  
  let response = "";

  var _error = console.error;
  console.error = function(errMessage){
    document.querySelector('.response').innerHTML += (JSON && JSON.stringify ? JSON.stringify(errMessage) : String(errMessage)) + "<br /><br />"
  };
  
  console.log = function (message) {
    if (typeof message == "object") {
      document.querySelector('.response').innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + "<br /><br />"
    } else { 
      document.querySelector('.response').innerHTML += message+ "<br /><br />"
    }
  };

  ${code}
  
</script>
</body>
</html>`;

const generateIframe = (code) => {
  const iframe = document.createElement("iframe");
  // iframe.setAttribute("sandbox", "allow-scripts");
  iframe.setAttribute("style", "width: 100%;height: 100%;border:0;");

  iframe.srcdoc = srcdoc(code);

  return iframe;
};

const useSandboxConsole = () => {
  const AppContext = useContext(appContext);
  const { code } = AppContext;

  useEffect(() => {
    try {
      const result = generateIframe(code);

      if (document.querySelector(".console-log")) {
        document.querySelector(".console-log").innerHTML = "";
        document.querySelector(".console-log").appendChild(result);
      }
      // return result;
    } catch (e) {
      return e;
    }
  }, [code]);
};

export default useSandboxConsole;
