function SocialButtons(props){
  return(
    <>
      <a href={props.href} target="_blank" className='social-space'>
          <div className={`icon ${props.iconStyle}`}>
            <div className="tooltip">{props.text}</div>
            <span><i className={props.icon}></i></span>
          </div>
        </a>
    </>
  );
}

export default SocialButtons;