import Head from 'next/head'
import Iframe from 'react-iframe'
import { motion } from "framer-motion"



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dandelion Teahouse and Apothecary</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-9ZfPnbegQSumzaE7mks2IYgHoayLtuto3AS6ieArECeaR8nCfliJVuLh/GaQ1gyM" crossorigin="anonymous"></link>
      </Head>
      

      <div className="card hero">
        
        <img className="big-logo"src="largeLogoDarkBackground.png" alt=""></img>
        <div className="blur"></div>
      </div>
      

      <div className="card titles">
      
      <h2 className="primary title">Coming Soon</h2>
      <h4 className="title-two">A community Teahouse and Apothecary</h4>
      <h5 className="title-two">109 West 7th Street<br></br>downtown Vancouver, WA
      </h5>
      
      
      
      </div>
      <div className="card map">
        <Iframe url="https://snazzymaps.com/embed/284664"
              width="100%"
              height="300px"
              styles={{border: "none"}}
              loading="loading"
              />
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
          <div>
          <a href="https://www.facebook.com/dandelionteahouseapothecary/" target="_blank" rel="noopener noreferrer"><p>Facebook</p>
          <i class="fab fa-facebook-square"></i>
          </a>
          </div>
          <div>
          <a href="https://www.instagram.com/dandelion.teahouse/" target="_blank" rel="noopener noreferrer"><p>Instagram</p>
          <i class="fab fa-instagram"></i>
          </a>
          </div>
          

          
        </div>
        
      </div>

       
      <div className="card b-1 news-container">
        <h4 className="drop-h">See us in the news</h4>
        <a href="https://www.columbian.com/news/2020/aug/04/farmers-market-merchant-wins-40k-for-downtown-vancouver-store/"target="_blank" rel="noopener noreferrer">
        <div className="news">
          <div className="nl">
            <img src="/assets/news1.png" alt=""></img>
            <h5>The Columbian</h5>
            
          </div>
          
          <div className="nr">
            <h6>Farmers market merchant wins $40K</h6>
            <p><small>A longtime farmers market merchant, is set to open downtown Vancouver’s only teahouse...</small></p>
          </div>
        </div>
        </a>
        
        <a href="https://www.koin.com/am-extra/from-farmers-market-to-brick-and-mortar-vancouver-woman-wins-40k-grant-to-open-a-downtown-tea-house/"target="_blank" rel="noopener noreferrer">
        <div className="news">
          <div className="nl">
            <img src="/assets/news2.png" alt=""></img>
            <h5>Koin TV</h5>
            
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
        <p>Check out our products at <a href="https://www.giftsfromtheearth.com/" target="_blank" rel="noopener noreferrer"><b>Gifts From the Earth</b></a></p>
      </div>
      <div className="card b-1">
        <h4>Get in touch</h4>
        <p>Shoot us an <a href="mailto:info@dandelionteahouse.com>Email"><b>Email</b></a></p>
      </div>
      <div className="card"></div>

    </div>
  )
}
