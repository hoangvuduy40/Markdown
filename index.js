function App() {
  const [text, setText] = React.useState("");
  const [isPreview, setIsPreview] = React.useState(true);
  const [isInput, setIsInput] = React.useState(true);
  const refInput = React.useRef();
  const handleClickZoomIn = () => {
    refInput.current.style.height = "900px";
    setIsPreview(!isPreview);
  };
  const handleClickZoomOut = () => {
    refInput.current.style.height = "200px";
    setIsPreview(!isPreview);
  };
  return (
    <div className="wrapper">
      {isInput && (
        <div className="input">
          <div className="headerBox">
            <p>Editor</p>
            <button>
              {isPreview ? (
                <i onClick={handleClickZoomIn} className="fa fa-arrows-alt"></i>
              ) : (
                <i onClick={handleClickZoomOut} className="fa fa-compress"></i>
              )}
            </button>
          </div>
          <textarea
            ref={refInput}
            className="textarea"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
      )}
      <div>
        {isPreview && (
          <Preview text={text} setIsInput={setIsInput} isInput={isInput} />
        )}
      </div>
    </div>
  );
}
const Preview = ({ text, setIsInput, isInput }) => {
  const refOuput = React.useRef();
  const handleClickZoomIn = () => {
    refOuput.current.style.height = "900px";
    setIsInput(!isInput);
  };
  const handleClickZoomOut = () => {
    refOuput.current.style.height = "870px";
    setIsInput(!isInput);
  };
  return (
    <div>
      <div className="output">
        <div className="headerBox">
          <p>Previewer</p>
          <button>
            {isInput ? (
              <i onClick={handleClickZoomIn} className="fa fa-arrows-alt"></i>
            ) : (
              <i onClick={handleClickZoomOut} className="fa fa-compress"></i>
            )}
          </button>
        </div>

        <div
          ref={refOuput}
          className="text"
          dangerouslySetInnerHTML={{
            __html: marked.parse(text),
          }}
        ></div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
