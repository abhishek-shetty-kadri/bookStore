import { useEffect, useRef } from "react";

import ReactDOM from "react-dom";

const ModalWindow = ({ setAddBookDialog, children }) => {
  let containerElement = useRef(document.createElement("div"));
  let externalWindow = useRef(null);


  useEffect(() => {
    externalWindow.current = window.open(
      "",
      "",
      "width=600,height=400,left=200,top=200"
    );

    externalWindow.current.document.body.appendChild(containerElement.current);
    externalWindow.current.onbeforeunload = function (e) {
      setAddBookDialog(false);
    };

    return () => {
      setAddBookDialog(false);
      externalWindow.current.close();
    };
  }, [setAddBookDialog]);

  if (!containerElement) return null;
  return ReactDOM.createPortal(children, containerElement.current);
};

export default ModalWindow;
