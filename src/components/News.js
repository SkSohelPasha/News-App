import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
    articles= [
        {
          "source": {
            "id": "wired",
            "name": "Wired"
          },
          "author": "Joel Khalili",
          "title": "Unmasking Bitcoin Creator Satoshi Nakamoto—Again",
          "description": "A new HBO documentary takes a swing at uncovering the real identity of Satoshi Nakamoto, inventor of Bitcoin. But without incontrovertible proof, the myth lives on.",
          "url": "https://www.wired.com/story/unmasking-bitcoin-creator-satoshi-nakamoto-again/",
          "urlToImage": "https://media.wired.com/photos/6703eb3979f13fda7f04485b/191:100/w_1280,c_limit/Satoshi-Nakamoto-biz-1341874258.jpg",
          "publishedAt": "2024-10-09T01:00:00Z",
          "content": "Peter Todd is standing on the upper floor of a dilapidated industrial building somewhere in Czechia, chuckling under his breath. He has just been accused on camera of being Satoshi Nakamoto, the Bitc… [+3043 chars]"
        },
        {
          "source": {
            "id": "wired",
            "name": "Wired"
          },
          "author": "Joel Khalili",
          "title": "Peter Todd Was ‘Unmasked’ As Bitcoin Creator Satoshi Nakamoto. Now He’s In Hiding",
          "description": "Peter Todd has gone underground after an HBO documentary named him as the creator of Bitcoin, Satoshi Nakamoto, whose real identity has long remained a mystery.",
          "url": "https://www.wired.com/story/peter-todd-was-unmasked-as-bitcoin-creator-satoshi-nakamoto-now-hes-in-hiding/",
          "urlToImage": "https://media.wired.com/photos/6716870e6874cb5feda0798e/191:100/w_1280,c_limit/102124-bitcoin-satoshi-an.jpg",
          "publishedAt": "2024-10-22T11:33:59Z",
          "content": "In the week before the documentary was released, online betting markets had Len Sassaman, a cryptographer who moved in similar online circles to Satoshi, as the most likely candidate to be revealed a… [+2075 chars]"
        },
        {
          "source": {
            "id": "wired",
            "name": "Wired"
          },
          "author": "Joel Khalili",
          "title": "As Trump Takes a Victory Lap, the Crypto Faithful Kiss the Ring",
          "description": "The crypto industry is celebrating the return of Donald Trump to the White House in anticipation of an easier ride under his regime.",
          "url": "https://www.wired.com/story/trump-crypto-support/",
          "urlToImage": "https://media.wired.com/photos/672bda0a90a94384370310f4/191:100/w_1280,c_limit/business_crypto_faithful_trump.jpg",
          "publishedAt": "2024-11-06T21:11:39Z",
          "content": "On the campaign trail, Trump went out of his way to court their favor. In July, speaking to thousands of bitcoiners at a conference in Nashville, Tennessee, Trump duly sang from the bitcoin hymn shee… [+2014 chars]"
        },
        {
          "source": {
            "id": "wired",
            "name": "Wired"
          },
          "author": "Andy Greenberg",
          "title": "Meet ZachXBT, the Masked Vigilante Tracking Down Billions in Crypto Scams and Thefts",
          "description": "He just untangled a $243 million bitcoin theft, what may be the biggest-ever crypto heist to target a single victim. And he has never shown his face.",
          "url": "https://www.wired.com/story/meet-zachxbt-243-million-crypto-theft/",
          "urlToImage": "https://media.wired.com/photos/671803d2124551b4eaed68ad/191:100/w_1280,c_limit/security_zachxbt_crypto_vigilante.jpg",
          "publishedAt": "2024-10-24T09:00:00Z",
          "content": "As ZachXBT has pursued that career as a crypto vigilante, he has also kept his mask firmly in place. Online, he appears only as his avatar, a kind of platypus cartoon figure in a detective's trench c… [+3865 chars]"
        },
        {
          "source": {
            "id": "wired",
            "name": "Wired"
          },
          "author": "Joel Khalili",
          "title": "In the Kentucky Mountains, a Bitcoin Mining Dream Becomes the Stuff of Nightmares",
          "description": "When bitcoin was on a hot streak, owners of small industrial facilities in Kentucky struck up crypto mining partnerships with Chinese companies. Then things fell apart.",
          "url": "https://www.wired.com/story/in-the-kentucky-mountains-a-bitcoin-mining-dream-becomes-the-stuff-of-nightmares/",
          "urlToImage": "https://media.wired.com/photos/670981994729e98a3f0fd49d/191:100/w_1280,c_limit/Kentucky-Farmers-Crypto-Mining-Duped-Business.jpg",
          "publishedAt": "2024-10-21T11:00:00Z",
          "content": "In both cases, Biofuel claims, the firms shipped equipment from China to its hosting facility in Eastern Kentucky, then walked away with the bitcoin produced, leaving behind hundreds of thousands of … [+2717 chars]"
        },

        {
          "source": {
            "id": null,
            "name": "Gizmodo.com"
          },
          "author": "Matthew Gault",
          "title": "Controversial HBO Documentary Concludes Peter Todd Invented Bitcoin",
          "description": "The cryptocurrency community is not amused.",
          "url": "https://gizmodo.com/controversial-hbo-documentary-concludes-peter-todd-invented-bitcoin-2000509751",
          "urlToImage": "https://gizmodo.com/app/uploads/2024/10/PeterToddHBO.jpg",
          "publishedAt": "2024-10-09T14:05:37Z",
          "content": "Last night, HBO aired a documentary about Bitcoin that claimed to reveal the identity of the cryptocurrencys anonymous creator Satoshi Nakamoto. In Money Electric, journalist Cullen Hoback chased the… [+3152 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.com"
          },
          "author": "Todd Feathers",
          "title": "FBI Arrests Man Who Searched ‘How Can I Know for Sure If I Am Being Investigated by the FBI’",
          "description": "Eric Counsel Jr. is accused of helping to hack the U.S. Securities and Exchange Commission's X account in order to post false information about Bitcoin.",
          "url": "https://gizmodo.com/fbi-arrests-man-who-searched-how-can-i-know-for-sure-if-i-am-being-investigated-by-the-fbi-2000513216",
          "urlToImage": "https://gizmodo.com/app/uploads/2024/10/sec-bitcoin-hack-arrest.jpg",
          "publishedAt": "2024-10-17T21:10:49Z",
          "content": "The FBI has arrested an Alabama man who allegedly hacked the U.S. Securities and Exchange Commission’s X (formerly Twitter) account in order to post erroneous information about Bitcoin that briefly d… [+2369 chars]"
        },
        {
            "source": {
              "id": null,
              "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "5 crypto criminals serving the longest prison sentences",
            "description": "The Social Capital Markets, a global initiative focused on fostering a just and sustainable economy, has recently published a revealing report on crypto crimes. The findings indicate a staggering 267% increase in global crypto-related convictions over the pas…",
            "url": "https://qz.com/sam-bankman-fried-cryptocurrency-crime-prison-sentences-1851665731",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/59a22590499594fb6b4aee53e2392478.jpg",
            "publishedAt": "2024-10-14T09:00:00Z",
            "content": "Ross Ulbricht was born in 1984 in Austin, Texas, and founded the Silk Road in 2013, a notorious dark web marketplace that facilitated illegal activities such as drug trafficking through Bitcoin trans… [+719 chars]"
          },
        {
            "source": {
              "id": null,
              "name": "Tech Xplore"
            },
            "author": "Bob Yirka",
            "title": "Integer addition algorithm could reduce energy needs of AI by 95%",
            "description": "A team of engineers at AI inference technology company BitEnergy AI reports a method to reduce the energy needs of AI applications by 95%. The group has published a paper describing their new technique on the arXiv preprint server.",
            "url": "https://techxplore.com/news/2024-10-integer-addition-algorithm-energy-ai.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2024/image-of-computer-scre.jpg",
            "publishedAt": "2024-10-13T16:27:12Z",
            "content": "A team of engineers at AI inference technology company BitEnergy AI reports a method to reduce the energy needs of AI applications by 95%. The group has published a paper describing their new techniq… [+2457 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "tagesschau.de"
            },
            "author": "Angela Göpfert",
            "title": "Marktbericht: Der \"Trump Trade\" feiert ein Comeback",
            "description": "Trump liegt bei der Auszählung der Stimmen klar vorn - und ebenso klar fallen die Marktreaktionen aus: Der Bitcoin springt auf ein neues Rekordhoch, der Dollar zieht kräftig zum Euro an. Von Angela Göpfert.",
            "url": "https://www.tagesschau.de/wirtschaft/finanzen/marktberichte/marktbericht-boersen-trump-trade-bitcoin-dollar-dax-dow-100.html",
            "urlToImage": "https://images.tagesschau.de/image/ce4f622c-eaf7-4d88-b749-90327b43b12b/AAABkwAXlZM/AAABkZLhkrw/16x9-1280/nyse-364.jpg",
            "publishedAt": "2024-11-06T07:01:23Z",
            "content": "Stand: 06.11.2024 08:01 Uhr\r\nTrump liegt bei der Auszählung der Stimmen klar vorn - und ebenso klar fallen die Marktreaktionen aus: Der Bitcoin springt auf ein neues Rekordhoch, der Dollar zieht kräf… [+3840 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Alleged Bitcoin hacker Googled 'signs the FBI is after you'",
            "description": "A man from Georgia is alleged to be part of a group which hacked the US regulator's X account.",
            "url": "https://www.bbc.com/news/articles/c20pvkg35xyo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/cf48/live/dd8f0280-8d28-11ef-bee0-39b1bce7fdf1.jpg",
            "publishedAt": "2024-10-18T10:08:10Z",
            "content": "\"What are some signs the FBI is after you\" is one of the alleged hacker's searches, according to court documents\r\nA man arrested in connection with a hack of the US markets regulator's X account sear… [+2466 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Crypto is getting hammered today, with Bitcoin dropping to $65,000",
            "description": "The cryptocurrency market is experiencing a downturn, closely mirroring the decline in the stock market. On Wednesday, Bitcoin saw a significant drop of over 2.5% in the past 24 hours, with its price hovering around $65,000. This decline has dashed hopes of b…",
            "url": "https://qz.com/crypto-market-down-bitcoin-65-000-1851679497",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b5e1795ecf299ac0ef7257fd52c37002.jpg",
            "publishedAt": "2024-10-23T17:01:58Z",
            "content": "In This Story\r\nThe cryptocurrency market is experiencing a downturn, closely mirroring the decline in the stock market. On Wednesday, Bitcoin saw a significant drop of over 2.5% in the past 24 hours,… [+1793 chars]"
          },
      
      ]
static defaultProps={
 country:'us',
 pageSize:8,
 category:'general'
}

static propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false,
            page:1

        }
    }
async updateNews(pageNo){
  this.props.setProgress(0);
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f7c74a4ba45e410d895b2a9ef3d1aca6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  let data=await fetch(url);
  let parsedData= await data.json()
  this.setState({articles:parsedData.articles , totalResults: parsedData.totalResult})
  this.props.setProgress(100);
}
   async componentDidMount(){
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f7c74a4ba45e410d895b2a9ef3d1aca6&page=1&pageSize=${this.props.pageSize}`;
    // let data=await fetch(url);
    // let parsedData= await data.json()
    // console.log(parsedData);
    // this.setState({articles:parsedData.articles , totalResults: parsedData.totalResult})
   this.updateNews();  
  }


 handlePrevClick=async ()=>{
//console.log("Previous");
// let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f7c74a4ba45e410d895b2a9ef3d1aca6&page=${this.state.page - 1} &pageSize=${this.props.pageSize}`;
// let data=await fetch(url);
// let parsedData= await data.json()
// console.log(parsedData);
// this.setState({
//   page: this.state.page-1,
//   articles: parsedData.articles
// }
// );
this.setState({page:this.state.page - 1})
this.updateNews();
 };



 handleNextClick=async ()=>{
  //console.log("Next");
//   if(this.state.page + 1 > Math.ceil(this.state.totalResult/20)){
//   }
//   else{
//   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f7c74a4ba45e410d895b2a9ef3d1aca6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
// let data=await fetch(url);
// let parsedData= await data.json()
// console.log(parsedData);
//   this.setState({
//     page:this.state.page+1,
//     articles:parsedData.articles
//   })
// }
this.setState({page:this.state.page + 1});
this.updateNews();
};


  render() {
    return (
      <div className='container my-3' >
        <h1 className='text-center'>NewsToday - Top Headlines</h1>
       
        <div className="row">
        {(this.state.articles || []).map((element)=>{
           return <div className="col-md-3"  key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage}
             url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
      </div>
        }
        )}
<div className="container d-flex justify-content-between">
<button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
<button disabled={this.state.page +1 > Math.ceil(this.state.totalResult/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
</div>
  </div>
      </div>
    )
  }
}


export default News
