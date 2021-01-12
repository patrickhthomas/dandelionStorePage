import Head from 'next/head'




export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dandelion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="card">
      <h1 className="primary title">Coming Soon</h1>
      <h4 className="title-two">to downtown Vancouver</h4>
      </div>

      <div className="card">
        
        <img className="big-logo"src="assets/big-logo.svg" alt=""></img>
        <div className="blur"></div>
      </div>
    
      <div className="card diamond">
        <img className="d-end" src="assets/mobile/top.png" alt=""/>
        <img className="tr" src="assets/mobile/top-right.png" alt="" />
        <img className="tl" src="assets/mobile/top-left.png" alt="" />
        <h4 className="rel">Premium Teas</h4>
        <span className="break"></span>
        <h4 className="rel">Natural Bodycare</h4>
        <img className="br" src="assets/mobile/bottom-right.png" alt="" />
        <img className="bl" src="assets/mobile/bottom-left.png" alt="" />
        <img className="btm" src="assets/mobile/bottom.png" alt="" />
        
      </div>
    
      <div className="card b-1">
        <div className="blur2"></div>
        <p>We’re not quite ready to announce a grand opening date, but we’ll post all the details on this page as soon as we are! Until then, there are a few things you can do to make sure you stay in loop.</p>
      </div>
      <div className="card b-1">
        <h4>Follow us</h4>
        <div className="follow">
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        {/*FB logo link | IG logo link*/}
      </div>
      <div className="card b-1">
       <h4>See us in the news</h4>
       </div>
      <div className="card b-1 news-container">
        
        <div className="news">
          <div className="nl">
            <img src="/assets/news1.png" alt=""></img>
            <h5>KOIN</h5>
            
          </div>
          <div className="nr">
            <h6>From farmers market to brick and mortar:</h6>
            <p><small>Marianne Wilson Stein won a $40,000 community-sponsored grant...</small></p>
          </div>
        </div>
        <div className="news">
          <div className="nl">
            <img src="/assets/news1.png" alt=""></img>
            <h5>KOIN</h5>
            
          </div>
          <div className="nr">
            <h6>From farmers market to brick and mortar:</h6>
            <p><small>Marianne Wilson Stein won a $40,000 community-sponsored grant...</small></p>
          </div>
        </div>
        <a href="">
        <div className="news">
          <div className="nl">
            <img src="/assets/news1.png" alt=""></img>
            <h5>KOIN</h5>
            
          </div>
          
          <div className="nr">
            <h6>From farmers market to brick and mortar:</h6>
            <p><small>Marianne Wilson Stein won a $40,000 community-sponsored grant...</small></p>
          </div>
        </div>
        </a>
      </div>
      <div className="card b-1">
        <h4>Shop online</h4>
        <p>Check out our products at <a href="https://www.giftsfromtheearth.com/">Gifts From the Earth</a></p>
      </div>
      <div className="card b-1">
        <h4>Get in touch</h4>
        <p>Shoot us an <a href="info@dandelionteahouse.com">Email</a></p>
      </div>
      <div className="card"></div>

    </div>
  )
}
