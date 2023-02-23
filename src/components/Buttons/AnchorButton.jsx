function AnchorButton(props) { 
  return (
    <>
      <a href={props.href} className={`btn custom-btn custom-btn-bg ${props.otherClass}`} target="_blank">
        <i className={`me-2 ${props.icon}`} /> {props.text}
      </a>
    </>
  );
}

export default AnchorButton;