import React from "react";
import bannerImg from '../images/mobilhero.png';

export default function Banner(){
    return(
        <div className="banner--wrap">
            <div className="banner--leftside">
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            </div>
            
            <div className="try">
                <div className="banner--rightside">
                    <img
                            src={bannerImg}
                            alt="car"
                    />
                    <div className="car--bg"></div>
                </div>
            </div>
        </div>
    )
}