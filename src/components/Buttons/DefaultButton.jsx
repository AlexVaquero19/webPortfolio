function DefaultButton(props) { 
  return (
    <>
      <button className='btn custom-btn custom-btn-bg text-light btnSobreMi'><i className={`me-2 ${props.icon}`}></i>{props.text}</button>
    </>
  );
}

export default DefaultButton;