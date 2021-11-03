import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div id="body" className="container">
      <Head>
        <title>Chamillions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/Logo.png" />
        <link href="https://fonts.cdnfonts.com/css/daniel" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/candy" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>

                
                
      </Head>
      
      <div className="nav flex">
        <div className="logo">
          <Link href="/">
          <a>
            <Image src="/Logo.png" alt="Logo" width={120} height={120}></Image>
          </a>
          </Link>
        </div>
        
       
         
        <nav className="nav">
          <ul className="menu_list">
            <div className="icons_link">
          <li><Link  href="https://discord.gg/5CbQVkBVBw"><a>
              <Image src="/dlogo.png" alt="discord link"
              height={54}
              width={54}></Image>
              </a></Link></li>
              <li className="icons_link"><Link  href="https://twitter.com/ChamillionNFT"><a>
              <Image src="/tlogo.png" alt="twitter link"
              height={54}
              width={54}></Image>
              </a></Link></li>
            
            </div>
            <li><Link  href="/#about"><a>About</a></Link></li>
            <li><Link  href="/#roadmap"><a>Roadmap</a></Link></li>
            <li><Link  href="/#plans"><a>Plans</a></Link></li>
            <li><Link href="/#team"><a>Team</a></Link></li>
           
          </ul>
        </nav>
      </div>

      <main className="main">
        <div>
          <div  className="flex">
          <div id="about" className="flex_about">
            <div>
              <div>
            <h1 className="title">Chamillions</h1>
            <p>
            Chamillions are a collection of 5,555 unique shapeshifting ERC-721 NFTs who live in a billion dollar village on the ETH BlockChain. How’d they earn their fortunes… Does it really matter? This Project is inspired by our love for shapeshifting aliases we use on the internet.
            </p>
            <p>
            Identity changing reptilians wandering the Ethereum blockchain. It will be easy to spot a Chamillion from the outside... but soon it may be hard to get in.
            </p>
            </div>
            <div className="launch_date">
            
              <p>
            <strong>LAUNCH DATE:</strong> Nov. 15th
            </p>
              <p>
<strong>TOTAL SUPPLY:</strong> 5,555 Chamillions
</p>
              <p>
<strong>MINT PRICE:</strong> 0.03 ETH each
            </p>
            <div className="join_discord" >
            <Link href="https://discord.gg/5CbQVkBVBw">
            <a target="_blank" rel="noreferrer">JOIN OUR DISCORD</a>
          </Link>
          
          </div>
          </div>
            </div>
           
            </div>
            <div className="preview_gif">
              <Image src="/Previews gif.gif"
              alt="preview gif"
              width={480}
              height={480}/>
            
            </div>
          </div>

          <div id="roadmap" className="roadmap">
            <h2 className="title">ROADMAP</h2>
            <ul>
              <li>25% It’s time to give back to our holders! Four random Chamillion holders will get .25 ETH airdropped to their wallet.</li>
              <li>50% Community challenges (TBD) with Chamillion rewards including 1/1 Chamillion prizes.</li>
              <li>75% We are firm believers in keeping our environment clean which is why 5 ETH will donated to a wildlife shelter voted upon by the holders.</li>
              <li>90% Chamillion merchandise project will begin. Accessories and designs will be decided by the Chamillions. Process will be shown in announcements.</li>
              <li>100% Chamillion surprise airdrop to users; We are already working on a future NFT Collection that will drop shortly after the Chamillions collections is 100% minted. </li>
            </ul>
            <div  className="roadmap_img" >
            <Image src="/Roadmap.png"
            alt="Roadmap of chamillion"
            width={1920}
            height={1080}/>
            </div>
          </div>
          <div id="plans" className="plans">
            <h2 className="title">PLANS GOING FORWARD:</h2>
            <p>NFTs are becoming so much more than just art. The Chamillionaires put community first because we feel that ownership goes so far past your OpenSea collection.</p>
            <p>Similar to Chameleons, we change our identities when we go online.</p>
            <p>
            We want Chamillions to always be the core and original collection. We will release future series, but they will yield higher mint prices. Our Chamillionaire members will always receive free air drops of future series.
            </p>
            <p>
            A baby chamillion series will arrive by the end of 2021, with holders of Chamillions receiving a free airdrop from the collection before release. How rare will yours be?
            </p>
          </div>
         <div id="team" className="team">
           <h2 className="title">MEET OUR TEAM:</h2>
           <p>
           We are a small team of college and highschool graduates whose identities are always changing.
           </p>
           <p>
           Feel free to reach out to us!
           </p>
           <div  className="profile">
           <div>
             <Image className="profile_img" src="/Profile Pic.png" alt="profile picture"
             height={200}
             width={200}/>
           </div>
           <h3 className="title">Project Lead</h3>
         <Link href="https://twitter.com/DaltonStearns"><a target="_blank" rel="noreferrer">@Dalton</a></Link>
         </div>
         <div  className="profile">
           <div>
             <Image className="profile_img" src="/Profile Pic1.jpg" alt="profile picture"
             height={200}
             width={200}/>
           </div>
           <h3 className="title">Design Lead</h3>
         <Link href="https://twitter.com/CommonNFT"><a target="_blank" rel="noreferrer">@CommonNFT</a></Link>
         </div>
         <div  className="profile">
           <div>
             <Image className="profile_img" src="/Profile Pic2.jpg" alt="profile picture"
             height={200}
             width={200}/>
           </div>
           <h3 className="title">Community Lead</h3>
         <Link href="https://twitter.com/OpalTweaks"><a target="_blank" rel="noreferrer">@Sam</a></Link>
         </div>
         <div  className="profile">
           <div>
             <Image className="profile_img" src="/Profile Pic3.jpg" alt="profile picture"
             height={200}
             width={200}/>
           </div>
          
           <h3 className="title">Admin Lead</h3>
         <Link href="https://twitter.com/mrzukko"><a target="_blank" rel="noreferrer">@Aiden</a></Link>
         </div>
        </div>
        </div>
       
      </main>

    
      <div  className="profile">
         <div>
           <h3 className="title">As Seen On:</h3>
           <li className="nftcal_link"><Link  href="https://nftcalendar.io/event/chamillions/"><a>
             <Image className="profile_img" src="/nftcal.png" alt="NFTCal"
             height={100}
             width={100}/>
              </a></Link></li>
           </div>
         <Link href="https://nftcalendar.io/event/chamillions/"><a></a></Link>
        </div>



         <div className="nftcal_link">
           
            <h3 className="title">As Seen On:</h3>
        <li className="nftcal_link"><Link  href="https://nftcalendar.io/event/chamillions/"><a>
        <Image src="/nftcal.png" alt="NFTCal"
        height={100}
        width={100}></Image>
        </a></Link></li>
        </div>

        <footer className="footer">
       <p>Chamillions 2021</p>
      </footer>


    </div>
    
  )
}
  
 