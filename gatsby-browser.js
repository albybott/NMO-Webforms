import ReactDOM from "react-dom";

export const replaceHydrateFunction = () => (element, container, callback) =>
  ReactDOM.render(element, container, callback);

export const onInitialClientRender = () => {
  const addyKey = "a2f612e00953476c8ea353b0824005cc";
  const addyUrl =
    "https://cdn.addy.co.nz/neatcomplete/2.1.0/addycomplete.min.js";
  const src = addyUrl + "?loadcss=true&enableLocation=false&key=" + addyKey;

  const addJS = src => {
    const s = document.createElement(`script`);
    s.type = `text/javascript`;
    s.src = src;
    s.async = 1;
    document.getElementsByTagName(`footer`)[0].appendChild(s);
  };

  addJS(src);
};
