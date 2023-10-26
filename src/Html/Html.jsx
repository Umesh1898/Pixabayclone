import Image1 from './Images/images.jpeg'
import Audio1 from './Audio/Varman Bgm Ringtone (BgmSquad.net).mp3'
import Video1 from './Video/nature.mp4'
const Html = () => {
    return(
        <div className="html">
            <h1>Welcome to Html</h1>
            <img src="https://i.pinimg.com/originals/a7/85/9b/a7859bbb1966fc8829e611511521db78.jpg" alt="" height={'800px'} width={'49%'}></img>
            <img src={Image1} alt="" height={'800px'} width={'49%'}></img>
            <h1>Anchor tag</h1>
            <a href="https://www.flipkart.com/" target={'_blank'}>Flipkart</a>
            <h1>Iframe tag</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3P-t4WRoW5c?si=IlFIe57-oQKYqjeK" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60503.70082143573!2d73.8066048!3d18.597409399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b860d63876d1%3A0x9bccd5081468bc36!2sDr.%20D.%20Y.%20Patil%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1696921920195!5m2!1sen!2sin" width="600" height="450" title='map' loading="lazy" ></iframe>
            <br></br>
            <h1>Media tag</h1>
            <audio src={Audio1} controls autoPlay loop></audio>
            <br></br>
            <video src={Video1} height={'400px'} width={'51%'} autoPlay muted></video>
            <br></br>
            <h1>Table Tag</h1>
            <table border={1} cellPadding={'50px'} cellSpacing={'50px'}>
                <thead>
                    <tr>
                        <th>SrNo</th>
                        <th>name</th>
                        <th>sal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>A</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>B</td>
                        <td>100</td>
                    </tr> <tr>
                        <td>03</td>
                        <td>C</td>
                        <td>1000</td>
                    </tr> <tr>
                        <td>04</td>
                        <td>D</td>
                        <td>10000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Html;