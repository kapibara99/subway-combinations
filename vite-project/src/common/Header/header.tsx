

export const Header = () => {
  return (
    <header className='u-header'>
      <div className="u-header__inner">
        <ul className='u-header__links'>
          <li className="u-header__links-item">
            <a href="https://github.com/kapibara99" target="_blank" rel='noopener' className="u-header__links-content -github">
              <img src="/resources/images/icon/icon-sns-github.svg" alt="my facebook profile" />
            </a>
          </li>
          <li className="u-header__links-item">
            <a href="https://twitter.com/kapy99991" target="_blank" rel='noopener' className="u-header__links-content">
              <img src="/resources/images/icon/icon-sns-twitter.svg" alt="my twitter profile" />
            </a>
          </li>
          <li className="u-header__links-item">
            <a href="https://www.facebook.com/profile.php?id=100009267701448" target="_blank" rel='noopener' className="u-header__links-content">
              <img src="/resources/images/icon/icon-sns-facebook.svg" alt="my facebook profile" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}