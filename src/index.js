import { createRoot } from "react-dom/client";
import ImgIscon from './images/iscon.avif';
import ImgTulsi from './images/tulsi.jpg';
import ImgBanner from './images/vithalbanner.jpg';
import './index.css';
 
const root = createRoot(document.getElementById("root"));
root.render(
    <div className=" bg-#eff0f3-1000">
    <h1 className=" text-center text-black-600 bg-orange-600 p-3 text-5xl mb-5 " >VitthalNagari</h1>
    <p className="text-center text-3xl m-5" >"Pandharpur: Where Devotion Flows Like Chandrabhaga" 🚩✨</p>
     <div className="flex justify-center">
        <img src={ImgBanner}alt="Pandharpur" className="rounded-lg w-[1500px]" />
    </div>
    <div className="flex">
    <div className="bg-#fffffe-900 m-10 p-5 flex-1 w-[500px] justify-between hover:flex-1  ">
        <h2 className="text-center text-3xl m-5 bg-orange-500 rounded-lg justify-center" >Shri Pandurang </h2>
        <p className=" text-xl m-5"> The parabrahma or the God of Pandharpur is worshipped and lovingly called by his devotees with many names in different course of the time, like Pandharinath, Pandurang, Pandhariraya, Vithai, Vithoba, Vithumauli, Vitthal gururao, Pandurang, Hari etc. However, today this God is well-known as Pandurang and Shri Vitthal. Many historians and researchers tried to find out the etymological origin of the word “Vitthal”. Some scholars believe that it is a distorted form of the original word Vishnu. The words like Vittharas, Vitta found in various Kannad epigraphs are basically the elaboration of the word Vishnu. The Great Saint poet Tukaram defines the word Vithoba in one of his abhangas that stands for ‘Knowledge’ + Thoba Stands for ‘form’ Thus Vithoba stands for the ‘form of ultimate Knowledge’ or ‘idol of ultimate Knowledge’. It is also believed that Vi stands for bird Eagle + Thoba Stands for sitting place, thus Vithoba stands for the ‘God who sits on Eagle’. </p>
            
    </div>
    <div className="bg-#fffffe-900 m-10 p-5 flex-1 w-[500px] justify-between hover:flex-1">
        <h2 className="text-center text-3xl m-5 bg-orange-500 rounded-lg" >Shri Rukmini  </h2>
        <p className="text-xl m-5 justify-center">
        Mother Shri Rukmini’s temple is in north of the temple of Shri Vitthal. There are four sections of the temple sabhamandap, main mandap, madhyagriha and gabhara. On the north of the madhyagriha, there is a room for wardrobe of Shri Rukmini. It is equipped with silver bed, well maintained mattresses and velvet clothes.
        Next to gabhara there is tall square size pillar on which west facing magnificent and attractive idol of mother Shri Rukmini is fixed. Like Shri Vitthal she is also standing resting her hands on her waist. The mother Shri Rukmini’s idol is decorated with many ornament’s and clothes. On her forehead there is big round kumkum tilak. All devotees touch Shri Rukmini’s feet with full of love and devotion in mind.
        </p>
    </div>
    </div>
    <div className="flex bg-slate-50" >
        <img src={ImgTulsi} className="rounded-lg w-[500px] m-10 ml-[300px]" ></img>
         <img src={ImgIscon}className="rounded-lg w-[500px] m-10"  ></img>
        
       </div>



        

    </div>



    );
